"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zustand_1 = require("zustand");
var useSearchModal = (0, zustand_1.create)(function (set) { return ({
    isOpen: false,
    onOpen: function () { return set({ isOpen: true }); },
    onClose: function () { return set({ isOpen: false }); }
}); });
exports.default = useSearchModal;
