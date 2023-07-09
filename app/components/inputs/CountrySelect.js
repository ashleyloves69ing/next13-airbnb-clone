"use strict";
'use client';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_select_1 = __importDefault(require("react-select"));
var useCountries_1 = __importDefault(require("@/app/hooks/useCountries"));
var CountrySelect = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    var getAll = (0, useCountries_1.default)().getAll;
    return (<div>
      <react_select_1.default placeholder="Anywhere" isClearable options={getAll()} value={value} onChange={function (value) { return onChange(value); }} formatOptionLabel={function (option) { return (<div className="
          flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="text-neutral-500 ml-1">
                {option.region}
              </span>
            </div>
          </div>); }} classNames={{
            control: function () { return 'p-3 border-2'; },
            input: function () { return 'text-lg'; },
            option: function () { return 'text-lg'; }
        }} theme={function (theme) { return (__assign(__assign({}, theme), { borderRadius: 6, colors: __assign(__assign({}, theme.colors), { primary: 'black', primary25: '#ffe4e6' }) })); }}/>
    </div>);
};
exports.default = CountrySelect;
