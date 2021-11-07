
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

 // Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_russiaCrimeaHigh;

// Set projection
chart.projection = new am4maps.projections.Mercator();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

//Set min/max fill color for each area
polygonSeries.heatRules.push({
  property: "fill",
  target: polygonSeries.mapPolygons.template,
  min: chart.colors.getIndex(1).brighten(1),
  max: chart.colors.getIndex(1).brighten(-0.3)
});

// Make map load polygon data (state shapes and names) from GeoJSON
polygonSeries.useGeodata = true;

chart.deltaLongitude = -10;

// Set heatmap values for each state
polygonSeries.data = [{
  name: "Республика Татарстан",
  id: "RU-TA",
  value: 1942.5,

}, {
  name: "Республика Башкортостан",
  id: "RU-BA",
  value: 1680.4,

}, {
  name: "Новосибирская область",
  id: "RU-NVS",
  value: 841.5,

}, {
  name: "Кабардино-Балкарская Республика",
  id: "RU-KB",
  value: 554.9,

}, {
  name: "Воронежская область",
  id: "RU-VOR",
  value: 1088.2,

}, {
  name: "Оренбургская область",
  id: "RU-ORE",
  value: 636.3,

}, {
  name: "Кировская область",
  id: "RU-KIR",
  value: 759.1,

}, {
  name: "Удмуртская Республика",
  id: "RU-UD",
  value: 926.1,

}, {
  name: "Ленинградская область",
  id: "RU-LEN",
  value: 638.7,

}, {
  name: "Республика Дагестан",
  id: "RU-DA",
  value: 926.7,

}, {
  name: "Псковская область",
  id: "RU-PSK",
  value: 203.1,

}, {
  name: "Республика Саха (Якутия)",
  id: "RU-SA",
  value: 157.4,

}, {
  name: "Республика Мордовия",
  id: "RU-MO",
  value: 471.4,

}, {
  name: "Чувашская Республика",
  id: "RU-CU",
  value: 442.8,

}, {
  name: "Белгородская область",
  id: "RU-BEL",
  value: 696.4,

}, {
  name: "Республика Алтай",
  id: "RU-AL",
  value: 70.7,

}, {
  name: "Калужская область",
  id: "RU-KLU",
  value: 461.1,

}, {
  name: "Омская область",
  id: "RU-OMS",
  value: 608.4,

}, {
  name: "Томская область",
  id: "RU-TOM",
  value: 145.1,

}, {
  name: "Магаданская область",
  id: "RU-MAG",
  value: 6,

}, {
  name: "Ростовская область",
  id: "RU-ROS",
  value: 1099,

}, {
  name: "Забайкальский край",
  id: "RU-ZAB",
  value: 322.9,

}, {
  name: "Республика Коми",
  id: "RU-KO",
  value: 54.4,

}, {
  name: "Алтайский край",
  id: "RU-ALT",
  value: 1144.9,

}, {
  name: "Свердловская область",
  id: "RU-SVE",
  value: 793.4,

}, {
  name: "Вологодская область",
  id: "RU-VLG",
  value: 579.9,

}, {
  name: "Республика Хакасия",
  id: "RU-KK",
  value: 128.9,

}, {
  name: "Московская область",
  id: "RU-MOS",
  value: 711.4,

}, {
  name: "Самарская область",
  id: "RU-SAM",
  value: 452.1,

}, {
  name: "Нижегородская область",
  id: "RU-NIZ",
  value: 637.9,

}, {
  name: "Новгородская область",
  id: "RU-NGR",
  value: 63.2,

}, {
  name: "Мурманская область",
  id: "RU-MUR",
  value: 17.3,

}, {
  name: "Республика Марий Эл",
  id: "RU-ME",
  value: 193.8,

}, {
  name: "Саратовская область",
  id: "RU-SAR",
  value: 752.9,

}, {
  name: "Рязанская область",
  id: "RU-RYA",
  value: 554.8,

}, {
  name: "Красноярский край",
  id: "RU-KYA",
  value: 623.6,

}, {
  name: "Карачаево-Черкесская Республика",
  id: "RU-KC",
  value: 196.7,

}, {
  name: "Курганская область",
  id: "RU-KGN",
  value: 182.5,

}, {
  name: "Пермский край",
  id: "RU-PER",
  value: 547.9,

}, {
  name: "Калининградская область",
  id: "RU-KGD",
  value: 230,

}, {
  name: "Москва",
  id: "RU-MOW",
  value: 10.2,

}, {
  name: "Чеченская Республика",
  id: "RU-CE",
  value: 290.9,

}, {
  name: "Республика Карелия",
  id: "RU-KR",
  value: 58.9,

}, {
  name: "Краснодарский край",
  id: "RU-KDA",
  value: 1510.7,

}, {
  name: "Ярославская область",
  id: "RU-YAR",
  value: 326.8,

}, {
  name: "Республика Адыгея",
  id: "RU-AD",
  value: 119.8,

}, {
  name: "Республика Калмыкия",
  id: "RU-KL",
  value: 49.1,

}, {
  name: "Липецкая область",
  id: "RU-LIP",
  value: 298.6,

}, {
  name: "Республика Ингушетия",
  id: "RU-IN",
  value: 125.8,

}, {
  name: "Смоленская область",
  id: "RU-SMO",
  value: 144.5,

}, {
  name: "Пензенская область",
  id: "RU-PNZ",
  value: 394,

}, {
  name: "Ульяновская область",
  id: "RU-ULY",
  value: 222,

}, {
  name: "Костромская область",
  id: "RU-KOS",
  value: 110.9,

}, {
  name: "Республика Северная Осетия - Алания",
  id: "RU-SE",
  value: 174.8,

}, {
  name: "Владимирская область",
  id: "RU-VLA",
  value: 428.8,

}, {
  name: "Архангельская область",
  id: "RU-ARK",
  value: 136.3,

}, {
  name: "Амурская область",
  id: "RU-AMU",
  value: 141.9,

}, {
  name: "Волгоградская область",
  id: "RU-VGG",
  value: 571.4,

}, {
  name: "Ставропольский край",
  id: "RU-STA",
  value: 496.6,

}, {
  name: "Астраханская область",
  id: "RU-AST",
  value: 178.8,

}, {
  name: "Иркутская область",
  id: "RU-IRK",
  value: 459.9,

}, {
  name: "Кемеровская область",
  id: "RU-KEM",
  value: 289.7,

}, {
  name: "Курская область",
  id: "RU-KRS",
  value: 332.1,

}, {
  name: "Ивановская область",
  id: "RU-IVA",
  value: 150.6,

}, {
  name: "Хабаровский край",
  id: "RU-KHA",
  value: 21.2,

}, {
  name: "Челябинская область",
  id: "RU-CHE",
  value: 396.5,

}, {
  name: "Еврейская автономная область",
  id: "RU-YEV",
  value: 9.6,

}, {
  name: "Орловская область",
  id: "RU-ORL",
  value: 160.9,

}, {
  name: "Республика Бурятия",
  id: "RU-BU",
  value: 100.5,

}, {
  name: "Брянская область",
  id: "RU-BRY",
  value: 280,

}, {
  name: "Тверская область",
  id: "RU-TVE",
  value: 204.7,

}, {
  name: "Тюменская область",
  id: "RU-TYU",
  value: 583.5,

}, {
  name: "Республика Тыва",
  id: "RU-TY",
  value: 65.6,

}, {
  name: "Приморский край",
  id: "RU-PRI",
  value: 122.2,

}, {
  name: "Камчатский край",
  id: "RU-KAM",
  value: 22.6,

}, {
  name: "Тамбовская область",
  id: "RU-TAM",
  value: 188.5,

}, {
  name: "Республика Крым",
  id: "RU-CR",
  value: 197.1,

}, {
  name: "Сахалинская область",
  id: "RU-SAK",
  value: 51.5,

}, {
  name: "Севастополь",
  id: "UA-40",
  value: 2.6,

}, {
  name: "Тульская область",
  id: "RU-TUL",
  value: 196.7,

}, {
  name: "Чукотский автономный округ",
  id: "RU-CHU",
  value: 0,

}, {
  name: "Ханты-Мансийский автономный округ",
  id: "RU-KHM",
  value: 30.1,

}, {
  name: "Ненецкий автономеый округ",
  id: "RU-NEN",
  value: 3.9,

}, {
  name: "Ямало-Ненецкий автономный округ",
  id: "RU-YAN",
  value: 2.5,

}];

// Configure series tooltip
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipHTML = '<div class="c-tooltip"> <div class="c-label">{name}</div> <div class="c-tooltip__bottom"> <div class="c-span large">{value}</div> <div class="c-span unit opa">тыс.т</div> </div> </div>';
polygonTemplate.nonScalingStroke = true;
polygonTemplate.strokeWidth = 0.5;
polygonTemplate.fill = am4core.color("#0D73EE");

// Creating dealer map

var imageSeries = chart.series.push(new am4maps.MapImageSeries());
imageSeries.mapImages.template.propertyFields.longitude = "longitude";
imageSeries.mapImages.template.propertyFields.latitude = "latitude";
imageSeries.mapImages.template.tooltipHTML = '<div class="c-tooltip lg"><img src="images/delaval_blue.svg" loading="lazy" alt="" class="logo-sm"><div class="c-label block">{region}</div><div class="c-label black lg">{Name}</div><div class="c-tooltip__bottom vertical mg-lg"> <div class="c-label margin-bottom-125 delaval">Адрес</div><div class="c-span break-allow">{address}</div> </div><div class="c-tooltip__bottom mg-lg"><div class="c-tooltip__section"><div class="c-label margin-bottom-125 delaval">Телефон</div><div class="c-span break-allow">{phone}</div></div><div class="c-tooltip__section"><div class="c-label margin-bottom-125 delaval">Почта</div><div class="c-span break-allow">{e-mail}</div></div><div class="c-tooltip__section"><div class="c-label margin-bottom-125 delaval">Сайт</div><div class="c-span break-allow">{link}</div></div></div></div>';
imageSeries.mapImages.template.propertyFields.url = "url";
imageSeries.calculateVisualCenter = true;
imageSeries.tooltip.label.interactionsEnabled = true;
imageSeries.tooltip.keepTargetHover = true;

var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
circle.radius = 5;
circle.fill = am4core.color("#fff");
circle.nonScaling = true;


function animateBullet(circle) {
    var animation = circle.animate([{ property: "scale", from: 1 / chart.zoomLevel, to: 5 / chart.zoomLevel }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
    animation.events.on("animationended", function(event){
      animateBullet(event.target.object);
    })
}

var colorSet = new am4core.ColorSet();

imageSeries.data = [
  {
    "Name": "СервисАгро",
    "region": "г. Москва",
    "address": "141607, Московская область, г. Клин, Волоколамское шоссе, д. 32",
    "ceo": "Валерий Карев",
    "phone": 84962498740,
    "e-mail": "ats.karev@mail.ru",
    "link": "www.serviceagro.org",
    "latitude": 56.328754,
    "longitude": 36.684469
  },
  {
    "Name": "Умная ферма",
    "region": "Ивановская область",
    "address": "150510, Ярославская обл, Ярославский муниципальный район, Сельское поселение Кузнечихинское, Кузнечиха (Кузнечихинский с.о.) д, Промышленная ул, дом № 2, офис 2",
    "ceo": "Антон Фёдоров",
    "phone": 89161387847,
    "e-mail": "info@s-farm.ru",
    "link": "www.s-farm.ru",
    "latitude": 57.658022,
    "longitude": 39.811975
  },
  {
    "Name": "Агромолсервис",
    "region": "Архангельская область",
    "address": "160025, г. Вологда, Московское шоссе, 50",
    "ceo": "Сергей Голубь",
    "phone": "89215317431\n88172746305",
    "e-mail": "golub@ams35.ru",
    "link": "www.ams35.ru",
    "latitude": 59.180466,
    "longitude": 39.95592
  },
  {
    "Name": "Галактика-Агро",
    "region": "Ленинградская область",
    "address": "188301 Ленинградская обл., г. Гатчина, ул. 120 Гатчинской дивизии, д. 1",
    "ceo": "Петр Пугачев, Владимир Степанов",
    "phone": "89218876929\n 89214066519",
    "e-mail": "pugachev@molzavod.ru stepanov@molzavod.ru",
    "link": "www.galagro.ru",
    "latitude": 59.568711,
    "longitude": 30.064512
  },
  {
    "Name": "ВулканАгро",
    "region": "Брянская область",
    "address": "248009, г. Калуга, ул.Грабцевское шоссе, д. 73, стр. 1Б, помещение  5, оф 15.",
    "ceo": "Семыкин Александр",
    "phone": 89104270944,
    "e-mail": "dr.semikin@yandex.ru",
    "link": "www.delaval.com",
    "latitude": 54.542543,
    "longitude": 36.319178
  },
  {
    "Name": "Молочный выбор Центр",
    "region": "Курская область",
    "address": "305014, Курская область, г.Курск, проспект  Победы, дом 10, офис 3",
    "ceo": "Кузьмин Максим",
    "phone": "89885231003;\n89882463997; \n89180182300; \n88612006245",
    "e-mail": "m.kyzmin@mv-company.ru  Alexander.Tjupin@mv-company.ru  anastasia.tolstova@mv-company.ru",
    "link": "www.mv-company.ru/",
    "latitude": 51.775387,
    "longitude": 36.176274
  },
  {
    "Name": "Молочный выбор",
    "region": "Краснодарский край",
    "address": "350010, г.Краснодар, ул.Текстильная, 9/2, оф. 11",
    "ceo": "Александр Тюпин",
    "phone": 88612006245,
    "e-mail": "alexander.tjupin@mv-company.ru",
    "link": "www.mv-company.ru",
    "latitude": 45.029123,
    "longitude": 39.063109
  },
  {
    "Name": "Биотон",
    "region": "Воронежская область",
    "address": "352242 Россия, Краснодарский край, Новокубанский р-н, г.Новокубанск, Ул.Нева, 7",
    "ceo": "Сергей Туривненко",
    "phone": 88619532761,
    "e-mail": "bioton.kompany@bio-ton.net",
    "link": "www.bio-ton.net",
    "latitude": 45.123985,
    "longitude": 40.999195
  },
  {
    "Name": "МилкАгро",
    "region": "Пензенская область",
    "address": "390013, г.Рязань, Московское шоссе, д.20, офис 704/2",
    "ceo": "Игнат Русинов",
    "phone": 89805018080,
    "e-mail": "ignat.rusinov@milkagro.ru",
    "link": "www.milkagro.ru",
    "latitude": 54.644511,
    "longitude": 39.663852
  },
  {
    "Name": "ТатЛаваль",
    "region": "Республика Татарстан",
    "address": "420061, Республика Татарстан, г. Казань, ул. Новаторов, д.2В.",
    "ceo": "Ринат Шаймуллин",
    "phone": "88 432 727 238",
    "e-mail": "tatlaval@yandex.ru",
    "link": "www.tatlaval.ru",
    "latitude": 55.803058,
    "longitude": 49.17945
  },
  {
    "Name": "Регион-сельхозпродукт",
    "region": "Чувашская Республика",
    "address": "428000, г. Чебоксары,Чувашская Республика, Дорожный проезд 12, литера «В»",
    "ceo": "Александр Бычков",
    "phone": "88352201155, \n89033459748",
    "e-mail": "rsp21@list.ru",
    "link": "www.bio-ton.net",
    "latitude": 56.111652,
    "longitude": 47.30621
  },
  {
    "Name": "Лидер",
    "region": "Самарская область",
    "address": "443109, г. Самара ул. Литвинова, дом 302, лит. АА1",
    "ceo": "Бурзуев Илдырым",
    "phone": "88469311309, \n88469311567",
    "e-mail": "lideragro01@mail.ru",
    "link": "www.lideragro.su",
    "latitude": 53.228327,
    "longitude": 50.299577
  },
  {
    "Name": "Велес",
    "region": "Республика Башкортостан",
    "address": "450092, Республика Башкортостан, г. Уфа, ул. Авроры, 3/1.",
    "ceo": "Александр Кузнецов",
    "phone": 83472551616,
    "e-mail": "veles-ufa@mail.ru",
    "link": "www.veles-ltd.ru",
    "latitude": 54.695149,
    "longitude": 56.0034
  },
  {
    "Name": "МилкАгроТех",
    "region": "Челябинская область",
    "address": "454084, г. Челябинск,  ул. Каслинская, д. 5",
    "ceo": "Илюшин Евгений",
    "phone": 83433630015,
    "e-mail": "dir@milkagroteh.ru",
    "link": "www.delaval.com",
    "latitude": 55.192793,
    "longitude": 61.392336
  },
  {
    "Name": "Оренмилк",
    "region": "Оренбургская область",
    "address": "460000 г. Оренбург, пер. Станочный, д. 23.",
    "ceo": "Владимир Живанов",
    "phone": "83532307195, \n83532675120",
    "e-mail": "delavalorenburg@mail.ru",
    "link": "www.oren-milk.ru",
    "latitude": 51.802602,
    "longitude": 55.0642
  },
  {
    "Name": "Ополье",
    "region": "Владимирская область",
    "address": "600022, г. Владимир, 2-й Почаевский проезд, 10 Б",
    "ceo": "Михаил Гарелин",
    "phone": "84922495108, \n84922495107\n89157679311 \n89107746873",
    "e-mail": "somov.opolie@mail.ru   gendirector@tc-opolie.ru",
    "link": "www.tc-opolie.ru",
    "latitude": 56.155515,
    "longitude": 40.408585
  },
  {
    "Name": "Евроснаб",
    "region": "Нижегородская область",
    "address": "603037, г. Нижний Новгород, ул. Федосеенко, дом 52А",
    "ceo": "Калямагин Александр",
    "phone": 88005003727,
    "e-mail": "info@evrosnab.ru",
    "link": "www.evrosnab.ru",
    "latitude": 56.337329,
    "longitude": 43.805633
  },
  {
    "Name": "МилкАгроТех",
    "region": "Свердловская область",
    "address": "620137, г. Екатеринбург, ул. Бехтерева, 3, оф. 5",
    "ceo": "Илюшин Евгений",
    "phone": 83433630015,
    "e-mail": "dir@milkagroteh.ru",
    "link": "www.delaval.com",
    "latitude": 56.863304,
    "longitude": 60.650744
  },
  {
    "Name": "МолСиб",
    "region": "Кемеровская область",
    "address": "630054, г.Новосибирск, ул.Депутатская, 1, оф.300",
    "ceo": "Быцко Евгений",
    "phone": 89133796517,
    "e-mail": "delaval@molsib.com",
    "link": "www.molsib.com",
    "latitude": 55.02784,
    "longitude": 82.906815
  },
  {
    "Name": "МилкАгроТех",
    "region": "Курганская область",
    "address": "640007, г.Курган, Омская 140 в",
    "ceo": "Илюшин Евгений",
    "phone": 83433630015,
    "e-mail": "dir@milkagroteh.ru",
    "link": "www.delaval.com",
    "latitude": 55.472341,
    "longitude": 65.375326
  },
  {
    "Name": "Сибирские молочные технологии",
    "region": "Алтайский край",
    "address": "656056, г. Барнаул, пр.Комсомольский, д.80, оф.801",
    "ceo": "Талюкин Алексей",
    "phone": 89039928550,
    "e-mail": "alexey.talyukin@sibmolteh.ru",
    "link": "www.sibmolteh.ru",
    "latitude": 53.34377,
    "longitude": 83.791464
  },
  {
    "Name": "ПримАгроСервис",
    "region": "Чукотский Автономный округ",
    "address": "664007, Иркутская область, г. Иркутск, ул.1-я Красноказачья, 8-А, кв.33",
    "ceo": "",
    "phone": 88002220749,
    "e-mail": "info@agro-home.ru",
    "link": "www.agro-home.ru",
    "latitude": 52.283112,
    "longitude": 104.314251
  },
  {
    "Name": "ДеЛаваль Волго-Вятский регион",
    "region": "Пермский край",
    "address": "АО «ДеЛаваль» Волго-Вятский регион: 420061, Республика Татарстан, г. Казань",
    "ceo": "Исупов Андрей",
    "phone": 89125820353,
    "e-mail": "Andrey.Isupov@delaval.com",
    "link": "www.delaval.com",
    "latitude": 55.796709,
    "longitude": 49.191264
  },
  {
    "Name": "ДеЛаваль Центральный регион",
    "region": "Астраханская область",
    "address": "АО «ДеЛаваль» Центральный регион: 394016, г. Воронеж, ул. 45 Стрелковой дивизии, д. 129, офис 205",
    "ceo": "Юрий Болдин",
    "phone": 79163100853,
    "e-mail": "Yuriy.Boldin@delaval.com",
    "link": "www.delaval.com",
    "latitude": 51.694737,
    "longitude": 39.182272
  },
  {
    "Name": "Робикс",
    "region": "Калининградская область",
    "address": "Калининград г, Аллея Смелых ул, д. 31Г",
    "ceo": "Денис  Суворов",
    "phone": 89062313243,
    "e-mail": "Agro2@atomoto.ru",
    "link": "www.atomoto.ru",
    "latitude": 54.688704,
    "longitude": 20.523875
  }
];

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#3c5bdc");
