export const convertObjectToFormData = (object) => {
    return Object.keys(object).reduce((formData, key) => {
        if (key.includes("Images")) {
            Array.from(object[key]).forEach(image => {
                formData.append(key, image)
            });
        }
        else {
            formData.append(key, object[key]);

            console.log('formData after appending', formData);
        }

        return formData;
    }, new FormData());
}