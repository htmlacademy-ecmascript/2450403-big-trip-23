import AbstractView from '../framework/view/abstract-view.js';
import { render, replace } from '../framework/render.js';
import { isEscapeKey } from '../utils.js';
import WaypointView from '../view/waypoint-view.js';
import EditingFormView from '../view/editing-form-view.js';
import { Mode } from '../const.js';

export default class WaypointPresenter extends AbstractView {
  #waypointListView = null;
  #trip = null;
  #destinations = null;
  #offers = null;
  #favorites = null;
  #waypointComponent = null;
  #editingFormComponent = null;
  #mode = Mode.DEFAULT;
  #onWaypointEdit = null;

  constructor ({waypointsListView, trip, destinations, offers, favorites, onWaypointEdit}) {
    super();
    this.#waypointListView = waypointsListView;
    this.#trip = trip;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#favorites = favorites;
    this.#onWaypointEdit = onWaypointEdit;

    this.#waypointComponent = new WaypointView({
      trip: this.#trip,
      destinations: this.#destinations,
      offers: this.#offers,
      favorites: this.#favorites,
      onEditClick: this.#onEditClick,
      onFavoriteButton: this.#onFavoriteButton
    });

    this.#editingFormComponent = new EditingFormView({
      trip: this.#trip,
      destinations: this.#destinations,
      offers: this.#offers,
      favorites: this.#favorites,
      onFormSubmit: this.#onFormSubmit,
      onFormReset: this.#onFormReset,
    });
  }

  resetEditForm() {
    if (this.#mode === Mode.EDIT) {
      this.#switchToViewMode();
    }
  }

  #onEscapePress = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      this.#switchToViewMode();
    }
  };

  #onEditClick = () => {
    this.#switchToEditMode();
    this.#onWaypointEdit(this);
  };

  #onFormSubmit = () => this.#switchToViewMode();
  #onFormReset = () => this.#switchToViewMode();
  #onFavoriteButton = () => this.#switchToFavoriteAndBack();

  #switchToEditMode() {
    replace(this.#editingFormComponent, this.#waypointComponent);
    document.addEventListener('keydown', this.#onEscapePress);
    this.#mode = Mode.EDIT;
  }

  #switchToViewMode(){
    replace(this.#waypointComponent, this.#editingFormComponent);
    document.removeEventListener('keydown', this.#onEscapePress);
    this.#mode = Mode.DEFAULT;
  }

  #switchToFavoriteAndBack = () => {
    this.#favorites = !this.#favorites;
    this.#waypointComponent.updateFavorite(this.#favorites);
  };

  render() {
    render(this.#waypointComponent, this.#waypointListView.element);
  }
}

