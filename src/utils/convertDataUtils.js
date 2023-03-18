export const convertObjectToFormData = (object) => {
  return Object.keys(object).reduce((formData, key) => {
    if (key.includes("Images")) {
      Array.from(object[key]).forEach((image) => {
        formData.append(key, image);
      });
    } else {
      formData.append(key, object[key]);
    }
    return formData;
  }, new FormData());
};
