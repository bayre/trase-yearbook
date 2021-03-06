
const FAO_TO_ISO2 = {
  1: "AM",
  2: "AF",
  3: "AL",
  4: "DZ",
  6: "AD",
  7: "AO",
  8: "AG",
  9: "AR",
  10: "AU",
  11: "AT",
  12: "BS",
  13: "BH",
  14: "BB",
  16: "BD",
  18: "BT",
  19: "BO",
  20: "BW",
  21: "BR",
  23: "BZ",
  25: "SB",
  26: "BN",
  27: "BG",
  28: "MM",
  29: "BI",
  32: "CM",
  33: "CA",
  35: "CV",
  37: "CF",
  38: "LK",
  39: "TD",
  40: "CL",
  41: "CN",
  44: "CO",
  45: "KM",
  46: "CG",
  47: "CK",
  48: "CR",
  49: "CU",
  50: "CY",
  52: "AZ",
  53: "BJ",
  54: "DK",
  55: "DM",
  56: "DO",
  57: "BY",
  58: "EC",
  59: "EG",
  60: "SV",
  61: "GQ",
  63: "EE",
  64: "FO",
  66: "FJ",
  67: "FI",
  68: "FR",
  72: "DJ",
  73: "GE",
  74: "GA",
  75: "GM",
  79: "DE",
  80: "BA",
  81: "GH",
  83: "KI",
  84: "GR",
  86: "GD",
  89: "GT",
  90: "GN",
  91: "GY",
  93: "HT",
  95: "HN",
  97: "HU",
  98: "HR",
  99: "IS",
  100: "IN",
  101: "ID",
  102: "IR",
  103: "IQ",
  104: "IE",
  105: "IL",
  106: "IT",
  107: "CI",
  108: "KZ",
  109: "JM",
  110: "JP",
  112: "JO",
  113: "KG",
  114: "KE",
  115: "KH",
  116: "KP",
  117: "KR",
  118: "KW",
  119: "LV",
  120: "LA",
  121: "LB",
  122: "LS",
  123: "LR",
  124: "LY",
  126: "LT",
  127: "MH",
  129: "MG",
  130: "MW",
  131: "MY",
  132: "MV",
  133: "ML",
  134: "MT",
  136: "MR",
  137: "MU",
  138: "MX",
  140: "MC",
  141: "MN",
  143: "MA",
  144: "MZ",
  145: "FM",
  146: "MD",
  147: "NA",
  148: "NR",
  149: "NP",
  150: "NL",
  154: "MK",
  155: "VU",
  156: "NZ",
  157: "NI",
  158: "NE",
  159: "NG",
  160: "NU",
  162: "NO",
  165: "PK",
  166: "PA",
  167: "CZ",
  168: "PG",
  169: "PY",
  170: "PE",
  171: "PH",
  173: "PL",
  174: "PT",
  175: "GW",
  176: "TL",
  178: "ER",
  179: "QA",
  180: "PW",
  181: "ZW",
  183: "RO",
  184: "RW",
  185: "RU",
  188: "KN",
  189: "LC",
  191: "VC",
  192: "SM",
  193: "ST",
  194: "SA",
  195: "SN",
  196: "SC",
  197: "SL",
  198: "SI",
  199: "SK",
  200: "SG",
  201: "SO",
  202: "ZA",
  203: "ES",
  207: "SR",
  208: "TJ",
  209: "SZ",
  210: "SE",
  211: "CH",
  212: "SY",
  213: "TM",
  215: "TZ",
  216: "TH",
  217: "TG",
  218: "TK",
  219: "TO",
  220: "TT",
  221: "OM",
  222: "TN",
  223: "TR",
  225: "AE",
  226: "UG",
  227: "TV",
  229: "GB",
  230: "UA",
  231: "US",
  233: "BF",
  234: "UY",
  235: "UZ",
  236: "VE",
  237: "VN",
  238: "ET",
  244: "WS",
  249: "YE",
  250: "CD",
  251: "ZM",
  255: "BE",
  256: "LU",
  272: "RS",
  273: "ME",
  276: "SD",
  277: "SS"
};

const ISO2_TO_FAO = {
  "AM":1,
  "AF":2,
  "AL":3,
  "DZ":4,
  "AD":6,
  "AO":7,
  "AG":8,
  "AR":9,
  "AU":10,
  "AT":11,
  "BS":12,
  "BH":13,
  "BB":14,
  "BD":16,
  "BT":18,
  "BO":19,
  "BW":20,
  "BR":21,
  "BZ":23,
  "SB":25,
  "BN":26,
  "BG":27,
  "MM":28,
  "BI":29,
  "CM":32,
  "CA":33,
  "CV":35,
  "CF":37,
  "LK":38,
  "TD":39,
  "CL":40,
  "CN":41,
  "CO":44,
  "KM":45,
  "CG":46,
  "CK":47,
  "CR":48,
  "CU":49,
  "CY":50,
  "AZ":52,
  "BJ":53,
  "DK":54,
  "DM":55,
  "DO":56,
  "BY":57,
  "EC":58,
  "EG":59,
  "SV":60,
  "GQ":61,
  "EE":63,
  "FO":64,
  "FJ":66,
  "FI":67,
  "FR":68,
  "DJ":72,
  "GE":73,
  "GA":74,
  "GM":75,
  "DE":79,
  "BA":80,
  "GH":81,
  "KI":83,
  "GR":84,
  "GD":86,
  "GT":89,
  "GN":90,
  "GY":91,
  "HT":93,
  "HN":95,
  "HU":97,
  "HR":98,
  "IS":99,
  "IN":100,
  "ID":101,
  "IR":102,
  "IQ":103,
  "IE":104,
  "IL":105,
  "IT":106,
  "CI":107,
  "KZ":108,
  "JM":109,
  "JP":110,
  "JO":112,
  "KG":113,
  "KE":114,
  "KH":115,
  "KP":116,
  "KR":117,
  "KW":118,
  "LV":119,
  "LA":120,
  "LB":121,
  "LS":122,
  "LR":123,
  "LY":124,
  "LT":126,
  "MH":127,
  "MG":129,
  "MW":130,
  "MY":131,
  "MV":132,
  "ML":133,
  "MT":134,
  "MR":136,
  "MU":137,
  "MX":138,
  "MC":140,
  "MN":141,
  "MA":143,
  "MZ":144,
  "FM":145,
  "MD":146,
  "NA":147,
  "NR":148,
  "NP":149,
  "NL":150,
  "MK":154,
  "VU":155,
  "NZ":156,
  "NI":157,
  "NE":158,
  "NG":159,
  "NU":160,
  "NO":162,
  "PK":165,
  "PA":166,
  "CZ":167,
  "PG":168,
  "PY":169,
  "PE":170,
  "PH":171,
  "PL":173,
  "PT":174,
  "GW":175,
  "TL":176,
  "ER":178,
  "QA":179,
  "PW":180,
  "ZW":181,
  "RO":183,
  "RW":184,
  "RU":185,
  "KN":188,
  "LC":189,
  "VC":191,
  "SM":192,
  "ST":193,
  "SA":194,
  "SN":195,
  "SC":196,
  "SL":197,
  "SI":198,
  "SK":199,
  "SG":200,
  "SO":201,
  "ZA":202,
  "ES":203,
  "SR":207,
  "TJ":208,
  "SZ":209,
  "SE":210,
  "CH":211,
  "SY":212,
  "TM":213,
  "TZ":215,
  "TH":216,
  "TG":217,
  "TK":218,
  "TO":219,
  "TT":220,
  "OM":221,
  "TN":222,
  "TR":223,
  "AE":225,
  "UG":226,
  "TV":227,
  "GB":229,
  "UA":230,
  "US":231,
  "BF":233,
  "UY":234,
  "UZ":235,
  "VE":236,
  "VN":237,
  "ET":238,
  "WS":244,
  "YE":249,
  "CD":250,
  "ZM":251,
  "BE":255,
  "LU":256,
  "RS":272,
  "ME":273,
  "SD":276,
  "SS":277
};

const FAO_TO_COUNTRY = {
  1: "Armenia",
  2: "Afghanistan",
  3: "Albania",
  4: "Algeria",
  6: "Andorra",
  7: "Angola",
  8: "Antigua and Barbuda",
  9: "Argentina",
  10: "Australia",
  11: "Austria",
  12: "Bahamas",
  13: "Bahrain",
  14: "Barbados",
  16: "Bangladesh",
  18: "Bhutan",
  19: "Bolivia",
  20: "Botswana",
  21: "Brazil",
  23: "Belize",
  25: "Solomon Islands",
  26: "Brunei Darussalam",
  27: "Bulgaria",
  28: "Myanmar",
  29: "Burundi",
  32: "Cameroon",
  33: "Canada",
  35: "Cabo Verde",
  37: "Central African Republic",
  38: "Sri Lanka",
  39: "Chad",
  40: "Chile",
  41: "China",
  44: "Colombia",
  45: "Comoros",
  46: "Congo",
  47: "Cook Islands",
  48: "Costa Rica",
  49: "Cuba",
  50: "Cyprus",
  52: "Azerbaijan",
  53: "Benin",
  54: "Denmark",
  55: "Dominica",
  56: "Dominican Republic",
  57: "Belarus",
  58: "Ecuador",
  59: "Egypt",
  60: "El Salvador",
  61: "Equatorial Guinea",
  63: "Estonia",
  64: "Faroe Islands (Associate Member)",
  66: "Fiji",
  67: "Finland",
  68: "France",
  72: "Djibouti",
  73: "Georgia",
  74: "Gabon",
  75: "Gambia",
  79: "Germany",
  80: "Bosnia and Herzegovina",
  81: "Ghana",
  83: "Kiribati",
  84: "Greece",
  86: "Grenada",
  89: "Guatemala",
  90: "Guinea",
  91: "Guyana",
  93: "Haiti",
  95: "Honduras",
  97: "Hungary",
  98: "Croatia",
  99: "Iceland",
  100: "India",
  101: "Indonesia",
  102: "Iran (Islamic Republic of)",
  103: "Iraq",
  104: "Ireland",
  105: "Israel",
  106: "Italy",
  107: "Côte d'Ivoire",
  108: "Kazakhstan",
  109: "Jamaica",
  110: "Japan",
  112: "Jordan",
  113: "Kyrgyzstan",
  114: "Kenya",
  115: "Cambodia",
  116: "Democratic People's Republic of Korea",
  117: "Republic of Korea",
  118: "Kuwait",
  119: "Latvia",
  120: "Lao People's Democratic Republic",
  121: "Lebanon",
  122: "Lesotho",
  123: "Liberia",
  124: "Libya",
  126: "Lithuania",
  127: "Marshall Islands",
  129: "Madagascar",
  130: "Malawi",
  131: "Malaysia",
  132: "Maldives",
  133: "Mali",
  134: "Malta",
  136: "Mauritania",
  137: "Mauritius",
  138: "Mexico",
  140: "Monaco",
  141: "Mongolia",
  143: "Morocco",
  144: "Mozambique",
  145: "Micronesia (Federated States of)",
  146: "Republic of Moldova",
  147: "Namibia",
  148: "Nauru",
  149: "Nepal",
  150: "Netherlands",
  154: "The former Yugoslav Republic of Macedonia",
  155: "Vanuatu",
  156: "New Zealand",
  157: "Nicaragua",
  158: "Niger",
  159: "Nigeria",
  160: "Niue",
  162: "Norway",
  165: "Pakistan",
  166: "Panama",
  167: "Czechia",
  168: "Papua New Guinea",
  169: "Paraguay",
  170: "Peru",
  171: "Philippines",
  173: "Poland",
  174: "Portugal",
  175: "Guinea-Bissau",
  176: "Timor-Leste",
  178: "Eritrea",
  179: "Qatar",
  180: "Palau",
  181: "Zimbabwe",
  183: "Romania",
  184: "Rwanda",
  185: "Russian Federation",
  188: "Saint Kitts and Nevis",
  189: "Saint Lucia",
  191: "Saint Vincent and the Grenadines",
  192: "San Marino",
  193: "Sao Tome and Principe",
  194: "Saudi Arabia",
  195: "Senegal",
  196: "Seychelles",
  197: "Sierra Leone",
  198: "Slovenia",
  199: "Slovakia",
  200: "Singapore",
  201: "Somalia",
  202: "South Africa",
  203: "Spain",
  207: "Suriname",
  208: "Tajikistan",
  209: "Eswatini",
  210: "Sweden",
  211: "Switzerland",
  212: "Syrian Arab Republic",
  213: "Turkmenistan",
  215: "United Republic of Tanzania",
  216: "Thailand",
  217: "Togo",
  218: "Tokelau (Associate Member)",
  219: "Tonga",
  220: "Trinidad and Tobago",
  221: "Oman",
  222: "Tunisia",
  223: "Turkey",
  225: "United Arab Emirates",
  226: "Uganda",
  227: "Tuvalu",
  229: "United Kingdom",
  230: "Ukraine",
  231: "USA",
  233: "Burkina Faso",
  234: "Uruguay",
  235: "Uzbekistan",
  236: "Venezuela (Bolivarian Republic of)",
  237: "Viet Nam",
  238: "Ethiopia",
  244: "Samoa",
  249: "Yemen",
  250: "Democratic Republic of the Congo",
  251: "Zambia",
  255: "Belgium",
  256: "Luxembourg",
  272: "Serbia",
  273: "Montenegro",
  276: "Sudan",
  277: "South Sudan"
};
