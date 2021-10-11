const rides = [
   {
      name: 'Konakovo - Solnechnogorsk',
      map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8472ba15980b6a771535d7df0fde7022adbe7e49420c0284e9b5fa633d4e3026&amp;width=100%25&amp;height=507&amp;lang=ru_RU&amp;scroll=true"></script>`,
      distance: 90.61,
      climb: 539,
      startDate: '2021-08-15',
      startTime: '12:13',
      fullTime: '9:12:25',
      cleanTime: '4:53:44',
      members: ['Lavr', 'Paul', 'Nick', 'Andy'],
      stravaLink: 'https://strava.com',
      photos: [
         'url1',
         'url2',
         'url3',
         'url4'
      ]
   },
   {
      name: "Through Malino's jungle",
      map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A502b1ca7d98ef2d4a8c5a08866594227109af4d9af79bab4d096dbdde10f8025&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>`,
      distance: 28.37,
      climb: 226,
      startDate: '2021-07-25',
      startTime: '14:35',
      fullTime: '3:51:03',
      cleanTime: '2:03:50',
      members: ['Lavr', 'Paul', 'Nick', 'Andy'],
      stravaLink: 'https://strava.com',
      photos: [
         'url1',
         'url2',
         'url3',
         'url4'
      ]
   },
   {
      name: "To Pyatnitsa through Povarovo",
      map: `string`,
      distance: 40.27,
      climb: 1541,
      startDate: '2021-06-20',
      startTime: '14:35',
      fullTime: '4:04:06',
      cleanTime: '2:16:37',
      members: ['Lavr', 'Nick', 'Andy'],
      stravaLink: 'https://strava.com',
      photos: [
         'url1',
         'url2',
         'url3',
         'url4'
      ]
   },
   {
      name: "Dirty journey to Pavlovskaya Sloboda",
      map: `string`,
      distance: 63.97,
      climb: 465,
      startDate: '2021-05-07',
      startTime: '11:14',
      fullTime: '8:34:21',
      cleanTime: '5:24:26',
      members: ['Lavr', 'Nick', 'Paul', 'Serg'],
      stravaLink: 'https://strava.com',
      photos: [
         'url1',
         'url2',
         'url3',
         'url4'
      ]
   },
   {
      name: "Iksha - Pushkino - Dolgoprudniy",
      map: `string`,
      distance: 87.73,
      climb: 2271,
      startDate: '2021-05-02',
      startTime: '09:20',
      fullTime: '8:16:09',
      cleanTime: '5:45:04',
      members: ['Lavr', 'Nick', 'Serg'],
      stravaLink: 'https://strava.com',
      photos: [
         'url1',
         'url2',
         'url3',
         'url4'
      ]
   },
   {
      name: "Ring through Moscow and Krasnogorsk",
      map: `string`,
      distance: 150.56,
      climb: 907,
      startDate: '2020-07-25',
      startTime: '10:55',
      fullTime: '12:41:55',
      cleanTime: '9:27:53',
      members: ['Lavr', 'Andy'],
      stravaLink: 'https://strava.com',
      photos: [
         'url1',
         'url2',
         'url3',
         'url4'
      ]
   },
   {
      name: "Solnechnogorsk - Yakhroma - Zelenograd",
      map: `string`,
      distance: 112.78,
      climb: 1267,
      startDate: '2020-07-05',
      startTime: '09:57',
      fullTime: '11:48:59',
      cleanTime: '7:13:28',
      members: ['Lavr', 'Nick', 'Andy'],
      stravaLink: 'https://strava.com',
      photos: [
         'url1',
         'url2',
         'url3',
         'url4'
      ]
   },
   {
      name: "Klin - Volokolamsk & Snegiri - Zelenograd",
      map: `string`,
      distance: (77.7 + 14.03),
      climb: (772 + 71),
      startDate: '2020-06-13',
      startTime: '11:03',
      fullTime: '7:17:26',
      cleanTime: '4:44:47',
      members: ['Lavr', 'Nick', 'Andy'],
      stravaLink: 'https://strava.com',
      photos: [
         'url1',
         'url2',
         'url3',
         'url4'
      ]
   },
   {
      name: "From Tver to Konarovo across Saint Places",
      map: `string`,
      distance: 79.3,
      climb: 225,
      startDate: '2019-08-25',
      startTime: '09:18',
      fullTime: '5:26:11',
      cleanTime: '4:36:11',
      members: ['Lavr', 'Nick'],
      stravaLink: 'https://www.strava.com/activities/4472204842',
      photos: [
         'url1',
         'url2',
         'url3',
         'url4'
      ]
   },
   {
      name: "To the back side of Istra",
      map: `string`,
      distance: 139.65,
      climb: 1141,
      startDate: '2019-05-19',
      startTime: '11:36',
      fullTime: '9:06:00',
      cleanTime: '7:50:59',
      members: ['Lavr', 'Nick'],
      stravaLink: 'https://www.strava.com/activities/4472205448',
      photos: [
         'url1',
         'url2',
         'url3',
         'url4'
      ]
   },
   {
      name: "Assault attempt of under constructed CKAD",
      map: `string`,
      distance: 30.29,
      climb: 297,
      startDate: '2019-04-20',
      startTime: '14:18',
      fullTime: '2:11:50',
      cleanTime: '1:57:31',
      members: ['Lavr', 'Nick'],
      stravaLink: 'https://www.strava.com/activities/4472268451',
      photos: [
         'url1',
         'url2',
         'url3',
         'url4'
      ]
   },
   {
      name: "Hike to Yaroslavl, day 2",
      map: `string`,
      distance: 48.3,
      climb: 239,
      startDate: '2018-07-29',
      startTime: '08:38',
      fullTime: '3:16:25',
      cleanTime: '2:45:08',
      members: ['Lavr', 'Nick'],
      stravaLink: 'https://www.strava.com/activities/4472290953',
      photos: [
         'url1',
         'url2',
         'url3',
         'url4'
      ]
   },
   {
      name: "Hike to Yaroslavl, day 1",
      map: `string`,
      distance: 143.54,
      climb: 998,
      startDate: '2018-07-28',
      startTime: '10:52',
      fullTime: '10:09:56',
      cleanTime: '7:40:36',
      members: ['Lavr', 'Nick'],
      stravaLink: 'https://www.strava.com/activities/4472291668',
      photos: [
         'url1',
         'url2',
         'url3',
         'url4'
      ]
   },
   {
      name: "From Zvenigorod to Mozhaysk and Borodino",
      map: `string`,
      distance: 100.59,
      climb: 781,
      startDate: '2018-07-14',
      startTime: '09:57',
      fullTime: '9:09:00',
      cleanTime: '4:52:07',
      members: ['Lavr', 'Nick'],
      stravaLink: 'https://www.strava.com/activities/4472291139',
      photos: [
         'url1',
         'url2',
         'url3',
         'url4'
      ]
   },
   {
      name: "Autumn trip around Moscow",
      map: `string`,
      distance: 82.76,
      climb: 594,
      startDate: '2017-09-23',
      startTime: '13:27',
      fullTime: '6:53:15',
      cleanTime: '5:27:55',
      members: ['Lavr', 'Nick'],
      stravaLink: 'https://www.strava.com/activities/4472343428',
      photos: [
         'url1',
         'url2',
         'url3',
         'url4'
      ]
   },
   {
      name: "Journey to the glory of Chester Bennington",
      map: `string`,
      distance: 164.75,
      climb: 0,
      startDate: '2017-07-22',
      startTime: '11:15',
      fullTime: '10:50:00',
      cleanTime: '10:50:00',
      members: ['Lavr', 'Nick'],
      stravaLink: '',
      photos: [
         'url1',
         'url2',
         'url3',
         'url4'
      ]
   }
]

export default rides
