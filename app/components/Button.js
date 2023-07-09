"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
var Button = function (_a) {
    var label = _a.label, onClick = _a.onClick, disabled = _a.disabled, outline = _a.outline, small = _a.small, Icon = _a.icon;
    return (<button disabled={disabled} onClick={onClick} className={"\n        relative\n        disabled:opacity-70\n        disabled:cursor-not-allowed\n        rounded-lg\n        hover:opacity-80\n        transition\n        w-full\n        ".concat(outline ? 'bg-white' : 'bg-rose-500', "\n        ").concat(outline ? 'border-black' : 'border-rose-500', "\n        ").concat(outline ? 'text-black' : 'text-white', "\n        ").concat(small ? 'text-sm' : 'text-md', "\n        ").concat(small ? 'py-1' : 'py-3', "\n        ").concat(small ? 'font-light' : 'font-semibold', "\n        ").concat(small ? 'border-[1px]' : 'border-2', "\n      ")}>
      {Icon && (<Icon size={24} className="
            absolute
            left-4
            top-3
          "/>)}
      {label}
    </button>);
};
exports.default = Button;
