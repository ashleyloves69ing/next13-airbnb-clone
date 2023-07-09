"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var bi_1 = require("react-icons/bi");
var date_fns_1 = require("date-fns");
var useSearchModal_1 = __importDefault(require("@/app/hooks/useSearchModal"));
var useCountries_1 = __importDefault(require("@/app/hooks/useCountries"));
var Search = function () {
    var searchModal = (0, useSearchModal_1.default)();
    var params = (0, navigation_1.useSearchParams)();
    var getByValue = (0, useCountries_1.default)().getByValue;
    var locationValue = params === null || params === void 0 ? void 0 : params.get('locationValue');
    var startDate = params === null || params === void 0 ? void 0 : params.get('startDate');
    var endDate = params === null || params === void 0 ? void 0 : params.get('endDate');
    var guestCount = params === null || params === void 0 ? void 0 : params.get('guestCount');
    var locationLabel = (0, react_1.useMemo)(function () {
        var _a;
        if (locationValue) {
            return (_a = getByValue(locationValue)) === null || _a === void 0 ? void 0 : _a.label;
        }
        return 'Anywhere';
    }, [locationValue, getByValue]);
    var durationLabel = (0, react_1.useMemo)(function () {
        if (startDate && endDate) {
            var start = new Date(startDate);
            var end = new Date(endDate);
            var diff = (0, date_fns_1.differenceInDays)(end, start);
            if (diff === 0) {
                diff = 1;
            }
            return "".concat(diff, " Days");
        }
        return 'Any Week';
    }, [startDate, endDate]);
    var guestLabel = (0, react_1.useMemo)(function () {
        if (guestCount) {
            return "".concat(guestCount, " Guests");
        }
        return 'Add Guests';
    }, [guestCount]);
    return (<div onClick={searchModal.onOpen} className="
        border-[1px] 
        w-full 
        md:w-auto 
        py-2 
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
      ">
      <div className="
          flex 
          flex-row 
          items-center 
          justify-between
        ">
        <div className="
            text-sm 
            font-semibold 
            px-6
          ">
          {locationLabel}
        </div>
        <div className="
            hidden 
            sm:block 
            text-sm 
            font-semibold 
            px-6 
            border-x-[1px] 
            flex-1 
            text-center
          ">
          {durationLabel}
        </div>
        <div className="
            text-sm 
            pl-6 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-3
          ">
          <div className="hidden sm:block">{guestLabel}</div>
          <div className="
              p-2 
              bg-rose-500 
              rounded-full 
              text-white
            ">
            <bi_1.BiSearch size={18}/>
          </div>
        </div>
      </div>
    </div>);
};
exports.default = Search;
