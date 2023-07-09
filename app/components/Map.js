"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var leaflet_1 = __importDefault(require("leaflet"));
var react_leaflet_1 = require("react-leaflet");
require("leaflet/dist/leaflet.css");
var marker_icon_2x_png_1 = __importDefault(require("leaflet/dist/images/marker-icon-2x.png"));
var marker_icon_png_1 = __importDefault(require("leaflet/dist/images/marker-icon.png"));
var marker_shadow_png_1 = __importDefault(require("leaflet/dist/images/marker-shadow.png"));
// @ts-ignore
delete leaflet_1.default.Icon.Default.prototype._getIconUrl;
leaflet_1.default.Icon.Default.mergeOptions({
    iconUrl: marker_icon_png_1.default.src,
    iconRetinaUrl: marker_icon_2x_png_1.default.src,
    shadowUrl: marker_shadow_png_1.default.src,
});
var url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
var attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
var Map = function (_a) {
    var center = _a.center;
    return (<react_leaflet_1.MapContainer center={center || [51, -0.09]} zoom={center ? 4 : 2} scrollWheelZoom={false} className="h-[35vh] rounded-lg">
        <react_leaflet_1.TileLayer url={url} attribution={attribution}/>
        {center && (<react_leaflet_1.Marker position={center}/>)}
      </react_leaflet_1.MapContainer>);
};
exports.default = Map;
