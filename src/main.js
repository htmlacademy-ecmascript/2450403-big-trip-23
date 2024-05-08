import TripPresenter from './trip-presenter.js';
import TripsModel from './model/trips-model.js';

const tripMain = document.querySelector('.trip-main');
const pageBodyContainer = document.querySelector('.page-body__container');
const tripsModel = new TripsModel();

const tripPresenter = new TripPresenter({tripMain, tripsModel});
const tripSortAndContent = new TripPresenter({pageBodyContainer, tripsModel});


tripPresenter.init();
tripSortAndContent.init();
