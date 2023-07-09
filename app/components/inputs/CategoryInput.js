"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
var CategoryBox = function (_a) {
    var Icon = _a.icon, label = _a.label, selected = _a.selected, onClick = _a.onClick;
    return (<div onClick={function () { return onClick(label); }} className={"\n        rounded-xl\n        border-2\n        p-4\n        flex\n        flex-col\n        gap-3\n        hover:border-black\n        transition\n        cursor-pointer\n        ".concat(selected ? 'border-black' : 'border-neutral-200', "\n      ")}>
      <Icon size={30}/>
      <div className="font-semibold">
        {label}
      </div>
    </div>);
};
exports.default = CategoryBox;
