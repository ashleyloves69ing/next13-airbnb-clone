"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
var react_date_range_1 = require("react-date-range");
require("react-date-range/dist/styles.css");
require("react-date-range/dist/theme/default.css");
var DatePicker = function (_a) {
    var value = _a.value, onChange = _a.onChange, disabledDates = _a.disabledDates;
    return (<react_date_range_1.DateRange rangeColors={['#262626']} ranges={[value]} date={new Date()} onChange={onChange} direction="vertical" showDateDisplay={false} minDate={new Date()} disabledDates={disabledDates}/>);
};
exports.default = DatePicker;
