import { mockTrips } from '../mock/trip.js';
import { getRandomArrayElement } from '../utils.js';

export default class TripModel {
  constructor() {
    this.trip = Array.from({ length: mockTrips.length }, () => getRandomArrayElement(mockTrips));
  }

  getTrips() {
    return this.trip;
  }
}
