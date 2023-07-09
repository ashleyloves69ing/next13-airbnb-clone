"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Heading_1 = __importDefault(require("@/app/components/Heading"));
var Container_1 = __importDefault(require("@/app/components/Container"));
var ListingCard_1 = __importDefault(require("@/app/components/listings/ListingCard"));
var FavoritesClient = function (_a) {
    var listings = _a.listings, currentUser = _a.currentUser;
    return (<Container_1.default>
      <Heading_1.default title="Favorites" subtitle="List of places you favorited!"/>
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
        {listings.map(function (listing) { return (<ListingCard_1.default currentUser={currentUser} key={listing.id} data={listing}/>); })}
      </div>
    </Container_1.default>);
};
exports.default = FavoritesClient;
