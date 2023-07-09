"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var EmptyState_1 = __importDefault(require("@/app/components/EmptyState"));
var ErrorState = function (_a) {
    var error = _a.error;
    (0, react_1.useEffect)(function () {
        console.error(error);
    }, [error]);
    return (<EmptyState_1.default title="Uh Oh" subtitle="Something went wrong!"/>);
};
exports.default = ErrorState;
