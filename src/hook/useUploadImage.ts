import axios from "axios";
import { useState } from "react";
import { CommonResponse } from "@/types/CommonResponse";

interface UploadResponse {
  url: string[];
}

const useImageUpload = () => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const uploadImages = async (files: File[]) => {
    const formData = new FormData();
    files.forEach((file) => formData.append("file", file));

    const response = await axios.post<CommonResponse<UploadResponse>>(
      "/api/image",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    setUploadedImages(response.data.data.url);
  };

  return { uploadImages, uploadedImages };
};

export default useImageUpload;
