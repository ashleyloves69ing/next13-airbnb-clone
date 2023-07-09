"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __importDefault(require("next/image"));
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var date_fns_1 = require("date-fns");
var useCountries_1 = __importDefault(require("@/app/hooks/useCountries"));
var HeartButton_1 = __importDefault(require("../HeartButton"));
var Button_1 = __importDefault(require("../Button"));
;
var ListingCard = function (_a) {
    var data = _a.data, reservation = _a.reservation, onAction = _a.onAction, disabled = _a.disabled, actionLabel = _a.actionLabel, _b = _a.actionId, actionId = _b === void 0 ? '' : _b, currentUser = _a.currentUser;
    var router = (0, navigation_1.useRouter)();
    var getByValue = (0, useCountries_1.default)().getByValue;
    var location = getByValue(data.locationValue);
    var handleCancel = (0, react_1.useCallback)(function (e) {
        e.stopPropagation();
        if (disabled) {
            return;
        }
        onAction === null || onAction === void 0 ? void 0 : onAction(actionId);
    }, [disabled, onAction, actionId]);
    var price = (0, react_1.useMemo)(function () {
        if (reservation) {
            return reservation.totalPrice;
        }
        return data.price;
    }, [reservation, data.price]);
    var reservationDate = (0, react_1.useMemo)(function () {
        if (!reservation) {
            return null;
        }
        var start = new Date(reservation.startDate);
        var end = new Date(reservation.endDate);
        return "".concat((0, date_fns_1.format)(start, 'PP'), " - ").concat((0, date_fns_1.format)(end, 'PP'));
    }, [reservation]);
    return (<div onClick={function () { return router.push("/listings/".concat(data.id)); }} className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          ">
          <image_1.default fill className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            " src={data.imageSrc} alt="Listing"/>
          <div className="
            absolute
            top-3
            right-3
          ">
            <HeartButton_1.default listingId={data.id} currentUser={currentUser}/>
          </div>
        </div>
        <div className="font-semibold text-lg">
          {location === null || location === void 0 ? void 0 : location.region}, {location === null || location === void 0 ? void 0 : location.label}
        </div>
        <div className="font-light text-neutral-500">
          {reservationDate || data.category}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">
            $ {price}
          </div>
          {!reservation && (<div className="font-light">night</div>)}
        </div>
        {onAction && actionLabel && (<Button_1.default disabled={disabled} small label={actionLabel} onClick={handleCancel}/>)}
      </div>
    </div>);
};
exports.default = ListingCard;
