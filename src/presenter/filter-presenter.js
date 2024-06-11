import { render } from '../framework/render.js';
import FilterView from '../view/filter-view.js';

export default class FilterPresenter {
  #container = null;
  #tripModel = null;
  #trips = [];

  constructor ({ container, tripModel}) {
    this.#container = container;
    this.#tripModel = tripModel;
  }

  init() {
    this.#trips = this.#tripModel.trips;
    render(new FilterView(this.#trips), this.#container);
  }
}
