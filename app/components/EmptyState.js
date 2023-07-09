"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var navigation_1 = require("next/navigation");
var Button_1 = __importDefault(require("./Button"));
var Heading_1 = __importDefault(require("./Heading"));
var EmptyState = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "No exact matches" : _b, _c = _a.subtitle, subtitle = _c === void 0 ? "Try changing or removing some of your filters." : _c, showReset = _a.showReset;
    var router = (0, navigation_1.useRouter)();
    return (<div className="
        h-[60vh]
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      ">
      <Heading_1.default center title={title} subtitle={subtitle}/>
      <div className="w-48 mt-4">
        {showReset && (<Button_1.default outline label="Remove all filters" onClick={function () { return router.push('/'); }}/>)}
      </div>
    </div>);
};
exports.default = EmptyState;
