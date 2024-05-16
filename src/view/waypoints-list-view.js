import AbstractView from '../framework/view/abstract-view.js';

const createWaypointListView = () => `
  <ul class="trip-events__list">
  
  </ul> `;

export default class WaypointListView extends AbstractView{
  get template () {
    return createWaypointListView();
  }
}
