"use strict";
'use client';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var react_hot_toast_1 = require("react-hot-toast");
var react_hook_form_1 = require("react-hook-form");
var dynamic_1 = __importDefault(require("next/dynamic"));
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var useRentModal_1 = __importDefault(require("@/app/hooks/useRentModal"));
var Modal_1 = __importDefault(require("./Modal"));
var Counter_1 = __importDefault(require("../inputs/Counter"));
var CategoryInput_1 = __importDefault(require("../inputs/CategoryInput"));
var CountrySelect_1 = __importDefault(require("../inputs/CountrySelect"));
var Categories_1 = require("../navbar/Categories");
var ImageUpload_1 = __importDefault(require("../inputs/ImageUpload"));
var Input_1 = __importDefault(require("../inputs/Input"));
var Heading_1 = __importDefault(require("../Heading"));
var STEPS;
(function (STEPS) {
    STEPS[STEPS["CATEGORY"] = 0] = "CATEGORY";
    STEPS[STEPS["LOCATION"] = 1] = "LOCATION";
    STEPS[STEPS["INFO"] = 2] = "INFO";
    STEPS[STEPS["IMAGES"] = 3] = "IMAGES";
    STEPS[STEPS["DESCRIPTION"] = 4] = "DESCRIPTION";
    STEPS[STEPS["PRICE"] = 5] = "PRICE";
})(STEPS || (STEPS = {}));
var RentModal = function () {
    var router = (0, navigation_1.useRouter)();
    var rentModal = (0, useRentModal_1.default)();
    var _a = (0, react_1.useState)(false), isLoading = _a[0], setIsLoading = _a[1];
    var _b = (0, react_1.useState)(STEPS.CATEGORY), step = _b[0], setStep = _b[1];
    var _c = (0, react_hook_form_1.useForm)({
        defaultValues: {
            category: '',
            location: null,
            guestCount: 1,
            roomCount: 1,
            bathroomCount: 1,
            imageSrc: '',
            price: 1,
            title: '',
            description: '',
        }
    }), register = _c.register, handleSubmit = _c.handleSubmit, setValue = _c.setValue, watch = _c.watch, errors = _c.formState.errors, reset = _c.reset;
    var location = watch('location');
    var category = watch('category');
    var guestCount = watch('guestCount');
    var roomCount = watch('roomCount');
    var bathroomCount = watch('bathroomCount');
    var imageSrc = watch('imageSrc');
    var Map = (0, react_1.useMemo)(function () { return (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../Map')); }); }, {
        ssr: false
    }); }, [location]);
    var setCustomValue = function (id, value) {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        });
    };
    var onBack = function () {
        setStep(function (value) { return value - 1; });
    };
    var onNext = function () {
        setStep(function (value) { return value + 1; });
    };
    var onSubmit = function (data) {
        if (step !== STEPS.PRICE) {
            return onNext();
        }
        setIsLoading(true);
        axios_1.default.post('/api/listings', data)
            .then(function () {
            react_hot_toast_1.toast.success('Listing created!');
            router.refresh();
            reset();
            setStep(STEPS.CATEGORY);
            rentModal.onClose();
        })
            .catch(function () {
            react_hot_toast_1.toast.error('Something went wrong.');
        })
            .finally(function () {
            setIsLoading(false);
        });
    };
    var actionLabel = (0, react_1.useMemo)(function () {
        if (step === STEPS.PRICE) {
            return 'Create';
        }
        return 'Next';
    }, [step]);
    var secondaryActionLabel = (0, react_1.useMemo)(function () {
        if (step === STEPS.CATEGORY) {
            return undefined;
        }
        return 'Back';
    }, [step]);
    var bodyContent = (<div className="flex flex-col gap-8">
      <Heading_1.default title="Which of these best describes your place?" subtitle="Pick a category"/>
      <div className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        ">
        {Categories_1.categories.map(function (item) { return (<div key={item.label} className="col-span-1">
            <CategoryInput_1.default onClick={function (category) {
                return setCustomValue('category', category);
            }} selected={category === item.label} label={item.label} icon={item.icon}/>
          </div>); })}
      </div>
    </div>);
    if (step === STEPS.LOCATION) {
        bodyContent = (<div className="flex flex-col gap-8">
        <Heading_1.default title="Where is your place located?" subtitle="Help guests find you!"/>
        <CountrySelect_1.default value={location} onChange={function (value) { return setCustomValue('location', value); }}/>
        <Map center={location === null || location === void 0 ? void 0 : location.latlng}/>
      </div>);
    }
    if (step === STEPS.INFO) {
        bodyContent = (<div className="flex flex-col gap-8">
        <Heading_1.default title="Share some basics about your place" subtitle="What amenitis do you have?"/>
        <Counter_1.default onChange={function (value) { return setCustomValue('guestCount', value); }} value={guestCount} title="Guests" subtitle="How many guests do you allow?"/>
        <hr />
        <Counter_1.default onChange={function (value) { return setCustomValue('roomCount', value); }} value={roomCount} title="Rooms" subtitle="How many rooms do you have?"/>
        <hr />
        <Counter_1.default onChange={function (value) { return setCustomValue('bathroomCount', value); }} value={bathroomCount} title="Bathrooms" subtitle="How many bathrooms do you have?"/>
      </div>);
    }
    if (step === STEPS.IMAGES) {
        bodyContent = (<div className="flex flex-col gap-8">
        <Heading_1.default title="Add a photo of your place" subtitle="Show guests what your place looks like!"/>
        <ImageUpload_1.default onChange={function (value) { return setCustomValue('imageSrc', value); }} value={imageSrc}/>
      </div>);
    }
    if (step === STEPS.DESCRIPTION) {
        bodyContent = (<div className="flex flex-col gap-8">
        <Heading_1.default title="How would you describe your place?" subtitle="Short and sweet works best!"/>
        <Input_1.default id="title" label="Title" disabled={isLoading} register={register} errors={errors} required/>
        <hr />
        <Input_1.default id="description" label="Description" disabled={isLoading} register={register} errors={errors} required/>
      </div>);
    }
    if (step === STEPS.PRICE) {
        bodyContent = (<div className="flex flex-col gap-8">
        <Heading_1.default title="Now, set your price" subtitle="How much do you charge per night?"/>
        <Input_1.default id="price" label="Price" formatPrice type="number" disabled={isLoading} register={register} errors={errors} required/>
      </div>);
    }
    return (<Modal_1.default disabled={isLoading} isOpen={rentModal.isOpen} title="Airbnb your home!" actionLabel={actionLabel} onSubmit={handleSubmit(onSubmit)} secondaryActionLabel={secondaryActionLabel} secondaryAction={step === STEPS.CATEGORY ? undefined : onBack} onClose={rentModal.onClose} body={bodyContent}/>);
};
exports.default = RentModal;
