import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import Button from "../../../components/Button/Button";
import BookingScreen from "./BookingScreen";
import styles from './BookingStyles.module.scss'
import useFormData from "../../../hooks/useFormData";
import { getAllInfluencer } from '../../../api/brand';

const cx = classNames.bind(styles);

const AllInfluencer = () => {
  const { data, setData } = useFormData([]);
  const [filters, setFilters] = useState({});

  const fetchData = async () => {
    const result = await getAllInfluencer(data);
    console.log(result);
    setData(result.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterData = () => {
    let filteredData = [...data];

    // Áp dụng các điều kiện filter
    if (filters.name) {
      filteredData = filteredData.filter((item) => item.name === filters.name);
    }

    // if (filters.industry) {
    //   filteredData = filteredData.filter((item) => item.industry === filters.industry);
    // }

    // if (filters.price) {
    //   filteredData = filteredData.filter((item) => item.price >= filters.price);
    // }

    setData(filteredData); // Cập nhật lại dữ liệu hiển thị
  };

  return (
    <section className={cx("section", "featured-car")} id={cx("featured-car")}>
      <div className={cx("container")}>
          <BookingScreen data={data} fetchData={fetchData} setFilters={setFilters} filterData={filterData} filters={filters}/>

        <div className={cx("btn-see-more")}>
          <Button outline={true}>Xem Thêm</Button>
        </div>
      </div>
    </section>
  );
};
export default AllInfluencer;