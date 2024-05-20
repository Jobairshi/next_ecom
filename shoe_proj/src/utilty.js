import axios from "axios";


export const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  console.log(formData);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=dc989c915c69e0fa1bf816564bc9ed23`,
    formData
  );
  
  return data;
};