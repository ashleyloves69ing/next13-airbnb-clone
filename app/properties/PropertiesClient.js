"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_hot_toast_1 = require("react-hot-toast");
var axios_1 = __importDefault(require("axios"));
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var Heading_1 = __importDefault(require("@/app/components/Heading"));
var Container_1 = __importDefault(require("@/app/components/Container"));
var ListingCard_1 = __importDefault(require("@/app/components/listings/ListingCard"));
var PropertiesClient = function (_a) {
    var listings = _a.listings, currentUser = _a.currentUser;
    var router = (0, navigation_1.useRouter)();
    var _b = (0, react_1.useState)(''), deletingId = _b[0], setDeletingId = _b[1];
    var onDelete = (0, react_1.useCallback)(function (id) {
        setDeletingId(id);
        axios_1.default.delete("/api/listings/".concat(id))
            .then(function () {
            react_hot_toast_1.toast.success('Listing deleted');
            router.refresh();
        })
            .catch(function (error) {
            var _a, _b;
            react_hot_toast_1.toast.error((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.error);
        })
            .finally(function () {
            setDeletingId('');
        });
    }, [router]);
    return (<Container_1.default>
      <Heading_1.default title="Properties" subtitle="List of your properties"/>
      <div className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        ">
        {listings.map(function (listing) { return (<ListingCard_1.default key={listing.id} data={listing} actionId={listing.id} onAction={onDelete} disabled={deletingId === listing.id} actionLabel="Delete property" currentUser={currentUser}/>); })}
      </div>
    </Container_1.default>);
};
exports.default = PropertiesClient;
