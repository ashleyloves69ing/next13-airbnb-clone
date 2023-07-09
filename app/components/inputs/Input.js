"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
var bi_1 = require("react-icons/bi");
var Input = function (_a) {
    var id = _a.id, label = _a.label, _b = _a.type, type = _b === void 0 ? "text" : _b, disabled = _a.disabled, formatPrice = _a.formatPrice, register = _a.register, required = _a.required, errors = _a.errors;
    return (<div className="w-full relative">
      {formatPrice && (<bi_1.BiDollar size={24} className="
            text-neutral-700
            absolute
            top-5
            left-2
          "/>)}
      <input id={id} disabled={disabled} {...register(id, { required: required })} placeholder=" " type={type} className={"\n          peer\n          w-full\n          p-4\n          pt-6 \n          font-light \n          bg-white \n          border-2\n          rounded-md\n          outline-none\n          transition\n          disabled:opacity-70\n          disabled:cursor-not-allowed\n          ".concat(formatPrice ? 'pl-9' : 'pl-4', "\n          ").concat(errors[id] ? 'border-rose-500' : 'border-neutral-300', "\n          ").concat(errors[id] ? 'focus:border-rose-500' : 'focus:border-black', "\n        ")}/>
      <label className={"\n          absolute \n          text-md\n          duration-150 \n          transform \n          -translate-y-3 \n          top-5 \n          z-10 \n          origin-[0] \n          ".concat(formatPrice ? 'left-9' : 'left-4', "\n          peer-placeholder-shown:scale-100 \n          peer-placeholder-shown:translate-y-0 \n          peer-focus:scale-75\n          peer-focus:-translate-y-4\n          ").concat(errors[id] ? 'text-rose-500' : 'text-zinc-400', "\n        ")}>
        {label}
      </label>
    </div>);
};
exports.default = Input;
