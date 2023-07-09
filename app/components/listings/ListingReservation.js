"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Button_1 = __importDefault(require("../Button"));
var Calendar_1 = __importDefault(require("../inputs/Calendar"));
var ListingReservation = function (_a) {
    var price = _a.price, dateRange = _a.dateRange, totalPrice = _a.totalPrice, onChangeDate = _a.onChangeDate, onSubmit = _a.onSubmit, disabled = _a.disabled, disabledDates = _a.disabledDates;
    return (<div className="
      bg-white 
        rounded-xl 
        border-[1px]
      border-neutral-200 
        overflow-hidden
      ">
      <div className="
      flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">
          $ {price}
        </div>
        <div className="font-light text-neutral-600">
          night
        </div>
      </div>
      <hr />
      <Calendar_1.default value={dateRange} disabledDates={disabledDates} onChange={function (value) {
            return onChangeDate(value.selection);
        }}/>
      <hr />
      <div className="p-4">
        <Button_1.default disabled={disabled} label="Reserve" onClick={onSubmit}/>
      </div>
      <hr />
      <div className="
          p-4 
          flex 
          flex-row 
          items-center 
          justify-between
          font-semibold
          text-lg
        ">
        <div>
          Total
        </div>
        <div>
          $ {totalPrice}
        </div>
      </div>
    </div>);
};
exports.default = ListingReservation;
