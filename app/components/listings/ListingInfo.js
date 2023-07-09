"use strict";
'use client';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dynamic_1 = __importDefault(require("next/dynamic"));
var useCountries_1 = __importDefault(require("@/app/hooks/useCountries"));
var Avatar_1 = __importDefault(require("../Avatar"));
var ListingCategory_1 = __importDefault(require("./ListingCategory"));
var Map = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../Map')); }); }, {
    ssr: false
});
var ListingInfo = function (_a) {
    var _b;
    var user = _a.user, description = _a.description, guestCount = _a.guestCount, roomCount = _a.roomCount, bathroomCount = _a.bathroomCount, category = _a.category, locationValue = _a.locationValue;
    var getByValue = (0, useCountries_1.default)().getByValue;
    var coordinates = (_b = getByValue(locationValue)) === null || _b === void 0 ? void 0 : _b.latlng;
    return (<div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          ">
          <div>Hosted by {user === null || user === void 0 ? void 0 : user.name}</div>
          <Avatar_1.default src={user === null || user === void 0 ? void 0 : user.image}/>
        </div>
        <div className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          ">
          <div>
            {guestCount} guests
          </div>
          <div>
            {roomCount} rooms
          </div>
          <div>
            {bathroomCount} bathrooms
          </div>
        </div>
      </div>
      <hr />
      {category && (<ListingCategory_1.default icon={category.icon} label={category === null || category === void 0 ? void 0 : category.label} description={category === null || category === void 0 ? void 0 : category.description}/>)}
      <hr />
      <div className="
      text-lg font-light text-neutral-500">
        {description}
      </div>
      <hr />
      <Map center={coordinates}/>
    </div>);
};
exports.default = ListingInfo;
