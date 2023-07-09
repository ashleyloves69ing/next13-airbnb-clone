"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Categories_1 = __importDefault(require("./Categories"));
var Container_1 = __importDefault(require("../Container"));
var Logo_1 = __importDefault(require("./Logo"));
var Search_1 = __importDefault(require("./Search"));
var UserMenu_1 = __importDefault(require("./UserMenu"));
var Navbar = function (_a) {
    var currentUser = _a.currentUser;
    return (<div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="
          py-4 
          border-b-[1px]
        ">
      <Container_1.default>
        <div className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          ">
          <Logo_1.default />
          <Search_1.default />
          <UserMenu_1.default currentUser={currentUser}/>
        </div>
      </Container_1.default>
    </div>
    <Categories_1.default />
  </div>);
};
exports.default = Navbar;
