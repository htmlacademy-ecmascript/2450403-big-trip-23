import { FilterTypes } from '../const.js';
import AbstractView from '../framework/view/abstract-view.js';


const getInfoText = (filterType) => {
  let infoText = '';

  switch (true) {
    case filterType === FilterTypes.EVERYTHING:
      infoText = 'Click New Event to create your first point';
      break;
    case filterType === FilterTypes.PAST:
      infoText = 'There are no past events now';
      break;
    case filterType === FilterTypes.PRESENT:
      infoText = 'There are no present events now';
      break;
    case filterType === FilterTypes.FUTURE:
      infoText = 'There are no future events now';
      break;
  }

  return infoText;
};

const createEmptyList = (filterType) =>
  `<p class="trip-events__msg">
    ${getInfoText(filterType)}
  </p>`;

export default class EmptyListView extends AbstractView {
  #filterType = null;

  constructor (filterType) {
    super();
    this.#filterType = filterType || FilterTypes.EVERYTHING;
  }

  get template () {
    return createEmptyList(this.#filterType);
  }
}

