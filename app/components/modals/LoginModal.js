"use strict";
'use client';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var react_2 = require("next-auth/react");
var react_hook_form_1 = require("react-hook-form");
var fc_1 = require("react-icons/fc");
var ai_1 = require("react-icons/ai");
var navigation_1 = require("next/navigation");
var useRegisterModal_1 = __importDefault(require("@/app/hooks/useRegisterModal"));
var useLoginModal_1 = __importDefault(require("@/app/hooks/useLoginModal"));
var Modal_1 = __importDefault(require("./Modal"));
var Input_1 = __importDefault(require("../inputs/Input"));
var Heading_1 = __importDefault(require("../Heading"));
var Button_1 = __importDefault(require("../Button"));
var LoginModal = function () {
    var router = (0, navigation_1.useRouter)();
    var loginModal = (0, useLoginModal_1.default)();
    var registerModal = (0, useRegisterModal_1.default)();
    var _a = (0, react_1.useState)(false), isLoading = _a[0], setIsLoading = _a[1];
    var _b = (0, react_hook_form_1.useForm)({
        defaultValues: {
            email: '',
            password: ''
        },
    }), register = _b.register, handleSubmit = _b.handleSubmit, errors = _b.formState.errors;
    var onSubmit = function (data) {
        setIsLoading(true);
        (0, react_2.signIn)('credentials', __assign(__assign({}, data), { redirect: false }))
            .then(function (callback) {
            setIsLoading(false);
            if (callback === null || callback === void 0 ? void 0 : callback.ok) {
                react_hot_toast_1.toast.success('Logged in');
                router.refresh();
                loginModal.onClose();
            }
            if (callback === null || callback === void 0 ? void 0 : callback.error) {
                react_hot_toast_1.toast.error(callback.error);
            }
        });
    };
    var onToggle = (0, react_1.useCallback)(function () {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal]);
    var bodyContent = (<div className="flex flex-col gap-4">
      <Heading_1.default title="Welcome back" subtitle="Login to your account!"/>
      <Input_1.default id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
      <Input_1.default id="password" label="Password" type="password" disabled={isLoading} register={register} errors={errors} required/>
    </div>);
    var footerContent = (<div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button_1.default outline label="Continue with Google" icon={fc_1.FcGoogle} onClick={function () { return (0, react_2.signIn)('google'); }}/>
      <Button_1.default outline label="Continue with Github" icon={ai_1.AiFillGithub} onClick={function () { return (0, react_2.signIn)('github'); }}/>
      <div className="
      text-neutral-500 text-center mt-4 font-light">
        <p>First time using Airbnb?
          <span onClick={onToggle} className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "> Create an account</span>
        </p>
      </div>
    </div>);
    return (<Modal_1.default disabled={isLoading} isOpen={loginModal.isOpen} title="Login" actionLabel="Continue" onClose={loginModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent}/>);
};
exports.default = LoginModal;
