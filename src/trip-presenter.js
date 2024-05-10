import EditigFormView from './view/editing-form-view.js';
import {RenderPosition, render} from './render.js';
import TripInfoBlockView from './view/trip-info-block-view.js';
import WaypointView from './view/waypoint-view.js';
import SortingView from './view/sorting-view.js';
import FilterView from './view/filter-view.js';

export default class TripPresenter {
  constructor({ tripMain, tripModel }) {
    this.tripMain = tripMain;
    this.tripModel = tripModel;
  }

  init() {
    const tripControlsFilters = document.querySelector('.trip-controls__filters');
    const tripEvents = document.querySelector('.trip-events');

    // Получаем массив всех поездок
    const trips = [...this.tripModel.getTrips()];

    // Рендерим компоненты
    render(new TripInfoBlockView(), this.tripMain, RenderPosition.AFTERBEGIN);
    render(new FilterView(), tripControlsFilters, RenderPosition.BEFOREBEGIN);
    render(new SortingView(), tripEvents);
    render(new EditigFormView({trip: trips[0]}), tripEvents);

    // Рендер всех поездок
    trips.forEach((trip) => {
      render(new WaypointView({trip}), tripEvents);
    });
  }
}

