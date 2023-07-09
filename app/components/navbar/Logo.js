"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __importDefault(require("next/image"));
var navigation_1 = require("next/navigation");
var Logo = function () {
    var router = (0, navigation_1.useRouter)();
    return (<image_1.default onClick={function () { return router.push('/'); }} className="hidden md:block cursor-pointer" src="/images/logo.png" height="100" width="100" alt="Logo"/>);
};
exports.default = Logo;
