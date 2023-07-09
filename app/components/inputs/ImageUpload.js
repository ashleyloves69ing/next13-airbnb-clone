"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var next_cloudinary_1 = require("next-cloudinary");
var image_1 = __importDefault(require("next/image"));
var react_1 = require("react");
var tb_1 = require("react-icons/tb");
var uploadPreset = "pgc9ehd5";
var ImageUpload = function (_a) {
    var onChange = _a.onChange, value = _a.value;
    var handleUpload = (0, react_1.useCallback)(function (result) {
        onChange(result.info.secure_url);
    }, [onChange]);
    return (<next_cloudinary_1.CldUploadWidget onUpload={handleUpload} uploadPreset={uploadPreset} options={{
            maxFiles: 1
        }}>
      {function (_a) {
            var open = _a.open;
            return (<div onClick={function () { return open === null || open === void 0 ? void 0 : open(); }} className="
              relative
              cursor-pointer
              hover:opacity-70
              transition
              border-dashed 
              border-2 
              p-20 
              border-neutral-300
              flex
              flex-col
              justify-center
              items-center
              gap-4
              text-neutral-600
            ">
            <tb_1.TbPhotoPlus size={50}/>
            <div className="font-semibold text-lg">
              Click to upload
            </div>
            {value && (<div className="
              absolute inset-0 w-full h-full">
                <image_1.default fill style={{ objectFit: 'cover' }} src={value} alt="House"/>
              </div>)}
          </div>);
        }}
    </next_cloudinary_1.CldUploadWidget>);
};
exports.default = ImageUpload;
