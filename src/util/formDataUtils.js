export const submitEntityDataWithImage = (data) => {
  if (data.image) {
    const formData = new FormData();
    formData.append('file', data.image);
    delete data.image;
    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    return formData;
  } else {
    delete data.image;
    return data;
  }
};

export const CapitalizeName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};
