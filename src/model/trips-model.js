import { getRandomTrip } from '../mock/trip.js';
import { TRIPS_AMOUNT } from '../const.js';

export default class TripsModel {
  trips = Array.from({length: TRIPS_AMOUNT}, getRandomTrip);

  getTrips() {
    return this.trips;
  }
}
