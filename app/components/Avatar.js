"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __importDefault(require("next/image"));
var Avatar = function (_a) {
    var src = _a.src;
    return (<image_1.default className="rounded-full" height="30" width="30" alt="Avatar" src={src || '/images/placeholder.jpg'}/>);
};
exports.default = Avatar;
