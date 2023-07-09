"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ai_1 = require("react-icons/ai");
var react_2 = require("next-auth/react");
var navigation_1 = require("next/navigation");
var useLoginModal_1 = __importDefault(require("@/app/hooks/useLoginModal"));
var useRegisterModal_1 = __importDefault(require("@/app/hooks/useRegisterModal"));
var useRentModal_1 = __importDefault(require("@/app/hooks/useRentModal"));
var MenuItem_1 = __importDefault(require("./MenuItem"));
var Avatar_1 = __importDefault(require("../Avatar"));
var UserMenu = function (_a) {
    var currentUser = _a.currentUser;
    var router = (0, navigation_1.useRouter)();
    var loginModal = (0, useLoginModal_1.default)();
    var registerModal = (0, useRegisterModal_1.default)();
    var rentModal = (0, useRentModal_1.default)();
    var _b = (0, react_1.useState)(false), isOpen = _b[0], setIsOpen = _b[1];
    var toggleOpen = (0, react_1.useCallback)(function () {
        setIsOpen(function (value) { return !value; });
    }, []);
    var onRent = (0, react_1.useCallback)(function () {
        if (!currentUser) {
            return loginModal.onOpen();
        }
        rentModal.onOpen();
    }, [loginModal, rentModal, currentUser]);
    return (<div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div onClick={onRent} className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          ">
          Airbnb your home
        </div>
        <div onClick={toggleOpen} className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          ">
          <ai_1.AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar_1.default src={currentUser === null || currentUser === void 0 ? void 0 : currentUser.image}/>
          </div>
        </div>
      </div>
      {isOpen && (<div className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          ">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (<>
                <MenuItem_1.default label="My trips" onClick={function () { return router.push('/trips'); }}/>
                <MenuItem_1.default label="My favorites" onClick={function () { return router.push('/favorites'); }}/>
                <MenuItem_1.default label="My reservations" onClick={function () { return router.push('/reservations'); }}/>
                <MenuItem_1.default label="My properties" onClick={function () { return router.push('/properties'); }}/>
                <MenuItem_1.default label="Airbnb your home" onClick={rentModal.onOpen}/>
                <hr />
                <MenuItem_1.default label="Logout" onClick={function () { return (0, react_2.signOut)(); }}/>
              </>) : (<>
                <MenuItem_1.default label="Login" onClick={loginModal.onOpen}/>
                <MenuItem_1.default label="Sign up" onClick={registerModal.onOpen}/>
              </>)}
          </div>
        </div>)}
    </div>);
};
exports.default = UserMenu;
