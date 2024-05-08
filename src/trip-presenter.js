import EditigFormView from './view/editing-form-view.js';
import {RenderPosition, render} from './render.js';
import TripInfoBlockView from './view/trip-info-block-view.js';
import WaypointView from './view/waypoint-view.js';
import SortingView from './view/sorting-view.js';
import FilterView from './view/filter-view.js';

export default class TripPresenter {
  constructor({tripMain, tripsModel}) {
    this.tripMain = tripMain;
    this.tripsModel = tripsModel;
  }

  init() {
    this.tripsModels = [...this.tripsModel.getTrips()];
    const tripControlsFilters = document.querySelector('.trip-controls__filters');
    const tripEvents = document.querySelector('.trip-events');

    render(new TripInfoBlockView(), this.tripMain, RenderPosition.AFTERBEGIN);
    render(new FilterView(), tripControlsFilters, RenderPosition.BEFOREBEGIN);
    render(new SortingView(), tripEvents);
    render(new EditigFormView({ trip: this.tripsModels[0]}), tripEvents);

    for (let i = 1; i < this.tripsModels.length; i++) {
      render(new WaypointView({ trip: this.tripsModels[i]}), tripEvents);
    }
  }
}
