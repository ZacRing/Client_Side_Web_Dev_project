const questions = [
  {
    question: 'Which sign means Stop?',
    answer: 'stop.webp',
    options: ['stop.webp', 'yield.webp', 'noentry.webp', 'clearway.webp'],
  },
  {
    question: 'Which sign means yield?',
    answer: 'yield.webp',
    options: ['yield.webp', 'stop.webp', 'noentry.webp', 'heightlimit.webp'],
  },
  {
    question: 'Which sign means yield in Irish?',
    answer: 'yieldinirish.webp',
    options: ['yieldinirish.webp', 'stop.webp', 'noentry.webp', 'clearway.webp'],
  },
  {
    question: 'Which sign means no entry?',
    answer: 'noentry.webp',
    options: ['noentry.webp', 'clearway.webp', 'stop.webp', 'pdstreet.webp'],
  },
  {
    question: 'Which sign means clearway?',
    answer: 'clearway.webp',
    options: ['clearway.webp', 'noentry.webp', 'parking.webp', 'pdstreet.webp'],
  },
  {
    question: 'Which sign warns that there is a height limit?',
    answer: 'heightlimit.webp',
    options: ['heightlimit.webp', '50sl.webp', '120sl.webp', 'noentry.webp'],
  },
  {
    question: 'Which sign marks the start of a pedestrianised street?',
    answer: 'pdstreet.webp',
    options: ['pdstreet.webp', 'noentry.webp', 'clearway.webp', 'accesableparking.webp'],
  },

  {
    question: 'Which sign shows a 50 km/h speed limit?',
    answer: '50sl.webp',
    options: ['50sl.webp', '120sl.webp', 'ruralsl.webp', 'heightlimit.webp'],
  },
  {
    question: 'Which sign shows the 120 km/h speed limit?',
    answer: '120sl.webp',
    options: ['120sl.webp', '50sl.webp', 'ruralsl.webp', 'speedcameraahead.webp'],
  },
  {
    question: 'Which sign means rural speed limit applies?',
    answer: 'ruralsl.webp',
    options: ['ruralsl.webp', '50sl.webp', '120sl.webp', 'speedcameraahead.webp'],
  },
  {
    question: 'Which sign warns that there is a speed camera ahead?',
    answer: 'speedcameraahead.webp',
    options: ['speedcameraahead.webp', 'ruralsl.webp', '120sl.webp', '50sl.webp'],
  },

  {
    question: 'Which sign shows a parking area?',
    answer: 'parking.webp',
    options: ['parking.webp', 'accesableparking.webp', 'leftturn.webp', 'clearway.webp'],
  },
  {
    question: 'Which sign shows parking for disabled drivers?',
    answer: 'accesableparking.webp',
    options: ['accesableparking.webp', 'parking.webp', 'pdstreet.webp', 'leftturn.webp'],
  },
  {
    question: 'Which sign means left turn?',
    answer: 'leftturn.webp',
    options: ['leftturn.webp', 'parking.webp', 'accesableparking.webp', 'mergeright.webp'],
  },

  {
    question: 'Which sign warns that deer may cross the road?',
    answer: 'deer.webp',
    options: ['deer.webp', 'school.webp', 'twowaytraffic.webp', 'roadworksahead.webp'],
  },
  {
    question: 'Which sign warns of a school ahead?',
    answer: 'school.webp',
    options: ['school.webp', 'deer.webp', 'roadworksahead.webp', 'twowaytraffic.webp'],
  },

  {
    question: 'Which means road works ahead?',
    answer: 'roadworksahead.webp',
    options: ['roadworksahead.webp', 'obstructionbetweenlanessvg.webp', 'mergeright.webp', 'twowaytraffic.webp'],
  },
  {
    question: 'Which sign means two way traffic?',
    answer: 'twowaytraffic.webp',
    options: ['twowaytraffic.webp', 'mergeright.webp', 'obstructionbetweenlanessvg.webp', 'roadworksahead.webp'],
  },
  {
    question: 'Which sign tells you to merge into the right hand lane?',
    answer: 'mergeright.webp',
    options: ['mergeright.webp', 'twowaytraffic.webp', 'obstructionbetweenlanessvg.webp', 'roadworksahead.webp'],
  },
  {
    question: 'Which sign tells of an obstruction between lanes?',
    answer: 'obstructionbetweenlanessvg.webp',
    options: ['obstructionbetweenlanessvg.webp', 'mergeright.webp', 'twowaytraffic.webp', 'roadworksahead.webp'],
  },
];

export default questions;