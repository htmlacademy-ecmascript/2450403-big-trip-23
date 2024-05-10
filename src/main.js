import TripPresenter from './trip-presenter.js';
import TripModel from './model/trips-model.js';

const tripMain = document.querySelector('.trip-main');
const pageBodyContainer = document.querySelector('.page-body__container');
const tripModel = new TripModel();

const tripPresenter = new TripPresenter({tripMain, tripModel});
const tripSortAndContent = new TripPresenter({pageBodyContainer, tripModel});


tripPresenter.init();
tripSortAndContent.init();

