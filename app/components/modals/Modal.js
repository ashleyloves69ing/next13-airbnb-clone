"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var io_1 = require("react-icons/io");
var Button_1 = __importDefault(require("../Button"));
var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, onSubmit = _a.onSubmit, title = _a.title, body = _a.body, actionLabel = _a.actionLabel, footer = _a.footer, disabled = _a.disabled, secondaryAction = _a.secondaryAction, secondaryActionLabel = _a.secondaryActionLabel;
    var _b = (0, react_1.useState)(isOpen), showModal = _b[0], setShowModal = _b[1];
    (0, react_1.useEffect)(function () {
        setShowModal(isOpen);
    }, [isOpen]);
    var handleClose = (0, react_1.useCallback)(function () {
        if (disabled) {
            return;
        }
        setShowModal(false);
        setTimeout(function () {
            onClose();
        }, 300);
    }, [onClose, disabled]);
    var handleSubmit = (0, react_1.useCallback)(function () {
        if (disabled) {
            return;
        }
        onSubmit();
    }, [onSubmit, disabled]);
    var handleSecondaryAction = (0, react_1.useCallback)(function () {
        if (disabled || !secondaryAction) {
            return;
        }
        secondaryAction();
    }, [secondaryAction, disabled]);
    if (!isOpen) {
        return null;
    }
    return (<>
      <div className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70
        ">
        <div className="
          relative 
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          h-full 
          lg:h-auto
          md:h-auto
          ">
          {/*content*/}
          <div className={"\n            translate\n            duration-300\n            h-full\n            ".concat(showModal ? 'translate-y-0' : 'translate-y-full', "\n            ").concat(showModal ? 'opacity-100' : 'opacity-0', "\n          ")}>
            <div className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            ">
              {/*header*/}
              <div className="
                flex 
                items-center 
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
                ">
                <button className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    left-9
                  " onClick={handleClose}>
                  <io_1.IoMdClose size={18}/>
                </button>
                <div className="text-lg font-semibold">
                  {title}
                </div>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                {body}
              </div>
              {/*footer*/}
              <div className="flex flex-col gap-2 p-6">
                <div className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  ">
                  {secondaryAction && secondaryActionLabel && (<Button_1.default disabled={disabled} label={secondaryActionLabel} onClick={handleSecondaryAction} outline/>)}
                  <Button_1.default disabled={disabled} label={actionLabel} onClick={handleSubmit}/>
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>);
};
exports.default = Modal;
