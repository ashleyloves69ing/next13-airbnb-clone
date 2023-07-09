"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LoginModal_1 = __importDefault(require("../components/modals/LoginModal"));
var RegisterModal_1 = __importDefault(require("../components/modals/RegisterModal"));
var RentModal_1 = __importDefault(require("../components/modals/RentModal"));
var SearchModal_1 = __importDefault(require("../components/modals/SearchModal"));
var ModalsProvider = function () {
    return (<>
      <LoginModal_1.default />
      <RegisterModal_1.default />
      <SearchModal_1.default />
      <RentModal_1.default />
    </>);
};
exports.default = ModalsProvider;
