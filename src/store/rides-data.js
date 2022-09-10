const rides = [
  {
    name: 'Joinery along Volga',
    map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0a70db1f4771f4d6082776e0b82c3172732a69cc1c0d3eda6c5f8278e9dc394a&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>`,
    distance: 43.88 + 30.73,
    climb: 98 + 108,
    startDate: '2022-06-30',
    startTime: '18:31',
    fullTime: '6:21:06',
    cleanTime: '4:48:03',
    members: ['Lavr', 'Nick', 'Andy'],
    stravaLink: 'https://www.strava.com/activities/7590449274',
    searchWords: `Tver Savvatyevo Kablukovo Zaborovye Lisitskiy bor Volga night camp swimming Vidogoschi Edimonovo Yuryevo-Devichye Konakovo ferry Toporok`,
    photos: [
      'IMG_20220730_202338.jpg',
      'IMG_20220731_104758.jpg',
      'IMG_20220731_111546.jpg'
    ]
  },
  {
    name: 'Konakovo - Dubna - Dmitrov',
    map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A563ab8f8d719a4058ac82d15bf2a61944e1923ffaaf3e2b89d30793897b15d3a&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>`,
    distance: 99.22,
    climb: 177,
    startDate: '2022-06-25',
    startTime: '12:14',
    fullTime: '9:40:24',
    cleanTime: '5:29:34',
    members: ['Lavr', 'Nick', 'Andy'],
    stravaLink: 'https://www.strava.com/activities/7378308366',
    searchWords: `Konakovo Dmitrova gora Dubna Velo1 Velo-1 Moscow channel Kanal imeni Moskvy Meldino swimming Melchovka Dmitrov`,
    photos: [
      'IMG_20220625_133855.jpg',
      'IMG_20220625_155711.jpg',
      'IMG_20220625_180446.jpg',
      'IMG_20220625_180711.jpg'
    ]
  },
  {
    name: 'To Moscow through Krasnogorsk',
    map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aee887284ae725f8e4980e6a9c39a4607b80bf194bf51dba6d51553c7423913cd&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>`,
    distance: 75,
    climb: 432,
    startDate: '2022-06-04',
    startTime: '12:51',
    fullTime: '7:32:00',
    cleanTime: '4:58:47',
    members: ['Lavr', 'Nick'],
    stravaLink: 'https://www.strava.com/activities/7255433930',
    searchWords: `Zelenograd Ruzino Pyatnitskoe highway Pyatnickoe Brehovo Brekhovo Bryokhovo Yurlovo Saburovo Opaliha Opalikha Volokolamskoe Krasnogorsk Penyagino Pavshino Crocus Myakinino Strogino Moscow Schukino Sokol Dinamo Leningradskiy prospekt Tverskaya Okhotniy Ryad Ohotniy Red Square Krasnaya Ploschad Bolotnaya Park Gorkogo Khamovniki Savvinskaya Krasnopresnenskaya naberezhnaya City`,
    photos: []
  },
  {
    name: 'Road to Krivtsovo',
    map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Afff3a7eed3a9dec745b597a68630cedbaaa3caf41460c22b7c69ffdd4dda0062&amp;width=100%25&amp;height=480&amp;lang=ru_RU&amp;scroll=true"></script>`,
    distance: 38.62,
    climb: 240,
    startDate: '2022-05-28',
    startTime: '11:04',
    fullTime: '2:22:48',
    cleanTime: '2:02:11',
    members: ['Lavr', 'Nick', 'Andy'],
    stravaLink: 'https://www.strava.com/activities/7225401824https://www.strava.com/activities/7225401824',
    searchWords: `Zelenograd Alabushevo CKAD Povarovo Povarovka Berezki Beryozki Pyatnitskoe highway Krivtsovo Krivcovo`,
    photos: []
  },
    {
      name: 'Journey to the abandoned bridge',
      map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2359cae0b5db8438c647c878ca30ca669718c0b4ea89b8adf25f656c89de78fb&amp;width=100%25&amp;height=536&amp;lang=ru_RU&amp;scroll=true"></script>`,
      distance: 35.35,
      climb: 268,
      startDate: '2022-05-07',
      startTime: '12:52',
      fullTime: '8:44:14',
      cleanTime: '3:12:39',
      members: ['Lavr', 'Nick', 'Andy', 'Paul'],
      stravaLink: 'https://www.strava.com/activities/7117734670',
      searchWords: `Zelenograd Chashnikovo Leningradskoe highway Durykino CKAD Bolkashino bridge Klyazma river Nikolskoe Morozovka Lyalovo Mendeleevo Mendeleyevo Rzhavki Rjavki`,
      photos: [
        'IMG_20220507_142910.jpg',
        'IMG_20220507_144413.jpg',
        'IMG_20220507_144852.jpg'
      ]
  },
    {
      name: 'Zelenograd - Chashnikovo - Alabushevo',
      map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A1d5e2f9a156cfa1c92191fe894b85fdaad36d814fd67fe26e81eedebe1cc975b&amp;width=100%25&amp;height=555&amp;lang=ru_RU&amp;scroll=true"></script>`,
      distance: 21.42,
      climb: 145,
      startDate: '2022-05-02',
      startTime: '18:01',
      fullTime: '3:01:56',
      cleanTime: '1:52:05',
      members: ['Andy', 'Paul'],
      stravaLink: 'https://www.strava.com/activities/7077234790',
      searchWords: `Zelenograd Leningradskoe highway Chashnikovo Alabushevo`,
      photos: [
        'WAOsyjyjDVhaVvZb6oMueWidEoqc97UgTnXM-5Mie0E-1153x2048.jpg'
      ]
  },
  {
    name: 'Zavidovo - Konakovo - Rogachevo - Klin',
    map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aea221697762f0a4e2c085d935376ee568ae63f758e80d361680811e38059591c&amp;width=100%25&amp;height=562&amp;lang=ru_RU&amp;scroll=true"></script>`,
    distance: 116.61,
    climb: 459,
    startDate: '2021-10-31',
    startTime: '10:18',
    fullTime: '10:51:17',
    cleanTime: '7:15:08',
    members: ['Lavr', 'Nick', 'Andy'],
    stravaLink: 'https://www.strava.com/activities/6193953195',
    searchWords: `Zavidovo Novozavidovo Konakovo Selihovo aerodrome Krutets Krutez Ruchyi Aleksandrovo Yahroma Yakhroma Rogachevo Rogachovo Betonka A-108 Porkovskoe Shevlyakovo Novoshchapovo Klin night`,
    photos: [
        'IMG_20211031_121053.jpg',
        'IMG_20211031_122024.jpg',
        'IMG_20211031_183920.jpg'
    ]
  },
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
    searchWords: `Konakovo Selihovo Krutets Ruchyi Pustyn Alexandrovo Yahroma Yakhroma Rogachevo Rogachovo Rogachovskoe highway Tarakanovo pond Tolstyakovo Leningradskoy highway Solnechnogorsk Senej Senezh Podsolnechnaya`,
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
    searchWords: `Zelenograd Malino Firsanovka Mtsyri Mtsiri Mziri Mzyru Serednikovo Serednyakovo Brehovo Brekhovo Bryokhovo Bryohovo Brohovo Pyatnitskoe Pyatnickoe Ruzino CIE `,
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
    searchWords: `Zelenograd Alabushevo Dedeshino Dedyoshino CKAD Depo Povarovo Povarovka wheel punkture Berezki Beryozki Alekseevskoe Kurilovo Pyatnitsa Pyatnica Shevlino Istra pond swimming`,
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
    searchWords: `Zelenograd Pyatnitskoe Pyatnickoe Vianor Krankino Nefedyevo Dedovsk Burger King Lobanovo Leshkovo Pavlovsaya Sloboda Istra river swimming Rozhdesteveno Rojdestveno Snegiri Selivaniha Dedovo Talyzino Bakeevo Goretovka Georgievskoe`,
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
    searchWords: `Morozki A-107 Betonka gas station Iksha Rozhdestvenno Rojdestvenno Tishkovo Pushkino Mamontovskaya Mamontovka Klyazma Boltino Dolgopurdniy Dolgoprudnaya Moscow channel Khimki Levoberezhnaya Levoberejnaya`,
    photos: [
        'IMG_20210502_094313.jpg',
        'IMG_20210502_112101.jpg',
        'IMG_20210502_113245.jpg'
    ]
  },
  {
    name: "Ring through Moscow and Krasnogorsk",
    map: `str<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5ccc2c04f4b0008649f11ff6a5c6342d96fecafed1e74cc76ad27a9afd0234ad&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>`,
    distance: 150.56,
    climb: 907,
    startDate: '2020-07-25',
    startTime: '10:55',
    fullTime: '12:41:55',
    cleanTime: '9:27:53',
    members: ['Lavr', 'Andy'],
    stravaLink: 'https://www.strava.com/activities/3813354535',
    searchWords: `Zelenograd Vostochka Firsanovskoe highway Firsanovka Shodnya Skhodnya Podrezkovo Cherkizovo Cherkizovskiy pond Klyazma river Novoe highway Dolgoprudniy Hlebnikovo Khlebnikovo Dmitrovskoe Afanasovo Belyaninovo Ostashkovskoe Moscow Medvedkovo Yauza Sviblovo Botanicheskiy garden VDNH Timiryazevskiy Krasniy Krasnyj Baltiets Baltiec Strogino Myakinino Crocus Krokus Pavshino Krasnogorsk Snejkom Ilyinskoe Ilinskoe Arhangelskoe Arkhangelskoe Lohin ostrov Lokhin island Krasnogorskaya Volokolamskoe Saburovo Pyatnitskoe Pyatnickoe Yurlovo Brehovo Brekhovo Bryohovo Bryokhovo Kutuzovskoe night`,
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
    searchWords: `Solnechnogorsk Podsolnechnaya Senej Senezh Timonovo Kalina Zaovrazhye Zaovrajye Rogachevskoe highway Arbuzovo Olgovo Apraskinyh manor Yahroma Yakhroma Dmitrovskoe Dedenevo Shukolovo Varvarino wheel puncture Morozki CKAD Kholmy Porkov Lyalovo Mendeleevo Lyalovskoe Rjavki Rzhavki`,
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
    searchWords: `Manihino Manikhino Volokolamskoy highway Istra town Tesla towers New Herusalem Lamishino pond swimming CKAD Betonka Pyatnitskoe Pyatnickoe Zhilino Jilino Andreevka Zelenograd`,
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
    searchWords: `Zelenograd Malino Mtsyri Mcyri Mciri Mtsiri Pyatnickoe Pyatnitskoe Yurlovo Saburovo Volokolamskoe Krasnogorskaya Ilinskoe Ilyinskoe Arhangelskoe Arkhangelskoe Mechnikovo Nikolina gora mountain Ivanovka Maslich Slavich dacha Moscow river Zvenigorod Savvino Storojevskiy Storozhevskiy monastery Savvinskaya Sloboda CKAD Betonka Porkovskoe Pavlovskaya Istra river Rojdestveno Rozhdestveno Snegiri Selivaniha`,
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
    searchWords: `Klin Pershutino Vysokovsk Kalistovo Volokolamsk Panfolovtsi Panfilovci museum Dubosekovo train Snegiri Volokolamskoe Selivaniha Bakeevo Goretovka Pyatnitskoe Georgievskoe`,
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
    searchWords: `Tver Savvatyevskoe highway Zaborovye Volga river swimming Vidogoshchi Edimonovo Yuryevo-Devichye Toporok ferry Konakovo`,
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
    searchWords: `Zelenograd Georgievskoe highway Goretovka Bakeevo Selivaniha Snegiri Volokolamskoe Istra New Herusalem Buzharovo Bujarovo Betonka A-108 Tiliktino Kuznetsovo Kuznecovo Shchekino Dron Andy dacha Ozhogino Ojogino Pyatnitskoe Pyatnickoe Podsolnechnaya Solnechnogorsk`,
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
    searchWords: `Zelenogradskiy CKAD Podosinki Morozki`,
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
    searchWords: `tent palatka bushcraft night Ustye river Ustie Yaroslavskoe highway Semibratovo Yaroslavl`,
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
    searchWords: `Naugolniy Sergiev Posad Yaroslavskoe highway Svatkovo Glebovskoe Pereslavl Zalesskiy Pereslavl-Zalesskiy Nero lake Varus bay Rostov Ustye Ustie river tent palatka bushcraft night`,
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
    searchWords: `Zvenigorod Savvinskaya Sloboda Tuchkovo Mars Moscow river mouth swimming A-108 Betonka Mojaysk Mozhaysk Borodino Borodinskoe pole field museum`,
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
    searchWords: `Moscow Strogino Krylatskoe Fili Phili Poklonnaya gora Victory park Gorky Gorkogo`,
    photos: []
  },
  {
    name: "Journey to the glory of Chester Bennington",
    map: `<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa1abd56903063854530bf5c50415e036b8debbc4a98932563fbebaa7901b6951&amp;width=100%25&amp;height=600&amp;lang=ru_RU&amp;scroll=true"></script>`,
    distance: 164.75,
    climb: 0,
    startDate: '2017-07-22',
    startTime: '11:15',
    fullTime: '10:50:00',
    cleanTime: '10:50:00',
    members: ['Lavr', 'Nick'],
    stravaLink: '',
    searchWords: `Zelenograd Lyalovskoe highway Mendeleevo Lyalovo Pokrov Sergiev Posad Bogorodskoe Saburnovo Verbilki Novonikolskoe Zaprudnya Dmitrovskoe Tempy Moscow channel Meldino ferry Spridovo Nizhnie Nijnie Vyselki Staroe Domlino Konakovo night`,
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
