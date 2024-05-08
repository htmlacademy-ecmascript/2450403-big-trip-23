import { TYPE_TRIPS, DESTINATION, formattedEndDates, formattedStartDates, ADD_OPTION } from '../const.js';
import { getRandomArrayElement } from '../utils.js';

const mockTrips = [
  {
    'id': self.crypto.randomUUID(),
    'tripType': TYPE_TRIPS['flight'],
    'basePrice': 0,
    'description': false,
    'photos': false,
    'isFavorite': false,
    'startTime': getRandomArrayElement(formattedStartDates),
    'endTime': getRandomArrayElement(formattedEndDates),
    'options': false
  },
  {
    'id': self.crypto.randomUUID(),
    'tripType': getRandomArrayElement(Object.entries(TYPE_TRIPS)),
    'basePrice': 1100,
    'destination': DESTINATION[0]['cityName'],
    'description': DESTINATION[0]['description'],
    'photos': DESTINATION[0]['photos'],
    'isFavorite': true,
    'startTime': getRandomArrayElement(formattedStartDates),
    'endTime': getRandomArrayElement(formattedEndDates),
    'options': false,
  },
  {
    'id': self.crypto.randomUUID(),
    'tripType': getRandomArrayElement(Object.entries(TYPE_TRIPS)),
    'basePrice': 800,
    'destination': DESTINATION[1]['cityName'],
    'description': DESTINATION[1]['description'],
    'photos': DESTINATION[1]['photos'],
    'isFavorite': false,
    'startTime': getRandomArrayElement(formattedStartDates),
    'endTime': getRandomArrayElement(formattedEndDates),
    'options': {
      'comfort': ADD_OPTION['comfort'],
      'comfortDecription': ADD_OPTION['comfort']['description'],
      'comfortPrice': ADD_OPTION['comfort']['price'],
    },
  },
  {
    'id': self.crypto.randomUUID(),
    'tripType': getRandomArrayElement(Object.entries(TYPE_TRIPS)),
    basePrice: 1500,
    destination: DESTINATION[2]['cityName'],
    description: DESTINATION[2]['description'],
    photos: DESTINATION[2]['photos'],
    'isFavorite': true,
    startTime: getRandomArrayElement(formattedStartDates),
    endTime: getRandomArrayElement(formattedEndDates),
    options: {
      luggageDescription: ADD_OPTION['luggage']['description'],
      luggagePrice: ADD_OPTION['luggage']['price'],
      comfortDecription: ADD_OPTION['comfort']['description'],
      comfortPrice: ADD_OPTION['comfort']['price'],
      mealDescriprion: ADD_OPTION['meal']['description'],
      mealPrice: ADD_OPTION['meal']['price'],
      seatsDescriprion: ADD_OPTION['seats']['description'],
      seatsPrice: ADD_OPTION['seats']['price'],
      trainDescription: ADD_OPTION['train']['description'],
      trainPrice: ADD_OPTION['train']['price']
    }
  },
  {
    id: self.crypto.randomUUID(),
    tripType: getRandomArrayElement(Object.entries(TYPE_TRIPS)),
    basePrice: 955,
    destination: DESTINATION[3]['cityName'],
    description: DESTINATION[3]['description'],
    photos: DESTINATION[3]['photos'],
    'isFavorite': false,
    'startTime': getRandomArrayElement(formattedStartDates),
    'endTime': getRandomArrayElement(formattedEndDates),
    options: {
      comfortDecription: ADD_OPTION['comfort']['description'],
      comfortPrice: ADD_OPTION['comfort']['price'],
      mealDescriprion: ADD_OPTION['meal']['description'],
      mealPrice: ADD_OPTION['meal']['price'],
    }
  },
  {
    id: self.crypto.randomUUID(),
    tripType: getRandomArrayElement(Object.entries(TYPE_TRIPS)),
    basePrice: 1400,
    destination: DESTINATION[4]['cityName'],
    description: DESTINATION[4]['description'],
    photos: DESTINATION[4]['photos'],
    'isFavorite': true,
    'startTime': getRandomArrayElement(formattedStartDates),
    'endTime': getRandomArrayElement(formattedEndDates),
    options: {
      luggageDescription: ADD_OPTION['luggage']['description'],
      luggagePrice: ADD_OPTION['luggage']['price'],
      comfortDecription: ADD_OPTION['comfort']['description'],
      comfortPrice: ADD_OPTION['comfort']['price'],
      mealDescriprion: ADD_OPTION['meal']['description'],
      mealPrice: ADD_OPTION['meal']['price'],
      seatsDescriprion: ADD_OPTION['seats']['description'],
      seatsPrice: ADD_OPTION['seats']['price'],
    }
  },
];

function getRandomTrip() {
  return getRandomArrayElement(mockTrips);
}

export { getRandomTrip };
