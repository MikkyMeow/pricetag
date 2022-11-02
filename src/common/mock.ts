import { currenciesToArray } from "./helpers";

export const mockObj = {
  disclaimer: "Usage subject to terms: https://openexchangerates.org/terms",
  license: "https://openexchangerates.org/license",
  timestamp: 1667386800,
  base: "USD",
  rates: {
    AED: 3.673015,
    AFN: 88.915858,
    ALL: 119.407356,
    AMD: 404.287877,
    ANG: 1.81068,
    AOA: 488.02985,
    ARS: 157.289785,
    AUD: 1.55691,
    AWG: 1.8025,
    AZN: 1.7,
    BAM: 1.977984,
    BBD: 2,
    BDT: 101.583929,
    BGN: 1.975465,
    BHD: 0.37709,
    BIF: 2077.827368,
    BMD: 1,
    BND: 1.416869,
    BOB: 6.908121,
    BRL: 5.143916,
    BSD: 1,
    BTC: 0.000049005291,
    BTN: 83.016275,
    BWP: 13.431634,
    BYN: 2.536913,
    BZD: 2.025182,
    CAD: 1.360388,
    CDF: 2048.006308,
    CHF: 0.997223,
    CLF: 0.034191,
    CLP: 943.44,
    CNH: 7.297962,
    CNY: 7.2809,
    COP: 4955.301304,
    CRC: 618.062148,
    CUC: 1,
    CUP: 25.75,
    CVE: 111.9,
    CZK: 24.72693,
    DJF: 178.863263,
    DKK: 7.51784,
    DOP: 54.313317,
    DZD: 140.38244,
    EGP: 24.250625,
    ERN: 15,
    ETB: 53.618728,
    EUR: 1.009938,
    FJD: 2.2858,
    FKP: 0.868991,
    GBP: 0.868991,
    GEL: 2.75,
    GGP: 0.868991,
    GHS: 14.065635,
    GIP: 0.868991,
    GMD: 58.55,
    GNF: 8657.855155,
    GTQ: 7.856695,
    GYD: 209.160801,
    HKD: 7.85005,
    HNL: 24.836166,
    HRK: 7.6085,
    HTG: 128.600292,
    HUF: 411.774704,
    IDR: 15641.511268,
    ILS: 3.542382,
    IMP: 0.868991,
    INR: 82.740254,
    IQD: 1466.343974,
    IRR: 42350,
    ISK: 145.14,
    JEP: 0.868991,
    JMD: 154.058444,
    JOD: 0.709,
    JPY: 146.85840909,
    KES: 121.5,
    KGS: 83.373202,
    KHR: 4160.385719,
    KMF: 498.375289,
    KPW: 900,
    KRW: 1413.92611,
    KWD: 0.309783,
    KYD: 0.837176,
    KZT: 464.72517,
    LAK: 17435.651214,
    LBP: 1518.979382,
    LKR: 366.907921,
    LRD: 153.69999,
    LSL: 18.210044,
    LYD: 5.020429,
    MAD: 10.971683,
    MDL: 19.275337,
    MGA: 4297.578788,
    MKD: 62.211293,
    MMK: 2109.531366,
    MNT: 3380.442581,
    MOP: 8.123202,
    MRU: 37.950411,
    MUR: 44.295166,
    MVR: 15.42,
    MWK: 1031.215712,
    MXN: 19.700649,
    MYR: 4.738,
    MZN: 63.900001,
    NAD: 18.27,
    NGN: 438.52,
    NIO: 36.164039,
    NOK: 10.339701,
    NPR: 132.825674,
    NZD: 1.698762,
    OMR: 0.384981,
    PAB: 1,
    PEN: 3.990493,
    PGK: 3.54015,
    PHP: 58.340497,
    PKR: 221.784801,
    PLN: 4.747704,
    PYG: 7298.912497,
    QAR: 3.641,
    RON: 4.9614,
    RSD: 118.45,
    RUB: 61.575005,
    RWF: 1072.521183,
    SAR: 3.757939,
    SBD: 8.203799,
    SCR: 13.61988,
    SDG: 573.5,
    SEK: 11.004374,
    SGD: 1.41159,
    SHP: 0.868991,
    SLL: 17335,
    SOS: 571.197148,
    SRD: 29.2975,
    SSP: 130.26,
    STD: 22900.590504,
    STN: 24.9,
    SVC: 8.790453,
    SYP: 2512.53,
    SZL: 18.206412,
    THB: 37.57,
    TJS: 10.132997,
    TMT: 3.5,
    TND: 3.227,
    TOP: 2.41595,
    TRY: 18.616774,
    TTD: 6.809871,
    TWD: 32.178033,
    TZS: 2332,
    UAH: 37.105279,
    UGX: 3803.698179,
    USD: 1,
    UYU: 40.623416,
    UZS: 11182.079683,
    VES: 8.56365,
    VND: 24844.726631,
    VUV: 124.185446,
    WST: 2.826144,
    XAF: 662.476069,
    XAG: 0.05076154,
    XAU: 0.00060411,
    XCD: 2.70255,
    XDR: 0.711778,
    XOF: 662.476069,
    XPD: 0.00052452,
    XPF: 120.517692,
    XPT: 0.00105055,
    YER: 250.249992,
    ZAR: 18.157,
    ZMW: 16.246764,
    ZWL: 322,
  },
};

export const currenciesData = {
  AED: "United Arab Emirates Dirham",
  AFN: "Afghan Afghani",
  ALL: "Albanian Lek",
  AMD: "Armenian Dram",
  ANG: "Netherlands Antillean Guilder",
  AOA: "Angolan Kwanza",
  ARS: "Argentine Peso",
  AUD: "Australian Dollar",
  AWG: "Aruban Florin",
  AZN: "Azerbaijani Manat",
  BAM: "Bosnia-Herzegovina Convertible Mark",
  BBD: "Barbadian Dollar",
  BDT: "Bangladeshi Taka",
  BGN: "Bulgarian Lev",
  BHD: "Bahraini Dinar",
  BIF: "Burundian Franc",
  BMD: "Bermudan Dollar",
  BND: "Brunei Dollar",
  BOB: "Bolivian Boliviano",
  BRL: "Brazilian Real",
  BSD: "Bahamian Dollar",
  BTC: "Bitcoin",
  BTN: "Bhutanese Ngultrum",
  BWP: "Botswanan Pula",
  BYN: "Belarusian Ruble",
  BZD: "Belize Dollar",
  CAD: "Canadian Dollar",
  CDF: "Congolese Franc",
  CHF: "Swiss Franc",
  CLF: "Chilean Unit of Account (UF)",
  CLP: "Chilean Peso",
  CNH: "Chinese Yuan (Offshore)",
  CNY: "Chinese Yuan",
  COP: "Colombian Peso",
  CRC: "Costa Rican Colón",
  CUC: "Cuban Convertible Peso",
  CUP: "Cuban Peso",
  CVE: "Cape Verdean Escudo",
  CZK: "Czech Republic Koruna",
  DJF: "Djiboutian Franc",
  DKK: "Danish Krone",
  DOP: "Dominican Peso",
  DZD: "Algerian Dinar",
  EGP: "Egyptian Pound",
  ERN: "Eritrean Nakfa",
  ETB: "Ethiopian Birr",
  EUR: "Euro",
  FJD: "Fijian Dollar",
  FKP: "Falkland Islands Pound",
  GBP: "British Pound Sterling",
  GEL: "Georgian Lari",
  GGP: "Guernsey Pound",
  GHS: "Ghanaian Cedi",
  GIP: "Gibraltar Pound",
  GMD: "Gambian Dalasi",
  GNF: "Guinean Franc",
  GTQ: "Guatemalan Quetzal",
  GYD: "Guyanaese Dollar",
  HKD: "Hong Kong Dollar",
  HNL: "Honduran Lempira",
  HRK: "Croatian Kuna",
  HTG: "Haitian Gourde",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Sheqel",
  IMP: "Manx pound",
  INR: "Indian Rupee",
  IQD: "Iraqi Dinar",
  IRR: "Iranian Rial",
  ISK: "Icelandic Króna",
  JEP: "Jersey Pound",
  JMD: "Jamaican Dollar",
  JOD: "Jordanian Dinar",
  JPY: "Japanese Yen",
  KES: "Kenyan Shilling",
  KGS: "Kyrgystani Som",
  KHR: "Cambodian Riel",
  KMF: "Comorian Franc",
  KPW: "North Korean Won",
  KRW: "South Korean Won",
  KWD: "Kuwaiti Dinar",
  KYD: "Cayman Islands Dollar",
  KZT: "Kazakhstani Tenge",
  LAK: "Laotian Kip",
  LBP: "Lebanese Pound",
  LKR: "Sri Lankan Rupee",
  LRD: "Liberian Dollar",
  LSL: "Lesotho Loti",
  LYD: "Libyan Dinar",
  MAD: "Moroccan Dirham",
  MDL: "Moldovan Leu",
  MGA: "Malagasy Ariary",
  MKD: "Macedonian Denar",
  MMK: "Myanma Kyat",
  MNT: "Mongolian Tugrik",
  MOP: "Macanese Pataca",
  MRU: "Mauritanian Ouguiya",
  MUR: "Mauritian Rupee",
  MVR: "Maldivian Rufiyaa",
  MWK: "Malawian Kwacha",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  MZN: "Mozambican Metical",
  NAD: "Namibian Dollar",
  NGN: "Nigerian Naira",
  NIO: "Nicaraguan Córdoba",
  NOK: "Norwegian Krone",
  NPR: "Nepalese Rupee",
  NZD: "New Zealand Dollar",
  OMR: "Omani Rial",
  PAB: "Panamanian Balboa",
  PEN: "Peruvian Nuevo Sol",
  PGK: "Papua New Guinean Kina",
  PHP: "Philippine Peso",
  PKR: "Pakistani Rupee",
  PLN: "Polish Zloty",
  PYG: "Paraguayan Guarani",
  QAR: "Qatari Rial",
  RON: "Romanian Leu",
  RSD: "Serbian Dinar",
  RUB: "Russian Ruble",
  RWF: "Rwandan Franc",
  SAR: "Saudi Riyal",
  SBD: "Solomon Islands Dollar",
  SCR: "Seychellois Rupee",
  SDG: "Sudanese Pound",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  SHP: "Saint Helena Pound",
  SLL: "Sierra Leonean Leone",
  SOS: "Somali Shilling",
  SRD: "Surinamese Dollar",
  SSP: "South Sudanese Pound",
  STD: "São Tomé and Príncipe Dobra (pre-2018)",
  STN: "São Tomé and Príncipe Dobra",
  SVC: "Salvadoran Colón",
  SYP: "Syrian Pound",
  SZL: "Swazi Lilangeni",
  THB: "Thai Baht",
  TJS: "Tajikistani Somoni",
  TMT: "Turkmenistani Manat",
  TND: "Tunisian Dinar",
  TOP: "Tongan Pa'anga",
  TRY: "Turkish Lira",
  TTD: "Trinidad and Tobago Dollar",
  TWD: "New Taiwan Dollar",
  TZS: "Tanzanian Shilling",
  UAH: "Ukrainian Hryvnia",
  UGX: "Ugandan Shilling",
  USD: "United States Dollar",
  UYU: "Uruguayan Peso",
  UZS: "Uzbekistan Som",
  VEF: "Venezuelan Bolívar Fuerte (Old)",
  VES: "Venezuelan Bolívar Soberano",
  VND: "Vietnamese Dong",
  VUV: "Vanuatu Vatu",
  WST: "Samoan Tala",
  XAF: "CFA Franc BEAC",
  XAG: "Silver Ounce",
  XAU: "Gold Ounce",
  XCD: "East Caribbean Dollar",
  XDR: "Special Drawing Rights",
  XOF: "CFA Franc BCEAO",
  XPD: "Palladium Ounce",
  XPF: "CFP Franc",
  XPT: "Platinum Ounce",
  YER: "Yemeni Rial",
  ZAR: "South African Rand",
  ZMW: "Zambian Kwacha",
  ZWL: "Zimbabwean Dollar",
};

export const currencies = currenciesToArray(currenciesData);
