"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.default = void 0;
var middleware_1 = require("next-auth/middleware");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(middleware_1).default; } });
exports.config = {
    matcher: [
        "/trips",
        "/reservations",
        "/properties",
        "/favorites"
    ]
};
