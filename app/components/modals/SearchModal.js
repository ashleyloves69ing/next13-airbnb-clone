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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var query_string_1 = __importDefault(require("query-string"));
var dynamic_1 = __importDefault(require("next/dynamic"));
var react_1 = require("react");
var date_fns_1 = require("date-fns");
var navigation_1 = require("next/navigation");
var useSearchModal_1 = __importDefault(require("@/app/hooks/useSearchModal"));
var Modal_1 = __importDefault(require("./Modal"));
var Calendar_1 = __importDefault(require("../inputs/Calendar"));
var Counter_1 = __importDefault(require("../inputs/Counter"));
var CountrySelect_1 = __importDefault(require("../inputs/CountrySelect"));
var Heading_1 = __importDefault(require("../Heading"));
var STEPS;
(function (STEPS) {
    STEPS[STEPS["LOCATION"] = 0] = "LOCATION";
    STEPS[STEPS["DATE"] = 1] = "DATE";
    STEPS[STEPS["INFO"] = 2] = "INFO";
})(STEPS || (STEPS = {}));
var SearchModal = function () {
    var router = (0, navigation_1.useRouter)();
    var searchModal = (0, useSearchModal_1.default)();
    var params = (0, navigation_1.useSearchParams)();
    var _a = (0, react_1.useState)(STEPS.LOCATION), step = _a[0], setStep = _a[1];
    var _b = (0, react_1.useState)(), location = _b[0], setLocation = _b[1];
    var _c = (0, react_1.useState)(1), guestCount = _c[0], setGuestCount = _c[1];
    var _d = (0, react_1.useState)(1), roomCount = _d[0], setRoomCount = _d[1];
    var _e = (0, react_1.useState)(1), bathroomCount = _e[0], setBathroomCount = _e[1];
    var _f = (0, react_1.useState)({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }), dateRange = _f[0], setDateRange = _f[1];
    var Map = (0, react_1.useMemo)(function () { return (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require('../Map')); }); }, {
        ssr: false
    }); }, [location]);
    var onBack = (0, react_1.useCallback)(function () {
        setStep(function (value) { return value - 1; });
    }, []);
    var onNext = (0, react_1.useCallback)(function () {
        setStep(function (value) { return value + 1; });
    }, []);
    var onSubmit = (0, react_1.useCallback)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var currentQuery, updatedQuery, url;
        return __generator(this, function (_a) {
            if (step !== STEPS.INFO) {
                return [2 /*return*/, onNext()];
            }
            currentQuery = {};
            if (params) {
                currentQuery = query_string_1.default.parse(params.toString());
            }
            updatedQuery = __assign(__assign({}, currentQuery), { locationValue: location === null || location === void 0 ? void 0 : location.value, guestCount: guestCount, roomCount: roomCount, bathroomCount: bathroomCount });
            if (dateRange.startDate) {
                updatedQuery.startDate = (0, date_fns_1.formatISO)(dateRange.startDate);
            }
            if (dateRange.endDate) {
                updatedQuery.endDate = (0, date_fns_1.formatISO)(dateRange.endDate);
            }
            url = query_string_1.default.stringifyUrl({
                url: '/',
                query: updatedQuery,
            }, { skipNull: true });
            setStep(STEPS.LOCATION);
            searchModal.onClose();
            router.push(url);
            return [2 /*return*/];
        });
    }); }, [
        step,
        searchModal,
        location,
        router,
        guestCount,
        roomCount,
        dateRange,
        onNext,
        bathroomCount,
        params
    ]);
    var actionLabel = (0, react_1.useMemo)(function () {
        if (step === STEPS.INFO) {
            return 'Search';
        }
        return 'Next';
    }, [step]);
    var secondaryActionLabel = (0, react_1.useMemo)(function () {
        if (step === STEPS.LOCATION) {
            return undefined;
        }
        return 'Back';
    }, [step]);
    var bodyContent = (<div className="flex flex-col gap-8">
      <Heading_1.default title="Where do you wanna go?" subtitle="Find the perfect location!"/>
      <CountrySelect_1.default value={location} onChange={function (value) {
            return setLocation(value);
        }}/>
      <hr />
      <Map center={location === null || location === void 0 ? void 0 : location.latlng}/>
    </div>);
    if (step === STEPS.DATE) {
        bodyContent = (<div className="flex flex-col gap-8">
        <Heading_1.default title="When do you plan to go?" subtitle="Make sure everyone is free!"/>
        <Calendar_1.default onChange={function (value) { return setDateRange(value.selection); }} value={dateRange}/>
      </div>);
    }
    if (step === STEPS.INFO) {
        bodyContent = (<div className="flex flex-col gap-8">
        <Heading_1.default title="More information" subtitle="Find your perfect place!"/>
        <Counter_1.default onChange={function (value) { return setGuestCount(value); }} value={guestCount} title="Guests" subtitle="How many guests are coming?"/>
        <hr />
        <Counter_1.default onChange={function (value) { return setRoomCount(value); }} value={roomCount} title="Rooms" subtitle="How many rooms do you need?"/>        
        <hr />
        <Counter_1.default onChange={function (value) {
                setBathroomCount(value);
            }} value={bathroomCount} title="Bathrooms" subtitle="How many bahtrooms do you need?"/>
      </div>);
    }
    return (<Modal_1.default isOpen={searchModal.isOpen} title="Filters" actionLabel={actionLabel} onSubmit={onSubmit} secondaryActionLabel={secondaryActionLabel} secondaryAction={step === STEPS.LOCATION ? undefined : onBack} onClose={searchModal.onClose} body={bodyContent}/>);
};
exports.default = SearchModal;
