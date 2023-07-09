"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
var react_spinners_1 = require("react-spinners");
var Loader = function () {
    return (<div className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    ">
      <react_spinners_1.PuffLoader size={100} color="red"/>
    </div>);
};
exports.default = Loader;
