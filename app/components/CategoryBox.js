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
var query_string_1 = __importDefault(require("query-string"));
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var CategoryBox = function (_a) {
    var Icon = _a.icon, label = _a.label, selected = _a.selected;
    var router = (0, navigation_1.useRouter)();
    var params = (0, navigation_1.useSearchParams)();
    var handleClick = (0, react_1.useCallback)(function () {
        var currentQuery = {};
        if (params) {
            currentQuery = query_string_1.default.parse(params.toString());
        }
        var updatedQuery = __assign(__assign({}, currentQuery), { category: label });
        if ((params === null || params === void 0 ? void 0 : params.get('category')) === label) {
            delete updatedQuery.category;
        }
        var url = query_string_1.default.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true });
        router.push(url);
    }, [label, router, params]);
    return (<div onClick={handleClick} className={"\n        flex \n        flex-col \n        items-center \n        justify-center \n        gap-2\n        p-3\n        border-b-2\n        hover:text-neutral-800\n        transition\n        cursor-pointer\n        ".concat(selected ? 'border-b-neutral-800' : 'border-transparent', "\n        ").concat(selected ? 'text-neutral-800' : 'text-neutral-500', "\n      ")}>
      <Icon size={26}/>
      <div className="font-medium text-sm">
        {label}
      </div>
    </div>);
};
exports.default = CategoryBox;
