import { destinationPoints, extraOptions} from '../mock/mock-data.js';
import { mockTrips } from '../mock/trip.js';


export default class TripModel {
  #trips = [];
  #destinations = [];
  #offers = [];

  constructor() {
    this.#trips = mockTrips;
    this.#destinations = destinationPoints;
    this.#offers = extraOptions;
  }

  get trips() { // исправить
    return this.#trips;
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }
}

