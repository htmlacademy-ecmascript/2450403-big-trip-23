import {WAYPOINTS_QUANTITY} from './view/data.js';
import EditigForm from './view/editing-form.js';
import Sorting from './view/sorting.js';
import Waypoint from './view/waypoint';
import Filter from './view/filter.js';
import {RenderPosition, render} from './render.js';
import TripInfoBlock from './view/trip-info-block.js';

const tripControlsFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const tripMain = document.querySelector('.trip-main');

const tripFilters = new Filter();
const tripSorting = new Sorting();
const tripCondition = new EditigForm();
const tripHeaderInfo = new TripInfoBlock();

render(tripHeaderInfo, tripMain, RenderPosition.AFTERBEGIN);
render(tripFilters, tripControlsFilters, RenderPosition.BEFOREBEGIN);
render(tripSorting, tripEvents);
render(tripCondition, tripEvents);
for (let i = 0; i < WAYPOINTS_QUANTITY; i++) {
  const listOfWaypoints = new Waypoint();
  render(listOfWaypoints, tripEvents);
}

// const RenderPosition = {
//   BEFOREBEGIN: 'beforebegin',
//   AFTERBEGIN: 'afterbegin',
//   BEFOREEND: 'beforeend',
//   AFTEREND: 'afterend',
// };

// function createElement(template) {
//   const newElement = document.createElement('div');
//   newElement.innerHTML = template;

//   return newElement.firstElementChild;
// }

// function render(component, container, place = RenderPosition.BEFOREEND) {
//   container.insertAdjacentElement(place, component.getElement());
// }

// export {RenderPosition, createElement, render};


