const DESTINATIONS = [
  {
    'id': 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    'description': 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    'name': 'Chamonix',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005163317',
        'description': 'Chamonix parliament building'
      }]},
  {
    'id': '6a2f41a3-ca54-49da-9b23-8a6b932bf418',
    'description': 'Bali is a true traveler’s paradise where you’ll never run out of things to see and do.',
    'name': 'Bali',
    'pictures': [
      {
        'src': 'https://www.agoda.com/wp-content/uploads/2020/01/Bali-itinerary-Featured-photo-1200x350-Balinese-temple.jpg',
        'description': 'Bali building'
      },
      {
        'src': 'https://www.agoda.com/wp-content/uploads/2020/01/Bali-itinerary-Streets-in-Bali-with-traditional-Balinese-penjors.jpg',
        'description': 'Bali fest'
      },
      {
        'src': 'https://www.agoda.com/wp-content/uploads/2020/01/Bali-itinerary-Nusa-Dua-beach.jpg',
        'description': 'Bali beach'
      },
      {
        'src': 'https://www.agoda.com/wp-content/uploads/2020/01/Bali-itinerary-Waterblow-in-Nusa-Dua.jpg',
        'description': 'Nusa Dua'
      },
    ]
  },
  {
    'id': '6b7668e0e-07e2-460b-9d33-5c59e075256b',
    'description': 'Tokyo is Japan’s capital and the world’s most populous metropolis',
    'name': 'Tokyo',
    'pictures': [
      {
        'src': 'https://media.cntraveler.com/photos/63482b255e7943ad4006df0b/1:1/w_1280,h_1280,c_limit/tokyoGettyImages-1031467664.jpeg',
        'description': 'Tokyo street'
      },
      {
        'src': 'https://media.cntraveler.com/photos/632c8c7f9ae3f06709fbe0a5/16:9/w_640,h_432,c_limit/Fujiyoshida-shi,%20Japan_manuel-cosentino-n--CMLApjfI-unsplash.jpg',
        'description': 'Fuji'
      },
    ]
  },
  {
    'id': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'description': 'Seoul is riding a wave of creativity. From fashion to food, architecture to art, the city has become a creative haven for those looking to make their mark',
    'name': 'Seoul',
    'pictures': [
      {
        'src': 'https://a.storyblok.com/f/112937/567x464/b521a9ee4b/visit_seoul_web.jpg/m/620x0/filters:quality(70)/',
        'description': 'Seoul SkyTower'
      },
      {
        'src': 'https://static.wixstatic.com/media/0505b9_b332ff9eaf614b5e81e047f305d8cff6~mv2.jpg/v1/fill/w_870,h_772,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0505b9_b332ff9eaf614b5e81e047f305d8cff6~mv2.jpg',
        'description': 'Korean food'
      },
      {
        'src': 'https://static.wixstatic.com/media/0505b9_ec32c8a2a7094dcf8854f3ad5283c716~mv2.jpg/v1/fill/w_1218,h_769,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0505b9_ec32c8a2a7094dcf8854f3ad5283c716~mv2.jpg',
        'description': 'Gyeongbokgung Palace'
      },
    ]
  },
  {
    'id': '7cc0b103-d3c1-44f3-aafb-a947b6ad944b',
    'description': 'Kuala Lumpur is well known as a melting pot of Southeast Asia where many different races and cultures make the city of Kuala Lumpur a vibrant place to visit',
    'name': 'Kuala Lumpur',
    'pictures': [
      {
        'src': 'https://i.natgeofe.com/n/9da24954-6d9e-4706-ba30-e2bb28f020b8/caves-kualalumpur-malaysia_3x2.jpg?w=718&h=479',
        'description': 'Temple'
      },
      {
        'src': 'https://i.natgeofe.com/n/5f9cfb59-baa3-4a51-a59b-42a991edde6c/eat_GettyImages-1458151650_ukHR_3x2.jpg?w=718&h=479',
        'description': 'Batu Caves'
      },
      {
        'src': 'https://i.natgeofe.com/n/c42cc644-c2a1-4d41-b26f-d4503d33a748/kualalumpur_3x2.jpeg?w=718&h=479',
        'description': 'Beautiful view from the hotel’s roof'
      },
    ]
  },
];

const EXTRA_OPTIONS = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': 'b4c3e4e6-9053-42ce-b747-e281314baa31',
        'title': 'Upgrade to a business class',
        'price': 120
      }
    ]
  },
  {
    'type': 'luggage',
    'offers': [
      {
        'id': 'b4c3e4e6-9053-42ce-b325-e281314baa42',
        'title': 'Add luggage',
        'price': 70
      }
    ]
  },
  {
    'type': 'comfort',
    'offers': [
      {
        'id': '3e3b9c1f-9be5-4c83-a630-c9f8065e5c8a',
        'title': 'Switch to comfort class',
        'price': 150
      },
      {
        'id': 'af6b8812-08de-4e2d-9792-86c8f781bf66',
        'title': 'Add personal guided tour',
        'price': 300
      },
      {
        'id': 'ca53d02c-249f-434b-8635-8b00788f7af6',
        'title': 'Upgrade a hotel room',
        'price': 560
      },
    ]
  },
  {
    'type': 'meal',
    'offers': [
      {
        'id': 'b93b6bda-86f8-4b54-a113-c8439b5a6f29',
        'title': 'Add hotel breakfast',
        'price': 120
      },
      {
        'id': 'd2453c57-0886-4c7e-bc12-70b897905759',
        'title': 'Сustomize your menu',
        'price': 320
      }
    ]
  },
  {
    'type': 'seats',
    'offers': [
      {
        'id': '3a5bc237-b3e0-4346-b20b-a9c3e5ad5f35',
        'title': 'Choose seats',
        'price': 30
      },
    ],
  },
  {
    'type': 'train',
    'offers': [
      {
        'id': '57fc2461-435c-43ba-8b8a-e2b0d9e50770',
        'title': 'Buy out a compartment',
        'price': 180
      },
      {
        'id': '2a8f1cde-9c3f-4c25-a30f-c2625a9b925f',
        'title': 'Transport an animal',
        'price': 95
      },
      {
        'id': 'f0b77b49-568c-43d8-b273-634bffec4a15',
        'title': 'Call luggage porters',
        'price': 95
      },
      {
        'id': '984fd4d8-8d8f-4cef-93bd-001676ad2237',
        'title': 'Add train shower',
        'price': 15
      },
    ],
  },
];

export { DESTINATIONS, EXTRA_OPTIONS };
