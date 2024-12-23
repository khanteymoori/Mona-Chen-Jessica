/******************** 
 * Experiment1 *
 ********************/

import { core, data, util, visual, hardware, sound  } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;




// store info about the experiment session:
let expName = 'Experiment1';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);

flowScheduler.add(WillkommenRoutineBegin());
flowScheduler.add(WillkommenRoutineEachFrame());
flowScheduler.add(WillkommenRoutineEnd());

flowScheduler.add(HinweisRoutineBegin());
flowScheduler.add(HinweisRoutineEachFrame());
flowScheduler.add(HinweisRoutineEnd());
flowScheduler.add(Informed_consentRoutineBegin());
flowScheduler.add(Informed_consentRoutineEachFrame());
flowScheduler.add(Informed_consentRoutineEnd());
//flowScheduler.add(Biografische_AnamneseRoutineBegin());
//flowScheduler.add(Biografische_AnamneseRoutineEachFrame());
//flowScheduler.add(Biografische_AnamneseRoutineEnd());
flowScheduler.add(VorgehenRoutineBegin());
flowScheduler.add(VorgehenRoutineEachFrame());
flowScheduler.add(VorgehenRoutineEnd());
flowScheduler.add(FragebogenRoutineBegin());
flowScheduler.add(FragebogenRoutineEachFrame());
flowScheduler.add(FragebogenRoutineEnd());
flowScheduler.add(Item_1RoutineBegin());
flowScheduler.add(Item_1RoutineEachFrame());
flowScheduler.add(Item_1RoutineEnd());
flowScheduler.add(Item_2RoutineBegin());
flowScheduler.add(Item_2RoutineEachFrame());
flowScheduler.add(Item_2RoutineEnd());
flowScheduler.add(Item_3RoutineBegin());
flowScheduler.add(Item_3RoutineEachFrame());
flowScheduler.add(Item_3RoutineEnd());
flowScheduler.add(Item_4RoutineBegin());
flowScheduler.add(Item_4RoutineEachFrame());
flowScheduler.add(Item_4RoutineEnd());
flowScheduler.add(item_5RoutineBegin());
flowScheduler.add(item_5RoutineEachFrame());
flowScheduler.add(item_5RoutineEnd());
flowScheduler.add(item_6RoutineBegin());
flowScheduler.add(item_6RoutineEachFrame());
flowScheduler.add(item_6RoutineEnd());
flowScheduler.add(item_7RoutineBegin());
flowScheduler.add(item_7RoutineEachFrame());
flowScheduler.add(item_7RoutineEnd());
flowScheduler.add(item_8RoutineBegin());
flowScheduler.add(item_8RoutineEachFrame());
flowScheduler.add(item_8RoutineEnd());
flowScheduler.add(Item_9RoutineBegin());
flowScheduler.add(Item_9RoutineEachFrame());
flowScheduler.add(Item_9RoutineEnd());
flowScheduler.add(Item_10RoutineBegin());
flowScheduler.add(Item_10RoutineEachFrame());
flowScheduler.add(Item_10RoutineEnd());
flowScheduler.add(Item_11RoutineBegin());
flowScheduler.add(Item_11RoutineEachFrame());
flowScheduler.add(Item_11RoutineEnd());
flowScheduler.add(Item_12RoutineBegin());
flowScheduler.add(Item_12RoutineEachFrame());
flowScheduler.add(Item_12RoutineEnd());
flowScheduler.add(Item_13RoutineBegin());
flowScheduler.add(Item_13RoutineEachFrame());
flowScheduler.add(Item_13RoutineEnd());
flowScheduler.add(Item_14RoutineBegin());
flowScheduler.add(Item_14RoutineEachFrame());
flowScheduler.add(Item_14RoutineEnd());
flowScheduler.add(Item_15RoutineBegin());
flowScheduler.add(Item_15RoutineEachFrame());
flowScheduler.add(Item_15RoutineEnd());
flowScheduler.add(Item_16RoutineBegin());
flowScheduler.add(Item_16RoutineEachFrame());
flowScheduler.add(Item_16RoutineEnd());
flowScheduler.add(Item_17RoutineBegin());
flowScheduler.add(Item_17RoutineEachFrame());
flowScheduler.add(Item_17RoutineEnd());
flowScheduler.add(Item_18RoutineBegin());
flowScheduler.add(Item_18RoutineEachFrame());
flowScheduler.add(Item_18RoutineEnd());
flowScheduler.add(Item_19RoutineBegin());
flowScheduler.add(Item_19RoutineEachFrame());
flowScheduler.add(Item_19RoutineEnd());
flowScheduler.add(Item_20RoutineBegin());
flowScheduler.add(Item_20RoutineEachFrame());
flowScheduler.add(Item_20RoutineEnd());
flowScheduler.add(Item_21RoutineBegin());
flowScheduler.add(Item_21RoutineEachFrame());
flowScheduler.add(Item_21RoutineEnd());

flowScheduler.add(BlöckeRoutineBegin());
flowScheduler.add(BlöckeRoutineEachFrame());
flowScheduler.add(BlöckeRoutineEnd());
flowScheduler.add(Lernen_2RoutineBegin());
flowScheduler.add(Lernen_2RoutineEachFrame());
flowScheduler.add(Lernen_2RoutineEnd());
flowScheduler.add(BilderklärungRoutineBegin());
flowScheduler.add(BilderklärungRoutineEachFrame());
flowScheduler.add(BilderklärungRoutineEnd());

flowScheduler.add(ExperimentrealRoutineBegin());
flowScheduler.add(ExperimentrealRoutineEachFrame());
flowScheduler.add(ExperimentrealRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);

flowScheduler.add(Ende_Block1RoutineBegin());
flowScheduler.add(Ende_Block1RoutineEachFrame());
flowScheduler.add(Ende_Block1RoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);

flowScheduler.add(Ende_Block_2RoutineBegin());
flowScheduler.add(Ende_Block_2RoutineEachFrame());
flowScheduler.add(Ende_Block_2RoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);


flowScheduler.add(EndeRoutineBegin());
flowScheduler.add(EndeRoutineEachFrame());
flowScheduler.add(EndeRoutineEnd());
flowScheduler.add(ByeRoutineBegin());
flowScheduler.add(ByeRoutineEachFrame());
flowScheduler.add(ByeRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
   
    {'name': 'formItems1.xlsx', 'path': 'stim/formItems1.xlsx'},
    {'name': 'IMG_help.jpeg', 'path': 'stim/IMG_help.jpeg'},
    {'name': 'img01.jpg', 'path': 'stim/img01.jpg'},
    {'name': 'img02.jpg', 'path': 'stim/img02.jpg'},
    {'name': 'img03.jpg', 'path': 'stim/img03.jpg'},
    {'name': 'img04.jpg', 'path': 'stim/img04.jpg'},
    {'name': 'img05.jpg', 'path': 'stim/img05.jpg'},
    {'name': 'img06.jpg', 'path': 'stim/img06.jpg'},
    {'name': 'img07.jpg', 'path': 'stim/img07.jpg'},
    {'name': 'img08.jpg', 'path': 'stim/img08.jpg'},
    {'name': 'img09.jpg', 'path': 'stim/img09.jpg'},
    {'name': 'img10.jpg', 'path': 'stim/img10.jpg'},
    {'name': 'default.png', 'path': 'stim/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);

var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_seperator = ';';


  return Scheduler.Event.NEXT;
}


var key_resp;
var WillkommenClock, text, button_22, mouse_22;
var feedback_text;
var HinweisClock, text_9, button_30, mouse_28;
var Informed_consentClock, Datensammlung, Weiter_2, Maus_2;
var Biografische_AnamneseClock, form, text_10, button_32, mouse_29;
var VorgehenClock, text_2, button_23, mouse_23;
var FragebogenClock, Instruktion, Weiter, Maus;
var Item_1Clock, slider, mouse, button, Frage;
var Item_2Clock, slider_2, mouse_2, button_2, Frage_2;
var Item_3Clock, slider_3, mouse_3, button_3, Frage_3;
var Item_4Clock, slider_4, mouse_4, button_4, Frage_4;
var item_5Clock, slider_5, mouse_5, button_5, Frage_5;
var item_6Clock, slider_6, mouse_6, button_6, Frage_6;
var item_7Clock, slider_7, mouse_7, button_7, Frage_7;
var item_8Clock, slider_8, mouse_8, button_8, Frage_8;
var Item_9Clock, slider_9, mouse_9, button_9, Frage_9;
var Item_10Clock, slider_10, mouse_10, button_10, Frage_10;
var Item_11Clock, slider_11, mouse_11, button_11, Frage_11;
var Item_12Clock, slider_12, mouse_12, button_12, Frage_12;
var Item_13Clock, slider_13, mouse_13, button_13, Frage_13;
var Item_14Clock, slider_14, mouse_14, button_14, Frage_14;
var Item_15Clock, slider_15, mouse_15, button_15, Frage_15;
var Item_16Clock, slider_16, mouse_16, button_16, Frage_16;
var Item_17Clock, slider_17, mouse_17, button_17, Frage_17;
var Item_18Clock, slider_18, mouse_18, button_18, Frage_18;
var Item_19Clock, slider_19, mouse_19, button_19, Frage_19;
var Item_20Clock, slider_20, mouse_20, button_20, Frage_20;
var Item_21Clock, slider_21, mouse_21, button_21, Frage_21;
var BlöckeClock, text_3, button_24, mouse_24;
var Lernen_2Clock, button_25, mouse_25;
var BilderklärungClock, text_5, button_26;
var ExperimentrealClock, text_6, button_27;
var Ende_Block1Clock;
var Ende_Block_2Clock, text_8;
var EndeClock, text_11;
var ByeClock, text_12;
var globalClock;
var routineTimer;
var button_35;
var image;
var Maus_3;
var key_resp_4, key_resp_5, key_resp_6;
var trialClock;
var Bildstimulus;
var ByeBye, t, frameN;
var continueRoutine, WillkommenMaxDurationReached, HinweisMaxDurationReached, Informed_consentMaxDurationReached, Biografische_AnamneseMaxDurationReached, VorgehenMaxDurationReached, FragebogenMaxDurationReached, Item_1MaxDurationReached, Item_2MaxDurationReached, Item_3MaxDurationReached, Item_4MaxDurationReached, item_5MaxDurationReached, item_6MaxDurationReached, item_7MaxDurationReached, item_8MaxDurationReached, Item_9MaxDurationReached, Item_10MaxDurationReached, Item_11MaxDurationReached, Item_12MaxDurationReached, Item_13MaxDurationReached, Item_14MaxDurationReached, Item_15MaxDurationReached, Item_16MaxDurationReached, Item_17MaxDurationReached, Item_18MaxDurationReached, Item_19MaxDurationReached, Item_20MaxDurationReached, Item_21MaxDurationReached, BlöckeMaxDurationReached, Lernen_2MaxDurationReached, BilderklärungMaxDurationReached, ExperimentrealMaxDurationReached, Ende_Block1MaxDurationReached, Ende_Block_2MaxDurationReached, EndeMaxDurationReached, ByeMaxDurationReached;
var gotValidClick;
var HinweisComponents;
var Informed_consentComponents;
var Biografische_AnamneseComponents;
var FragebogenComponents;
var Item_1Components;
var Item_2Components;
var Item_3Components;
var Item_4Components;
var item_5Components;
var item_6Components;
var item_7Components;
var item_8Components;
var Item_9Components;
var Item_10Components;
var Item_11Components;
var Item_12Components;
var Item_13Components;
var Item_14Components;
var Item_15Components;
var Item_16Components;
var Item_17Components;
var Item_18Components;
var Item_19Components;
var Item_20Components;
var Item_21Components;
var BlöckeComponents;
var Lernen_2Components;
var BilderklärungComponents;
var ExperimentrealComponents;
var Ende_Block1Components;
var Ende_Block_2Components;
var EndeComponents;
var ByeComponents;
var mouse_32, button_33, button_34, button_36, mouse_30, button_31, button_37, mouse_26, button_28, button_29, mouse_27, button_22, button_30, button_32, button_23, button_24, button_25, button_26, button_35, button_36, button_37;
var currentLoop;
var WillkommenMaxDuration;
var HinweisMaxDuration;
var Informed_consentMaxDuration;
var Biografische_AnamneseMaxDuration;
var VorgehenMaxDuration;
var FragebogenMaxDuration;
var Item_1MaxDuration;
var Item_2MaxDuration;
var Item_3MaxDuration;
var Item_4MaxDuration;
var item_5MaxDuration;
var item_6MaxDuration;
var item_7MaxDuration;
var item_8MaxDuration;
var Item_9MaxDuration;

var Item_10MaxDuration;
var Item_11MaxDuration;

var Item_12MaxDuration;
var Item_13MaxDuration;
var Item_14MaxDuration;
var WillkommenComponents,prevButtonState,_mouseButtons;
var _mouseXYs;
var _mouseVisible;
var _mouseMoves;
var _mouseClock;
var _mouseButtons;
var _mouseXYs;
var _mouseVisible;
var _mouseMoves;
var _mouseClock;
var _mouseButtons;
var _mouseXYs;
var _mouseVisible;
var _mouseMoves;
var _mouseClock,VorgehenComponents,Item_15MaxDuration,Item_16MaxDuration,Item_17MaxDuration,Item_18MaxDuration,Item_19MaxDuration,Item_20MaxDuration,Item_21MaxDuration,BlöckeMaxDuration,Lernen_2MaxDuration,BilderklärungMaxDuration,ExperimentrealMaxDuration,Ende_Block1MaxDuration,Ende_Block_2MaxDuration,EndeMaxDuration,ByeMaxDuration;;
var _key_resp_4_allKeys;
var _key_resp_5_allKeys;
var _key_resp_6_allKeys;
var trialMaxDurationReached;
var _key_resp_allKeys;
var _key_resp_2_allKeys;
var _key_resp_3_allKeys;
var _key_resp_4_allKeys;
var _key_resp_5_allKeys;
var _key_resp_6_allKeys;
var trialMaxDuration, trialMaxDurationReached , trialComponents, trialClock;
var trials_2,trials_3;
var form;






let current_image,current_image_idx,response_times,correct,trials,correct_answers;

function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];

}



let adjMatrix = [
    [0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 1, 0, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0]
];


// Load image names (mocked here; PsychoPy should handle file input elsewhere)
let image_names = [
    "img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg", "img05.jpg",
    "img06.jpg", "img07.jpg", "img08.jpg", "img09.jpg", "img10.jpg"
];

const correct_keys = [
    ['space', 'h'], // correct keys for image 1
    ['h', 'j'], // correct keys for image 2
    ['j', 'k'], // correct keys for image 3
    ['k', 'l'], // correct keys for image 4
    ['space', 'l'], // correct keys for image 5
    ['h', 'l'], // correct keys for image 6
    ['space', 'j'], // correct keys for image 7
    ['h', 'k'], // correct keys for image 8
    ['j', 'l'], // correct keys for image 9
    ['space', 'k']  // correct keys for image 10
];


async function experimentInit() {
  // Initialize components for Routine "Willkommen"
  WillkommenClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Herzlich willkommen!\n\n\nVielen Dank, dass Sie an dieser Studie teilnehmen!\n\nIhr Beitrag ist von großem Wert für unsere Forschung.\n\nBitte nehmen Sie sich die Zeit, die Anweisungen sorgfältig zu lesen, bevor Sie fortfahren.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_22 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_22',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -1
  });
  button_22.clock = new util.Clock();
  
  mouse_22 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_22.mouseClock = new util.Clock();
  // Initialize components for Routine "Hinweis"
  HinweisClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'Hinweis:\n\n\n• Diese Studie dauert ca. 30 Minuten.\n\n• Stellen Sie sicher, dass Sie in einer ruhigen Umgebung sind und keine Ablenkungen haben.\n\n• Ihre Daten werden anonym behandelt und ausschließlich zu wissenschaftlichen Zwecken verwendet.\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_30 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_30',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -1
  });
  button_30.clock = new util.Clock();
  
  mouse_28 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_28.mouseClock = new util.Clock();
  // Initialize components for Routine "Informed_consent"
  Informed_consentClock = new util.Clock();
  Datensammlung = new visual.TextStim({
    win: psychoJS.window,
    name: 'Datensammlung',
    text: 'Einverständniserklärung\n\nBitte lesen Sie die folgende Erklärung sorgfältig durch:\n\n•  Ich habe die Informationen über die Studie gelesen und verstanden.\n• Ich bin damit einverstanden, freiwillig an der Studie teilzunehmen.\n• Ich weiß, dass ich die Studie jederzeit ohne Angabe von Gründen abbrechen kann.\n\n\nWenn Sie einverstanden sind, klicken Sie bitte auf „Einverstanden“.\n\n\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Weiter_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Weiter_2',
    text: 'Einverstanden',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -1
  });
  Weiter_2.clock = new util.Clock();
  
  Maus_2 = new core.Mouse({
    win: psychoJS.window,
  });
  Maus_2.mouseClock = new util.Clock();
  // Initialize components for Routine "Biografische_Anamnese"
  Biografische_AnamneseClock = new util.Clock();
  



  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'Bevor Sie die Aufgaben beginnen, möchten wir Sie bitten, einige Daten zu Ihrer Person einzugeben:',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  button_32 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_32',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_32.clock = new util.Clock();
  
  mouse_29 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_29.mouseClock = new util.Clock();
  // Initialize components for Routine "Vorgehen"
  VorgehenClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Als nächstes werden wir Sie bitten einen Fragebogen zu bearbeiten.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_23 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_23',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -1
  });
  button_23.clock = new util.Clock();
  
  mouse_23 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_23.mouseClock = new util.Clock();
  // Initialize components for Routine "Fragebogen"
  FragebogenClock = new util.Clock();
  Instruktion = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruktion',
    text: 'Im folgenden finden Sie eine Aufstellung von Empfindungen, die vorkommen können, wenn man ängstlich ist. Bitte lesen Sie diese Empfindungen sorgfältig durch. Geben Sie jeweils an, wie sehr Sie durch jede dieser Empfindungen in der letzten Woche, einschließlich heute belastet waren, indem Sie den Regler an die zutreffende Stelle schieben.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Weiter = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Weiter',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -1
  });
  Weiter.clock = new util.Clock();
  
  Maus = new core.Mouse({
    win: psychoJS.window,
  });
  Maus.mouseClock = new util.Clock();
  // Initialize components for Routine "Item_1"
  Item_1Clock = new util.Clock();
  slider = new visual.Slider({
    win: psychoJS.window, name: 'slider',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button.clock = new util.Clock();
  
  Frage = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage',
    text: 'Taubheit oder Kribbeln',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Item_2"
  Item_2Clock = new util.Clock();
  slider_2 = new visual.Slider({
    win: psychoJS.window, name: 'slider_2',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  button_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_2',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_2.clock = new util.Clock();
  
  Frage_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_2',
    text: 'Hitzegefühl',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Item_3"
  Item_3Clock = new util.Clock();
  slider_3 = new visual.Slider({
    win: psychoJS.window, name: 'slider_3',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  button_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_3',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_3.clock = new util.Clock();
  
  Frage_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_3',
    text: 'Weiche Knie oder Beine',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Item_4"
  Item_4Clock = new util.Clock();
  slider_4 = new visual.Slider({
    win: psychoJS.window, name: 'slider_4',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
  button_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_4',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_4.clock = new util.Clock();
  
  Frage_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_4',
    text: 'Unfähig, mich zu entspannen',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "item_5"
  item_5Clock = new util.Clock();
  slider_5 = new visual.Slider({
    win: psychoJS.window, name: 'slider_5',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_5 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_5.mouseClock = new util.Clock();
  button_5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_5',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_5.clock = new util.Clock();
  
  Frage_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_5',
    text: 'Befürchtung des Schlimmsten',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "item_6"
  item_6Clock = new util.Clock();
  slider_6 = new visual.Slider({
    win: psychoJS.window, name: 'slider_6',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_6 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_6.mouseClock = new util.Clock();
  button_6 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_6',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_6.clock = new util.Clock();
  
  Frage_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_6',
    text: 'Schwindlig oder benommen',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "item_7"
  item_7Clock = new util.Clock();
  slider_7 = new visual.Slider({
    win: psychoJS.window, name: 'slider_7',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_7 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_7.mouseClock = new util.Clock();
  button_7 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_7',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_7.clock = new util.Clock();
  
  Frage_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_7',
    text: 'Herzrasen oder Herzklopfen',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "item_8"
  item_8Clock = new util.Clock();
  slider_8 = new visual.Slider({
    win: psychoJS.window, name: 'slider_8',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_8 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_8.mouseClock = new util.Clock();
  button_8 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_8',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_8.clock = new util.Clock();
  
  Frage_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_8',
    text: 'Wacklig oder schwankend',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Item_9"
  Item_9Clock = new util.Clock();
  slider_9 = new visual.Slider({
    win: psychoJS.window, name: 'slider_9',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_9 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_9.mouseClock = new util.Clock();
  button_9 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_9',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_9.clock = new util.Clock();
  
  Frage_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_9',
    text: 'Schrecken',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Item_10"
  Item_10Clock = new util.Clock();
  slider_10 = new visual.Slider({
    win: psychoJS.window, name: 'slider_10',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_10 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_10.mouseClock = new util.Clock();
  button_10 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_10',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_10.clock = new util.Clock();
  
  Frage_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_10',
    text: 'Nervös',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Item_11"
  Item_11Clock = new util.Clock();
  slider_11 = new visual.Slider({
    win: psychoJS.window, name: 'slider_11',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_11 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_11.mouseClock = new util.Clock();
  button_11 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_11',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_11.clock = new util.Clock();
  
  Frage_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_11',
    text: 'Erstickungsgefühle',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Item_12"
  Item_12Clock = new util.Clock();
  slider_12 = new visual.Slider({
    win: psychoJS.window, name: 'slider_12',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_12 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_12.mouseClock = new util.Clock();
  button_12 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_12',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_12.clock = new util.Clock();
  
  Frage_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_12',
    text: 'Zitternde Hände',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Item_13"
  Item_13Clock = new util.Clock();
  slider_13 = new visual.Slider({
    win: psychoJS.window, name: 'slider_13',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_13 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_13.mouseClock = new util.Clock();
  button_13 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_13',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_13.clock = new util.Clock();
  
  Frage_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_13',
    text: 'Zittrig',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Item_14"
  Item_14Clock = new util.Clock();
  slider_14 = new visual.Slider({
    win: psychoJS.window, name: 'slider_14',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_14 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_14.mouseClock = new util.Clock();
  button_14 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_14',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_14.clock = new util.Clock();
  
  Frage_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_14',
    text: 'Angst, Kontrolle zu verlieren',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Item_15"
  Item_15Clock = new util.Clock();
  slider_15 = new visual.Slider({
    win: psychoJS.window, name: 'slider_15',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_15 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_15.mouseClock = new util.Clock();
  button_15 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_15',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_15.clock = new util.Clock();
  
  Frage_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_15',
    text: 'Atembeschwerden',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Item_16"
  Item_16Clock = new util.Clock();
  slider_16 = new visual.Slider({
    win: psychoJS.window, name: 'slider_16',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_16 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_16.mouseClock = new util.Clock();
  button_16 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_16',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_16.clock = new util.Clock();
  
  Frage_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_16',
    text: 'Angst zu sterben',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Item_17"
  Item_17Clock = new util.Clock();
  slider_17 = new visual.Slider({
    win: psychoJS.window, name: 'slider_17',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_17 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_17.mouseClock = new util.Clock();
  button_17 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_17',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_17.clock = new util.Clock();
  
  Frage_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_17',
    text: 'Furchtsam',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Item_18"
  Item_18Clock = new util.Clock();
  slider_18 = new visual.Slider({
    win: psychoJS.window, name: 'slider_18',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_18 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_18.mouseClock = new util.Clock();
  button_18 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_18',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_18.clock = new util.Clock();
  
  Frage_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_18',
    text: 'Magen- und Darmbeschwerden',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Item_19"
  Item_19Clock = new util.Clock();
  slider_19 = new visual.Slider({
    win: psychoJS.window, name: 'slider_19',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_19 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_19.mouseClock = new util.Clock();
  button_19 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_19',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_19.clock = new util.Clock();
  
  Frage_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_19',
    text: 'Schwächegefühl',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Item_20"
  Item_20Clock = new util.Clock();
  slider_20 = new visual.Slider({
    win: psychoJS.window, name: 'slider_20',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_20 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_20.mouseClock = new util.Clock();
  button_20 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_20',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_20.clock = new util.Clock();
  
  Frage_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_20',
    text: 'Glühendes Gesicht',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Item_21"
  Item_21Clock = new util.Clock();
  slider_21 = new visual.Slider({
    win: psychoJS.window, name: 'slider_21',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u00dcberhaupt nicht", "Wenig", "Mittel", "Stark"], fontSize: 0.05, ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: 0, 
    flip: false,
  });
  
  mouse_21 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_21.mouseClock = new util.Clock();
  button_21 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_21',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_21.clock = new util.Clock();
  
  Frage_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Frage_21',
    text: 'Schwitzen (nicht wegen Hitze)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Blöcke"
  BlöckeClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Das Experiment ist in 3 Blöcke aufgeteilt.\n\nEs gibt 3 Testblöcke zwischen denen Sie die Möglichkeit haben, eine kurze Pause zu machen.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_35 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_35',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -1
  });
  button_35.clock = new util.Clock();
  
  mouse_32 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_32.mouseClock = new util.Clock();
  // Initialize components for Routine "Lernen_2"
  Lernen_2Clock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Ihre Aufgabe ist es, so schnell und akurat wie möglich zu reagieren. Ihre Reaktionszeit und Genauigkeit werden gemessen.\n\nSie werden fünf Quadrate sehen. Zwei dieser Quadrate werden rot aufleuchten. Wir bitten Sie mit den richtigen Tasten auf diese zu reagieren.\n\nDie Belegung wird auf der nächsten Seite erklärt.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_24 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_24',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -1
  });
  button_24.clock = new util.Clock();
  
  mouse_24 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_24.mouseClock = new util.Clock();
  // Initialize components for Routine "Bilderklärung"
  BilderklärungClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'IMG_help.jpeg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, (- 0.4)], 
    draggable: false,
    size : [0.7, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Positionieren Sie Ihre Finger bitte wie auf dem Bild unten gezeigt.\n\nWenn das linke Quadrat aufleuchtet, drücken Sie bitte die Leertaste. Wenn das zweitlinke Quadrat aufleuchtet bitte drücken Sie den Buchstaben H etc.\nWenn zwei Quadrate ausgefüllt werden drücken Sie bitte die beiden entsprechenden Tasten auf der Tastatur.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  button_25 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_25',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.5, (- 0.4)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -2
  });
  button_25.clock = new util.Clock();
  
  Maus_3 = new core.Mouse({
    win: psychoJS.window,
  });
  Maus_3.mouseClock = new util.Clock();
  // Initialize components for Routine "Experimentreal"
  ExperimentrealClock = new util.Clock();
  Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text',
    text: 'Drücken Sie die Leertaste, wenn Sie für den ersten Block des Experiments bereit sind.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from randomwalk

  
  current_image_idx = Math.floor(Math.random() * image_names.length);
  current_image = image_names[current_image_idx];
  console.log(current_image_idx);
  correct_answers = 0;
  response_times = [];

  
  Bildstimulus = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Bildstimulus', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Ende_Block1"
  Ende_Block1Clock = new util.Clock();
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'Super! Block 1 abgeschlossen!\n\n\nMachen Sie jetzt eine Pause, wenn Sie möchten. Sobald Sie bereit sind, drücken Sie "Weiter", um Block 2 zu starten.\n\n\n\n>>> Bitte drücken Sie die Leertaste, um mit dem zweiten Block zu beginnen<<<\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Ende_Block_2"
  Ende_Block_2Clock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'Prima! Block 2 abgeschlossen!\n\nMachen Sie jetzt eine Pause, wenn Sie möchten. Sobald Sie bereit sind, drücken Sie „Weiter“, um letzte Block 3 zu starten.\n\n\n\n>>> Bitte drücken Sie die Leertaste, um mit dem dritten Block zu beginnen<<<\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Ende"
  EndeClock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'Super! Block 3 abgeschlossen!\n\nVielen Dank für Ihre Teilnahme!\n\nSie haben das Experiment erfolgreich abgeschlossen. Wir schätzen Ihre Zeit und Ihren Beitrag zu unserer Forschung sehr.\n\nBitte beachten Sie zum Abschluss der Studie:\n\nFür das Gelingen dieser Studie und zur Aufrechterhaltung der Standardisierung ist es sehr wichtig, dass Sie nicht mit anderen Personen über den Aufbau und den Inhalt dieser Untersuchung sprechen\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_29 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_29',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -1
  });
  button_29.clock = new util.Clock();
  
  mouse_27 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_27.mouseClock = new util.Clock();
  // Initialize components for Routine "Bye"
  ByeClock = new util.Clock();
  ByeBye = new visual.TextStim({
    win: psychoJS.window,
    name: 'ByeBye',
    text: 'Vielen Dank, dass Sie an unserer Studie teilgenommen haben.\n\nFalls Sie noch Fragen zu unserer Studie haben, wenden Sie sich an:\n\nmona.broghammer@students.uni-freiburg.de\nchen.lu@email.uni-freiburg.de\njessica.haener@pluto.uni-freiburg.de\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_26 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_26',
    text: 'Studie beenden',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -1
  });
  button_26.clock = new util.Clock();
  
button_27 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_27',
    text: 'Weiter',
    fillColor: [(- 1.0), 0.0118, 0.4667],
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.45, (- 0.45)],
    letterHeight: 0.05,
    size: [0.5, 0.1],
    ori: 0.0
    ,
    depth: -1
    });
button_27.clock = new util.Clock();

  mouse_25 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_25.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function WillkommenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Willkommen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    WillkommenClock.reset();
    routineTimer.reset();
    WillkommenMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_22 to account for continued clicks & clear times on/off
    button_22.reset()
    // setup some python lists for storing info about the mouse_22
    // current position of the mouse:
    mouse_22.x = [];
    mouse_22.y = [];
    mouse_22.leftButton = [];
    mouse_22.midButton = [];
    mouse_22.rightButton = [];
    mouse_22.time = [];
    mouse_22.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Willkommen.started', globalClock.getTime());
    WillkommenMaxDuration = null
    // keep track of which components have finished
    WillkommenComponents = [];
    WillkommenComponents.push(text);
    WillkommenComponents.push(button_22);
    WillkommenComponents.push(mouse_22);
    
    for (const thisComponent of WillkommenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function WillkommenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Willkommen' ---
    // get current time
    t = WillkommenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // *button_22* updates
    if (t >= 3 && button_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_22.tStart = t;  // (not accounting for frame time here)
      button_22.frameNStart = frameN;  // exact frame index
      
      button_22.setAutoDraw(true);
    }
    
    if (button_22.status === PsychoJS.Status.STARTED) {
      // check whether button_22 has been pressed
      if (button_22.isClicked) {
        if (!button_22.wasClicked) {
          // store time of first click
          button_22.timesOn.push(button_22.clock.getTime());
          // store time clicked until
          button_22.timesOff.push(button_22.clock.getTime());
        } else {
          // update time clicked until;
          button_22.timesOff[button_22.timesOff.length - 1] = button_22.clock.getTime();
        }
        if (!button_22.wasClicked) {
          // end routine when button_22 is clicked
          continueRoutine = false;
          
        }
        // if button_22 is still clicked next frame, it is not a new click
        button_22.wasClicked = true;
      } else {
        // if button_22 is clicked next frame, it is a new click
        button_22.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_22 hasn't started / has finished
      button_22.clock.reset();
      // if button_22 is clicked next frame, it is a new click
      button_22.wasClicked = false;
    }
    // *mouse_22* updates
    if (t >= 3 && mouse_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_22.tStart = t;  // (not accounting for frame time here)
      mouse_22.frameNStart = frameN;  // exact frame index
      
      mouse_22.status = PsychoJS.Status.STARTED;
      mouse_22.mouseClock.reset();
      prevButtonState = mouse_22.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_22.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_22.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_22.clickableObjects = eval(button_22)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_22.clickableObjects)) {
              mouse_22.clickableObjects = [mouse_22.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_22.clickableObjects) {
              if (obj.contains(mouse_22)) {
                  gotValidClick = true;
                  mouse_22.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_22.clicked_name.push(null);
          }
          _mouseXYs = mouse_22.getPos();
          mouse_22.x.push(_mouseXYs[0]);
          mouse_22.y.push(_mouseXYs[1]);
          mouse_22.leftButton.push(_mouseButtons[0]);
          mouse_22.midButton.push(_mouseButtons[1]);
          mouse_22.rightButton.push(_mouseButtons[2]);
          mouse_22.time.push(mouse_22.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WillkommenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function WillkommenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Willkommen' ---
    for (const thisComponent of WillkommenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Willkommen.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_22.numClicks', button_22.numClicks);
    psychoJS.experiment.addData('button_22.timesOn', button_22.timesOn);
    psychoJS.experiment.addData('button_22.timesOff', button_22.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_22.x', mouse_22.x);
    psychoJS.experiment.addData('mouse_22.y', mouse_22.y);
    psychoJS.experiment.addData('mouse_22.leftButton', mouse_22.leftButton);
    psychoJS.experiment.addData('mouse_22.midButton', mouse_22.midButton);
    psychoJS.experiment.addData('mouse_22.rightButton', mouse_22.rightButton);
    psychoJS.experiment.addData('mouse_22.time', mouse_22.time);
    psychoJS.experiment.addData('mouse_22.clicked_name', mouse_22.clicked_name);
    
    // the Routine "Willkommen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function HinweisRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Hinweis' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    HinweisClock.reset();
    routineTimer.reset();
    HinweisMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_30 to account for continued clicks & clear times on/off
    button_30.reset()
    // setup some python lists for storing info about the mouse_28
    // current position of the mouse:
    mouse_28.x = [];
    mouse_28.y = [];
    mouse_28.leftButton = [];
    mouse_28.midButton = [];
    mouse_28.rightButton = [];
    mouse_28.time = [];
    mouse_28.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Hinweis.started', globalClock.getTime());
    HinweisMaxDuration = null
    // keep track of which components have finished
    HinweisComponents = [];
    HinweisComponents.push(text_9);
    HinweisComponents.push(button_30);
    HinweisComponents.push(mouse_28);
    
    for (const thisComponent of HinweisComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function HinweisRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Hinweis' ---
    // get current time
    t = HinweisClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    
    // *button_30* updates
    if (t >= 3 && button_30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_30.tStart = t;  // (not accounting for frame time here)
      button_30.frameNStart = frameN;  // exact frame index
      
      button_30.setAutoDraw(true);
    }
    
    if (button_30.status === PsychoJS.Status.STARTED) {
      // check whether button_30 has been pressed
      if (button_30.isClicked) {
        if (!button_30.wasClicked) {
          // store time of first click
          button_30.timesOn.push(button_30.clock.getTime());
          // store time clicked until
          button_30.timesOff.push(button_30.clock.getTime());
        } else {
          // update time clicked until;
          button_30.timesOff[button_30.timesOff.length - 1] = button_30.clock.getTime();
        }
        if (!button_30.wasClicked) {
          // end routine when button_30 is clicked
          continueRoutine = false;
          
        }
        // if button_30 is still clicked next frame, it is not a new click
        button_30.wasClicked = true;
      } else {
        // if button_30 is clicked next frame, it is a new click
        button_30.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_30 hasn't started / has finished
      button_30.clock.reset();
      // if button_30 is clicked next frame, it is a new click
      button_30.wasClicked = false;
    }
    // *mouse_28* updates
    if (t >= 3 && mouse_28.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_28.tStart = t;  // (not accounting for frame time here)
      mouse_28.frameNStart = frameN;  // exact frame index
      
      mouse_28.status = PsychoJS.Status.STARTED;
      mouse_28.mouseClock.reset();
      prevButtonState = mouse_28.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_28.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_28.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_28.clickableObjects = eval(button_30)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_28.clickableObjects)) {
              mouse_28.clickableObjects = [mouse_28.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_28.clickableObjects) {
              if (obj.contains(mouse_28)) {
                  gotValidClick = true;
                  mouse_28.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_28.clicked_name.push(null);
          }
          _mouseXYs = mouse_28.getPos();
          mouse_28.x.push(_mouseXYs[0]);
          mouse_28.y.push(_mouseXYs[1]);
          mouse_28.leftButton.push(_mouseButtons[0]);
          mouse_28.midButton.push(_mouseButtons[1]);
          mouse_28.rightButton.push(_mouseButtons[2]);
          mouse_28.time.push(mouse_28.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of HinweisComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function HinweisRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Hinweis' ---
    for (const thisComponent of HinweisComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Hinweis.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_30.numClicks', button_30.numClicks);
    psychoJS.experiment.addData('button_30.timesOn', button_30.timesOn);
    psychoJS.experiment.addData('button_30.timesOff', button_30.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_28.x', mouse_28.x);
    psychoJS.experiment.addData('mouse_28.y', mouse_28.y);
    psychoJS.experiment.addData('mouse_28.leftButton', mouse_28.leftButton);
    psychoJS.experiment.addData('mouse_28.midButton', mouse_28.midButton);
    psychoJS.experiment.addData('mouse_28.rightButton', mouse_28.rightButton);
    psychoJS.experiment.addData('mouse_28.time', mouse_28.time);
    psychoJS.experiment.addData('mouse_28.clicked_name', mouse_28.clicked_name);
    
    // the Routine "Hinweis" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Informed_consentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Informed_consent' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Informed_consentClock.reset();
    routineTimer.reset();
    Informed_consentMaxDurationReached = false;
    // update component parameters for each repeat
    // reset Weiter_2 to account for continued clicks & clear times on/off
    Weiter_2.reset()
    // setup some python lists for storing info about the Maus_2
    // current position of the mouse:
    Maus_2.x = [];
    Maus_2.y = [];
    Maus_2.leftButton = [];
    Maus_2.midButton = [];
    Maus_2.rightButton = [];
    Maus_2.time = [];
    Maus_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Informed_consent.started', globalClock.getTime());
    Informed_consentMaxDuration = null
    // keep track of which components have finished
    Informed_consentComponents = [];
    Informed_consentComponents.push(Datensammlung);
    Informed_consentComponents.push(Weiter_2);
    Informed_consentComponents.push(Maus_2);
    
    for (const thisComponent of Informed_consentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Informed_consentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Informed_consent' ---
    // get current time
    t = Informed_consentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Datensammlung* updates
    if (t >= 0.0 && Datensammlung.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Datensammlung.tStart = t;  // (not accounting for frame time here)
      Datensammlung.frameNStart = frameN;  // exact frame index
      
      Datensammlung.setAutoDraw(true);
    }
    
    
    // *Weiter_2* updates
    if (t >= 10 && Weiter_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Weiter_2.tStart = t;  // (not accounting for frame time here)
      Weiter_2.frameNStart = frameN;  // exact frame index
      
      Weiter_2.setAutoDraw(true);
    }
    
    if (Weiter_2.status === PsychoJS.Status.STARTED) {
      // check whether Weiter_2 has been pressed
      if (Weiter_2.isClicked) {
        if (!Weiter_2.wasClicked) {
          // store time of first click
          Weiter_2.timesOn.push(Weiter_2.clock.getTime());
          // store time clicked until
          Weiter_2.timesOff.push(Weiter_2.clock.getTime());
        } else {
          // update time clicked until;
          Weiter_2.timesOff[Weiter_2.timesOff.length - 1] = Weiter_2.clock.getTime();
        }
        if (!Weiter_2.wasClicked) {
          
        }
        // if Weiter_2 is still clicked next frame, it is not a new click
        Weiter_2.wasClicked = true;
      } else {
        // if Weiter_2 is clicked next frame, it is a new click
        Weiter_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Weiter_2 hasn't started / has finished
      Weiter_2.clock.reset();
      // if Weiter_2 is clicked next frame, it is a new click
      Weiter_2.wasClicked = false;
    }
    // *Maus_2* updates
    if (t >= 10 && Maus_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Maus_2.tStart = t;  // (not accounting for frame time here)
      Maus_2.frameNStart = frameN;  // exact frame index
      
      Maus_2.status = PsychoJS.Status.STARTED;
      Maus_2.mouseClock.reset();
      prevButtonState = Maus_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (Maus_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = Maus_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          Maus_2.clickableObjects = eval(Weiter_2)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(Maus_2.clickableObjects)) {
              Maus_2.clickableObjects = [Maus_2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of Maus_2.clickableObjects) {
              if (obj.contains(Maus_2)) {
                  gotValidClick = true;
                  Maus_2.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              Maus_2.clicked_name.push(null);
          }
          _mouseXYs = Maus_2.getPos();
          Maus_2.x.push(_mouseXYs[0]);
          Maus_2.y.push(_mouseXYs[1]);
          Maus_2.leftButton.push(_mouseButtons[0]);
          Maus_2.midButton.push(_mouseButtons[1]);
          Maus_2.rightButton.push(_mouseButtons[2]);
          Maus_2.time.push(Maus_2.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Informed_consentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Informed_consentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Informed_consent' ---
    for (const thisComponent of Informed_consentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Informed_consent.stopped', globalClock.getTime());
    psychoJS.experiment.addData('Weiter_2.numClicks', Weiter_2.numClicks);
    psychoJS.experiment.addData('Weiter_2.timesOn', Weiter_2.timesOn);
    psychoJS.experiment.addData('Weiter_2.timesOff', Weiter_2.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('Maus_2.x', Maus_2.x);
    psychoJS.experiment.addData('Maus_2.y', Maus_2.y);
    psychoJS.experiment.addData('Maus_2.leftButton', Maus_2.leftButton);
    psychoJS.experiment.addData('Maus_2.midButton', Maus_2.midButton);
    psychoJS.experiment.addData('Maus_2.rightButton', Maus_2.rightButton);
    psychoJS.experiment.addData('Maus_2.time', Maus_2.time);
    psychoJS.experiment.addData('Maus_2.clicked_name', Maus_2.clicked_name);
    
    // the Routine "Informed_consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Biografische_AnamneseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    form = new visual.Form({
        win : psychoJS.window,
        name : 'form',
        items :  'formItems1.xlsx',
        textHeight : 0.03,
        font : 'Open Sans',
        randomize : false,
        size : [1, 0.6],
        pos : [0, (- 0.1)],
        style : ['dark'],
        itemPadding : 0.05,
        depth : -1,
    }); 
    //--- Prepare to start Routine 'Biografische_Anamnese' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Biografische_AnamneseClock.reset();
    routineTimer.reset();
    Biografische_AnamneseMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_32 to account for continued clicks & clear times on/off
    button_32.reset()
    // setup some python lists for storing info about the mouse_29
    // current position of the mouse:
    mouse_29.x = [];
    mouse_29.y = [];
    mouse_29.leftButton = [];
    mouse_29.midButton = [];
    mouse_29.rightButton = [];
    mouse_29.time = [];
    mouse_29.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Biografische_Anamnese.started', globalClock.getTime());
    Biografische_AnamneseMaxDuration = null
    // keep track of which components have finished
    Biografische_AnamneseComponents = [];
    Biografische_AnamneseComponents.push(form);
    Biografische_AnamneseComponents.push(text_10);
    Biografische_AnamneseComponents.push(button_32);
    Biografische_AnamneseComponents.push(mouse_29);
    
    for (const thisComponent of Biografische_AnamneseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Biografische_AnamneseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Biografische_Anamnese' ---
    // get current time
    t = Biografische_AnamneseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *form* updates
    if (t >= 0.0 && form.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      form.tStart = t;  // (not accounting for frame time here)
      form.frameNStart = frameN;  // exact frame index
      
      form.setAutoDraw(true);
    }
    
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }
    
    
    // *button_32* updates
    if (t >= 30 && button_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_32.tStart = t;  // (not accounting for frame time here)
      button_32.frameNStart = frameN;  // exact frame index
      
      button_32.setAutoDraw(true);
    }
    
    if (button_32.status === PsychoJS.Status.STARTED) {
      // check whether button_32 has been pressed
      if (button_32.isClicked) {
        if (!button_32.wasClicked) {
          // store time of first click
          button_32.timesOn.push(button_32.clock.getTime());
          // store time clicked until
          button_32.timesOff.push(button_32.clock.getTime());
        } else {
          // update time clicked until;
          button_32.timesOff[button_32.timesOff.length - 1] = button_32.clock.getTime();
        }
        if (!button_32.wasClicked) {
          // end routine when button_32 is clicked
          continueRoutine = false;
          
        }
        // if button_32 is still clicked next frame, it is not a new click
        button_32.wasClicked = true;
      } else {
        // if button_32 is clicked next frame, it is a new click
        button_32.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_32 hasn't started / has finished
      button_32.clock.reset();
      // if button_32 is clicked next frame, it is a new click
      button_32.wasClicked = false;
    }
    // *mouse_29* updates
    if (t >= 30 && mouse_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_29.tStart = t;  // (not accounting for frame time here)
      mouse_29.frameNStart = frameN;  // exact frame index
      
      mouse_29.status = PsychoJS.Status.STARTED;
      mouse_29.mouseClock.reset();
      prevButtonState = mouse_29.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_29.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_29.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_29.clickableObjects = eval(button_32)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_29.clickableObjects)) {
              mouse_29.clickableObjects = [mouse_29.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_29.clickableObjects) {
              if (obj.contains(mouse_29)) {
                  gotValidClick = true;
                  mouse_29.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_29.clicked_name.push(null);
          }
          _mouseXYs = mouse_29.getPos();
          mouse_29.x.push(_mouseXYs[0]);
          mouse_29.y.push(_mouseXYs[1]);
          mouse_29.leftButton.push(_mouseButtons[0]);
          mouse_29.midButton.push(_mouseButtons[1]);
          mouse_29.rightButton.push(_mouseButtons[2]);
          mouse_29.time.push(mouse_29.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Biografische_AnamneseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Biografische_AnamneseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Biografische_Anamnese' ---
    for (const thisComponent of Biografische_AnamneseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Biografische_Anamnese.stopped', globalClock.getTime());
    form.addDataToExp(psychoJS.experiment, 'rows');
    psychoJS.experiment.addData('button_32.numClicks', button_32.numClicks);
    psychoJS.experiment.addData('button_32.timesOn', button_32.timesOn);
    psychoJS.experiment.addData('button_32.timesOff', button_32.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_29.x', mouse_29.x);
    psychoJS.experiment.addData('mouse_29.y', mouse_29.y);
    psychoJS.experiment.addData('mouse_29.leftButton', mouse_29.leftButton);
    psychoJS.experiment.addData('mouse_29.midButton', mouse_29.midButton);
    psychoJS.experiment.addData('mouse_29.rightButton', mouse_29.rightButton);
    psychoJS.experiment.addData('mouse_29.time', mouse_29.time);
    psychoJS.experiment.addData('mouse_29.clicked_name', mouse_29.clicked_name);
    
    // the Routine "Biografische_Anamnese" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function VorgehenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Vorgehen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    VorgehenClock.reset();
    routineTimer.reset();
    VorgehenMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_23 to account for continued clicks & clear times on/off
    button_23.reset()
    // setup some python lists for storing info about the mouse_23
    // current position of the mouse:
    mouse_23.x = [];
    mouse_23.y = [];
    mouse_23.leftButton = [];
    mouse_23.midButton = [];
    mouse_23.rightButton = [];
    mouse_23.time = [];
    mouse_23.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Vorgehen.started', globalClock.getTime());
    VorgehenMaxDuration = null
    // keep track of which components have finished
    VorgehenComponents = [];
    VorgehenComponents.push(text_2);
    VorgehenComponents.push(button_23);
    VorgehenComponents.push(mouse_23);
    
    for (const thisComponent of VorgehenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function VorgehenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Vorgehen' ---
    // get current time
    t = VorgehenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *button_23* updates
    if (t >= 3 && button_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_23.tStart = t;  // (not accounting for frame time here)
      button_23.frameNStart = frameN;  // exact frame index
      
      button_23.setAutoDraw(true);
    }
    
    if (button_23.status === PsychoJS.Status.STARTED) {
      // check whether button_23 has been pressed
      if (button_23.isClicked) {
        if (!button_23.wasClicked) {
          // store time of first click
          button_23.timesOn.push(button_23.clock.getTime());
          // store time clicked until
          button_23.timesOff.push(button_23.clock.getTime());
        } else {
          // update time clicked until;
          button_23.timesOff[button_23.timesOff.length - 1] = button_23.clock.getTime();
        }
        if (!button_23.wasClicked) {
          // end routine when button_23 is clicked
          continueRoutine = false;
          
        }
        // if button_23 is still clicked next frame, it is not a new click
        button_23.wasClicked = true;
      } else {
        // if button_23 is clicked next frame, it is a new click
        button_23.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_23 hasn't started / has finished
      button_23.clock.reset();
      // if button_23 is clicked next frame, it is a new click
      button_23.wasClicked = false;
    }
    // *mouse_23* updates
    if (t >= 3 && mouse_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_23.tStart = t;  // (not accounting for frame time here)
      mouse_23.frameNStart = frameN;  // exact frame index
      
      mouse_23.status = PsychoJS.Status.STARTED;
      mouse_23.mouseClock.reset();
      prevButtonState = mouse_23.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_23.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_23.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_23.clickableObjects = eval(button_23)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_23.clickableObjects)) {
              mouse_23.clickableObjects = [mouse_23.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_23.clickableObjects) {
              if (obj.contains(mouse_23)) {
                  gotValidClick = true;
                  mouse_23.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_23.clicked_name.push(null);
          }
          _mouseXYs = mouse_23.getPos();
          mouse_23.x.push(_mouseXYs[0]);
          mouse_23.y.push(_mouseXYs[1]);
          mouse_23.leftButton.push(_mouseButtons[0]);
          mouse_23.midButton.push(_mouseButtons[1]);
          mouse_23.rightButton.push(_mouseButtons[2]);
          mouse_23.time.push(mouse_23.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of VorgehenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function VorgehenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Vorgehen' ---
    for (const thisComponent of VorgehenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Vorgehen.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_23.numClicks', button_23.numClicks);
    psychoJS.experiment.addData('button_23.timesOn', button_23.timesOn);
    psychoJS.experiment.addData('button_23.timesOff', button_23.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_23.x', mouse_23.x);
    psychoJS.experiment.addData('mouse_23.y', mouse_23.y);
    psychoJS.experiment.addData('mouse_23.leftButton', mouse_23.leftButton);
    psychoJS.experiment.addData('mouse_23.midButton', mouse_23.midButton);
    psychoJS.experiment.addData('mouse_23.rightButton', mouse_23.rightButton);
    psychoJS.experiment.addData('mouse_23.time', mouse_23.time);
    psychoJS.experiment.addData('mouse_23.clicked_name', mouse_23.clicked_name);
    
    // the Routine "Vorgehen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function FragebogenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Fragebogen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    FragebogenClock.reset();
    routineTimer.reset();
    FragebogenMaxDurationReached = false;
    // update component parameters for each repeat
    // reset Weiter to account for continued clicks & clear times on/off
    Weiter.reset()
    // setup some python lists for storing info about the Maus
    // current position of the mouse:
    Maus.x = [];
    Maus.y = [];
    Maus.leftButton = [];
    Maus.midButton = [];
    Maus.rightButton = [];
    Maus.time = [];
    Maus.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Fragebogen.started', globalClock.getTime());
    FragebogenMaxDuration = null
    // keep track of which components have finished
    FragebogenComponents = [];
    FragebogenComponents.push(Instruktion);
    FragebogenComponents.push(Weiter);
    FragebogenComponents.push(Maus);
    
    for (const thisComponent of FragebogenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function FragebogenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Fragebogen' ---
    // get current time
    t = FragebogenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instruktion* updates
    if (t >= 0.0 && Instruktion.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruktion.tStart = t;  // (not accounting for frame time here)
      Instruktion.frameNStart = frameN;  // exact frame index
      
      Instruktion.setAutoDraw(true);
    }
    
    
    // *Weiter* updates
    if (t >= 10 && Weiter.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Weiter.tStart = t;  // (not accounting for frame time here)
      Weiter.frameNStart = frameN;  // exact frame index
      
      Weiter.setAutoDraw(true);
    }
    
    if (Weiter.status === PsychoJS.Status.STARTED) {
      // check whether Weiter has been pressed
      if (Weiter.isClicked) {
        if (!Weiter.wasClicked) {
          // store time of first click
          Weiter.timesOn.push(Weiter.clock.getTime());
          // store time clicked until
          Weiter.timesOff.push(Weiter.clock.getTime());
        } else {
          // update time clicked until;
          Weiter.timesOff[Weiter.timesOff.length - 1] = Weiter.clock.getTime();
        }
        if (!Weiter.wasClicked) {
          
        }
        // if Weiter is still clicked next frame, it is not a new click
        Weiter.wasClicked = true;
      } else {
        // if Weiter is clicked next frame, it is a new click
        Weiter.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Weiter hasn't started / has finished
      Weiter.clock.reset();
      // if Weiter is clicked next frame, it is a new click
      Weiter.wasClicked = false;
    }
    // *Maus* updates
    if (t >= 10 && Maus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Maus.tStart = t;  // (not accounting for frame time here)
      Maus.frameNStart = frameN;  // exact frame index
      
      Maus.status = PsychoJS.Status.STARTED;
      Maus.mouseClock.reset();
      prevButtonState = Maus.getPressed();  // if button is down already this ISN'T a new click
      }
    if (Maus.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = Maus.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          Maus.clickableObjects = eval(Weiter)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(Maus.clickableObjects)) {
              Maus.clickableObjects = [Maus.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of Maus.clickableObjects) {
              if (obj.contains(Maus)) {
                  gotValidClick = true;
                  Maus.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              Maus.clicked_name.push(null);
          }
          _mouseXYs = Maus.getPos();
          Maus.x.push(_mouseXYs[0]);
          Maus.y.push(_mouseXYs[1]);
          Maus.leftButton.push(_mouseButtons[0]);
          Maus.midButton.push(_mouseButtons[1]);
          Maus.rightButton.push(_mouseButtons[2]);
          Maus.time.push(Maus.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FragebogenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function FragebogenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Fragebogen' ---
    for (const thisComponent of FragebogenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Fragebogen.stopped', globalClock.getTime());
    psychoJS.experiment.addData('Weiter.numClicks', Weiter.numClicks);
    psychoJS.experiment.addData('Weiter.timesOn', Weiter.timesOn);
    psychoJS.experiment.addData('Weiter.timesOff', Weiter.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('Maus.x', Maus.x);
    psychoJS.experiment.addData('Maus.y', Maus.y);
    psychoJS.experiment.addData('Maus.leftButton', Maus.leftButton);
    psychoJS.experiment.addData('Maus.midButton', Maus.midButton);
    psychoJS.experiment.addData('Maus.rightButton', Maus.rightButton);
    psychoJS.experiment.addData('Maus.time', Maus.time);
    psychoJS.experiment.addData('Maus.clicked_name', Maus.clicked_name);
    
    // the Routine "Fragebogen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Item_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item_1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Item_1Clock.reset();
    routineTimer.reset();
    Item_1MaxDurationReached = false;
    // update component parameters for each repeat
    slider.reset()
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button to account for continued clicks & clear times on/off
    button.reset()
    psychoJS.experiment.addData('Item_1.started', globalClock.getTime());
    Item_1MaxDuration = null
    // keep track of which components have finished
    Item_1Components = [];
    Item_1Components.push(slider);
    Item_1Components.push(mouse);
    Item_1Components.push(button);
    Item_1Components.push(Frage);
    
    for (const thisComponent of Item_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Item_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item_1' ---
    // get current time
    t = Item_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider* updates
    if (t >= 0.0 && slider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider.tStart = t;  // (not accounting for frame time here)
      slider.frameNStart = frameN;  // exact frame index
      
      slider.setAutoDraw(true);
    }
    
    // *mouse* updates
    if ((slider.rating) && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval(button)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse.clicked_name.push(null);
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button* updates
    if ((slider.rating) && button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button.tStart = t;  // (not accounting for frame time here)
      button.frameNStart = frameN;  // exact frame index
      
      button.setAutoDraw(true);
    }
    
    if (button.status === PsychoJS.Status.STARTED) {
      // check whether button has been pressed
      if (button.isClicked) {
        if (!button.wasClicked) {
          // store time of first click
          button.timesOn.push(button.clock.getTime());
          // store time clicked until
          button.timesOff.push(button.clock.getTime());
        } else {
          // update time clicked until;
          button.timesOff[button.timesOff.length - 1] = button.clock.getTime();
        }
        if (!button.wasClicked) {
          // end routine when button is clicked
          continueRoutine = false;
          
        }
        // if button is still clicked next frame, it is not a new click
        button.wasClicked = true;
      } else {
        // if button is clicked next frame, it is a new click
        button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button hasn't started / has finished
      button.clock.reset();
      // if button is clicked next frame, it is a new click
      button.wasClicked = false;
    }
    
    // *Frage* updates
    if (t >= 0.0 && Frage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage.tStart = t;  // (not accounting for frame time here)
      Frage.frameNStart = frameN;  // exact frame index
      
      Frage.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Item_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item_1' ---
    for (const thisComponent of Item_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item_1.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider.response', slider.getRating());
    psychoJS.experiment.addData('slider.rt', slider.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
    psychoJS.experiment.addData('button.numClicks', button.numClicks);
    psychoJS.experiment.addData('button.timesOn', button.timesOn);
    psychoJS.experiment.addData('button.timesOff', button.timesOff);
    // the Routine "Item_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Item_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Item_2Clock.reset();
    routineTimer.reset();
    Item_2MaxDurationReached = false;
    // update component parameters for each repeat
    slider_2.reset()
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_2 to account for continued clicks & clear times on/off
    button_2.reset()
    psychoJS.experiment.addData('Item_2.started', globalClock.getTime());
    Item_2MaxDuration = null
    // keep track of which components have finished
    Item_2Components = [];
    Item_2Components.push(slider_2);
    Item_2Components.push(mouse_2);
    Item_2Components.push(button_2);
    Item_2Components.push(Frage_2);
    
    for (const thisComponent of Item_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Item_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item_2' ---
    // get current time
    t = Item_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_2* updates
    if (t >= 0.0 && slider_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_2.tStart = t;  // (not accounting for frame time here)
      slider_2.frameNStart = frameN;  // exact frame index
      
      slider_2.setAutoDraw(true);
    }
    
    // *mouse_2* updates
    if ((slider_2.rating) && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_2.clickableObjects = eval(button_2)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_2.clickableObjects)) {
              mouse_2.clickableObjects = [mouse_2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_2.clickableObjects) {
              if (obj.contains(mouse_2)) {
                  gotValidClick = true;
                  mouse_2.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_2.clicked_name.push(null);
          }
          _mouseXYs = mouse_2.getPos();
          mouse_2.x.push(_mouseXYs[0]);
          mouse_2.y.push(_mouseXYs[1]);
          mouse_2.leftButton.push(_mouseButtons[0]);
          mouse_2.midButton.push(_mouseButtons[1]);
          mouse_2.rightButton.push(_mouseButtons[2]);
          mouse_2.time.push(mouse_2.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_2* updates
    if ((slider_2.rating) && button_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_2.tStart = t;  // (not accounting for frame time here)
      button_2.frameNStart = frameN;  // exact frame index
      
      button_2.setAutoDraw(true);
    }
    
    if (button_2.status === PsychoJS.Status.STARTED) {
      // check whether button_2 has been pressed
      if (button_2.isClicked) {
        if (!button_2.wasClicked) {
          // store time of first click
          button_2.timesOn.push(button_2.clock.getTime());
          // store time clicked until
          button_2.timesOff.push(button_2.clock.getTime());
        } else {
          // update time clicked until;
          button_2.timesOff[button_2.timesOff.length - 1] = button_2.clock.getTime();
        }
        if (!button_2.wasClicked) {
          // end routine when button_2 is clicked
          continueRoutine = false;
          
        }
        // if button_2 is still clicked next frame, it is not a new click
        button_2.wasClicked = true;
      } else {
        // if button_2 is clicked next frame, it is a new click
        button_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_2 hasn't started / has finished
      button_2.clock.reset();
      // if button_2 is clicked next frame, it is a new click
      button_2.wasClicked = false;
    }
    
    // *Frage_2* updates
    if (t >= 0.0 && Frage_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_2.tStart = t;  // (not accounting for frame time here)
      Frage_2.frameNStart = frameN;  // exact frame index
      
      Frage_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Item_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item_2' ---
    for (const thisComponent of Item_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item_2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_2.response', slider_2.getRating());
    psychoJS.experiment.addData('slider_2.rt', slider_2.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_2.x', mouse_2.x);
    psychoJS.experiment.addData('mouse_2.y', mouse_2.y);
    psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton);
    psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton);
    psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton);
    psychoJS.experiment.addData('mouse_2.time', mouse_2.time);
    psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name);
    
    psychoJS.experiment.addData('button_2.numClicks', button_2.numClicks);
    psychoJS.experiment.addData('button_2.timesOn', button_2.timesOn);
    psychoJS.experiment.addData('button_2.timesOff', button_2.timesOff);
    // the Routine "Item_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Item_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item_3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Item_3Clock.reset();
    routineTimer.reset();
    Item_3MaxDurationReached = false;
    // update component parameters for each repeat
    slider_3.reset()
    // setup some python lists for storing info about the mouse_3
    // current position of the mouse:
    mouse_3.x = [];
    mouse_3.y = [];
    mouse_3.leftButton = [];
    mouse_3.midButton = [];
    mouse_3.rightButton = [];
    mouse_3.time = [];
    mouse_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_3 to account for continued clicks & clear times on/off
    button_3.reset()
    psychoJS.experiment.addData('Item_3.started', globalClock.getTime());
    Item_3MaxDuration = null
    // keep track of which components have finished
    Item_3Components = [];
    Item_3Components.push(slider_3);
    Item_3Components.push(mouse_3);
    Item_3Components.push(button_3);
    Item_3Components.push(Frage_3);
    
    for (const thisComponent of Item_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Item_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item_3' ---
    // get current time
    t = Item_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_3* updates
    if (t >= 0.0 && slider_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_3.tStart = t;  // (not accounting for frame time here)
      slider_3.frameNStart = frameN;  // exact frame index
      
      slider_3.setAutoDraw(true);
    }
    
    // *mouse_3* updates
    if ((slider_3.rating) && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_3.clickableObjects = eval(button_3)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_3.clickableObjects)) {
              mouse_3.clickableObjects = [mouse_3.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_3.clickableObjects) {
              if (obj.contains(mouse_3)) {
                  gotValidClick = true;
                  mouse_3.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_3.clicked_name.push(null);
          }
          _mouseXYs = mouse_3.getPos();
          mouse_3.x.push(_mouseXYs[0]);
          mouse_3.y.push(_mouseXYs[1]);
          mouse_3.leftButton.push(_mouseButtons[0]);
          mouse_3.midButton.push(_mouseButtons[1]);
          mouse_3.rightButton.push(_mouseButtons[2]);
          mouse_3.time.push(mouse_3.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_3* updates
    if ((slider_3.rating) && button_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_3.tStart = t;  // (not accounting for frame time here)
      button_3.frameNStart = frameN;  // exact frame index
      
      button_3.setAutoDraw(true);
    }
    
    if (button_3.status === PsychoJS.Status.STARTED) {
      // check whether button_3 has been pressed
      if (button_3.isClicked) {
        if (!button_3.wasClicked) {
          // store time of first click
          button_3.timesOn.push(button_3.clock.getTime());
          // store time clicked until
          button_3.timesOff.push(button_3.clock.getTime());
        } else {
          // update time clicked until;
          button_3.timesOff[button_3.timesOff.length - 1] = button_3.clock.getTime();
        }
        if (!button_3.wasClicked) {
          // end routine when button_3 is clicked
          continueRoutine = false;
          
        }
        // if button_3 is still clicked next frame, it is not a new click
        button_3.wasClicked = true;
      } else {
        // if button_3 is clicked next frame, it is a new click
        button_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_3 hasn't started / has finished
      button_3.clock.reset();
      // if button_3 is clicked next frame, it is a new click
      button_3.wasClicked = false;
    }
    
    // *Frage_3* updates
    if (t >= 0.0 && Frage_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_3.tStart = t;  // (not accounting for frame time here)
      Frage_3.frameNStart = frameN;  // exact frame index
      
      Frage_3.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Item_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item_3' ---
    for (const thisComponent of Item_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item_3.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_3.response', slider_3.getRating());
    psychoJS.experiment.addData('slider_3.rt', slider_3.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_3.x', mouse_3.x);
    psychoJS.experiment.addData('mouse_3.y', mouse_3.y);
    psychoJS.experiment.addData('mouse_3.leftButton', mouse_3.leftButton);
    psychoJS.experiment.addData('mouse_3.midButton', mouse_3.midButton);
    psychoJS.experiment.addData('mouse_3.rightButton', mouse_3.rightButton);
    psychoJS.experiment.addData('mouse_3.time', mouse_3.time);
    psychoJS.experiment.addData('mouse_3.clicked_name', mouse_3.clicked_name);
    
    psychoJS.experiment.addData('button_3.numClicks', button_3.numClicks);
    psychoJS.experiment.addData('button_3.timesOn', button_3.timesOn);
    psychoJS.experiment.addData('button_3.timesOff', button_3.timesOff);
    // the Routine "Item_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Item_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item_4' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Item_4Clock.reset();
    routineTimer.reset();
    Item_4MaxDurationReached = false;
    // update component parameters for each repeat
    slider_4.reset()
    // setup some python lists for storing info about the mouse_4
    // current position of the mouse:
    mouse_4.x = [];
    mouse_4.y = [];
    mouse_4.leftButton = [];
    mouse_4.midButton = [];
    mouse_4.rightButton = [];
    mouse_4.time = [];
    mouse_4.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_4 to account for continued clicks & clear times on/off
    button_4.reset()
    psychoJS.experiment.addData('Item_4.started', globalClock.getTime());
    Item_4MaxDuration = null
    // keep track of which components have finished
    Item_4Components = [];
    Item_4Components.push(slider_4);
    Item_4Components.push(mouse_4);
    Item_4Components.push(button_4);
    Item_4Components.push(Frage_4);
    
    for (const thisComponent of Item_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Item_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item_4' ---
    // get current time
    t = Item_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_4* updates
    if (t >= 0.0 && slider_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_4.tStart = t;  // (not accounting for frame time here)
      slider_4.frameNStart = frameN;  // exact frame index
      
      slider_4.setAutoDraw(true);
    }
    
    // *mouse_4* updates
    if ((slider_4.rating) && mouse_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_4.tStart = t;  // (not accounting for frame time here)
      mouse_4.frameNStart = frameN;  // exact frame index
      
      mouse_4.status = PsychoJS.Status.STARTED;
      mouse_4.mouseClock.reset();
      prevButtonState = mouse_4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_4.clickableObjects = eval(button_4)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_4.clickableObjects)) {
              mouse_4.clickableObjects = [mouse_4.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_4.clickableObjects) {
              if (obj.contains(mouse_4)) {
                  gotValidClick = true;
                  mouse_4.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_4.clicked_name.push(null);
          }
          _mouseXYs = mouse_4.getPos();
          mouse_4.x.push(_mouseXYs[0]);
          mouse_4.y.push(_mouseXYs[1]);
          mouse_4.leftButton.push(_mouseButtons[0]);
          mouse_4.midButton.push(_mouseButtons[1]);
          mouse_4.rightButton.push(_mouseButtons[2]);
          mouse_4.time.push(mouse_4.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_4* updates
    if ((slider_4.rating) && button_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_4.tStart = t;  // (not accounting for frame time here)
      button_4.frameNStart = frameN;  // exact frame index
      
      button_4.setAutoDraw(true);
    }
    
    if (button_4.status === PsychoJS.Status.STARTED) {
      // check whether button_4 has been pressed
      if (button_4.isClicked) {
        if (!button_4.wasClicked) {
          // store time of first click
          button_4.timesOn.push(button_4.clock.getTime());
          // store time clicked until
          button_4.timesOff.push(button_4.clock.getTime());
        } else {
          // update time clicked until;
          button_4.timesOff[button_4.timesOff.length - 1] = button_4.clock.getTime();
        }
        if (!button_4.wasClicked) {
          // end routine when button_4 is clicked
          continueRoutine = false;
          
        }
        // if button_4 is still clicked next frame, it is not a new click
        button_4.wasClicked = true;
      } else {
        // if button_4 is clicked next frame, it is a new click
        button_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_4 hasn't started / has finished
      button_4.clock.reset();
      // if button_4 is clicked next frame, it is a new click
      button_4.wasClicked = false;
    }
    
    // *Frage_4* updates
    if (t >= 0.0 && Frage_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_4.tStart = t;  // (not accounting for frame time here)
      Frage_4.frameNStart = frameN;  // exact frame index
      
      Frage_4.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item_4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Item_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item_4' ---
    for (const thisComponent of Item_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item_4.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_4.response', slider_4.getRating());
    psychoJS.experiment.addData('slider_4.rt', slider_4.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_4.x', mouse_4.x);
    psychoJS.experiment.addData('mouse_4.y', mouse_4.y);
    psychoJS.experiment.addData('mouse_4.leftButton', mouse_4.leftButton);
    psychoJS.experiment.addData('mouse_4.midButton', mouse_4.midButton);
    psychoJS.experiment.addData('mouse_4.rightButton', mouse_4.rightButton);
    psychoJS.experiment.addData('mouse_4.time', mouse_4.time);
    psychoJS.experiment.addData('mouse_4.clicked_name', mouse_4.clicked_name);
    
    psychoJS.experiment.addData('button_4.numClicks', button_4.numClicks);
    psychoJS.experiment.addData('button_4.timesOn', button_4.timesOn);
    psychoJS.experiment.addData('button_4.timesOff', button_4.timesOff);
    // the Routine "Item_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function item_5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'item_5' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    item_5Clock.reset();
    routineTimer.reset();
    item_5MaxDurationReached = false;
    // update component parameters for each repeat
    slider_5.reset()
    // setup some python lists for storing info about the mouse_5
    // current position of the mouse:
    mouse_5.x = [];
    mouse_5.y = [];
    mouse_5.leftButton = [];
    mouse_5.midButton = [];
    mouse_5.rightButton = [];
    mouse_5.time = [];
    mouse_5.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_5 to account for continued clicks & clear times on/off
    button_5.reset()
    psychoJS.experiment.addData('item_5.started', globalClock.getTime());
    item_5MaxDuration = null
    // keep track of which components have finished
    item_5Components = [];
    item_5Components.push(slider_5);
    item_5Components.push(mouse_5);
    item_5Components.push(button_5);
    item_5Components.push(Frage_5);
    
    for (const thisComponent of item_5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function item_5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'item_5' ---
    // get current time
    t = item_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_5* updates
    if (t >= 0.0 && slider_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_5.tStart = t;  // (not accounting for frame time here)
      slider_5.frameNStart = frameN;  // exact frame index
      
      slider_5.setAutoDraw(true);
    }
    
    // *mouse_5* updates
    if ((slider_5.rating) && mouse_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_5.tStart = t;  // (not accounting for frame time here)
      mouse_5.frameNStart = frameN;  // exact frame index
      
      mouse_5.status = PsychoJS.Status.STARTED;
      mouse_5.mouseClock.reset();
      prevButtonState = mouse_5.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_5.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_5.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_5.clickableObjects = eval(button_5)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_5.clickableObjects)) {
              mouse_5.clickableObjects = [mouse_5.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_5.clickableObjects) {
              if (obj.contains(mouse_5)) {
                  gotValidClick = true;
                  mouse_5.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_5.clicked_name.push(null);
          }
          _mouseXYs = mouse_5.getPos();
          mouse_5.x.push(_mouseXYs[0]);
          mouse_5.y.push(_mouseXYs[1]);
          mouse_5.leftButton.push(_mouseButtons[0]);
          mouse_5.midButton.push(_mouseButtons[1]);
          mouse_5.rightButton.push(_mouseButtons[2]);
          mouse_5.time.push(mouse_5.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_5* updates
    if ((slider_5.rating) && button_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_5.tStart = t;  // (not accounting for frame time here)
      button_5.frameNStart = frameN;  // exact frame index
      
      button_5.setAutoDraw(true);
    }
    
    if (button_5.status === PsychoJS.Status.STARTED) {
      // check whether button_5 has been pressed
      if (button_5.isClicked) {
        if (!button_5.wasClicked) {
          // store time of first click
          button_5.timesOn.push(button_5.clock.getTime());
          // store time clicked until
          button_5.timesOff.push(button_5.clock.getTime());
        } else {
          // update time clicked until;
          button_5.timesOff[button_5.timesOff.length - 1] = button_5.clock.getTime();
        }
        if (!button_5.wasClicked) {
          // end routine when button_5 is clicked
          continueRoutine = false;
          
        }
        // if button_5 is still clicked next frame, it is not a new click
        button_5.wasClicked = true;
      } else {
        // if button_5 is clicked next frame, it is a new click
        button_5.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_5 hasn't started / has finished
      button_5.clock.reset();
      // if button_5 is clicked next frame, it is a new click
      button_5.wasClicked = false;
    }
    
    // *Frage_5* updates
    if (t >= 0.0 && Frage_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_5.tStart = t;  // (not accounting for frame time here)
      Frage_5.frameNStart = frameN;  // exact frame index
      
      Frage_5.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of item_5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function item_5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'item_5' ---
    for (const thisComponent of item_5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('item_5.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_5.response', slider_5.getRating());
    psychoJS.experiment.addData('slider_5.rt', slider_5.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_5.x', mouse_5.x);
    psychoJS.experiment.addData('mouse_5.y', mouse_5.y);
    psychoJS.experiment.addData('mouse_5.leftButton', mouse_5.leftButton);
    psychoJS.experiment.addData('mouse_5.midButton', mouse_5.midButton);
    psychoJS.experiment.addData('mouse_5.rightButton', mouse_5.rightButton);
    psychoJS.experiment.addData('mouse_5.time', mouse_5.time);
    psychoJS.experiment.addData('mouse_5.clicked_name', mouse_5.clicked_name);
    
    psychoJS.experiment.addData('button_5.numClicks', button_5.numClicks);
    psychoJS.experiment.addData('button_5.timesOn', button_5.timesOn);
    psychoJS.experiment.addData('button_5.timesOff', button_5.timesOff);
    // the Routine "item_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function item_6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'item_6' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    item_6Clock.reset();
    routineTimer.reset();
    item_6MaxDurationReached = false;
    // update component parameters for each repeat
    slider_6.reset()
    // setup some python lists for storing info about the mouse_6
    // current position of the mouse:
    mouse_6.x = [];
    mouse_6.y = [];
    mouse_6.leftButton = [];
    mouse_6.midButton = [];
    mouse_6.rightButton = [];
    mouse_6.time = [];
    mouse_6.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_6 to account for continued clicks & clear times on/off
    button_6.reset()
    psychoJS.experiment.addData('item_6.started', globalClock.getTime());
    item_6MaxDuration = null
    // keep track of which components have finished
    item_6Components = [];
    item_6Components.push(slider_6);
    item_6Components.push(mouse_6);
    item_6Components.push(button_6);
    item_6Components.push(Frage_6);
    
    for (const thisComponent of item_6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function item_6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'item_6' ---
    // get current time
    t = item_6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_6* updates
    if (t >= 0.0 && slider_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_6.tStart = t;  // (not accounting for frame time here)
      slider_6.frameNStart = frameN;  // exact frame index
      
      slider_6.setAutoDraw(true);
    }
    
    // *mouse_6* updates
    if ((slider_6.rating) && mouse_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_6.tStart = t;  // (not accounting for frame time here)
      mouse_6.frameNStart = frameN;  // exact frame index
      
      mouse_6.status = PsychoJS.Status.STARTED;
      mouse_6.mouseClock.reset();
      prevButtonState = mouse_6.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_6.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_6.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_6.clickableObjects = eval(button_6)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_6.clickableObjects)) {
              mouse_6.clickableObjects = [mouse_6.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_6.clickableObjects) {
              if (obj.contains(mouse_6)) {
                  gotValidClick = true;
                  mouse_6.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_6.clicked_name.push(null);
          }
          _mouseXYs = mouse_6.getPos();
          mouse_6.x.push(_mouseXYs[0]);
          mouse_6.y.push(_mouseXYs[1]);
          mouse_6.leftButton.push(_mouseButtons[0]);
          mouse_6.midButton.push(_mouseButtons[1]);
          mouse_6.rightButton.push(_mouseButtons[2]);
          mouse_6.time.push(mouse_6.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_6* updates
    if ((slider_6.rating) && button_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_6.tStart = t;  // (not accounting for frame time here)
      button_6.frameNStart = frameN;  // exact frame index
      
      button_6.setAutoDraw(true);
    }
    
    if (button_6.status === PsychoJS.Status.STARTED) {
      // check whether button_6 has been pressed
      if (button_6.isClicked) {
        if (!button_6.wasClicked) {
          // store time of first click
          button_6.timesOn.push(button_6.clock.getTime());
          // store time clicked until
          button_6.timesOff.push(button_6.clock.getTime());
        } else {
          // update time clicked until;
          button_6.timesOff[button_6.timesOff.length - 1] = button_6.clock.getTime();
        }
        if (!button_6.wasClicked) {
          // end routine when button_6 is clicked
          continueRoutine = false;
          
        }
        // if button_6 is still clicked next frame, it is not a new click
        button_6.wasClicked = true;
      } else {
        // if button_6 is clicked next frame, it is a new click
        button_6.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_6 hasn't started / has finished
      button_6.clock.reset();
      // if button_6 is clicked next frame, it is a new click
      button_6.wasClicked = false;
    }
    
    // *Frage_6* updates
    if (t >= 0.0 && Frage_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_6.tStart = t;  // (not accounting for frame time here)
      Frage_6.frameNStart = frameN;  // exact frame index
      
      Frage_6.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of item_6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function item_6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'item_6' ---
    for (const thisComponent of item_6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('item_6.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_6.response', slider_6.getRating());
    psychoJS.experiment.addData('slider_6.rt', slider_6.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_6.x', mouse_6.x);
    psychoJS.experiment.addData('mouse_6.y', mouse_6.y);
    psychoJS.experiment.addData('mouse_6.leftButton', mouse_6.leftButton);
    psychoJS.experiment.addData('mouse_6.midButton', mouse_6.midButton);
    psychoJS.experiment.addData('mouse_6.rightButton', mouse_6.rightButton);
    psychoJS.experiment.addData('mouse_6.time', mouse_6.time);
    psychoJS.experiment.addData('mouse_6.clicked_name', mouse_6.clicked_name);
    
    psychoJS.experiment.addData('button_6.numClicks', button_6.numClicks);
    psychoJS.experiment.addData('button_6.timesOn', button_6.timesOn);
    psychoJS.experiment.addData('button_6.timesOff', button_6.timesOff);
    // the Routine "item_6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function item_7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'item_7' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    item_7Clock.reset();
    routineTimer.reset();
    item_7MaxDurationReached = false;
    // update component parameters for each repeat
    slider_7.reset()
    // setup some python lists for storing info about the mouse_7
    // current position of the mouse:
    mouse_7.x = [];
    mouse_7.y = [];
    mouse_7.leftButton = [];
    mouse_7.midButton = [];
    mouse_7.rightButton = [];
    mouse_7.time = [];
    mouse_7.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_7 to account for continued clicks & clear times on/off
    button_7.reset()
    psychoJS.experiment.addData('item_7.started', globalClock.getTime());
    item_7MaxDuration = null
    // keep track of which components have finished
    item_7Components = [];
    item_7Components.push(slider_7);
    item_7Components.push(mouse_7);
    item_7Components.push(button_7);
    item_7Components.push(Frage_7);
    
    for (const thisComponent of item_7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function item_7RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'item_7' ---
    // get current time
    t = item_7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_7* updates
    if (t >= 0.0 && slider_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_7.tStart = t;  // (not accounting for frame time here)
      slider_7.frameNStart = frameN;  // exact frame index
      
      slider_7.setAutoDraw(true);
    }
    
    // *mouse_7* updates
    if ((slider_7.rating) && mouse_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_7.tStart = t;  // (not accounting for frame time here)
      mouse_7.frameNStart = frameN;  // exact frame index
      
      mouse_7.status = PsychoJS.Status.STARTED;
      mouse_7.mouseClock.reset();
      prevButtonState = mouse_7.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_7.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_7.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_7.clickableObjects = eval(button_7)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_7.clickableObjects)) {
              mouse_7.clickableObjects = [mouse_7.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_7.clickableObjects) {
              if (obj.contains(mouse_7)) {
                  gotValidClick = true;
                  mouse_7.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_7.clicked_name.push(null);
          }
          _mouseXYs = mouse_7.getPos();
          mouse_7.x.push(_mouseXYs[0]);
          mouse_7.y.push(_mouseXYs[1]);
          mouse_7.leftButton.push(_mouseButtons[0]);
          mouse_7.midButton.push(_mouseButtons[1]);
          mouse_7.rightButton.push(_mouseButtons[2]);
          mouse_7.time.push(mouse_7.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_7* updates
    if ((slider_7.rating) && button_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_7.tStart = t;  // (not accounting for frame time here)
      button_7.frameNStart = frameN;  // exact frame index
      
      button_7.setAutoDraw(true);
    }
    
    if (button_7.status === PsychoJS.Status.STARTED) {
      // check whether button_7 has been pressed
      if (button_7.isClicked) {
        if (!button_7.wasClicked) {
          // store time of first click
          button_7.timesOn.push(button_7.clock.getTime());
          // store time clicked until
          button_7.timesOff.push(button_7.clock.getTime());
        } else {
          // update time clicked until;
          button_7.timesOff[button_7.timesOff.length - 1] = button_7.clock.getTime();
        }
        if (!button_7.wasClicked) {
          // end routine when button_7 is clicked
          continueRoutine = false;
          
        }
        // if button_7 is still clicked next frame, it is not a new click
        button_7.wasClicked = true;
      } else {
        // if button_7 is clicked next frame, it is a new click
        button_7.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_7 hasn't started / has finished
      button_7.clock.reset();
      // if button_7 is clicked next frame, it is a new click
      button_7.wasClicked = false;
    }
    
    // *Frage_7* updates
    if (t >= 0.0 && Frage_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_7.tStart = t;  // (not accounting for frame time here)
      Frage_7.frameNStart = frameN;  // exact frame index
      
      Frage_7.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of item_7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function item_7RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'item_7' ---
    for (const thisComponent of item_7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('item_7.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_7.response', slider_7.getRating());
    psychoJS.experiment.addData('slider_7.rt', slider_7.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_7.x', mouse_7.x);
    psychoJS.experiment.addData('mouse_7.y', mouse_7.y);
    psychoJS.experiment.addData('mouse_7.leftButton', mouse_7.leftButton);
    psychoJS.experiment.addData('mouse_7.midButton', mouse_7.midButton);
    psychoJS.experiment.addData('mouse_7.rightButton', mouse_7.rightButton);
    psychoJS.experiment.addData('mouse_7.time', mouse_7.time);
    psychoJS.experiment.addData('mouse_7.clicked_name', mouse_7.clicked_name);
    
    psychoJS.experiment.addData('button_7.numClicks', button_7.numClicks);
    psychoJS.experiment.addData('button_7.timesOn', button_7.timesOn);
    psychoJS.experiment.addData('button_7.timesOff', button_7.timesOff);
    // the Routine "item_7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function item_8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'item_8' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    item_8Clock.reset();
    routineTimer.reset();
    item_8MaxDurationReached = false;
    // update component parameters for each repeat
    slider_8.reset()
    // setup some python lists for storing info about the mouse_8
    // current position of the mouse:
    mouse_8.x = [];
    mouse_8.y = [];
    mouse_8.leftButton = [];
    mouse_8.midButton = [];
    mouse_8.rightButton = [];
    mouse_8.time = [];
    mouse_8.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_8 to account for continued clicks & clear times on/off
    button_8.reset()
    psychoJS.experiment.addData('item_8.started', globalClock.getTime());
    item_8MaxDuration = null
    // keep track of which components have finished
    item_8Components = [];
    item_8Components.push(slider_8);
    item_8Components.push(mouse_8);
    item_8Components.push(button_8);
    item_8Components.push(Frage_8);
    
    for (const thisComponent of item_8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function item_8RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'item_8' ---
    // get current time
    t = item_8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_8* updates
    if (t >= 0.0 && slider_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_8.tStart = t;  // (not accounting for frame time here)
      slider_8.frameNStart = frameN;  // exact frame index
      
      slider_8.setAutoDraw(true);
    }
    
    // *mouse_8* updates
    if ((slider_8.rating) && mouse_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_8.tStart = t;  // (not accounting for frame time here)
      mouse_8.frameNStart = frameN;  // exact frame index
      
      mouse_8.status = PsychoJS.Status.STARTED;
      mouse_8.mouseClock.reset();
      prevButtonState = mouse_8.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_8.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_8.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_8.clickableObjects = eval(button_8)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_8.clickableObjects)) {
              mouse_8.clickableObjects = [mouse_8.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_8.clickableObjects) {
              if (obj.contains(mouse_8)) {
                  gotValidClick = true;
                  mouse_8.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_8.clicked_name.push(null);
          }
          _mouseXYs = mouse_8.getPos();
          mouse_8.x.push(_mouseXYs[0]);
          mouse_8.y.push(_mouseXYs[1]);
          mouse_8.leftButton.push(_mouseButtons[0]);
          mouse_8.midButton.push(_mouseButtons[1]);
          mouse_8.rightButton.push(_mouseButtons[2]);
          mouse_8.time.push(mouse_8.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_8* updates
    if ((slider_8.rating) && button_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_8.tStart = t;  // (not accounting for frame time here)
      button_8.frameNStart = frameN;  // exact frame index
      
      button_8.setAutoDraw(true);
    }
    
    if (button_8.status === PsychoJS.Status.STARTED) {
      // check whether button_8 has been pressed
      if (button_8.isClicked) {
        if (!button_8.wasClicked) {
          // store time of first click
          button_8.timesOn.push(button_8.clock.getTime());
          // store time clicked until
          button_8.timesOff.push(button_8.clock.getTime());
        } else {
          // update time clicked until;
          button_8.timesOff[button_8.timesOff.length - 1] = button_8.clock.getTime();
        }
        if (!button_8.wasClicked) {
          // end routine when button_8 is clicked
          continueRoutine = false;
          
        }
        // if button_8 is still clicked next frame, it is not a new click
        button_8.wasClicked = true;
      } else {
        // if button_8 is clicked next frame, it is a new click
        button_8.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_8 hasn't started / has finished
      button_8.clock.reset();
      // if button_8 is clicked next frame, it is a new click
      button_8.wasClicked = false;
    }
    
    // *Frage_8* updates
    if (t >= 0.0 && Frage_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_8.tStart = t;  // (not accounting for frame time here)
      Frage_8.frameNStart = frameN;  // exact frame index
      
      Frage_8.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of item_8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function item_8RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'item_8' ---
    for (const thisComponent of item_8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('item_8.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_8.response', slider_8.getRating());
    psychoJS.experiment.addData('slider_8.rt', slider_8.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_8.x', mouse_8.x);
    psychoJS.experiment.addData('mouse_8.y', mouse_8.y);
    psychoJS.experiment.addData('mouse_8.leftButton', mouse_8.leftButton);
    psychoJS.experiment.addData('mouse_8.midButton', mouse_8.midButton);
    psychoJS.experiment.addData('mouse_8.rightButton', mouse_8.rightButton);
    psychoJS.experiment.addData('mouse_8.time', mouse_8.time);
    psychoJS.experiment.addData('mouse_8.clicked_name', mouse_8.clicked_name);
    
    psychoJS.experiment.addData('button_8.numClicks', button_8.numClicks);
    psychoJS.experiment.addData('button_8.timesOn', button_8.timesOn);
    psychoJS.experiment.addData('button_8.timesOff', button_8.timesOff);
    // the Routine "item_8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Item_9RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item_9' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Item_9Clock.reset();
    routineTimer.reset();
    Item_9MaxDurationReached = false;
    // update component parameters for each repeat
    slider_9.reset()
    // setup some python lists for storing info about the mouse_9
    // current position of the mouse:
    mouse_9.x = [];
    mouse_9.y = [];
    mouse_9.leftButton = [];
    mouse_9.midButton = [];
    mouse_9.rightButton = [];
    mouse_9.time = [];
    mouse_9.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_9 to account for continued clicks & clear times on/off
    button_9.reset()
    psychoJS.experiment.addData('Item_9.started', globalClock.getTime());
    Item_9MaxDuration = null
    // keep track of which components have finished
    Item_9Components = [];
    Item_9Components.push(slider_9);
    Item_9Components.push(mouse_9);
    Item_9Components.push(button_9);
    Item_9Components.push(Frage_9);
    
    for (const thisComponent of Item_9Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Item_9RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item_9' ---
    // get current time
    t = Item_9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_9* updates
    if (t >= 0.0 && slider_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_9.tStart = t;  // (not accounting for frame time here)
      slider_9.frameNStart = frameN;  // exact frame index
      
      slider_9.setAutoDraw(true);
    }
    
    // *mouse_9* updates
    if ((slider_9.rating) && mouse_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_9.tStart = t;  // (not accounting for frame time here)
      mouse_9.frameNStart = frameN;  // exact frame index
      
      mouse_9.status = PsychoJS.Status.STARTED;
      mouse_9.mouseClock.reset();
      prevButtonState = mouse_9.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_9.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_9.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_9.clickableObjects = eval(button_9)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_9.clickableObjects)) {
              mouse_9.clickableObjects = [mouse_9.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_9.clickableObjects) {
              if (obj.contains(mouse_9)) {
                  gotValidClick = true;
                  mouse_9.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_9.clicked_name.push(null);
          }
          _mouseXYs = mouse_9.getPos();
          mouse_9.x.push(_mouseXYs[0]);
          mouse_9.y.push(_mouseXYs[1]);
          mouse_9.leftButton.push(_mouseButtons[0]);
          mouse_9.midButton.push(_mouseButtons[1]);
          mouse_9.rightButton.push(_mouseButtons[2]);
          mouse_9.time.push(mouse_9.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_9* updates
    if ((slider_9.rating) && button_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_9.tStart = t;  // (not accounting for frame time here)
      button_9.frameNStart = frameN;  // exact frame index
      
      button_9.setAutoDraw(true);
    }
    
    if (button_9.status === PsychoJS.Status.STARTED) {
      // check whether button_9 has been pressed
      if (button_9.isClicked) {
        if (!button_9.wasClicked) {
          // store time of first click
          button_9.timesOn.push(button_9.clock.getTime());
          // store time clicked until
          button_9.timesOff.push(button_9.clock.getTime());
        } else {
          // update time clicked until;
          button_9.timesOff[button_9.timesOff.length - 1] = button_9.clock.getTime();
        }
        if (!button_9.wasClicked) {
          // end routine when button_9 is clicked
          continueRoutine = false;
          
        }
        // if button_9 is still clicked next frame, it is not a new click
        button_9.wasClicked = true;
      } else {
        // if button_9 is clicked next frame, it is a new click
        button_9.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_9 hasn't started / has finished
      button_9.clock.reset();
      // if button_9 is clicked next frame, it is a new click
      button_9.wasClicked = false;
    }
    
    // *Frage_9* updates
    if (t >= 0.0 && Frage_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_9.tStart = t;  // (not accounting for frame time here)
      Frage_9.frameNStart = frameN;  // exact frame index
      
      Frage_9.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item_9Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Item_9RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item_9' ---
    for (const thisComponent of Item_9Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item_9.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_9.response', slider_9.getRating());
    psychoJS.experiment.addData('slider_9.rt', slider_9.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_9.x', mouse_9.x);
    psychoJS.experiment.addData('mouse_9.y', mouse_9.y);
    psychoJS.experiment.addData('mouse_9.leftButton', mouse_9.leftButton);
    psychoJS.experiment.addData('mouse_9.midButton', mouse_9.midButton);
    psychoJS.experiment.addData('mouse_9.rightButton', mouse_9.rightButton);
    psychoJS.experiment.addData('mouse_9.time', mouse_9.time);
    psychoJS.experiment.addData('mouse_9.clicked_name', mouse_9.clicked_name);
    
    psychoJS.experiment.addData('button_9.numClicks', button_9.numClicks);
    psychoJS.experiment.addData('button_9.timesOn', button_9.timesOn);
    psychoJS.experiment.addData('button_9.timesOff', button_9.timesOff);
    // the Routine "Item_9" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Item_10RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item_10' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Item_10Clock.reset();
    routineTimer.reset();
    Item_10MaxDurationReached = false;
    // update component parameters for each repeat
    slider_10.reset()
    // setup some python lists for storing info about the mouse_10
    // current position of the mouse:
    mouse_10.x = [];
    mouse_10.y = [];
    mouse_10.leftButton = [];
    mouse_10.midButton = [];
    mouse_10.rightButton = [];
    mouse_10.time = [];
    mouse_10.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_10 to account for continued clicks & clear times on/off
    button_10.reset()
    psychoJS.experiment.addData('Item_10.started', globalClock.getTime());
    Item_10MaxDuration = null
    // keep track of which components have finished
    Item_10Components = [];
    Item_10Components.push(slider_10);
    Item_10Components.push(mouse_10);
    Item_10Components.push(button_10);
    Item_10Components.push(Frage_10);
    
    for (const thisComponent of Item_10Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Item_10RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item_10' ---
    // get current time
    t = Item_10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_10* updates
    if (t >= 0.0 && slider_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_10.tStart = t;  // (not accounting for frame time here)
      slider_10.frameNStart = frameN;  // exact frame index
      
      slider_10.setAutoDraw(true);
    }
    
    // *mouse_10* updates
    if ((slider_10.rating) && mouse_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_10.tStart = t;  // (not accounting for frame time here)
      mouse_10.frameNStart = frameN;  // exact frame index
      
      mouse_10.status = PsychoJS.Status.STARTED;
      mouse_10.mouseClock.reset();
      prevButtonState = mouse_10.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_10.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_10.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_10.clickableObjects = eval(button_10)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_10.clickableObjects)) {
              mouse_10.clickableObjects = [mouse_10.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_10.clickableObjects) {
              if (obj.contains(mouse_10)) {
                  gotValidClick = true;
                  mouse_10.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_10.clicked_name.push(null);
          }
          _mouseXYs = mouse_10.getPos();
          mouse_10.x.push(_mouseXYs[0]);
          mouse_10.y.push(_mouseXYs[1]);
          mouse_10.leftButton.push(_mouseButtons[0]);
          mouse_10.midButton.push(_mouseButtons[1]);
          mouse_10.rightButton.push(_mouseButtons[2]);
          mouse_10.time.push(mouse_10.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_10* updates
    if ((slider_10.rating) && button_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_10.tStart = t;  // (not accounting for frame time here)
      button_10.frameNStart = frameN;  // exact frame index
      
      button_10.setAutoDraw(true);
    }
    
    if (button_10.status === PsychoJS.Status.STARTED) {
      // check whether button_10 has been pressed
      if (button_10.isClicked) {
        if (!button_10.wasClicked) {
          // store time of first click
          button_10.timesOn.push(button_10.clock.getTime());
          // store time clicked until
          button_10.timesOff.push(button_10.clock.getTime());
        } else {
          // update time clicked until;
          button_10.timesOff[button_10.timesOff.length - 1] = button_10.clock.getTime();
        }
        if (!button_10.wasClicked) {
          // end routine when button_10 is clicked
          continueRoutine = false;
          
        }
        // if button_10 is still clicked next frame, it is not a new click
        button_10.wasClicked = true;
      } else {
        // if button_10 is clicked next frame, it is a new click
        button_10.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_10 hasn't started / has finished
      button_10.clock.reset();
      // if button_10 is clicked next frame, it is a new click
      button_10.wasClicked = false;
    }
    
    // *Frage_10* updates
    if (t >= 0.0 && Frage_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_10.tStart = t;  // (not accounting for frame time here)
      Frage_10.frameNStart = frameN;  // exact frame index
      
      Frage_10.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item_10Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Item_10RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item_10' ---
    for (const thisComponent of Item_10Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item_10.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_10.response', slider_10.getRating());
    psychoJS.experiment.addData('slider_10.rt', slider_10.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_10.x', mouse_10.x);
    psychoJS.experiment.addData('mouse_10.y', mouse_10.y);
    psychoJS.experiment.addData('mouse_10.leftButton', mouse_10.leftButton);
    psychoJS.experiment.addData('mouse_10.midButton', mouse_10.midButton);
    psychoJS.experiment.addData('mouse_10.rightButton', mouse_10.rightButton);
    psychoJS.experiment.addData('mouse_10.time', mouse_10.time);
    psychoJS.experiment.addData('mouse_10.clicked_name', mouse_10.clicked_name);
    
    psychoJS.experiment.addData('button_10.numClicks', button_10.numClicks);
    psychoJS.experiment.addData('button_10.timesOn', button_10.timesOn);
    psychoJS.experiment.addData('button_10.timesOff', button_10.timesOff);
    // the Routine "Item_10" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Item_11RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item_11' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Item_11Clock.reset();
    routineTimer.reset();
    Item_11MaxDurationReached = false;
    // update component parameters for each repeat
    slider_11.reset()
    // setup some python lists for storing info about the mouse_11
    // current position of the mouse:
    mouse_11.x = [];
    mouse_11.y = [];
    mouse_11.leftButton = [];
    mouse_11.midButton = [];
    mouse_11.rightButton = [];
    mouse_11.time = [];
    mouse_11.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_11 to account for continued clicks & clear times on/off
    button_11.reset()
    psychoJS.experiment.addData('Item_11.started', globalClock.getTime());
    Item_11MaxDuration = null
    // keep track of which components have finished
    Item_11Components = [];
    Item_11Components.push(slider_11);
    Item_11Components.push(mouse_11);
    Item_11Components.push(button_11);
    Item_11Components.push(Frage_11);
    
    for (const thisComponent of Item_11Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Item_11RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item_11' ---
    // get current time
    t = Item_11Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_11* updates
    if (t >= 0.0 && slider_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_11.tStart = t;  // (not accounting for frame time here)
      slider_11.frameNStart = frameN;  // exact frame index
      
      slider_11.setAutoDraw(true);
    }
    
    // *mouse_11* updates
    if ((slider_11.rating) && mouse_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_11.tStart = t;  // (not accounting for frame time here)
      mouse_11.frameNStart = frameN;  // exact frame index
      
      mouse_11.status = PsychoJS.Status.STARTED;
      mouse_11.mouseClock.reset();
      prevButtonState = mouse_11.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_11.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_11.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_11.clickableObjects = eval(button_11)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_11.clickableObjects)) {
              mouse_11.clickableObjects = [mouse_11.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_11.clickableObjects) {
              if (obj.contains(mouse_11)) {
                  gotValidClick = true;
                  mouse_11.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_11.clicked_name.push(null);
          }
          _mouseXYs = mouse_11.getPos();
          mouse_11.x.push(_mouseXYs[0]);
          mouse_11.y.push(_mouseXYs[1]);
          mouse_11.leftButton.push(_mouseButtons[0]);
          mouse_11.midButton.push(_mouseButtons[1]);
          mouse_11.rightButton.push(_mouseButtons[2]);
          mouse_11.time.push(mouse_11.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_11* updates
    if ((slider_11.rating) && button_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_11.tStart = t;  // (not accounting for frame time here)
      button_11.frameNStart = frameN;  // exact frame index
      
      button_11.setAutoDraw(true);
    }
    
    if (button_11.status === PsychoJS.Status.STARTED) {
      // check whether button_11 has been pressed
      if (button_11.isClicked) {
        if (!button_11.wasClicked) {
          // store time of first click
          button_11.timesOn.push(button_11.clock.getTime());
          // store time clicked until
          button_11.timesOff.push(button_11.clock.getTime());
        } else {
          // update time clicked until;
          button_11.timesOff[button_11.timesOff.length - 1] = button_11.clock.getTime();
        }
        if (!button_11.wasClicked) {
          // end routine when button_11 is clicked
          continueRoutine = false;
          
        }
        // if button_11 is still clicked next frame, it is not a new click
        button_11.wasClicked = true;
      } else {
        // if button_11 is clicked next frame, it is a new click
        button_11.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_11 hasn't started / has finished
      button_11.clock.reset();
      // if button_11 is clicked next frame, it is a new click
      button_11.wasClicked = false;
    }
    
    // *Frage_11* updates
    if (t >= 0.0 && Frage_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_11.tStart = t;  // (not accounting for frame time here)
      Frage_11.frameNStart = frameN;  // exact frame index
      
      Frage_11.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item_11Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Item_11RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item_11' ---
    for (const thisComponent of Item_11Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item_11.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_11.response', slider_11.getRating());
    psychoJS.experiment.addData('slider_11.rt', slider_11.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_11.x', mouse_11.x);
    psychoJS.experiment.addData('mouse_11.y', mouse_11.y);
    psychoJS.experiment.addData('mouse_11.leftButton', mouse_11.leftButton);
    psychoJS.experiment.addData('mouse_11.midButton', mouse_11.midButton);
    psychoJS.experiment.addData('mouse_11.rightButton', mouse_11.rightButton);
    psychoJS.experiment.addData('mouse_11.time', mouse_11.time);
    psychoJS.experiment.addData('mouse_11.clicked_name', mouse_11.clicked_name);
    
    psychoJS.experiment.addData('button_11.numClicks', button_11.numClicks);
    psychoJS.experiment.addData('button_11.timesOn', button_11.timesOn);
    psychoJS.experiment.addData('button_11.timesOff', button_11.timesOff);
    // the Routine "Item_11" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Item_12RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item_12' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Item_12Clock.reset();
    routineTimer.reset();
    Item_12MaxDurationReached = false;
    // update component parameters for each repeat
    slider_12.reset()
    // setup some python lists for storing info about the mouse_12
    // current position of the mouse:
    mouse_12.x = [];
    mouse_12.y = [];
    mouse_12.leftButton = [];
    mouse_12.midButton = [];
    mouse_12.rightButton = [];
    mouse_12.time = [];
    mouse_12.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_12 to account for continued clicks & clear times on/off
    button_12.reset()
    psychoJS.experiment.addData('Item_12.started', globalClock.getTime());
    Item_12MaxDuration = null
    // keep track of which components have finished
    Item_12Components = [];
    Item_12Components.push(slider_12);
    Item_12Components.push(mouse_12);
    Item_12Components.push(button_12);
    Item_12Components.push(Frage_12);
    
    for (const thisComponent of Item_12Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Item_12RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item_12' ---
    // get current time
    t = Item_12Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_12* updates
    if (t >= 0.0 && slider_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_12.tStart = t;  // (not accounting for frame time here)
      slider_12.frameNStart = frameN;  // exact frame index
      
      slider_12.setAutoDraw(true);
    }
    
    // *mouse_12* updates
    if ((slider_12.rating) && mouse_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_12.tStart = t;  // (not accounting for frame time here)
      mouse_12.frameNStart = frameN;  // exact frame index
      
      mouse_12.status = PsychoJS.Status.STARTED;
      mouse_12.mouseClock.reset();
      prevButtonState = mouse_12.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_12.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_12.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_12.clickableObjects = eval(button_12)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_12.clickableObjects)) {
              mouse_12.clickableObjects = [mouse_12.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_12.clickableObjects) {
              if (obj.contains(mouse_12)) {
                  gotValidClick = true;
                  mouse_12.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_12.clicked_name.push(null);
          }
          _mouseXYs = mouse_12.getPos();
          mouse_12.x.push(_mouseXYs[0]);
          mouse_12.y.push(_mouseXYs[1]);
          mouse_12.leftButton.push(_mouseButtons[0]);
          mouse_12.midButton.push(_mouseButtons[1]);
          mouse_12.rightButton.push(_mouseButtons[2]);
          mouse_12.time.push(mouse_12.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_12* updates
    if ((slider_12.rating) && button_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_12.tStart = t;  // (not accounting for frame time here)
      button_12.frameNStart = frameN;  // exact frame index
      
      button_12.setAutoDraw(true);
    }
    
    if (button_12.status === PsychoJS.Status.STARTED) {
      // check whether button_12 has been pressed
      if (button_12.isClicked) {
        if (!button_12.wasClicked) {
          // store time of first click
          button_12.timesOn.push(button_12.clock.getTime());
          // store time clicked until
          button_12.timesOff.push(button_12.clock.getTime());
        } else {
          // update time clicked until;
          button_12.timesOff[button_12.timesOff.length - 1] = button_12.clock.getTime();
        }
        if (!button_12.wasClicked) {
          // end routine when button_12 is clicked
          continueRoutine = false;
          
        }
        // if button_12 is still clicked next frame, it is not a new click
        button_12.wasClicked = true;
      } else {
        // if button_12 is clicked next frame, it is a new click
        button_12.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_12 hasn't started / has finished
      button_12.clock.reset();
      // if button_12 is clicked next frame, it is a new click
      button_12.wasClicked = false;
    }
    
    // *Frage_12* updates
    if (t >= 0.0 && Frage_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_12.tStart = t;  // (not accounting for frame time here)
      Frage_12.frameNStart = frameN;  // exact frame index
      
      Frage_12.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item_12Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Item_12RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item_12' ---
    for (const thisComponent of Item_12Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item_12.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_12.response', slider_12.getRating());
    psychoJS.experiment.addData('slider_12.rt', slider_12.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_12.x', mouse_12.x);
    psychoJS.experiment.addData('mouse_12.y', mouse_12.y);
    psychoJS.experiment.addData('mouse_12.leftButton', mouse_12.leftButton);
    psychoJS.experiment.addData('mouse_12.midButton', mouse_12.midButton);
    psychoJS.experiment.addData('mouse_12.rightButton', mouse_12.rightButton);
    psychoJS.experiment.addData('mouse_12.time', mouse_12.time);
    psychoJS.experiment.addData('mouse_12.clicked_name', mouse_12.clicked_name);
    
    psychoJS.experiment.addData('button_12.numClicks', button_12.numClicks);
    psychoJS.experiment.addData('button_12.timesOn', button_12.timesOn);
    psychoJS.experiment.addData('button_12.timesOff', button_12.timesOff);
    // the Routine "Item_12" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Item_13RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item_13' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Item_13Clock.reset();
    routineTimer.reset();
    Item_13MaxDurationReached = false;
    // update component parameters for each repeat
    slider_13.reset()
    // setup some python lists for storing info about the mouse_13
    // current position of the mouse:
    mouse_13.x = [];
    mouse_13.y = [];
    mouse_13.leftButton = [];
    mouse_13.midButton = [];
    mouse_13.rightButton = [];
    mouse_13.time = [];
    mouse_13.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_13 to account for continued clicks & clear times on/off
    button_13.reset()
    psychoJS.experiment.addData('Item_13.started', globalClock.getTime());
    Item_13MaxDuration = null
    // keep track of which components have finished
    Item_13Components = [];
    Item_13Components.push(slider_13);
    Item_13Components.push(mouse_13);
    Item_13Components.push(button_13);
    Item_13Components.push(Frage_13);
    
    for (const thisComponent of Item_13Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Item_13RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item_13' ---
    // get current time
    t = Item_13Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_13* updates
    if (t >= 0.0 && slider_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_13.tStart = t;  // (not accounting for frame time here)
      slider_13.frameNStart = frameN;  // exact frame index
      
      slider_13.setAutoDraw(true);
    }
    
    // *mouse_13* updates
    if ((slider_13.rating) && mouse_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_13.tStart = t;  // (not accounting for frame time here)
      mouse_13.frameNStart = frameN;  // exact frame index
      
      mouse_13.status = PsychoJS.Status.STARTED;
      mouse_13.mouseClock.reset();
      prevButtonState = mouse_13.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_13.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_13.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_13.clickableObjects = eval(button_13)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_13.clickableObjects)) {
              mouse_13.clickableObjects = [mouse_13.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_13.clickableObjects) {
              if (obj.contains(mouse_13)) {
                  gotValidClick = true;
                  mouse_13.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_13.clicked_name.push(null);
          }
          _mouseXYs = mouse_13.getPos();
          mouse_13.x.push(_mouseXYs[0]);
          mouse_13.y.push(_mouseXYs[1]);
          mouse_13.leftButton.push(_mouseButtons[0]);
          mouse_13.midButton.push(_mouseButtons[1]);
          mouse_13.rightButton.push(_mouseButtons[2]);
          mouse_13.time.push(mouse_13.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_13* updates
    if ((slider_13.rating) && button_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_13.tStart = t;  // (not accounting for frame time here)
      button_13.frameNStart = frameN;  // exact frame index
      
      button_13.setAutoDraw(true);
    }
    
    if (button_13.status === PsychoJS.Status.STARTED) {
      // check whether button_13 has been pressed
      if (button_13.isClicked) {
        if (!button_13.wasClicked) {
          // store time of first click
          button_13.timesOn.push(button_13.clock.getTime());
          // store time clicked until
          button_13.timesOff.push(button_13.clock.getTime());
        } else {
          // update time clicked until;
          button_13.timesOff[button_13.timesOff.length - 1] = button_13.clock.getTime();
        }
        if (!button_13.wasClicked) {
          // end routine when button_13 is clicked
          continueRoutine = false;
          
        }
        // if button_13 is still clicked next frame, it is not a new click
        button_13.wasClicked = true;
      } else {
        // if button_13 is clicked next frame, it is a new click
        button_13.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_13 hasn't started / has finished
      button_13.clock.reset();
      // if button_13 is clicked next frame, it is a new click
      button_13.wasClicked = false;
    }
    
    // *Frage_13* updates
    if (t >= 0.0 && Frage_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_13.tStart = t;  // (not accounting for frame time here)
      Frage_13.frameNStart = frameN;  // exact frame index
      
      Frage_13.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item_13Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Item_13RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item_13' ---
    for (const thisComponent of Item_13Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item_13.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_13.response', slider_13.getRating());
    psychoJS.experiment.addData('slider_13.rt', slider_13.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_13.x', mouse_13.x);
    psychoJS.experiment.addData('mouse_13.y', mouse_13.y);
    psychoJS.experiment.addData('mouse_13.leftButton', mouse_13.leftButton);
    psychoJS.experiment.addData('mouse_13.midButton', mouse_13.midButton);
    psychoJS.experiment.addData('mouse_13.rightButton', mouse_13.rightButton);
    psychoJS.experiment.addData('mouse_13.time', mouse_13.time);
    psychoJS.experiment.addData('mouse_13.clicked_name', mouse_13.clicked_name);
    
    psychoJS.experiment.addData('button_13.numClicks', button_13.numClicks);
    psychoJS.experiment.addData('button_13.timesOn', button_13.timesOn);
    psychoJS.experiment.addData('button_13.timesOff', button_13.timesOff);
    // the Routine "Item_13" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Item_14RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item_14' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Item_14Clock.reset();
    routineTimer.reset();
    Item_14MaxDurationReached = false;
    // update component parameters for each repeat
    slider_14.reset()
    // setup some python lists for storing info about the mouse_14
    // current position of the mouse:
    mouse_14.x = [];
    mouse_14.y = [];
    mouse_14.leftButton = [];
    mouse_14.midButton = [];
    mouse_14.rightButton = [];
    mouse_14.time = [];
    mouse_14.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_14 to account for continued clicks & clear times on/off
    button_14.reset()
    psychoJS.experiment.addData('Item_14.started', globalClock.getTime());
    Item_14MaxDuration = null
    // keep track of which components have finished
    Item_14Components = [];
    Item_14Components.push(slider_14);
    Item_14Components.push(mouse_14);
    Item_14Components.push(button_14);
    Item_14Components.push(Frage_14);
    
    for (const thisComponent of Item_14Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Item_14RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item_14' ---
    // get current time
    t = Item_14Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_14* updates
    if (t >= 0.0 && slider_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_14.tStart = t;  // (not accounting for frame time here)
      slider_14.frameNStart = frameN;  // exact frame index
      
      slider_14.setAutoDraw(true);
    }
    
    // *mouse_14* updates
    if ((slider_14.rating) && mouse_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_14.tStart = t;  // (not accounting for frame time here)
      mouse_14.frameNStart = frameN;  // exact frame index
      
      mouse_14.status = PsychoJS.Status.STARTED;
      mouse_14.mouseClock.reset();
      prevButtonState = mouse_14.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_14.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_14.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_14.clickableObjects = eval(button_14)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_14.clickableObjects)) {
              mouse_14.clickableObjects = [mouse_14.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_14.clickableObjects) {
              if (obj.contains(mouse_14)) {
                  gotValidClick = true;
                  mouse_14.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_14.clicked_name.push(null);
          }
          _mouseXYs = mouse_14.getPos();
          mouse_14.x.push(_mouseXYs[0]);
          mouse_14.y.push(_mouseXYs[1]);
          mouse_14.leftButton.push(_mouseButtons[0]);
          mouse_14.midButton.push(_mouseButtons[1]);
          mouse_14.rightButton.push(_mouseButtons[2]);
          mouse_14.time.push(mouse_14.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_14* updates
    if ((slider_14.rating) && button_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_14.tStart = t;  // (not accounting for frame time here)
      button_14.frameNStart = frameN;  // exact frame index
      
      button_14.setAutoDraw(true);
    }
    
    if (button_14.status === PsychoJS.Status.STARTED) {
      // check whether button_14 has been pressed
      if (button_14.isClicked) {
        if (!button_14.wasClicked) {
          // store time of first click
          button_14.timesOn.push(button_14.clock.getTime());
          // store time clicked until
          button_14.timesOff.push(button_14.clock.getTime());
        } else {
          // update time clicked until;
          button_14.timesOff[button_14.timesOff.length - 1] = button_14.clock.getTime();
        }
        if (!button_14.wasClicked) {
          // end routine when button_14 is clicked
          continueRoutine = false;
          
        }
        // if button_14 is still clicked next frame, it is not a new click
        button_14.wasClicked = true;
      } else {
        // if button_14 is clicked next frame, it is a new click
        button_14.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_14 hasn't started / has finished
      button_14.clock.reset();
      // if button_14 is clicked next frame, it is a new click
      button_14.wasClicked = false;
    }
    
    // *Frage_14* updates
    if (t >= 0.0 && Frage_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_14.tStart = t;  // (not accounting for frame time here)
      Frage_14.frameNStart = frameN;  // exact frame index
      
      Frage_14.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item_14Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Item_14RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item_14' ---
    for (const thisComponent of Item_14Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item_14.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_14.response', slider_14.getRating());
    psychoJS.experiment.addData('slider_14.rt', slider_14.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_14.x', mouse_14.x);
    psychoJS.experiment.addData('mouse_14.y', mouse_14.y);
    psychoJS.experiment.addData('mouse_14.leftButton', mouse_14.leftButton);
    psychoJS.experiment.addData('mouse_14.midButton', mouse_14.midButton);
    psychoJS.experiment.addData('mouse_14.rightButton', mouse_14.rightButton);
    psychoJS.experiment.addData('mouse_14.time', mouse_14.time);
    psychoJS.experiment.addData('mouse_14.clicked_name', mouse_14.clicked_name);
    
    psychoJS.experiment.addData('button_14.numClicks', button_14.numClicks);
    psychoJS.experiment.addData('button_14.timesOn', button_14.timesOn);
    psychoJS.experiment.addData('button_14.timesOff', button_14.timesOff);
    // the Routine "Item_14" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Item_15RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item_15' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Item_15Clock.reset();
    routineTimer.reset();
    Item_15MaxDurationReached = false;
    // update component parameters for each repeat
    slider_15.reset()
    // setup some python lists for storing info about the mouse_15
    // current position of the mouse:
    mouse_15.x = [];
    mouse_15.y = [];
    mouse_15.leftButton = [];
    mouse_15.midButton = [];
    mouse_15.rightButton = [];
    mouse_15.time = [];
    mouse_15.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_15 to account for continued clicks & clear times on/off
    button_15.reset()
    psychoJS.experiment.addData('Item_15.started', globalClock.getTime());
    Item_15MaxDuration = null
    // keep track of which components have finished
    Item_15Components = [];
    Item_15Components.push(slider_15);
    Item_15Components.push(mouse_15);
    Item_15Components.push(button_15);
    Item_15Components.push(Frage_15);
    
    for (const thisComponent of Item_15Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Item_15RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item_15' ---
    // get current time
    t = Item_15Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_15* updates
    if (t >= 0.0 && slider_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_15.tStart = t;  // (not accounting for frame time here)
      slider_15.frameNStart = frameN;  // exact frame index
      
      slider_15.setAutoDraw(true);
    }
    
    // *mouse_15* updates
    if ((slider_15.rating) && mouse_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_15.tStart = t;  // (not accounting for frame time here)
      mouse_15.frameNStart = frameN;  // exact frame index
      
      mouse_15.status = PsychoJS.Status.STARTED;
      mouse_15.mouseClock.reset();
      prevButtonState = mouse_15.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_15.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_15.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_15.clickableObjects = eval(button_15)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_15.clickableObjects)) {
              mouse_15.clickableObjects = [mouse_15.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_15.clickableObjects) {
              if (obj.contains(mouse_15)) {
                  gotValidClick = true;
                  mouse_15.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_15.clicked_name.push(null);
          }
          _mouseXYs = mouse_15.getPos();
          mouse_15.x.push(_mouseXYs[0]);
          mouse_15.y.push(_mouseXYs[1]);
          mouse_15.leftButton.push(_mouseButtons[0]);
          mouse_15.midButton.push(_mouseButtons[1]);
          mouse_15.rightButton.push(_mouseButtons[2]);
          mouse_15.time.push(mouse_15.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_15* updates
    if ((slider_15.rating) && button_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_15.tStart = t;  // (not accounting for frame time here)
      button_15.frameNStart = frameN;  // exact frame index
      
      button_15.setAutoDraw(true);
    }
    
    if (button_15.status === PsychoJS.Status.STARTED) {
      // check whether button_15 has been pressed
      if (button_15.isClicked) {
        if (!button_15.wasClicked) {
          // store time of first click
          button_15.timesOn.push(button_15.clock.getTime());
          // store time clicked until
          button_15.timesOff.push(button_15.clock.getTime());
        } else {
          // update time clicked until;
          button_15.timesOff[button_15.timesOff.length - 1] = button_15.clock.getTime();
        }
        if (!button_15.wasClicked) {
          // end routine when button_15 is clicked
          continueRoutine = false;
          
        }
        // if button_15 is still clicked next frame, it is not a new click
        button_15.wasClicked = true;
      } else {
        // if button_15 is clicked next frame, it is a new click
        button_15.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_15 hasn't started / has finished
      button_15.clock.reset();
      // if button_15 is clicked next frame, it is a new click
      button_15.wasClicked = false;
    }
    
    // *Frage_15* updates
    if (t >= 0.0 && Frage_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_15.tStart = t;  // (not accounting for frame time here)
      Frage_15.frameNStart = frameN;  // exact frame index
      
      Frage_15.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item_15Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Item_15RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item_15' ---
    for (const thisComponent of Item_15Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item_15.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_15.response', slider_15.getRating());
    psychoJS.experiment.addData('slider_15.rt', slider_15.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_15.x', mouse_15.x);
    psychoJS.experiment.addData('mouse_15.y', mouse_15.y);
    psychoJS.experiment.addData('mouse_15.leftButton', mouse_15.leftButton);
    psychoJS.experiment.addData('mouse_15.midButton', mouse_15.midButton);
    psychoJS.experiment.addData('mouse_15.rightButton', mouse_15.rightButton);
    psychoJS.experiment.addData('mouse_15.time', mouse_15.time);
    psychoJS.experiment.addData('mouse_15.clicked_name', mouse_15.clicked_name);
    
    psychoJS.experiment.addData('button_15.numClicks', button_15.numClicks);
    psychoJS.experiment.addData('button_15.timesOn', button_15.timesOn);
    psychoJS.experiment.addData('button_15.timesOff', button_15.timesOff);
    // the Routine "Item_15" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Item_16RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item_16' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Item_16Clock.reset();
    routineTimer.reset();
    Item_16MaxDurationReached = false;
    // update component parameters for each repeat
    slider_16.reset()
    // setup some python lists for storing info about the mouse_16
    // current position of the mouse:
    mouse_16.x = [];
    mouse_16.y = [];
    mouse_16.leftButton = [];
    mouse_16.midButton = [];
    mouse_16.rightButton = [];
    mouse_16.time = [];
    mouse_16.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_16 to account for continued clicks & clear times on/off
    button_16.reset()
    psychoJS.experiment.addData('Item_16.started', globalClock.getTime());
    Item_16MaxDuration = null
    // keep track of which components have finished
    Item_16Components = [];
    Item_16Components.push(slider_16);
    Item_16Components.push(mouse_16);
    Item_16Components.push(button_16);
    Item_16Components.push(Frage_16);
    
    for (const thisComponent of Item_16Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Item_16RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item_16' ---
    // get current time
    t = Item_16Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_16* updates
    if (t >= 0.0 && slider_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_16.tStart = t;  // (not accounting for frame time here)
      slider_16.frameNStart = frameN;  // exact frame index
      
      slider_16.setAutoDraw(true);
    }
    
    // *mouse_16* updates
    if ((slider_16.rating) && mouse_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_16.tStart = t;  // (not accounting for frame time here)
      mouse_16.frameNStart = frameN;  // exact frame index
      
      mouse_16.status = PsychoJS.Status.STARTED;
      mouse_16.mouseClock.reset();
      prevButtonState = mouse_16.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_16.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_16.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_16.clickableObjects = eval(button_16)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_16.clickableObjects)) {
              mouse_16.clickableObjects = [mouse_16.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_16.clickableObjects) {
              if (obj.contains(mouse_16)) {
                  gotValidClick = true;
                  mouse_16.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_16.clicked_name.push(null);
          }
          _mouseXYs = mouse_16.getPos();
          mouse_16.x.push(_mouseXYs[0]);
          mouse_16.y.push(_mouseXYs[1]);
          mouse_16.leftButton.push(_mouseButtons[0]);
          mouse_16.midButton.push(_mouseButtons[1]);
          mouse_16.rightButton.push(_mouseButtons[2]);
          mouse_16.time.push(mouse_16.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_16* updates
    if ((slider_16.rating) && button_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_16.tStart = t;  // (not accounting for frame time here)
      button_16.frameNStart = frameN;  // exact frame index
      
      button_16.setAutoDraw(true);
    }
    
    if (button_16.status === PsychoJS.Status.STARTED) {
      // check whether button_16 has been pressed
      if (button_16.isClicked) {
        if (!button_16.wasClicked) {
          // store time of first click
          button_16.timesOn.push(button_16.clock.getTime());
          // store time clicked until
          button_16.timesOff.push(button_16.clock.getTime());
        } else {
          // update time clicked until;
          button_16.timesOff[button_16.timesOff.length - 1] = button_16.clock.getTime();
        }
        if (!button_16.wasClicked) {
          // end routine when button_16 is clicked
          continueRoutine = false;
          
        }
        // if button_16 is still clicked next frame, it is not a new click
        button_16.wasClicked = true;
      } else {
        // if button_16 is clicked next frame, it is a new click
        button_16.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_16 hasn't started / has finished
      button_16.clock.reset();
      // if button_16 is clicked next frame, it is a new click
      button_16.wasClicked = false;
    }
    
    // *Frage_16* updates
    if (t >= 0.0 && Frage_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_16.tStart = t;  // (not accounting for frame time here)
      Frage_16.frameNStart = frameN;  // exact frame index
      
      Frage_16.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item_16Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Item_16RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item_16' ---
    for (const thisComponent of Item_16Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item_16.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_16.response', slider_16.getRating());
    psychoJS.experiment.addData('slider_16.rt', slider_16.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_16.x', mouse_16.x);
    psychoJS.experiment.addData('mouse_16.y', mouse_16.y);
    psychoJS.experiment.addData('mouse_16.leftButton', mouse_16.leftButton);
    psychoJS.experiment.addData('mouse_16.midButton', mouse_16.midButton);
    psychoJS.experiment.addData('mouse_16.rightButton', mouse_16.rightButton);
    psychoJS.experiment.addData('mouse_16.time', mouse_16.time);
    psychoJS.experiment.addData('mouse_16.clicked_name', mouse_16.clicked_name);
    
    psychoJS.experiment.addData('button_16.numClicks', button_16.numClicks);
    psychoJS.experiment.addData('button_16.timesOn', button_16.timesOn);
    psychoJS.experiment.addData('button_16.timesOff', button_16.timesOff);
    // the Routine "Item_16" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Item_17RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item_17' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Item_17Clock.reset();
    routineTimer.reset();
    Item_17MaxDurationReached = false;
    // update component parameters for each repeat
    slider_17.reset()
    // setup some python lists for storing info about the mouse_17
    // current position of the mouse:
    mouse_17.x = [];
    mouse_17.y = [];
    mouse_17.leftButton = [];
    mouse_17.midButton = [];
    mouse_17.rightButton = [];
    mouse_17.time = [];
    mouse_17.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_17 to account for continued clicks & clear times on/off
    button_17.reset()
    psychoJS.experiment.addData('Item_17.started', globalClock.getTime());
    Item_17MaxDuration = null
    // keep track of which components have finished
    Item_17Components = [];
    Item_17Components.push(slider_17);
    Item_17Components.push(mouse_17);
    Item_17Components.push(button_17);
    Item_17Components.push(Frage_17);
    
    for (const thisComponent of Item_17Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Item_17RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item_17' ---
    // get current time
    t = Item_17Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_17* updates
    if (t >= 0.0 && slider_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_17.tStart = t;  // (not accounting for frame time here)
      slider_17.frameNStart = frameN;  // exact frame index
      
      slider_17.setAutoDraw(true);
    }
    
    // *mouse_17* updates
    if ((slider_17.rating) && mouse_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_17.tStart = t;  // (not accounting for frame time here)
      mouse_17.frameNStart = frameN;  // exact frame index
      
      mouse_17.status = PsychoJS.Status.STARTED;
      mouse_17.mouseClock.reset();
      prevButtonState = mouse_17.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_17.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_17.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_17.clickableObjects = eval(button_17)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_17.clickableObjects)) {
              mouse_17.clickableObjects = [mouse_17.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_17.clickableObjects) {
              if (obj.contains(mouse_17)) {
                  gotValidClick = true;
                  mouse_17.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_17.clicked_name.push(null);
          }
          _mouseXYs = mouse_17.getPos();
          mouse_17.x.push(_mouseXYs[0]);
          mouse_17.y.push(_mouseXYs[1]);
          mouse_17.leftButton.push(_mouseButtons[0]);
          mouse_17.midButton.push(_mouseButtons[1]);
          mouse_17.rightButton.push(_mouseButtons[2]);
          mouse_17.time.push(mouse_17.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_17* updates
    if ((slider_17.rating) && button_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_17.tStart = t;  // (not accounting for frame time here)
      button_17.frameNStart = frameN;  // exact frame index
      
      button_17.setAutoDraw(true);
    }
    
    if (button_17.status === PsychoJS.Status.STARTED) {
      // check whether button_17 has been pressed
      if (button_17.isClicked) {
        if (!button_17.wasClicked) {
          // store time of first click
          button_17.timesOn.push(button_17.clock.getTime());
          // store time clicked until
          button_17.timesOff.push(button_17.clock.getTime());
        } else {
          // update time clicked until;
          button_17.timesOff[button_17.timesOff.length - 1] = button_17.clock.getTime();
        }
        if (!button_17.wasClicked) {
          // end routine when button_17 is clicked
          continueRoutine = false;
          
        }
        // if button_17 is still clicked next frame, it is not a new click
        button_17.wasClicked = true;
      } else {
        // if button_17 is clicked next frame, it is a new click
        button_17.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_17 hasn't started / has finished
      button_17.clock.reset();
      // if button_17 is clicked next frame, it is a new click
      button_17.wasClicked = false;
    }
    
    // *Frage_17* updates
    if (t >= 0.0 && Frage_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_17.tStart = t;  // (not accounting for frame time here)
      Frage_17.frameNStart = frameN;  // exact frame index
      
      Frage_17.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item_17Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Item_17RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item_17' ---
    for (const thisComponent of Item_17Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item_17.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_17.response', slider_17.getRating());
    psychoJS.experiment.addData('slider_17.rt', slider_17.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_17.x', mouse_17.x);
    psychoJS.experiment.addData('mouse_17.y', mouse_17.y);
    psychoJS.experiment.addData('mouse_17.leftButton', mouse_17.leftButton);
    psychoJS.experiment.addData('mouse_17.midButton', mouse_17.midButton);
    psychoJS.experiment.addData('mouse_17.rightButton', mouse_17.rightButton);
    psychoJS.experiment.addData('mouse_17.time', mouse_17.time);
    psychoJS.experiment.addData('mouse_17.clicked_name', mouse_17.clicked_name);
    
    psychoJS.experiment.addData('button_17.numClicks', button_17.numClicks);
    psychoJS.experiment.addData('button_17.timesOn', button_17.timesOn);
    psychoJS.experiment.addData('button_17.timesOff', button_17.timesOff);
    // the Routine "Item_17" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Item_18RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item_18' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Item_18Clock.reset();
    routineTimer.reset();
    Item_18MaxDurationReached = false;
    // update component parameters for each repeat
    slider_18.reset()
    // setup some python lists for storing info about the mouse_18
    // current position of the mouse:
    mouse_18.x = [];
    mouse_18.y = [];
    mouse_18.leftButton = [];
    mouse_18.midButton = [];
    mouse_18.rightButton = [];
    mouse_18.time = [];
    mouse_18.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_18 to account for continued clicks & clear times on/off
    button_18.reset()
    psychoJS.experiment.addData('Item_18.started', globalClock.getTime());
    Item_18MaxDuration = null
    // keep track of which components have finished
    Item_18Components = [];
    Item_18Components.push(slider_18);
    Item_18Components.push(mouse_18);
    Item_18Components.push(button_18);
    Item_18Components.push(Frage_18);
    
    for (const thisComponent of Item_18Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Item_18RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item_18' ---
    // get current time
    t = Item_18Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_18* updates
    if (t >= 0.0 && slider_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_18.tStart = t;  // (not accounting for frame time here)
      slider_18.frameNStart = frameN;  // exact frame index
      
      slider_18.setAutoDraw(true);
    }
    
    // *mouse_18* updates
    if ((slider_18.rating) && mouse_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_18.tStart = t;  // (not accounting for frame time here)
      mouse_18.frameNStart = frameN;  // exact frame index
      
      mouse_18.status = PsychoJS.Status.STARTED;
      mouse_18.mouseClock.reset();
      prevButtonState = mouse_18.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_18.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_18.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_18.clickableObjects = eval(button_18)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_18.clickableObjects)) {
              mouse_18.clickableObjects = [mouse_18.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_18.clickableObjects) {
              if (obj.contains(mouse_18)) {
                  gotValidClick = true;
                  mouse_18.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_18.clicked_name.push(null);
          }
          _mouseXYs = mouse_18.getPos();
          mouse_18.x.push(_mouseXYs[0]);
          mouse_18.y.push(_mouseXYs[1]);
          mouse_18.leftButton.push(_mouseButtons[0]);
          mouse_18.midButton.push(_mouseButtons[1]);
          mouse_18.rightButton.push(_mouseButtons[2]);
          mouse_18.time.push(mouse_18.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_18* updates
    if ((slider_18.rating) && button_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_18.tStart = t;  // (not accounting for frame time here)
      button_18.frameNStart = frameN;  // exact frame index
      
      button_18.setAutoDraw(true);
    }
    
    if (button_18.status === PsychoJS.Status.STARTED) {
      // check whether button_18 has been pressed
      if (button_18.isClicked) {
        if (!button_18.wasClicked) {
          // store time of first click
          button_18.timesOn.push(button_18.clock.getTime());
          // store time clicked until
          button_18.timesOff.push(button_18.clock.getTime());
        } else {
          // update time clicked until;
          button_18.timesOff[button_18.timesOff.length - 1] = button_18.clock.getTime();
        }
        if (!button_18.wasClicked) {
          // end routine when button_18 is clicked
          continueRoutine = false;
          
        }
        // if button_18 is still clicked next frame, it is not a new click
        button_18.wasClicked = true;
      } else {
        // if button_18 is clicked next frame, it is a new click
        button_18.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_18 hasn't started / has finished
      button_18.clock.reset();
      // if button_18 is clicked next frame, it is a new click
      button_18.wasClicked = false;
    }
    
    // *Frage_18* updates
    if (t >= 0.0 && Frage_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_18.tStart = t;  // (not accounting for frame time here)
      Frage_18.frameNStart = frameN;  // exact frame index
      
      Frage_18.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item_18Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Item_18RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item_18' ---
    for (const thisComponent of Item_18Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item_18.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_18.response', slider_18.getRating());
    psychoJS.experiment.addData('slider_18.rt', slider_18.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_18.x', mouse_18.x);
    psychoJS.experiment.addData('mouse_18.y', mouse_18.y);
    psychoJS.experiment.addData('mouse_18.leftButton', mouse_18.leftButton);
    psychoJS.experiment.addData('mouse_18.midButton', mouse_18.midButton);
    psychoJS.experiment.addData('mouse_18.rightButton', mouse_18.rightButton);
    psychoJS.experiment.addData('mouse_18.time', mouse_18.time);
    psychoJS.experiment.addData('mouse_18.clicked_name', mouse_18.clicked_name);
    
    psychoJS.experiment.addData('button_18.numClicks', button_18.numClicks);
    psychoJS.experiment.addData('button_18.timesOn', button_18.timesOn);
    psychoJS.experiment.addData('button_18.timesOff', button_18.timesOff);
    // the Routine "Item_18" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Item_19RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item_19' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Item_19Clock.reset();
    routineTimer.reset();
    Item_19MaxDurationReached = false;
    // update component parameters for each repeat
    slider_19.reset()
    // setup some python lists for storing info about the mouse_19
    // current position of the mouse:
    mouse_19.x = [];
    mouse_19.y = [];
    mouse_19.leftButton = [];
    mouse_19.midButton = [];
    mouse_19.rightButton = [];
    mouse_19.time = [];
    mouse_19.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_19 to account for continued clicks & clear times on/off
    button_19.reset()
    psychoJS.experiment.addData('Item_19.started', globalClock.getTime());
    Item_19MaxDuration = null
    // keep track of which components have finished
    Item_19Components = [];
    Item_19Components.push(slider_19);
    Item_19Components.push(mouse_19);
    Item_19Components.push(button_19);
    Item_19Components.push(Frage_19);
    
    for (const thisComponent of Item_19Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Item_19RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item_19' ---
    // get current time
    t = Item_19Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_19* updates
    if (t >= 0.0 && slider_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_19.tStart = t;  // (not accounting for frame time here)
      slider_19.frameNStart = frameN;  // exact frame index
      
      slider_19.setAutoDraw(true);
    }
    
    // *mouse_19* updates
    if ((slider_19.rating) && mouse_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_19.tStart = t;  // (not accounting for frame time here)
      mouse_19.frameNStart = frameN;  // exact frame index
      
      mouse_19.status = PsychoJS.Status.STARTED;
      mouse_19.mouseClock.reset();
      prevButtonState = mouse_19.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_19.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_19.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_19.clickableObjects = eval(button_19)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_19.clickableObjects)) {
              mouse_19.clickableObjects = [mouse_19.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_19.clickableObjects) {
              if (obj.contains(mouse_19)) {
                  gotValidClick = true;
                  mouse_19.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_19.clicked_name.push(null);
          }
          _mouseXYs = mouse_19.getPos();
          mouse_19.x.push(_mouseXYs[0]);
          mouse_19.y.push(_mouseXYs[1]);
          mouse_19.leftButton.push(_mouseButtons[0]);
          mouse_19.midButton.push(_mouseButtons[1]);
          mouse_19.rightButton.push(_mouseButtons[2]);
          mouse_19.time.push(mouse_19.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_19* updates
    if ((slider_19.rating) && button_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_19.tStart = t;  // (not accounting for frame time here)
      button_19.frameNStart = frameN;  // exact frame index
      
      button_19.setAutoDraw(true);
    }
    
    if (button_19.status === PsychoJS.Status.STARTED) {
      // check whether button_19 has been pressed
      if (button_19.isClicked) {
        if (!button_19.wasClicked) {
          // store time of first click
          button_19.timesOn.push(button_19.clock.getTime());
          // store time clicked until
          button_19.timesOff.push(button_19.clock.getTime());
        } else {
          // update time clicked until;
          button_19.timesOff[button_19.timesOff.length - 1] = button_19.clock.getTime();
        }
        if (!button_19.wasClicked) {
          // end routine when button_19 is clicked
          continueRoutine = false;
          
        }
        // if button_19 is still clicked next frame, it is not a new click
        button_19.wasClicked = true;
      } else {
        // if button_19 is clicked next frame, it is a new click
        button_19.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_19 hasn't started / has finished
      button_19.clock.reset();
      // if button_19 is clicked next frame, it is a new click
      button_19.wasClicked = false;
    }
    
    // *Frage_19* updates
    if (t >= 0.0 && Frage_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_19.tStart = t;  // (not accounting for frame time here)
      Frage_19.frameNStart = frameN;  // exact frame index
      
      Frage_19.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item_19Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Item_19RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item_19' ---
    for (const thisComponent of Item_19Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item_19.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_19.response', slider_19.getRating());
    psychoJS.experiment.addData('slider_19.rt', slider_19.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_19.x', mouse_19.x);
    psychoJS.experiment.addData('mouse_19.y', mouse_19.y);
    psychoJS.experiment.addData('mouse_19.leftButton', mouse_19.leftButton);
    psychoJS.experiment.addData('mouse_19.midButton', mouse_19.midButton);
    psychoJS.experiment.addData('mouse_19.rightButton', mouse_19.rightButton);
    psychoJS.experiment.addData('mouse_19.time', mouse_19.time);
    psychoJS.experiment.addData('mouse_19.clicked_name', mouse_19.clicked_name);
    
    psychoJS.experiment.addData('button_19.numClicks', button_19.numClicks);
    psychoJS.experiment.addData('button_19.timesOn', button_19.timesOn);
    psychoJS.experiment.addData('button_19.timesOff', button_19.timesOff);
    // the Routine "Item_19" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Item_20RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item_20' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Item_20Clock.reset();
    routineTimer.reset();
    Item_20MaxDurationReached = false;
    // update component parameters for each repeat
    slider_20.reset()
    // setup some python lists for storing info about the mouse_20
    // current position of the mouse:
    mouse_20.x = [];
    mouse_20.y = [];
    mouse_20.leftButton = [];
    mouse_20.midButton = [];
    mouse_20.rightButton = [];
    mouse_20.time = [];
    mouse_20.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_20 to account for continued clicks & clear times on/off
    button_20.reset()
    psychoJS.experiment.addData('Item_20.started', globalClock.getTime());
    Item_20MaxDuration = null
    // keep track of which components have finished
    Item_20Components = [];
    Item_20Components.push(slider_20);
    Item_20Components.push(mouse_20);
    Item_20Components.push(button_20);
    Item_20Components.push(Frage_20);
    
    for (const thisComponent of Item_20Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Item_20RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item_20' ---
    // get current time
    t = Item_20Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_20* updates
    if (t >= 0.0 && slider_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_20.tStart = t;  // (not accounting for frame time here)
      slider_20.frameNStart = frameN;  // exact frame index
      
      slider_20.setAutoDraw(true);
    }
    
    // *mouse_20* updates
    if ((slider_20.rating) && mouse_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_20.tStart = t;  // (not accounting for frame time here)
      mouse_20.frameNStart = frameN;  // exact frame index
      
      mouse_20.status = PsychoJS.Status.STARTED;
      mouse_20.mouseClock.reset();
      prevButtonState = mouse_20.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_20.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_20.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_20.clickableObjects = eval(button_20)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_20.clickableObjects)) {
              mouse_20.clickableObjects = [mouse_20.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_20.clickableObjects) {
              if (obj.contains(mouse_20)) {
                  gotValidClick = true;
                  mouse_20.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_20.clicked_name.push(null);
          }
          _mouseXYs = mouse_20.getPos();
          mouse_20.x.push(_mouseXYs[0]);
          mouse_20.y.push(_mouseXYs[1]);
          mouse_20.leftButton.push(_mouseButtons[0]);
          mouse_20.midButton.push(_mouseButtons[1]);
          mouse_20.rightButton.push(_mouseButtons[2]);
          mouse_20.time.push(mouse_20.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_20* updates
    if ((slider_20.rating) && button_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_20.tStart = t;  // (not accounting for frame time here)
      button_20.frameNStart = frameN;  // exact frame index
      
      button_20.setAutoDraw(true);
    }
    
    if (button_20.status === PsychoJS.Status.STARTED) {
      // check whether button_20 has been pressed
      if (button_20.isClicked) {
        if (!button_20.wasClicked) {
          // store time of first click
          button_20.timesOn.push(button_20.clock.getTime());
          // store time clicked until
          button_20.timesOff.push(button_20.clock.getTime());
        } else {
          // update time clicked until;
          button_20.timesOff[button_20.timesOff.length - 1] = button_20.clock.getTime();
        }
        if (!button_20.wasClicked) {
          // end routine when button_20 is clicked
          continueRoutine = false;
          
        }
        // if button_20 is still clicked next frame, it is not a new click
        button_20.wasClicked = true;
      } else {
        // if button_20 is clicked next frame, it is a new click
        button_20.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_20 hasn't started / has finished
      button_20.clock.reset();
      // if button_20 is clicked next frame, it is a new click
      button_20.wasClicked = false;
    }
    
    // *Frage_20* updates
    if (t >= 0.0 && Frage_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_20.tStart = t;  // (not accounting for frame time here)
      Frage_20.frameNStart = frameN;  // exact frame index
      
      Frage_20.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item_20Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Item_20RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item_20' ---
    for (const thisComponent of Item_20Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item_20.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_20.response', slider_20.getRating());
    psychoJS.experiment.addData('slider_20.rt', slider_20.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_20.x', mouse_20.x);
    psychoJS.experiment.addData('mouse_20.y', mouse_20.y);
    psychoJS.experiment.addData('mouse_20.leftButton', mouse_20.leftButton);
    psychoJS.experiment.addData('mouse_20.midButton', mouse_20.midButton);
    psychoJS.experiment.addData('mouse_20.rightButton', mouse_20.rightButton);
    psychoJS.experiment.addData('mouse_20.time', mouse_20.time);
    psychoJS.experiment.addData('mouse_20.clicked_name', mouse_20.clicked_name);
    
    psychoJS.experiment.addData('button_20.numClicks', button_20.numClicks);
    psychoJS.experiment.addData('button_20.timesOn', button_20.timesOn);
    psychoJS.experiment.addData('button_20.timesOff', button_20.timesOff);
    // the Routine "Item_20" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Item_21RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Item_21' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Item_21Clock.reset();
    routineTimer.reset();
    Item_21MaxDurationReached = false;
    // update component parameters for each repeat
    slider_21.reset()
    // setup some python lists for storing info about the mouse_21
    // current position of the mouse:
    mouse_21.x = [];
    mouse_21.y = [];
    mouse_21.leftButton = [];
    mouse_21.midButton = [];
    mouse_21.rightButton = [];
    mouse_21.time = [];
    mouse_21.clicked_name = [];
    gotValidClick = false; // until a click is received
    // reset button_21 to account for continued clicks & clear times on/off
    button_21.reset()
    psychoJS.experiment.addData('Item_21.started', globalClock.getTime());
    Item_21MaxDuration = null
    // keep track of which components have finished
    Item_21Components = [];
    Item_21Components.push(slider_21);
    Item_21Components.push(mouse_21);
    Item_21Components.push(button_21);
    Item_21Components.push(Frage_21);
    
    for (const thisComponent of Item_21Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Item_21RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Item_21' ---
    // get current time
    t = Item_21Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *slider_21* updates
    if (t >= 0.0 && slider_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_21.tStart = t;  // (not accounting for frame time here)
      slider_21.frameNStart = frameN;  // exact frame index
      
      slider_21.setAutoDraw(true);
    }
    
    // *mouse_21* updates
    if ((slider_21.rating) && mouse_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_21.tStart = t;  // (not accounting for frame time here)
      mouse_21.frameNStart = frameN;  // exact frame index
      
      mouse_21.status = PsychoJS.Status.STARTED;
      mouse_21.mouseClock.reset();
      prevButtonState = mouse_21.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_21.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_21.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_21.clickableObjects = eval(button_21)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_21.clickableObjects)) {
              mouse_21.clickableObjects = [mouse_21.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_21.clickableObjects) {
              if (obj.contains(mouse_21)) {
                  gotValidClick = true;
                  mouse_21.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_21.clicked_name.push(null);
          }
          _mouseXYs = mouse_21.getPos();
          mouse_21.x.push(_mouseXYs[0]);
          mouse_21.y.push(_mouseXYs[1]);
          mouse_21.leftButton.push(_mouseButtons[0]);
          mouse_21.midButton.push(_mouseButtons[1]);
          mouse_21.rightButton.push(_mouseButtons[2]);
          mouse_21.time.push(mouse_21.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *button_21* updates
    if ((slider_21.rating) && button_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_21.tStart = t;  // (not accounting for frame time here)
      button_21.frameNStart = frameN;  // exact frame index
      
      button_21.setAutoDraw(true);
    }
    
    if (button_21.status === PsychoJS.Status.STARTED) {
      // check whether button_21 has been pressed
      if (button_21.isClicked) {
        if (!button_21.wasClicked) {
          // store time of first click
          button_21.timesOn.push(button_21.clock.getTime());
          // store time clicked until
          button_21.timesOff.push(button_21.clock.getTime());
        } else {
          // update time clicked until;
          button_21.timesOff[button_21.timesOff.length - 1] = button_21.clock.getTime();
        }
        if (!button_21.wasClicked) {
          // end routine when button_21 is clicked
          continueRoutine = false;
          
        }
        // if button_21 is still clicked next frame, it is not a new click
        button_21.wasClicked = true;
      } else {
        // if button_21 is clicked next frame, it is a new click
        button_21.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_21 hasn't started / has finished
      button_21.clock.reset();
      // if button_21 is clicked next frame, it is a new click
      button_21.wasClicked = false;
    }
    
    // *Frage_21* updates
    if (t >= 0.0 && Frage_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Frage_21.tStart = t;  // (not accounting for frame time here)
      Frage_21.frameNStart = frameN;  // exact frame index
      
      Frage_21.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Item_21Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Item_21RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Item_21' ---
    for (const thisComponent of Item_21Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Item_21.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_21.response', slider_21.getRating());
    psychoJS.experiment.addData('slider_21.rt', slider_21.getRT());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_21.x', mouse_21.x);
    psychoJS.experiment.addData('mouse_21.y', mouse_21.y);
    psychoJS.experiment.addData('mouse_21.leftButton', mouse_21.leftButton);
    psychoJS.experiment.addData('mouse_21.midButton', mouse_21.midButton);
    psychoJS.experiment.addData('mouse_21.rightButton', mouse_21.rightButton);
    psychoJS.experiment.addData('mouse_21.time', mouse_21.time);
    psychoJS.experiment.addData('mouse_21.clicked_name', mouse_21.clicked_name);
    
    psychoJS.experiment.addData('button_21.numClicks', button_21.numClicks);
    psychoJS.experiment.addData('button_21.timesOn', button_21.timesOn);
    psychoJS.experiment.addData('button_21.timesOff', button_21.timesOff);
    // the Routine "Item_21" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function BlöckeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Blöcke' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    BlöckeClock.reset();
    routineTimer.reset();
    BlöckeMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_35 to account for continued clicks & clear times on/off
    button_35.reset()
    // setup some python lists for storing info about the mouse_32
    // current position of the mouse:
    mouse_32.x = [];
    mouse_32.y = [];
    mouse_32.leftButton = [];
    mouse_32.midButton = [];
    mouse_32.rightButton = [];
    mouse_32.time = [];
    mouse_32.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Blöcke.started', globalClock.getTime());
    BlöckeMaxDuration = null
    // keep track of which components have finished
    BlöckeComponents = [];
    BlöckeComponents.push(text_6);
    BlöckeComponents.push(button_35);
    BlöckeComponents.push(mouse_32);
    
    for (const thisComponent of BlöckeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function BlöckeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Blöcke' ---
    // get current time
    t = BlöckeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    
    // *button_35* updates
    if (t >= 15 && button_35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_35.tStart = t;  // (not accounting for frame time here)
      button_35.frameNStart = frameN;  // exact frame index
      
      button_35.setAutoDraw(true);
    }
    
    if (button_35.status === PsychoJS.Status.STARTED) {
      // check whether button_35 has been pressed
      if (button_35.isClicked) {
        if (!button_35.wasClicked) {
          // store time of first click
          button_35.timesOn.push(button_35.clock.getTime());
          // store time clicked until
          button_35.timesOff.push(button_35.clock.getTime());
        } else {
          // update time clicked until;
          button_35.timesOff[button_35.timesOff.length - 1] = button_35.clock.getTime();
        }
        if (!button_35.wasClicked) {
          // end routine when button_35 is clicked
          continueRoutine = false;
          
        }
        // if button_35 is still clicked next frame, it is not a new click
        button_35.wasClicked = true;
      } else {
        // if button_35 is clicked next frame, it is a new click
        button_35.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_35 hasn't started / has finished
      button_35.clock.reset();
      // if button_35 is clicked next frame, it is a new click
      button_35.wasClicked = false;
    }
    // *mouse_32* updates
    if (t >= 15 && mouse_32.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_32.tStart = t;  // (not accounting for frame time here)
      mouse_32.frameNStart = frameN;  // exact frame index
      
      mouse_32.status = PsychoJS.Status.STARTED;
      mouse_32.mouseClock.reset();
      prevButtonState = mouse_32.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_32.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_32.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_32.clickableObjects = eval(button_35)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_32.clickableObjects)) {
              mouse_32.clickableObjects = [mouse_32.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_32.clickableObjects) {
              if (obj.contains(mouse_32)) {
                  gotValidClick = true;
                  mouse_32.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_32.clicked_name.push(null);
          }
          _mouseXYs = mouse_32.getPos();
          mouse_32.x.push(_mouseXYs[0]);
          mouse_32.y.push(_mouseXYs[1]);
          mouse_32.leftButton.push(_mouseButtons[0]);
          mouse_32.midButton.push(_mouseButtons[1]);
          mouse_32.rightButton.push(_mouseButtons[2]);
          mouse_32.time.push(mouse_32.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BlöckeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function BlöckeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Blöcke' ---
    for (const thisComponent of BlöckeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Blöcke.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_35.numClicks', button_35.numClicks);
    psychoJS.experiment.addData('button_35.timesOn', button_35.timesOn);
    psychoJS.experiment.addData('button_35.timesOff', button_35.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_32.x', mouse_32.x);
    psychoJS.experiment.addData('mouse_32.y', mouse_32.y);
    psychoJS.experiment.addData('mouse_32.leftButton', mouse_32.leftButton);
    psychoJS.experiment.addData('mouse_32.midButton', mouse_32.midButton);
    psychoJS.experiment.addData('mouse_32.rightButton', mouse_32.rightButton);
    psychoJS.experiment.addData('mouse_32.time', mouse_32.time);
    psychoJS.experiment.addData('mouse_32.clicked_name', mouse_32.clicked_name);
    
    // the Routine "Blöcke" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Lernen_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Lernen_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Lernen_2Clock.reset();
    routineTimer.reset();
    Lernen_2MaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_24 to account for continued clicks & clear times on/off
    button_24.reset()
    // setup some python lists for storing info about the mouse_24
    // current position of the mouse:
    mouse_24.x = [];
    mouse_24.y = [];
    mouse_24.leftButton = [];
    mouse_24.midButton = [];
    mouse_24.rightButton = [];
    mouse_24.time = [];
    mouse_24.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Lernen_2.started', globalClock.getTime());
    Lernen_2MaxDuration = null
    // keep track of which components have finished
    Lernen_2Components = [];
    Lernen_2Components.push(text_3);
    Lernen_2Components.push(button_24);
    Lernen_2Components.push(mouse_24);
    
    for (const thisComponent of Lernen_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Lernen_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Lernen_2' ---
    // get current time
    t = Lernen_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *button_24* updates
    if (t >= 15 && button_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_24.tStart = t;  // (not accounting for frame time here)
      button_24.frameNStart = frameN;  // exact frame index
      
      button_24.setAutoDraw(true);
    }
    
    if (button_24.status === PsychoJS.Status.STARTED) {
      // check whether button_24 has been pressed
      if (button_24.isClicked) {
        if (!button_24.wasClicked) {
          // store time of first click
          button_24.timesOn.push(button_24.clock.getTime());
          // store time clicked until
          button_24.timesOff.push(button_24.clock.getTime());
        } else {
          // update time clicked until;
          button_24.timesOff[button_24.timesOff.length - 1] = button_24.clock.getTime();
        }
        if (!button_24.wasClicked) {
          // end routine when button_24 is clicked
          continueRoutine = false;
          
        }
        // if button_24 is still clicked next frame, it is not a new click
        button_24.wasClicked = true;
      } else {
        // if button_24 is clicked next frame, it is a new click
        button_24.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_24 hasn't started / has finished
      button_24.clock.reset();
      // if button_24 is clicked next frame, it is a new click
      button_24.wasClicked = false;
    }
    // *mouse_24* updates
    if (t >= 15 && mouse_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_24.tStart = t;  // (not accounting for frame time here)
      mouse_24.frameNStart = frameN;  // exact frame index
      
      mouse_24.status = PsychoJS.Status.STARTED;
      mouse_24.mouseClock.reset();
      prevButtonState = mouse_24.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_24.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_24.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_24.clickableObjects = eval(button_24)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_24.clickableObjects)) {
              mouse_24.clickableObjects = [mouse_24.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_24.clickableObjects) {
              if (obj.contains(mouse_24)) {
                  gotValidClick = true;
                  mouse_24.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_24.clicked_name.push(null);
          }
          _mouseXYs = mouse_24.getPos();
          mouse_24.x.push(_mouseXYs[0]);
          mouse_24.y.push(_mouseXYs[1]);
          mouse_24.leftButton.push(_mouseButtons[0]);
          mouse_24.midButton.push(_mouseButtons[1]);
          mouse_24.rightButton.push(_mouseButtons[2]);
          mouse_24.time.push(mouse_24.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Lernen_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Lernen_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Lernen_2' ---
    for (const thisComponent of Lernen_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Lernen_2.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_24.numClicks', button_24.numClicks);
    psychoJS.experiment.addData('button_24.timesOn', button_24.timesOn);
    psychoJS.experiment.addData('button_24.timesOff', button_24.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_24.x', mouse_24.x);
    psychoJS.experiment.addData('mouse_24.y', mouse_24.y);
    psychoJS.experiment.addData('mouse_24.leftButton', mouse_24.leftButton);
    psychoJS.experiment.addData('mouse_24.midButton', mouse_24.midButton);
    psychoJS.experiment.addData('mouse_24.rightButton', mouse_24.rightButton);
    psychoJS.experiment.addData('mouse_24.time', mouse_24.time);
    psychoJS.experiment.addData('mouse_24.clicked_name', mouse_24.clicked_name);
    
    // the Routine "Lernen_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function BilderklärungRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Bilderklärung' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    BilderklärungClock.reset();
    routineTimer.reset();
    BilderklärungMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_25 to account for continued clicks & clear times on/off
    button_25.reset()
    // setup some python lists for storing info about the Maus_3
    // current position of the mouse:
    Maus_3.x = [];
    Maus_3.y = [];
    Maus_3.leftButton = [];
    Maus_3.midButton = [];
    Maus_3.rightButton = [];
    Maus_3.time = [];
    Maus_3.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Bilderklärung.started', globalClock.getTime());
    BilderklärungMaxDuration = null
    // keep track of which components have finished
    BilderklärungComponents = [];
    BilderklärungComponents.push(image);
    BilderklärungComponents.push(text_5);
    BilderklärungComponents.push(button_25);
    BilderklärungComponents.push(Maus_3);
    
    for (const thisComponent of BilderklärungComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function BilderklärungRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Bilderklärung' ---
    // get current time
    t = BilderklärungClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // *button_25* updates
    if (t >= 10 && button_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_25.tStart = t;  // (not accounting for frame time here)
      button_25.frameNStart = frameN;  // exact frame index
      
      button_25.setAutoDraw(true);
    }
    
    if (button_25.status === PsychoJS.Status.STARTED) {
      // check whether button_25 has been pressed
      if (button_25.isClicked) {
        if (!button_25.wasClicked) {
          // store time of first click
          button_25.timesOn.push(button_25.clock.getTime());
          // store time clicked until
          button_25.timesOff.push(button_25.clock.getTime());
        } else {
          // update time clicked until;
          button_25.timesOff[button_25.timesOff.length - 1] = button_25.clock.getTime();
        }
        if (!button_25.wasClicked) {
          // end routine when button_25 is clicked
          continueRoutine = false;
          
        }
        // if button_25 is still clicked next frame, it is not a new click
        button_25.wasClicked = true;
      } else {
        // if button_25 is clicked next frame, it is a new click
        button_25.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_25 hasn't started / has finished
      button_25.clock.reset();
      // if button_25 is clicked next frame, it is a new click
      button_25.wasClicked = false;
    }
    // *Maus_3* updates
    if (t >= 10 && Maus_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Maus_3.tStart = t;  // (not accounting for frame time here)
      Maus_3.frameNStart = frameN;  // exact frame index
      
      Maus_3.status = PsychoJS.Status.STARTED;
      Maus_3.mouseClock.reset();
      prevButtonState = Maus_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (Maus_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = Maus_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          Maus_3.clickableObjects = eval(button_25)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(Maus_3.clickableObjects)) {
              Maus_3.clickableObjects = [Maus_3.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of Maus_3.clickableObjects) {
              if (obj.contains(Maus_3)) {
                  gotValidClick = true;
                  Maus_3.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              Maus_3.clicked_name.push(null);
          }
          _mouseXYs = Maus_3.getPos();
          Maus_3.x.push(_mouseXYs[0]);
          Maus_3.y.push(_mouseXYs[1]);
          Maus_3.leftButton.push(_mouseButtons[0]);
          Maus_3.midButton.push(_mouseButtons[1]);
          Maus_3.rightButton.push(_mouseButtons[2]);
          Maus_3.time.push(Maus_3.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BilderklärungComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function BilderklärungRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Bilderklärung' ---
    for (const thisComponent of BilderklärungComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Bilderklärung.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_25.numClicks', button_25.numClicks);
    psychoJS.experiment.addData('button_25.timesOn', button_25.timesOn);
    psychoJS.experiment.addData('button_25.timesOff', button_25.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('Maus_3.x', Maus_3.x);
    psychoJS.experiment.addData('Maus_3.y', Maus_3.y);
    psychoJS.experiment.addData('Maus_3.leftButton', Maus_3.leftButton);
    psychoJS.experiment.addData('Maus_3.midButton', Maus_3.midButton);
    psychoJS.experiment.addData('Maus_3.rightButton', Maus_3.rightButton);
    psychoJS.experiment.addData('Maus_3.time', Maus_3.time);
    psychoJS.experiment.addData('Maus_3.clicked_name', Maus_3.clicked_name);
    
    // the Routine "Bilderklärung" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ExperimentrealRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Experimentreal' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ExperimentrealClock.reset();
    routineTimer.reset();
    ExperimentrealMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    psychoJS.experiment.addData('Experimentreal.started', globalClock.getTime());
    ExperimentrealMaxDuration = null
    // keep track of which components have finished
    ExperimentrealComponents = [];
    ExperimentrealComponents.push(Text);
    ExperimentrealComponents.push(key_resp_4);
    
    for (const thisComponent of ExperimentrealComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ExperimentrealRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Experimentreal' ---
    // get current time
    t = ExperimentrealClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Text* updates
    if (t >= 0.0 && Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text.tStart = t;  // (not accounting for frame time here)
      Text.frameNStart = frameN;  // exact frame index
      
      Text.setAutoDraw(true);
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ExperimentrealComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ExperimentrealRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Experimentreal' ---
    for (const thisComponent of ExperimentrealComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Experimentreal.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "Experimentreal" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(trialRoutineBegin(snapshot));
      trials_2LoopScheduler.add(trialRoutineEachFrame());
      trials_2LoopScheduler.add(trialRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_3 of trials_3) {
      snapshot = trials_3.getSnapshot();
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(trialRoutineBegin(snapshot));
      trials_3LoopScheduler.add(trialRoutineEachFrame());
      trials_3LoopScheduler.add(trialRoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    console.log("Current image index: ", current_image_idx);
    Bildstimulus.setImage(current_image);
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(key_resp);
    trialComponents.push(Bildstimulus);
    trialComponents.push(feedback_text);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

var connected_images;
var connected_image_idx;
var last_keys;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space', 'h', 'j', 'k', 'l'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys.map((key) => key.name);  // storing all keys
        key_resp.rt = _key_resp_allKeys.map((key) => key.rt);
        key_resp.duration = _key_resp_allKeys.map((key) => key.duration);
      }
    }
    
    // Run 'Each Frame' code from randomwalk
    /* Syntax Error: Fix Python code */
    
    connected_images = adjMatrix[current_image_idx].map((val, idx) => val === 1 ? idx : null).filter(val => val !== null);
    connected_image_idx = randomChoice(connected_images);
    console.log("corrent i,age: ", current_image_idx);
    current_image= image_names[current_image_idx];


    if (key_resp.keys) {
        last_keys = key_resp.keys.slice(-2); // Get the last two keys pressed

        // Check if the last two keys match the correct combination for the current image
        correct = (last_keys.includes(correct_keys[current_image_idx][0]) && last_keys.includes(correct_keys[current_image_idx][1]));

        if (correct) {
            connected_images = adjMatrix[current_image_idx].map((val, idx) => val === 1 ? idx : null).filter(val => val !== null);
            current_image_idx = randomChoice(connected_images);
            console.log("corrent image: ", current_image_idx);
            current_image = image_names[current_image_idx];
        
            psychoJS.experiment.addData("current_image_idx", current_image_idx);
            psychoJS.experiment.addData("response", last_keys);
            psychoJS.experiment.addData("correct", correct);
            psychoJS.experiment.addData("response_time", key_resp.rt.slice(-1)[0]); // Use the last key response time
            response_times.push(key_resp.rt.slice(-1)[0]); // Use the last key response time
            continueRoutine = false;
        }
    }


    
    
    
    
    
    // *Bildstimulus* updates
    if (t >= 0.0 && Bildstimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Bildstimulus.tStart = t;  // (not accounting for frame time here)
      Bildstimulus.frameNStart = frameN;  // exact frame index
      
      Bildstimulus.setAutoDraw(true);
    }
    
    
    // *feedback_text* updates
    if ((0.0) && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        }
    
    key_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Ende_Block1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Ende_Block1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Ende_Block1Clock.reset();
    routineTimer.reset();
    Ende_Block1MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    psychoJS.experiment.addData('Ende_Block1.started', globalClock.getTime());
    Ende_Block1MaxDuration = null
    // keep track of which components have finished
    Ende_Block1Components = [];
    Ende_Block1Components.push(text_11);
    Ende_Block1Components.push(key_resp_5);
    
    for (const thisComponent of Ende_Block1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Ende_Block1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Ende_Block1' ---
    // get current time
    t = Ende_Block1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Ende_Block1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Ende_Block1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Ende_Block1' ---
    for (const thisComponent of Ende_Block1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Ende_Block1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "Ende_Block1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function Ende_Block_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Ende_Block_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Ende_Block_2Clock.reset();
    routineTimer.reset();
    Ende_Block_2MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    psychoJS.experiment.addData('Ende_Block_2.started', globalClock.getTime());
    Ende_Block_2MaxDuration = null
    // keep track of which components have finished
    Ende_Block_2Components = [];
    Ende_Block_2Components.push(text_12);
    Ende_Block_2Components.push(key_resp_6);
    
    for (const thisComponent of Ende_Block_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function Ende_Block_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Ende_Block_2' ---
    // get current time
    t = Ende_Block_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }
    
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }
    
    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Ende_Block_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function Ende_Block_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Ende_Block_2' ---
    for (const thisComponent of Ende_Block_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Ende_Block_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "Ende_Block_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function EndeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Ende' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    EndeClock.reset();
    routineTimer.reset();
    EndeMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_29 to account for continued clicks & clear times on/off
    button_29.reset()
    // setup some python lists for storing info about the mouse_27
    // current position of the mouse:
    mouse_27.x = [];
    mouse_27.y = [];
    mouse_27.leftButton = [];
    mouse_27.midButton = [];
    mouse_27.rightButton = [];
    mouse_27.time = [];
    mouse_27.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Ende.started', globalClock.getTime());
    EndeMaxDuration = null
    // keep track of which components have finished
    EndeComponents = [];
    EndeComponents.push(text_8);
    EndeComponents.push(button_29);
    EndeComponents.push(mouse_27);
    
    for (const thisComponent of EndeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function EndeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Ende' ---
    // get current time
    t = EndeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    
    // *button_29* updates
    if (t >= 15 && button_29.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_29.tStart = t;  // (not accounting for frame time here)
      button_29.frameNStart = frameN;  // exact frame index
      
      button_29.setAutoDraw(true);
    }
    
    if (button_29.status === PsychoJS.Status.STARTED) {
      // check whether button_29 has been pressed
      if (button_29.isClicked) {
        if (!button_29.wasClicked) {
          // store time of first click
          button_29.timesOn.push(button_29.clock.getTime());
          // store time clicked until
          button_29.timesOff.push(button_29.clock.getTime());
        } else {
          // update time clicked until;
          button_29.timesOff[button_29.timesOff.length - 1] = button_29.clock.getTime();
        }
        if (!button_29.wasClicked) {
          // end routine when button_29 is clicked
          continueRoutine = false;
          
        }
        // if button_29 is still clicked next frame, it is not a new click
        button_29.wasClicked = true;
      } else {
        // if button_29 is clicked next frame, it is a new click
        button_29.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_29 hasn't started / has finished
      button_29.clock.reset();
      // if button_29 is clicked next frame, it is a new click
      button_29.wasClicked = false;
    }
    // *mouse_27* updates
    if (t >= 15 && mouse_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_27.tStart = t;  // (not accounting for frame time here)
      mouse_27.frameNStart = frameN;  // exact frame index
      
      mouse_27.status = PsychoJS.Status.STARTED;
      mouse_27.mouseClock.reset();
      prevButtonState = mouse_27.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_27.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_27.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_27.clickableObjects = eval(button_27)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_27.clickableObjects)) {
              mouse_27.clickableObjects = [mouse_27.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_27.clickableObjects) {
              console.log("Checking clickable object: ", obj);
              if (obj.contains(mouse_27)) {
                  gotValidClick = true;
                  mouse_27.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_27.clicked_name.push(null);
          }
          _mouseXYs = mouse_27.getPos();
          mouse_27.x.push(_mouseXYs[0]);
          mouse_27.y.push(_mouseXYs[1]);
          mouse_27.leftButton.push(_mouseButtons[0]);
          mouse_27.midButton.push(_mouseButtons[1]);
          mouse_27.rightButton.push(_mouseButtons[2]);
          mouse_27.time.push(mouse_27.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EndeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function EndeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Ende' ---
    for (const thisComponent of EndeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Ende.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_29.numClicks', button_29.numClicks);
    psychoJS.experiment.addData('button_29.timesOn', button_29.timesOn);
    psychoJS.experiment.addData('button_29.timesOff', button_29.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_27.x', mouse_27.x);
    psychoJS.experiment.addData('mouse_27.y', mouse_27.y);
    psychoJS.experiment.addData('mouse_27.leftButton', mouse_27.leftButton);
    psychoJS.experiment.addData('mouse_27.midButton', mouse_27.midButton);
    psychoJS.experiment.addData('mouse_27.rightButton', mouse_27.rightButton);
    psychoJS.experiment.addData('mouse_27.time', mouse_27.time);
    psychoJS.experiment.addData('mouse_27.clicked_name', mouse_27.clicked_name);
    
    // the Routine "Ende" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ByeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Bye' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    ByeClock.reset();
    routineTimer.reset();
    ByeMaxDurationReached = false;
    // update component parameters for each repeat
    // reset button_26 to account for continued clicks & clear times on/off
    button_26.reset()
    // setup some python lists for storing info about the mouse_25
    // current position of the mouse:
    mouse_25.x = [];
    mouse_25.y = [];
    mouse_25.leftButton = [];
    mouse_25.midButton = [];
    mouse_25.rightButton = [];
    mouse_25.time = [];
    mouse_25.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Bye.started', globalClock.getTime());
    ByeMaxDuration = null
    // keep track of which components have finished
    ByeComponents = [];
    ByeComponents.push(ByeBye);
    ByeComponents.push(button_26);
    ByeComponents.push(mouse_25);
    
    for (const thisComponent of ByeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ByeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Bye' ---
    // get current time
    t = ByeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ByeBye* updates
    if (t >= 0.0 && ByeBye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ByeBye.tStart = t;  // (not accounting for frame time here)
      ByeBye.frameNStart = frameN;  // exact frame index
      
      ByeBye.setAutoDraw(true);
    }
    
    
    // *button_26* updates
    if (t >= 5 && button_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_26.tStart = t;  // (not accounting for frame time here)
      button_26.frameNStart = frameN;  // exact frame index
      
      button_26.setAutoDraw(true);
    }
    
    if (button_26.status === PsychoJS.Status.STARTED) {
      // check whether button_26 has been pressed
      if (button_26.isClicked) {
        if (!button_26.wasClicked) {
          // store time of first click
          button_26.timesOn.push(button_26.clock.getTime());
          // store time clicked until
          button_26.timesOff.push(button_26.clock.getTime());
        } else {
          // update time clicked until;
          button_26.timesOff[button_26.timesOff.length - 1] = button_26.clock.getTime();
        }
        if (!button_26.wasClicked) {
          // end routine when button_26 is clicked
          continueRoutine = false;
          
        }
        // if button_26 is still clicked next frame, it is not a new click
        button_26.wasClicked = true;
      } else {
        // if button_26 is clicked next frame, it is a new click
        button_26.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_26 hasn't started / has finished
      button_26.clock.reset();
      // if button_26 is clicked next frame, it is a new click
      button_26.wasClicked = false;
    }
    // *mouse_25* updates
    if (t >= 5 && mouse_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_25.tStart = t;  // (not accounting for frame time here)
      mouse_25.frameNStart = frameN;  // exact frame index
      
      mouse_25.status = PsychoJS.Status.STARTED;
      mouse_25.mouseClock.reset();
      prevButtonState = mouse_25.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_25.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_25.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_25.clickableObjects = eval(button_26)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_25.clickableObjects)) {
              mouse_25.clickableObjects = [mouse_25.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_25.clickableObjects) {
              if (obj.contains(mouse_25)) {
                  gotValidClick = true;
                  mouse_25.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_25.clicked_name.push(null);
          }
          _mouseXYs = mouse_25.getPos();
          mouse_25.x.push(_mouseXYs[0]);
          mouse_25.y.push(_mouseXYs[1]);
          mouse_25.leftButton.push(_mouseButtons[0]);
          mouse_25.midButton.push(_mouseButtons[1]);
          mouse_25.rightButton.push(_mouseButtons[2]);
          mouse_25.time.push(mouse_25.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ByeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ByeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Bye' ---
    for (const thisComponent of ByeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Bye.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_26.numClicks', button_26.numClicks);
    psychoJS.experiment.addData('button_26.timesOn', button_26.timesOn);
    psychoJS.experiment.addData('button_26.timesOff', button_26.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_25.x', mouse_25.x);
    psychoJS.experiment.addData('mouse_25.y', mouse_25.y);
    psychoJS.experiment.addData('mouse_25.leftButton', mouse_25.leftButton);
    psychoJS.experiment.addData('mouse_25.midButton', mouse_25.midButton);
    psychoJS.experiment.addData('mouse_25.rightButton', mouse_25.rightButton);
    psychoJS.experiment.addData('mouse_25.time', mouse_25.time);
    psychoJS.experiment.addData('mouse_25.clicked_name', mouse_25.clicked_name);
    
    // the Routine "Bye" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
