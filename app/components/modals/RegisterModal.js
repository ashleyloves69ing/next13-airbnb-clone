"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var ai_1 = require("react-icons/ai");
var react_1 = require("next-auth/react");
var fc_1 = require("react-icons/fc");
var react_2 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var react_hook_form_1 = require("react-hook-form");
var useLoginModal_1 = __importDefault(require("@/app/hooks/useLoginModal"));
var useRegisterModal_1 = __importDefault(require("@/app/hooks/useRegisterModal"));
var Modal_1 = __importDefault(require("./Modal"));
var Input_1 = __importDefault(require("../inputs/Input"));
var Heading_1 = __importDefault(require("../Heading"));
var Button_1 = __importDefault(require("../Button"));
var RegisterModal = function () {
    var registerModal = (0, useRegisterModal_1.default)();
    var loginModal = (0, useLoginModal_1.default)();
    var _a = (0, react_2.useState)(false), isLoading = _a[0], setIsLoading = _a[1];
    var _b = (0, react_hook_form_1.useForm)({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
    }), register = _b.register, handleSubmit = _b.handleSubmit, errors = _b.formState.errors;
    var onSubmit = function (data) {
        setIsLoading(true);
        axios_1.default.post('/api/register', data)
            .then(function () {
            react_hot_toast_1.toast.success('Registered!');
            registerModal.onClose();
            loginModal.onOpen();
        })
            .catch(function (error) {
            react_hot_toast_1.toast.error(error);
        })
            .finally(function () {
            setIsLoading(false);
        });
    };
    var onToggle = (0, react_2.useCallback)(function () {
        registerModal.onClose();
        loginModal.onOpen();
    }, [registerModal, loginModal]);
    var bodyContent = (<div className="flex flex-col gap-4">
      <Heading_1.default title="Welcome to Airbnb" subtitle="Create an account!"/>
      <Input_1.default id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
      <Input_1.default id="name" label="Name" disabled={isLoading} register={register} errors={errors} required/>
      <Input_1.default id="password" label="Password" type="password" disabled={isLoading} register={register} errors={errors} required/>
    </div>);
    var footerContent = (<div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button_1.default outline label="Continue with Google" icon={fc_1.FcGoogle} onClick={function () { return (0, react_1.signIn)('google'); }}/>
      <Button_1.default outline label="Continue with Github" icon={ai_1.AiFillGithub} onClick={function () { return (0, react_1.signIn)('github'); }}/>
      <div className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        ">
        <p>Already have an account?
          <span onClick={onToggle} className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "> Log in</span>
        </p>
      </div>
    </div>);
    return (<Modal_1.default disabled={isLoading} isOpen={registerModal.isOpen} title="Register" actionLabel="Continue" onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent}/>);
};
exports.default = RegisterModal;
