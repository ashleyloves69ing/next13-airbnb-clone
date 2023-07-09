"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categories = void 0;
var navigation_1 = require("next/navigation");
var tb_1 = require("react-icons/tb");
var gi_1 = require("react-icons/gi");
var fa_1 = require("react-icons/fa");
var bs_1 = require("react-icons/bs");
var io5_1 = require("react-icons/io5");
var md_1 = require("react-icons/md");
var CategoryBox_1 = __importDefault(require("../CategoryBox"));
var Container_1 = __importDefault(require("../Container"));
exports.categories = [
    {
        label: 'Beach',
        icon: tb_1.TbBeach,
        description: 'This property is close to the beach!',
    },
    {
        label: 'Windmills',
        icon: gi_1.GiWindmill,
        description: 'This property is has windmills!',
    },
    {
        label: 'Modern',
        icon: md_1.MdOutlineVilla,
        description: 'This property is modern!'
    },
    {
        label: 'Countryside',
        icon: tb_1.TbMountain,
        description: 'This property is in the countryside!'
    },
    {
        label: 'Pools',
        icon: tb_1.TbPool,
        description: 'This is property has a beautiful pool!'
    },
    {
        label: 'Islands',
        icon: gi_1.GiIsland,
        description: 'This property is on an island!'
    },
    {
        label: 'Lake',
        icon: gi_1.GiBoatFishing,
        description: 'This property is near a lake!'
    },
    {
        label: 'Skiing',
        icon: fa_1.FaSkiing,
        description: 'This property has skiing activies!'
    },
    {
        label: 'Castles',
        icon: gi_1.GiCastle,
        description: 'This property is an ancient castle!'
    },
    {
        label: 'Caves',
        icon: gi_1.GiCaveEntrance,
        description: 'This property is in a spooky cave!'
    },
    {
        label: 'Camping',
        icon: gi_1.GiForestCamp,
        description: 'This property offers camping activities!'
    },
    {
        label: 'Arctic',
        icon: bs_1.BsSnow,
        description: 'This property is in arctic environment!'
    },
    {
        label: 'Desert',
        icon: gi_1.GiCactus,
        description: 'This property is in the desert!'
    },
    {
        label: 'Barns',
        icon: gi_1.GiBarn,
        description: 'This property is in a barn!'
    },
    {
        label: 'Lux',
        icon: io5_1.IoDiamond,
        description: 'This property is brand new and luxurious!'
    }
];
var Categories = function () {
    var params = (0, navigation_1.useSearchParams)();
    var category = params === null || params === void 0 ? void 0 : params.get('category');
    var pathname = (0, navigation_1.usePathname)();
    var isMainPage = pathname === '/';
    if (!isMainPage) {
        return null;
    }
    return (<Container_1.default>
      <div className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        ">
        {exports.categories.map(function (item) { return (<CategoryBox_1.default key={item.label} label={item.label} icon={item.icon} selected={category === item.label}/>); })}
      </div>
    </Container_1.default>);
};
exports.default = Categories;
