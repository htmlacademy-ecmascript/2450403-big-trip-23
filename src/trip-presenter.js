import {WAYPOINTS_QUANTITY} from './view/data.js';
import EditingForm from './view/editing-form.js';
import Sorting from './view/sorting.js';
import Waypoint from './view/waypoint.js';
import Filter from './view/filter.js';
import {RenderPosition, render} from './render.js';
import TripInfoBlock from './view/trip-info-block.js';

export default class TripPresenter {
  constructor({tripMain}) {
    this.tripMain = tripMain;
  }

  init() {
    const tripControlsFilters = document.querySelector('.trip-controls__filters');
    const tripEvents = document.querySelector('.trip-events');

    render(new TripInfoBlock(), this.tripMain, RenderPosition.AFTERBEGIN);
    render(new Filter(), tripControlsFilters, RenderPosition.BEFOREBEGIN);
    render(new Sorting(), tripEvents);
    render(new EditingForm(), tripEvents);

    for (let i = 0; i < WAYPOINTS_QUANTITY; i++) {
      render(new Waypoint(), tripEvents);
    }
  }
}
