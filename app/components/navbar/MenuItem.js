"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
var MenuItem = function (_a) {
    var onClick = _a.onClick, label = _a.label;
    return (<div onClick={onClick} className="
        px-4 
        py-3 
        hover:bg-neutral-100 
        transition
        font-semibold
      ">
      {label}
    </div>);
};
exports.default = MenuItem;
