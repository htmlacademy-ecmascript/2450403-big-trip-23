import { createElement } from '../render.js';

const createWaypointListView = () => `
  <ul class="trip-events__list">
  </ul> `;

export default class WaypointListView {

  getTemplate () {
    return createWaypointListView();
  }

  getElement () {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }
}
