"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
var Heading = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, center = _a.center;
    return (<div className={center ? 'text-center' : 'text-start'}>
      <div className="text-2xl font-bold">
        {title}
      </div>
      <div className="font-light text-neutral-500 mt-2">
        {subtitle}
      </div>
    </div>);
};
exports.default = Heading;
