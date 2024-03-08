import { enUS } from 'date-fns/locale';

const skSK = {
  ...enUS,
  formatDistance: {
    lessThanXSeconds: {
      one: 'menej než sekunda',
      other: 'menej než {{count}} sekundy',
    },
    xSeconds: {
      one: '1 sekunda',
      other: '{{count}} sekundy',
    },
    halfAMinute: 'pol minúty',
    lessThanXMinutes: {
      one: 'menej než minúta',
      other: 'menej než {{count}} minúty',
    },
    xMinutes: {
      one: '1 minúta',
      other: '{{count}} minúty',
    },
    aboutXHours: {
      one: 'približne 1 hodina',
      other: 'približne {{count}} hodiny',
    },
    xHours: {
      one: '1 hodina',
      other: '{{count}} hodiny',
    },
    xDays: {
      one: '1 deň',
      other: '{{count}} dni',
    },
    aboutXWeeks: {
      one: 'približne 1 týždeň',
      other: 'približne {{count}} týždne',
    },
    xWeeks: {
      one: '1 týždeň',
      other: '{{count}} týždne',
    },
    aboutXMonths: {
      one: 'približne 1 mesiac',
      other: 'približne {{count}} mesiace',
    },
    xMonths: {
      one: '1 mesiac',
      other: '{{count}} mesiace',
    },
    aboutXYears: {
      one: 'približne 1 rok',
      other: 'približne {{count}} roky',
    },
    xYears: {
      one: '1 rok',
      other: '{{count}} roky',
    },
    overXYears: {
      one: 'viac než 1 rok',
      other: 'viac než {{count}} roky',
    },
    almostXYears: {
      one: 'takmer 1 rok',
      other: 'takmer {{count}} roky',
    },
  },
};

export default skSK;
