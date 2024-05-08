import { getRandomNum, getRandomPhotos, convertDate } from './utils.js';

const MAX_PRICE = 100;

const RANDOM_PHOTOS_MAX_INDEX = 200;

const TRIPS_AMOUNT = 5;

const PHOTOS_AMOUNT = 5;

const TYPE_TRIPS = {
  'taxi': 'Taxi',
  'bus': 'Bus',
  'train': 'Train',
  'ship': 'Ship',
  'drive': 'Drive',
  'flight': 'Flight',
  'check-in': 'Check-in',
  'sightseeing': 'Sightseeing',
  'restaurant': 'Restaurant'
};

const DESTINATION = [
  {
    'cityName': 'Denpasar',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
    'photos': getRandomPhotos(PHOTOS_AMOUNT, RANDOM_PHOTOS_MAX_INDEX),
  },
  {
    'cityName': 'Tokyo',
    'description': 'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'photos': getRandomPhotos(PHOTOS_AMOUNT, RANDOM_PHOTOS_MAX_INDEX),
  },
  {
    'cityName': 'Dallas',
    'description': 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'photos': getRandomPhotos(PHOTOS_AMOUNT, RANDOM_PHOTOS_MAX_INDEX),
  },
  {
    'cityName': 'Seoul',
    'description': 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'photos': getRandomPhotos(PHOTOS_AMOUNT, RANDOM_PHOTOS_MAX_INDEX),
  },
  {
    'cityName': 'Osaka',
    'description': 'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.',
    'photos': getRandomPhotos(PHOTOS_AMOUNT, RANDOM_PHOTOS_MAX_INDEX),
  }
];

const ADD_OPTION = {
  'luggage': {
    'description':'Add luggage',
    'price': getRandomNum(MAX_PRICE),
  },
  'comfort': {
    'description':'Switch to comfort class',
    'price': getRandomNum(MAX_PRICE),
  },
  'meal': {
    'description':'Add meal',
    'price': getRandomNum(MAX_PRICE),
  },
  'seats': {
    'description': 'Choose seats',
    'price': getRandomNum(MAX_PRICE),
  },
  'train': {
    description:'Travel by train',
    'price': getRandomNum(MAX_PRICE),
  },
};

for (const option in ADD_OPTION) {
  ADD_OPTION[option].price = getRandomNum(MAX_PRICE);
}

const START_DATE_VALUE = ['19/03/2024 00:15', '19/03/2024 16:00','19/03/2024 00:00'];

const END_DATE_VALUE = ['19/03/2024 16:45', '23/03/2024 17:00', '01/04/2024 12:00'];

const formattedStartDates = START_DATE_VALUE.map((date) => convertDate(date));
const formattedEndDates = END_DATE_VALUE.map((date) => convertDate(date));

export { TYPE_TRIPS, DESTINATION, ADD_OPTION, formattedEndDates, formattedStartDates, TRIPS_AMOUNT, RANDOM_PHOTOS_MAX_INDEX };
