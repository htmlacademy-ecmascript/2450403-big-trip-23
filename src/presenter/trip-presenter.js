import SortingView from '../view/sorting-view.js';
import WaypointsListView from '../view/waypoints-list-view.js';
import { render } from '../framework/render.js';
import WaypointPresenter from './waypoint-presenter.js';

export default class TripPresenter extends AbortController {
  #container = null;
  #tripModel = null;
  #activeWaypoint = null;

  constructor({ container, tripModel }) {
    super();
    this.#container = container;
    this.#tripModel = tripModel;
  }

  init() {
    const trips = [...this.#tripModel.getTrips()];
    const destinations = [...this.#tripModel.getDestinations()];
    const offers = [...this.#tripModel.getOffers()];
    const favorites = [...this.#tripModel.getFavorite()];

    const waypointsListView = new WaypointsListView();

    render(waypointsListView, this.#container);
    render(new SortingView(), this.#container);

    trips.forEach((trip, index) => {
      this.#renderWaypoint(waypointsListView, trip, destinations, offers, favorites[index]);
    });
  }

  #renderWaypoint(waypointsListView, trip, destinations, offers, favorites) {
    const waypointPresenter = new WaypointPresenter({
      waypointsListView,
      trip,
      destinations,
      offers,
      favorites,
      onWaypointEdit: this.#handleWaypointEdit.bind(this)
    });
    waypointPresenter.render();
  }

  #handleWaypointEdit(waypointPresenter) {
    if(this.#activeWaypoint && this.#activeWaypoint !== waypointPresenter) {
      this.#activeWaypoint.resetEditForm();
    }
    this.#activeWaypoint = waypointPresenter;
  }
}
