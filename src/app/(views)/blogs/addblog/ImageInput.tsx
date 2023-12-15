import React from "react";
import Image from "next/image";
import { BiSolidCameraPlus } from "react-icons/bi";

const ImageInput = ({
  coverImagePreview,
  handleCoverPreview,
}: {
  coverImagePreview: any;
  handleCoverPreview: any;
}) => {
  return (
    <div className="relative">
      <Image
        alt=""
        className="w-full"
        src={
          coverImagePreview ??
          "https://www.dummyimage.com/16:9x1080&text=Cover Image"
        }
        width={5000}
        height={5000}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <label
          htmlFor="cover_image"
          className="flex items-center flex-col py-3 lg:p-5 border-2 border-gray-500 backdrop-blur-xl rounded-xl bg-white bg-opacity-50"
        >
          <BiSolidCameraPlus className="text-4xl" />{" "}
          <span>Browse Cover Image...</span>
        </label>
        <input
          type="file"
          name="cover_image"
          id="cover_image"
          className="hidden"
          onChange={(e) => {
            handleCoverPreview(e);
          }}
        />
      </div>
    </div>
  );
};

export default ImageInput;
