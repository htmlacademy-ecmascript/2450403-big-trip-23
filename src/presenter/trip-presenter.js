import WaypointView from '../view/waypoint-view.js';
import SortingView from '../view/sorting-view.js';
import WaypointsListView from '../view/waypoints-list-view.js';
import { render, replace } from '../framework/render.js';
import EditingFormView from '../view/editing-form-view.js';
import { isEscapeKey } from '../utils.js';

export default class TripPresenter extends AbortController {
  #container = null;
  #tripModel = null;

  constructor({ container, tripModel }) {
    super();
    this.#container = container;
    this.#tripModel = tripModel;
  }

  init() {
    const trips = [...this.#tripModel.getTrips()];
    const destinations = [...this.#tripModel.getDestinations()];
    const offers = [...this.#tripModel.getOffers()];

    const waypointsListView = new WaypointsListView();

    render(waypointsListView, this.#container);
    render(new SortingView(), this.#container);

    trips.forEach((trip) => {
      this.#renderPoint(waypointsListView, trip, destinations, offers);
    });
  }

  #renderPoint(waypointsListView, trip, destinations, offers) {
    const onEscapePress = (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        switchToViewMode();
      }
    };

    const onEditClick = () => switchToEditMode();
    const onFormSubmit = () => switchToViewMode();
    const onFormReset = () => switchToViewMode();

    const waypointComponent = new WaypointView({
      trip,
      destinations,
      offers,
      onEditClick: onEditClick
    });

    const editingFormComponent = new EditingFormView({
      trip,
      destinations,
      offers,
      onFormSubmit: onFormSubmit,
      onFormReset: onFormReset
    });


    function switchToEditMode() {
      replace(editingFormComponent, waypointComponent);
      document.addEventListener('keydown', onEscapePress);
    }

    function switchToViewMode(){
      replace(waypointComponent, editingFormComponent);
      document.removeEventListener('keydown', onEscapePress);
    }

    render(waypointComponent, waypointsListView.element);
  }
}
