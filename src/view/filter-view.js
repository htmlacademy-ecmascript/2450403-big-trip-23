import { FilterTypes } from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';
import { getFilterByPeriod } from '../utils.js';

const getFiltersTemplate = (currentFilterType, filterState) => (
  `<form class="trip-filters" action="#" method="get">

  ${Object.values(FilterTypes).map((filterType) => (
    `<div class="trip-filters__filter">
      <input id="filter-${filterType}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter"
        value="${filterType}"${currentFilterType === filterType ? ' checked' : ''}${filterState[filterType] ? '' : ' disabled'}>
      <label class="trip-filters__filter-label" for="filter-${filterType}">${filterType}</label>
    </div>`
  )).join('')}

    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`
);

export default class FiltersView extends AbstractView {
  #trips = [];
  #currentFilterType = '';

  constructor(trips) {
    super();
    this.#trips = trips;
    this.#currentFilterType = FilterTypes.EVERYTHING;
  }

  get template() {
    const filterState = getFilterByPeriod(this.#trips);
    return getFiltersTemplate(this.#currentFilterType, filterState);
  }
}

