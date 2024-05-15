import EditigFormView from './view/editing-form-view.js';
import WaypointView from './view/waypoint-view.js';
import SortingView from './view/sorting-view.js';
import WaypointsListView from './view/waypoints-list-view.js';

import { render } from './render.js';

export default class TripPresenter {
  constructor({ container, tripModel }) {
    this.container = container;
    this.tripModel = tripModel;
  }

  init() {
    const trips = [...this.tripModel.getTrips()];
    const destinations = [...this.tripModel.getDestinations()];
    const offers = [...this.tripModel.getOffers()];

    const waypointsListView = new WaypointsListView();

    render(new SortingView(), this.container);
    render(waypointsListView, this.container);
    render(new EditigFormView({trip: trips[0], destinations, offers}), waypointsListView.getElement());

    trips.forEach((trip) => {
      render(new WaypointView({trip, destinations, offers}), waypointsListView.getElement());
    });
  }
}

