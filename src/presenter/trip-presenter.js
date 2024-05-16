import WaypointView from '../view/waypoint-view.js';
import SortingView from '../view/sorting-view.js';
import WaypointsListView from '../view/waypoints-list-view.js';
// import EditingFormView from '../view/editing-form-view.js';
import { render } from '../framework/render.js';
import EditingFormView from '../view/editing-form-view.js';

export default class TripPresenter extends AbortController {
  #container = null;
  #tripModel = null;

  constructor({ container, tripModel }) {
    super();
    this.#container = container;
    this.#tripModel = tripModel;
  }

  init() {
    const trips = [...this.#tripModel.getTrips()];
    const destinations = [...this.#tripModel.getDestinations()];
    const offers = [...this.#tripModel.getOffers()];

    const waypointsListView = new WaypointsListView();

    render(new SortingView(), this.#container);
    this.#renderWaypoint(waypointsListView, trips, destinations, offers);
  }

  #renderWaypoint(waypointsListView, trips, destinations, offers) {
    render(waypointsListView, this.#container);
    trips.forEach((trip) => {
      render(new WaypointView({trip, destinations, offers}), waypointsListView.element);
    });
  }

  #renderEditingForm(waypointsListView, trips, destinations, offers) {
    render(waypointsListView, this.#container);
    trips.forEach((trip) => {
      render(new EditingFormView({trip, destinations, offers}), waypointsListView.element);
    });
  }
}
