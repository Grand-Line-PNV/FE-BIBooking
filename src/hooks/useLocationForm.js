import { useEffect, useState } from "react";
import http from "../api/http";

const END_POINTS = {
  PROVINCES: "provinces",
  DISTRICTS: "districts",
  WARDS: "wards",
  LOCATION: "locations",
};

const FETCH_TYPES = {
  PROVINCES: "FETCH_PROVINCES",
  DISTRICTS: "FETCH_DISTRICTS",
  WARDS: "FETCH_WARDS",
  LOCATION: "FETCH_LOCATION",
};

async function fetchLocationOptions(fetchType, locationId) {
  let endPoint;
  switch (fetchType) {
    case FETCH_TYPES.PROVINCES: {
      endPoint = END_POINTS.PROVINCES;
      break;
    }
    case FETCH_TYPES.DISTRICTS: {
      endPoint = `${END_POINTS.DISTRICTS}/${locationId}`;
      break;
    }
    case FETCH_TYPES.WARDS: {
      endPoint = `${END_POINTS.WARDS}/${locationId}`;
      break;
    }
    case FETCH_TYPES.LOCATION: {
      endPoint = `${END_POINTS.LOCATION}/${locationId}`;
      break;
    }
    default: {
      return [];
    }
  }

  const locations = (await http.get(endPoint)).data["data"];

  return locations.map(({ code, name }) => ({ value: code, label: name }));
}

async function fetchInitialData(userId, wardCode) {
  const result = (
    await http.get(`${END_POINTS.LOCATION}/${userId}/${wardCode}`)
  ).data;
  const [provinces, districts, wards] = await Promise.all([
    fetchLocationOptions(FETCH_TYPES.PROVINCES),
    fetchLocationOptions(FETCH_TYPES.DISTRICTS, result.data.provinceCode),
    fetchLocationOptions(FETCH_TYPES.WARDS, result.data.districtCode),
  ]);

  return {
    provinceOptions: provinces,
    districtOptions: districts,
    wardOptions: wards,
    selectedProvince: provinces.find(
      (c) => c.value === result.data.provinceCode
    ),
    selectedDistrict: districts.find(
      (d) => d.value === result.data.districtCode
    ),
    selectedWard: wards.find((w) => w.value === result.data.wardCode),
  };
}

export default function useLocationForm(shouldFetchInitialLocation, data) {
  const { userId, wardCode } = data ?? [];

  const [state, setState] = useState({
    provinceOptions: [],
    districtOptions: [],
    wardOptions: [],
    selectedProvince: null,
    selectedDistrict: null,
    selectedWard: null,
  });

  const { selectedProvince, selectedDistrict } = state;

  useEffect(() => {
    (async function () {
      if (shouldFetchInitialLocation) {
        const initialData = await fetchInitialData(userId, wardCode);
        setState(initialData);
      } else {
        const options = await fetchLocationOptions(FETCH_TYPES.PROVINCES);
        setState({ ...state, provinceOptions: options });
      }
    })();
  }, []);

  useEffect(() => {
    (async function () {
      if (!selectedProvince) return;
      const options = await fetchLocationOptions(
        FETCH_TYPES.DISTRICTS,
        selectedProvince.value
      );
      setState({ ...state, districtOptions: options });
    })();
  }, [selectedProvince]);

  useEffect(() => {
    (async function () {
      if (!selectedDistrict) return;
      const options = await fetchLocationOptions(
        FETCH_TYPES.WARDS,
        selectedDistrict.value
      );
      setState({ ...state, wardOptions: options });
    })();
  }, [selectedDistrict]);

  function onProvinceSelect(option) {
    if (option !== selectedProvince) {
      setState({
        ...state,
        districtOptions: [],
        wardOptions: [],
        selectedProvince: option,
        selectedDistrict: null,
        selectedWard: null,
      });
    }
  }

  function onDistrictSelect(option) {
    if (option !== selectedDistrict) {
      setState({
        ...state,
        wardOptions: [],
        selectedDistrict: option,
        selectedWard: null,
      });
    }
  }

  function onWardSelect(option) {
    setState({ ...state, selectedWard: option });
  }

  return { state, onProvinceSelect, onDistrictSelect, onWardSelect };
}
