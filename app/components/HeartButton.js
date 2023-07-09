"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ai_1 = require("react-icons/ai");
var useFavorite_1 = __importDefault(require("@/app/hooks/useFavorite"));
var HeartButton = function (_a) {
    var listingId = _a.listingId, currentUser = _a.currentUser;
    var _b = (0, useFavorite_1.default)({
        listingId: listingId,
        currentUser: currentUser
    }), hasFavorited = _b.hasFavorited, toggleFavorite = _b.toggleFavorite;
    return (<div onClick={toggleFavorite} className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      ">
      <ai_1.AiOutlineHeart size={28} className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "/>
      <ai_1.AiFillHeart size={24} className={hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'}/>
    </div>);
};
exports.default = HeartButton;
