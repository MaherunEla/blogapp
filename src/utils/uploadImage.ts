import axios from "axios";

export const uploadImages = async (file: File, setUploadProgress: any) => {
  try {
    setUploadProgress(0);
    let formData = new FormData();
    formData.append("api_key", "");
    formData.append("file", file);
    // formData.append("public_id", "sample_image2");
    formData.append("upload_preset", "my-uploads");

    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/djfwg1dfa/image/upload",
      formData
    );
    console.log({ data });

    return {
      success: 1,
      url: data.secure_url,
    };
  } catch (err) {
    console.error({ err });
  }
};
const data = {
  asset_id: "d434248d0fd3d8bffc51ef35be600346",
  public_id: "my-uploads/sample_image2",
  version: 1693900937,
  version_id: "f0b722b397526b608892297e05b1ac69",
  signature: "66349515aaf52d143877c835c5c64f9bdbc1baae",
  width: 269,
  height: 187,
  format: "jpg",
  resource_type: "image",
  created_at: "2023-09-05T08:02:17Z",
  tags: [],
  bytes: 7682,
  type: "upload",
  etag: "0713bfc14bc2875a200c5ff1256fc62a",
  placeholder: false,
  url: "http://res.cloudinary.com/djfwg1dfa/image/upload/v1693900937/my-uploads/sample_image2.jpg",
  secure_url:
    "https://res.cloudinary.com/djfwg1dfa/image/upload/v1693900937/my-uploads/sample_image2.jpg",
  folder: "my-uploads",
  access_mode: "public",
  existing: false,
  original_filename: "2",
};
