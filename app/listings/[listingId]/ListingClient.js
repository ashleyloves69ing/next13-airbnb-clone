"use strict";
'use client';
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var navigation_1 = require("next/navigation");
var date_fns_1 = require("date-fns");
var useLoginModal_1 = __importDefault(require("@/app/hooks/useLoginModal"));
var Container_1 = __importDefault(require("@/app/components/Container"));
var Categories_1 = require("@/app/components/navbar/Categories");
var ListingHead_1 = __importDefault(require("@/app/components/listings/ListingHead"));
var ListingInfo_1 = __importDefault(require("@/app/components/listings/ListingInfo"));
var ListingReservation_1 = __importDefault(require("@/app/components/listings/ListingReservation"));
var initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
};
var ListingClient = function (_a) {
    var listing = _a.listing, _b = _a.reservations, reservations = _b === void 0 ? [] : _b, currentUser = _a.currentUser;
    var loginModal = (0, useLoginModal_1.default)();
    var router = (0, navigation_1.useRouter)();
    var disabledDates = (0, react_1.useMemo)(function () {
        var dates = [];
        reservations.forEach(function (reservation) {
            var range = (0, date_fns_1.eachDayOfInterval)({
                start: new Date(reservation.startDate),
                end: new Date(reservation.endDate)
            });
            dates = __spreadArray(__spreadArray([], dates, true), range, true);
        });
        return dates;
    }, [reservations]);
    var category = (0, react_1.useMemo)(function () {
        return Categories_1.categories.find(function (items) {
            return items.label === listing.category;
        });
    }, [listing.category]);
    var _c = (0, react_1.useState)(false), isLoading = _c[0], setIsLoading = _c[1];
    var _d = (0, react_1.useState)(listing.price), totalPrice = _d[0], setTotalPrice = _d[1];
    var _e = (0, react_1.useState)(initialDateRange), dateRange = _e[0], setDateRange = _e[1];
    var onCreateReservation = (0, react_1.useCallback)(function () {
        if (!currentUser) {
            return loginModal.onOpen();
        }
        setIsLoading(true);
        axios_1.default.post('/api/reservations', {
            totalPrice: totalPrice,
            startDate: dateRange.startDate,
            endDate: dateRange.endDate,
            listingId: listing === null || listing === void 0 ? void 0 : listing.id
        })
            .then(function () {
            react_hot_toast_1.toast.success('Listing reserved!');
            setDateRange(initialDateRange);
            router.push('/trips');
        })
            .catch(function () {
            react_hot_toast_1.toast.error('Something went wrong.');
        })
            .finally(function () {
            setIsLoading(false);
        });
    }, [
        totalPrice,
        dateRange,
        listing === null || listing === void 0 ? void 0 : listing.id,
        router,
        currentUser,
        loginModal
    ]);
    (0, react_1.useEffect)(function () {
        if (dateRange.startDate && dateRange.endDate) {
            var dayCount = (0, date_fns_1.differenceInDays)(dateRange.endDate, dateRange.startDate);
            if (dayCount && listing.price) {
                setTotalPrice(dayCount * listing.price);
            }
            else {
                setTotalPrice(listing.price);
            }
        }
    }, [dateRange, listing.price]);
    return (<Container_1.default>
      <div className="
          max-w-screen-lg 
          mx-auto
        ">
        <div className="flex flex-col gap-6">
          <ListingHead_1.default title={listing.title} imageSrc={listing.imageSrc} locationValue={listing.locationValue} id={listing.id} currentUser={currentUser}/>
          <div className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            ">
            <ListingInfo_1.default user={listing.user} category={category} description={listing.description} roomCount={listing.roomCount} guestCount={listing.guestCount} bathroomCount={listing.bathroomCount} locationValue={listing.locationValue}/>
            <div className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              ">
              <ListingReservation_1.default price={listing.price} totalPrice={totalPrice} onChangeDate={function (value) { return setDateRange(value); }} dateRange={dateRange} onSubmit={onCreateReservation} disabled={isLoading} disabledDates={disabledDates}/>
            </div>
          </div>
        </div>
      </div>
    </Container_1.default>);
};
exports.default = ListingClient;
