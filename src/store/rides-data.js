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
      stravaLink: 'https://www.strava.com/activities/5798918869',
      photos: [
         'PXL_20210815_134724022.jpg',
         'PXL_20210815_135331511.jpg',
         'PXL_20210815_153251515.jpg',
         'PXL_20210815_174156622.jpg'
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
      stravaLink: 'https://www.strava.com/activities/5686264901',
      photos: []
   },
   {
      name: "To Pyatnitsa through Povarovo",
      map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9fcf7c4415e26a7daf7ce35c57b326981fb8597413161bfb5613dc8ea337f216&amp;width=100%25&amp;height=368&amp;lang=ru_RU&amp;scroll=true"></script>`,
      distance: 40.27,
      climb: 1541,
      startDate: '2021-06-20',
      startTime: '14:35',
      fullTime: '4:04:06',
      cleanTime: '2:16:37',
      members: ['Lavr', 'Nick', 'Andy'],
      stravaLink: 'https://www.strava.com/activities/5503081364',
      photos: [
         'IMG_20210620_173603.jpg',
         'IMG_20210620_183839.jpg'
      ]
   },
   {
      name: "Dirty journey to Pavlovskaya Sloboda",
      map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A52022963fe77b0760546402b269b136369e1c0eacb2dd1dd4007053064815637&amp;width=100%25&amp;height=484&amp;lang=ru_RU&amp;scroll=true"></script>`,
      distance: 63.97,
      climb: 465,
      startDate: '2021-05-07',
      startTime: '11:14',
      fullTime: '8:34:21',
      cleanTime: '5:24:26',
      members: ['Lavr', 'Nick', 'Paul', 'Serg'],
      stravaLink: 'https://www.strava.com/activities/5257813977',
      photos: [
         'IMG_20210507_114057.jpg',
         'IMG_20210507_132101.jpg',
         'IMG_20210507_160611.jpg'
      ]
   },
   {
      name: "Iksha - Pushkino - Dolgoprudniy",
      map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aded685440c9370e219b6f00f0e09f64afa1c0112185739c43f1140ae63332129&amp;width=100%25&amp;height=476&amp;lang=ru_RU&amp;scroll=true"></script>`,
      distance: 87.73,
      climb: 2271,
      startDate: '2021-05-02',
      startTime: '09:20',
      fullTime: '8:16:09',
      cleanTime: '5:45:04',
      members: ['Lavr', 'Nick', 'Serg'],
      stravaLink: 'https://www.strava.com/activities/5231113160',
      photos: [
         'IMG_20210502_094313.jpg',
         'IMG_20210502_112101.jpg',
         'IMG_20210502_113245.jpg'
      ]
   },
   {
      name: "Ring through Moscow and Krasnogorsk",
      map: `str<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5ccc2c04f4b0008649f11ff6a5c6342d96fecafed1e74cc76ad27a9afd0234ad&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>ing`,
      distance: 150.56,
      climb: 907,
      startDate: '2020-07-25',
      startTime: '10:55',
      fullTime: '12:41:55',
      cleanTime: '9:27:53',
      members: ['Lavr', 'Andy'],
      stravaLink: 'https://www.strava.com/activities/3813354535',
      photos: []
   },
   {
      name: "Solnechnogorsk - Yakhroma - Zelenograd",
      map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9c04de5659479fdd8e90aa8a8f67023b92af302dc94f7f1a753d3366ded6375a&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>`,
      distance: 112.78,
      climb: 1267,
      startDate: '2020-07-05',
      startTime: '09:57',
      fullTime: '11:48:59',
      cleanTime: '7:13:28',
      members: ['Lavr', 'Nick', 'Andy'],
      stravaLink: 'https://www.strava.com/activities/3720632658',
      photos: [
         'IMG_20200705_114925.jpg',
         'IMG_20200705_130908.jpg',
         'IMG_20200705_175028.jpg',
         'IMG_20200705_183124.jpg',
         'IMG_20200705_193859.jpg'
      ]
   },
   {
      name: "Manikhino - Istra - darky CKAD - Zelenograd",
      map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A3a8223fd337d72848efb864c9e24f9ad07b2ece458bdb19ec2edbf53305bfffd&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>`,
      distance: 82,
      climb: 183,
      startDate: '2020-06-20',
      startTime: '14:40',
      fullTime: '8:20:00',
      cleanTime: '8:20:00',
      members: ['Lavr', 'Nick', 'Paul', 'Andy'],
      stravaLink: 'https://www.strava.com/activities/3645623919',
      photos: [
         'IMG_20200620_134513.jpg',
         'IMG_20200620_154818.jpg',
         '0DjnlAYpoj0.jpg'
      ]
   },
   {
      name: "Zelenograd - Krasnogorsk - Zvenigorod - Snegiri",
      map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5b4fb76257fafb94aa5825008dcfd156eb5dbfde22c48ac29423f2717280509d&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>`,
      distance: 118.46,
      climb: 837,
      startDate: '2020-06-27',
      startTime: '08:51',
      fullTime: '10:09:56',
      cleanTime: '7:27:30',
      members: ['Lavr', 'Andy'],
      stravaLink: 'https://www.strava.com/activities/4472183662',
      photos: [
         'IMG_20200627_125001.jpg',
         'IMG_20200627_154630.jpg',
         'IMG_20200627_194504.jpg',
      ]
   },
   {
      name: "Klin - Volokolamsk & Snegiri - Zelenograd",
      map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa02aa953e30dd50fc5cc44d6a096a7872681099e94c24a53d15598034cecf512&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>`,
      distance: (77.7 + 14.03),
      climb: (772 + 71),
      startDate: '2020-06-13',
      startTime: '11:03',
      fullTime: '7:17:26',
      cleanTime: '4:44:47',
      members: ['Lavr', 'Nick', 'Andy'],
      stravaLink: 'https://www.strava.com/activities/4472192681',
      photos: [
         'IMG_20200613_140625.jpg',
         'IMG_20200613_144021.jpg',
         'IMG_20200613_144505.jpg',
         'IMG_20200613_150446.jpg',
         'IMG_20200613_153716.jpg'
      ]
   },
   {
      name: "From Tver to Konarovo across Saint Places",
      map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Acbbbc2ac8be43ac3fbfc8c431eab02bdd78ddad3260b95cdff55751b6055e3fe&amp;width=100%25&amp;height=336&amp;lang=ru_RU&amp;scroll=true"></script>`,
      distance: 79.3,
      climb: 225,
      startDate: '2019-08-25',
      startTime: '09:18',
      fullTime: '5:26:11',
      cleanTime: '4:36:11',
      members: ['Lavr', 'Nick'],
      stravaLink: 'https://www.strava.com/activities/4472204842',
      photos: [
         'PANO_20190825_130807.vr.jpg',
         'PANO_20190825_153818.vr.jpg',
         'IMG_20190825_102814.jpg',
         'IMG_20190825_111512.jpg',
         'IMG_20190825_123343.jpg',
         'IMG_20190825_134116.jpg',
         'IMG_20190825_140057.jpg',
         'IMG_20190825_141326.jpg'
      ]
   },
   {
      name: "To the back side of Istra",
      map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac3065d6bca86923eaba019c7cbbf147e4893ee7916ffd2916768678ce7e3b2a2&amp;width=100%25&amp;height=435&amp;lang=ru_RU&amp;scroll=true"></script>`,
      distance: 139.65,
      climb: 1141,
      startDate: '2019-05-18',
      startTime: '11:36',
      fullTime: '9:06:00',
      cleanTime: '7:50:59',
      members: ['Lavr', 'Nick'],
      stravaLink: 'https://www.strava.com/activities/4472205448',
      photos: []
   },
   {
      name: "Assault attempt of under constructed CKAD",
      map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aee161e8614e5dc0dd48abdbe03433229a435d569625634b34fce55080963ebe4&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>`,
      distance: 30.29,
      climb: 297,
      startDate: '2019-04-20',
      startTime: '14:18',
      fullTime: '2:11:50',
      cleanTime: '1:57:31',
      members: ['Lavr', 'Nick'],
      stravaLink: 'https://www.strava.com/activities/4472268451',
      photos: [
         'IMG_20190420_141426.jpg'
      ]
   },
   {
      name: "Hike to Yaroslavl, day 2",
      map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa57658c2eab9be5c2d0e957b80590da7cf282fa40f22463d3ece013d231f6e71&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>`,
      distance: 48.3,
      climb: 239,
      startDate: '2018-07-29',
      startTime: '08:38',
      fullTime: '3:16:25',
      cleanTime: '2:45:08',
      members: ['Lavr', 'Nick'],
      stravaLink: 'https://www.strava.com/activities/4472290953',
      photos: [
         'IMG_20180729_110602.jpg',
         'IMG_20180729_115906.jpg',
         'IMG_20180729_121151.jpg'
      ]
   },
   {
      name: "Hike to Yaroslavl, day 1",
      map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A75a667968ec739763f4972196875bad59d4a75726481572487ad124dad46dbc8&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>`,
      distance: 143.54,
      climb: 998,
      startDate: '2018-07-28',
      startTime: '10:52',
      fullTime: '10:09:56',
      cleanTime: '7:40:36',
      members: ['Lavr', 'Nick'],
      stravaLink: 'https://www.strava.com/activities/4472291668',
      photos: [
         'IMG_20180728_082637.jpg',
         'IMG_20180728_130220_01.jpg',
         'IMG_20180728_145607.jpg',
         'IMG_20180728_170859.jpg',
         'IMG_20180728_193500.jpg',
         'IMG_20180728_194927.jpg'
      ]
   },
   {
      name: "From Zvenigorod to Mozhaysk and Borodino",
      map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad9e8826de5283c7bb13aabc4e9e7075db6c3109530abe31303defe776ffe776e&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>`,
      distance: 100.59,
      climb: 781,
      startDate: '2018-07-14',
      startTime: '09:57',
      fullTime: '9:09:00',
      cleanTime: '4:52:07',
      members: ['Lavr', 'Nick'],
      stravaLink: 'https://www.strava.com/activities/4472291139',
      photos: [
         'IMG_20180714_171055.jpg',
         'IMG_20180714_192138.jpg'

      ]
   },
   {
      name: "Autumn trip around Moscow",
      map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae1726821540dbf35a3103ca223a5e129a1c2364c617f972824a3ee1cc8fbee84&amp;width=100%25&amp;height=382&amp;lang=ru_RU&amp;scroll=true"></script>`,
      distance: 82.76,
      climb: 594,
      startDate: '2017-09-23',
      startTime: '13:27',
      fullTime: '6:53:15',
      cleanTime: '5:27:55',
      members: ['Lavr', 'Nick'],
      stravaLink: 'https://www.strava.com/activities/4472343428',
      photos: []
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
         'IMG_20170722_082508.jpg',
         'IMG_20170722_110859.jpg',
         'IMG_20170722_143709.jpg',
         'IMG_20170722_174029.jpg',
         'IMG_20170722_202800.jpg',
         'IMG_20170723_004534.jpg'
      ]
   }
]

export default rides
