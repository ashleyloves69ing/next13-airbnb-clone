"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __importDefault(require("next/image"));
var useCountries_1 = __importDefault(require("@/app/hooks/useCountries"));
var Heading_1 = __importDefault(require("../Heading"));
var HeartButton_1 = __importDefault(require("../HeartButton"));
var ListingHead = function (_a) {
    var title = _a.title, locationValue = _a.locationValue, imageSrc = _a.imageSrc, id = _a.id, currentUser = _a.currentUser;
    var getByValue = (0, useCountries_1.default)().getByValue;
    var location = getByValue(locationValue);
    return (<>
      <Heading_1.default title={title} subtitle={"".concat(location === null || location === void 0 ? void 0 : location.region, ", ").concat(location === null || location === void 0 ? void 0 : location.label)}/>
      <div className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        ">
        <image_1.default src={imageSrc} fill className="object-cover w-full" alt="Image"/>
        <div className="
            absolute
            top-5
            right-5
          ">
          <HeartButton_1.default listingId={id} currentUser={currentUser}/>
        </div>
      </div>
    </>);
};
exports.default = ListingHead;
