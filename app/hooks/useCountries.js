"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var world_countries_1 = __importDefault(require("world-countries"));
var formattedCountries = world_countries_1.default.map(function (country) { return ({
    value: country.cca2,
    label: country.name.common,
    flag: country.flag,
    latlng: country.latlng,
    region: country.region,
}); });
var useCountries = function () {
    var getAll = function () { return formattedCountries; };
    var getByValue = function (value) {
        return formattedCountries.find(function (item) { return item.value === value; });
    };
    return {
        getAll: getAll,
        getByValue: getByValue
    };
};
exports.default = useCountries;
