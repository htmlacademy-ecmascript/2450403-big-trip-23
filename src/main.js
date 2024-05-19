import TripPresenter from './presenter/trip-presenter.js';
import TripModel from './model/trip-model.js';
import TripInfoBlockView from './view/trip-info-block-view.js';
import FilterView from './view/filter-view.js';
import {RenderPosition, render} from './framework/render.js';

const tripMain = document.querySelector('.trip-main');
const tripEvents = document.querySelector('.trip-events');
const tripControlsFilters = document.querySelector('.trip-controls__filters');
const tripModel = new TripModel();

render(new TripInfoBlockView(), tripMain, RenderPosition.AFTERBEGIN);
render(new FilterView(), tripControlsFilters, RenderPosition.BEFOREBEGIN);

const tripPresenter = new TripPresenter({container: tripEvents, tripModel});

tripPresenter.init();

