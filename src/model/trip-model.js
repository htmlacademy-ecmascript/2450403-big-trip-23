import { mockTrips } from '../mock/trip.js';
import { getRandomArrayElement } from '../utils.js';
import { destinationPoints, extraOptions } from '../mock/mock-data.js';

export default class TripModel {
  #trips = [];
  #destinations = [];
  #offers = [];
  #favorite = [];

  constructor() {
    this.#trips = Array.from({ length: mockTrips.length }, () => getRandomArrayElement(mockTrips));
    this.#destinations = destinationPoints;
    this.#offers = extraOptions;
    this.#favorite = this.#trips.map((favorite) => favorite.isFavorite);
  }

  getTrips() {
    return this.#trips;
  }

  getDestinations() {
    return this.#destinations;
  }

  getOffers() {
    return this.#offers;
  }

  getFavorite() {
    return this.#favorite;
  }
}

