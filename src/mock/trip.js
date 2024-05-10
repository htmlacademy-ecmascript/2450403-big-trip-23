const mockTrips = [
  {
    'basePrice': 1050,
    'dateFrom': '2019-07-10T22:55:56.845Z',
    'dateTo': '2019-07-11T11:22:13.375Z',
    'destination': 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    'isFavorite': false,
    'offers': [],
    'type': 'flight'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'basePrice': 1100,
    'dateFrom': '2024-05-01T08:30:00.000Z',
    'dateTo': '2024-05-01T09:15:00.000Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'isFavorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    'type': 'taxi'
  },
  {
    'id': '6b7668e0e-07e2-460b-9d33-5c59e075256b',
    'basePrice': 980,
    'dateFrom': '2024-05-02T10:00:00.000Z',
    'dateTo': '2024-05-15T15:30:00.000Z',
    'destination': '6b7668e0e-07e2-460b-9d33-5c59e075256b',
    'isFavorite': true,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31',
      'd2453c57-0886-4c7e-bc12-70b897905759',
      'b93b6bda-86f8-4b54-a113-c8439b5a6f29',
      'af6b8812-08de-4e2d-9792-86c8f781bf66',
      'b4c3e4e6-9053-42ce-b325-e281314baa42'
    ],
    'type': 'flight'
  },
  {
    'id': '6a2f41a3-ca54-49da-9b23-8a6b932bf418',
    'basePrice': 980,
    'dateFrom': '2024-05-07T12:00:00.000Z',
    'dateTo': '2024-05-12T18:25:00.000Z',
    'destination': '7cc0b103-d3c1-44f3-aafb-a947b6ad944b',
    'isFavorite': true,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31',
      'd2453c57-0886-4c7e-bc12-70b897905759',
      'b93b6bda-86f8-4b54-a113-c8439b5a6f29',
      'af6b8812-08de-4e2d-9792-86c8f781bf66',
      'b4c3e4e6-9053-42ce-b325-e281314baa42'
    ],
    'type': 'flight'
  },
  {
    'id': '6d54900b-b5d6-4869-8d8b-af3918da0723',
    'basePrice': 1230,
    'dateFrom': '2024-05-10T14:30:00.000Z',
    'dateTo': '2024-05-18T20:45:00.000Z',
    'destination': '6a2f41a3-ca54-49da-9b23-8a6b932bf418',
    'isFavorite': false,
    'offers': [
      '3e3b9c1f-9be5-4c83-a630-c9f8065e5c8a',
      'af6b8812-08de-4e2d-9792-86c8f781bf66',
      'd2453c57-0886-4c7e-bc12-70b897905759',
    ],
    'type': 'ship'
  },
  {
    'id': 'e3f82d52-2c03-41ed-8b30-f2508c72b5d7',
    'basePrice': 1460,
    'dateFrom': '2024-05-06T07:45:00.000Z',
    'dateTo': '2024-05-06T10:10:00.000Z',
    'destination': 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    'isFavorite': true,
    'offers': [
    ],
    'type': 'drive'
  },
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'basePrice': 1500,
    'dateFrom': '2024-05-02T09:00:00.000Z',
    'dateTo': '2024-05-02T11:30:00.000Z',
    'destination': 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    'isFavorite': true,
    'offers': [
      'b4c3e4e6-9053-42ce-b325-e281314baa42',
      'af6b8812-08de-4e2d-9792-86c8f781bf66'
    ],
    'type': 'taxi'
  },
  {
    'id': 'a3775a18-76f1-46d4-a658-9d028db590a9',
    'basePrice': 900,
    'dateFrom': '2024-05-04T14:00:00.000Z',
    'dateTo': '2024-05-04T20:00:00.000Z',
    'destination': '6a2f41a3-ca54-49da-9b23-8a6b932bf418',
    'isFavorite': false,
    'offers': [
      '3e3b9c1f-9be5-4c83-a630-c9f8065e5c8a',
      'b93b6bda-86f8-4b54-a113-c8439b5a6f29'
    ],
    'type': 'check-in'
  },
  {
    'id': '62f684b6-a819-4baa-a3d6-cc3d5846c71f',
    'basePrice': 1200,
    'dateFrom': '2024-05-05T10:15:00.000Z',
    'dateTo': '2024-05-05T18:45:00.000Z',
    'destination': '6b7668e0e-07e2-460b-9d33-5c59e075256b',
    'isFavorite': true,
    'offers': [
      'd2453c57-0886-4c7e-bc12-70b897905759',
      '984fd4d8-8d8f-4cef-93bd-001676ad2237'
    ],
    'type': 'train'
  },
  {
    'id': 'e3f82d52-2c03-41ed-8b30-f2508c72b5d7',
    'basePrice': 700,
    'dateFrom': '2024-05-06T12:30:00.000Z',
    'dateTo': '2024-05-06T15:00:00.000Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'isFavorite': false,
    'offers': [],
    'type': 'bus'
  },
  {
    'id': 'fc158cd8-9f73-4fae-9ebc-a507962c67eb',
    'basePrice': 1100,
    'dateFrom': '2024-05-07T16:45:00.000Z',
    'dateTo': '2024-05-07T19:00:00.000Z',
    'destination': '7cc0b103-d3c1-44f3-aafb-a947b6ad944b',
    'isFavorite': true,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31',
      'b4c3e4e6-9053-42ce-b325-e281314baa42',
      '3e3b9c1f-9be5-4c83-a630-c9f8065e5c8a'
    ],
    'type': 'drive'
  },
  {
    'id': '7cc0b103-d3c1-44f3-aafb-a947b6ad944b',
    'basePrice': 1300,
    'dateFrom': '2024-05-08T08:00:00.000Z',
    'dateTo': '2024-05-08T12:00:00.000Z',
    'destination': 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    'isFavorite': false,
    'offers': [
      '57fc2461-435c-43ba-8b8a-e2b0d9e50770',
      '2a8f1cde-9c3f-4c25-a30f-c2625a9b925f',
      'f0b77b49-568c-43d8-b273-634bffec4a15'
    ],
    'type': 'ship'
  },
  {
    'id': '984fd4d8-8d8f-4cef-93bd-001676ad2237',
    'basePrice': 800,
    'dateFrom': '2024-05-09T13:00:00.000Z',
    'dateTo': '2024-05-09T18:00:00.000Z',
    'destination': '6a2f41a3-ca54-49da-9b23-8a6b932bf418',
    'isFavorite': true,
    'offers': [
      'ca53d02c-249f-434b-8635-8b00788f7af6',
      'af6b8812-08de-4e2d-9792-86c8f781bf66'
    ],
    'type': 'sightseeing'
  }
];

export { mockTrips };

