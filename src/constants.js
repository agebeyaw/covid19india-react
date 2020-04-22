export const MAP_TYPES = {
  COUNTRY: 'country',
  STATE: 'state',
};

export const MAPS_DIR = process.env.REACT_APP_API_URL + '/api/maps';

export const MAP_META = {
  Ethiopia: {
    name: 'Ethiopia',
    geoDataFile: `${MAPS_DIR}/ethiopia.json`,
    mapType: MAP_TYPES.COUNTRY,
    graphObjectName: 'ethiopia',
  },
  'Addis Abeba': {
    name: 'Addis Abeba',
    geoDataFile: `${MAPS_DIR}/addis_abeba.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'addis_abeba_zones',
  },
  'Beneshangul Gumuz': {
    name: 'Addis Abeba',
    geoDataFile: `${MAPS_DIR}/beneshangul_gumuz.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'beneshangul_gumuz_zones',
  },
  Amhara: {
    name: 'Amhara',
    geoDataFile: `${MAPS_DIR}/amhara.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'amhara_zones',
  },
  Afar: {
    name: 'Afar',
    geoDataFile: `${MAPS_DIR}/afar.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'afar_zones',
  },
  Tigray: {
    name: 'Tigray',
    geoDataFile: `${MAPS_DIR}/tigray.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'tigray_zones',
  },
  Oromia: {
    name: 'Afar',
    geoDataFile: `${MAPS_DIR}/oromia.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'oromia_zones',
  },
  Hareri: {
    name: 'Hareri',
    geoDataFile: `${MAPS_DIR}/hareri.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'hareri_zones',
  },
  Gambela: {
    name: 'Hareri',
    geoDataFile: `${MAPS_DIR}/gambela.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'gambela_zones',
  },
  'Dire Dawa': {
    name: 'Dire Dawa',
    geoDataFile: `${MAPS_DIR}/dire_dawa.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'dire_dawa_zones',
  },
  SNNP: {
    name: 'SNNP',
    geoDataFile: `${MAPS_DIR}/snnp.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'snnp_zones',
  },
  Somali: {
    name: 'Somali',
    geoDataFile: `${MAPS_DIR}/somali.json`,
    mapType: MAP_TYPES.STATE,
    graphObjectName: 'somali_zones',
  },
};

export const STATE_CODES = {
  AA: 'Addis Abeba',
  AF: 'Afar',
  AM: 'Amhara',
  BG: 'Beneshangul Gumuz',
  DD: 'Dire Dawa',
  GA: 'Gambela',
  HR: 'Hareri',
  OR: 'Oromia',
  SO: 'Somali',
  SN: 'SNNP',
  TG: 'Tigray',
};

const reverseStateCodes = {};
Object.keys(STATE_CODES).map((key, index) => {
  reverseStateCodes[STATE_CODES[key]] = key;
  return null;
});
export const STATE_CODES_REVERSE = reverseStateCodes;

const stateCodes = [];
Object.keys(STATE_CODES).map((key, index) => {
  stateCodes.push({code: key, name: STATE_CODES[key]});
  return null;
});
export const STATE_CODES_ARRAY = stateCodes;

export const DISTRICTS_ARRAY = [
  {
    district: 'Asosa',
    othernamesspellings: '',
    state: 'Beneshangul Gumuz',
  },
  {
    district: 'Tongo Sw',
    othernamesspellings: '',
    state: 'Beneshangul Gumuz',
  },
  {
    district: 'Metekel',
    othernamesspellings: '',
    state: 'Beneshangul Gumuz',
  },
  {
    district: 'Kamashi',
    othernamesspellings: '',
    state: 'Beneshangul Gumuz',
  },
  {
    district: 'Zone 2',
    othernamesspellings: '',
    state: 'Gambela',
  },
  {
    district: 'Zone 3',
    othernamesspellings: '',
    state: 'Gambela',
  },
  {
    district: 'Zone 1',
    othernamesspellings: '',
    state: 'Gambela',
  },
  {
    district: 'Godere',
    othernamesspellings: '',
    state: 'Gambela',
  },
  {
    district: 'Harar',
    othernamesspellings: '',
    state: 'Hareri',
  },
  {
    district: 'Degehabur',
    othernamesspellings: '',
    state: 'Somali',
  },
  {
    district: 'Jijiga',
    othernamesspellings: '',
    state: 'Somali',
  },
  {
    district: 'Shinile',
    othernamesspellings: '',
    state: 'Somali',
  },
  {
    district: 'Liben',
    othernamesspellings: '',
    state: 'Somali',
  },
  {
    district: 'Warder',
    othernamesspellings: '',
    state: 'Somali',
  },
  {
    district: 'Korahe',
    othernamesspellings: '',
    state: 'Somali',
  },
  {
    district: 'Fik',
    othernamesspellings: '',
    state: 'Somali',
  },
  {
    district: 'Afder',
    othernamesspellings: '',
    state: 'Somali',
  },
  {
    district: 'Gode',
    othernamesspellings: '',
    state: 'Somali',
  },
  {
    district: 'Yem',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'Alaba',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'Basketo',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'Amaro',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'Dirashe',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'Burji',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'Konso',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'South Omo',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'Sheka',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'Dawro',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'Keffa',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'Kembata Tembaro',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'Welayita',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'Gamo Gofa',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'Gedeo',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'Gurage',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'Sidama',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'Selti',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'Bench Maji',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'Hadiya',
    othernamesspellings: '',
    state: 'SNNP',
  },
  {
    district: 'Dire Dawa',
    othernamesspellings: '',
    state: 'Dire Dawa',
  },
  {
    district: 'Mekelle',
    othernamesspellings: '',
    state: 'Tigray',
  },
  {
    district: 'East Tigray',
    othernamesspellings: '',
    state: 'Tigray',
  },
  {
    district: 'South Tigray',
    othernamesspellings: '',
    state: 'Tigray',
  },
  {
    district: 'Central Tigray',
    othernamesspellings: '',
    state: 'Tigray',
  },
  {
    district: 'West Tigray',
    othernamesspellings: '',
    state: 'Tigray',
  },
  {
    district: 'North West Tigray',
    othernamesspellings: '',
    state: 'Tigray',
  },
  {
    district: 'West Hararghe',
    othernamesspellings: '',
    state: 'Oromia',
  },
  {
    district: 'Arsi',
    othernamesspellings: '',
    state: 'Oromia',
  },
  {
    district: 'Borena',
    othernamesspellings: '',
    state: 'Oromia',
  },
  {
    district: 'Bale',
    othernamesspellings: '',
    state: 'Oromia',
  },
  {
    district: 'Guji',
    othernamesspellings: '',
    state: 'Oromia',
  },
  {
    district: 'South West Shewa',
    othernamesspellings: '',
    state: 'Oromia',
  },
  {
    district: 'East Shewa',
    othernamesspellings: '',
    state: 'Oromia',
  },
  {
    district: 'East Hararghe',
    othernamesspellings: '',
    state: 'Oromia',
  },
  {
    district: 'Jimma',
    othernamesspellings: '',
    state: 'Oromia',
  },
  {
    district: 'West Welega',
    othernamesspellings: '',
    state: 'Oromia',
  },
  {
    district: 'Illubabor',
    othernamesspellings: '',
    state: 'Oromia',
  },
  {
    district: 'North Shewa',
    othernamesspellings: '',
    state: 'Oromia',
  },
  {
    district: 'West Shewa',
    othernamesspellings: '',
    state: 'Oromia',
  },
  {
    district: 'East Welega',
    othernamesspellings: '',
    state: 'Oromia',
  },
  {
    district: 'Oromia-Finfinne',
    othernamesspellings: '',
    state: 'Oromia',
  },
  {
    district: 'Awsi Rasu',
    othernamesspellings: '',
    state: 'Afar',
  },
  {
    district: 'Kilbati Rasu',
    othernamesspellings: '',
    state: 'Afar',
  },
  {
    district: 'Gabi Rasu',
    othernamesspellings: '',
    state: 'Afar',
  },
  {
    district: 'Fanti Rasu',
    othernamesspellings: '',
    state: 'Afar',
  },
  {
    district: 'Harri Rasu',
    othernamesspellings: '',
    state: 'Afar',
  },
  {
    district: 'Zone 1',
    othernamesspellings: '',
    state: 'Addis Abeba',
  },
  {
    district: 'Zone 2',
    othernamesspellings: '',
    state: 'Addis Abeba',
  },
  {
    district: 'Zone 3',
    othernamesspellings: '',
    state: 'Addis Abeba',
  },
  {
    district: 'Zone 4',
    othernamesspellings: '',
    state: 'Addis Abeba',
  },
  {
    district: 'Zone 5',
    othernamesspellings: '',
    state: 'Addis Abeba',
  },
  {
    district: 'Zone 6',
    othernamesspellings: '',
    state: 'Addis Abeba',
  },
  {
    district: 'Addis Abeba',
    othernamesspellings: '',
    state: 'Addis Abeba',
  },
  {
    district: 'Bahir Dar',
    othernamesspellings: '',
    state: 'Amhara',
  },
  {
    district: 'East Gojam',
    othernamesspellings: '',
    state: 'Amhara',
  },
  {
    district: 'North Shewa',
    othernamesspellings: '',
    state: 'Amhara',
  },
  {
    district: 'West Gojjam',
    othernamesspellings: '',
    state: 'Amhara',
  },
  {
    district: 'Oromiya',
    othernamesspellings: '',
    state: 'Amhara',
  },
  {
    district: 'South Gonder',
    othernamesspellings: '',
    state: 'Amhara',
  },
  {
    district: 'Wag Hemra',
    othernamesspellings: '',
    state: 'Amhara',
  },
  {
    district: 'North Gonder',
    othernamesspellings: '',
    state: 'Amhara',
  },
  {
    district: 'Agew Awi',
    othernamesspellings: '',
    state: 'Amhara',
  },
  {
    district: 'North Wello',
    othernamesspellings: '',
    state: 'Amhara',
  },
  {
    district: 'South Wello',
    othernamesspellings: '',
    state: 'Amhara',
  },
];
