import {gsap} from "gsap";
import {GSDevTools} from "gsap/GSDevTools";

import {logoAnimation} from "./logo.js";
import {primaryOutlineAnimation} from "./outline.js";
import {secondaryOutlineAnimation} from "./outline.js";
import {tertiaryOutlineAnimation} from "./outline.js";
import {indicatorsAnimation} from "./outline.js";
import {gearShiftAnimation} from "./gearShift.js";
import {speedometerAnimation} from "./speedometer.js";
import {tachometerAnimation} from "./tachometer.js";
import {turnAnimation} from "./turnSignal.js";
import {fuelAnimation} from "./fuel.js";
import {musicBoardAnimation} from "./musicBoard.js";
import {musicAnimation} from "./music.js";
import {speedometerSecondAnimation} from "./speedometer.js";
import {tachometerSecondAnimation} from "./tachometer.js";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline()
mainTL.add(logoAnimation());
mainTL.add(primaryOutlineAnimation(), "start");
mainTL.add(secondaryOutlineAnimation(), "start, -=2");
mainTL.add(tertiaryOutlineAnimation());
mainTL.add(indicatorsAnimation());
mainTL.add(gearShiftAnimation(), "+=1");
mainTL.add(speedometerAnimation(), "start2");
mainTL.add(tachometerAnimation(), "start2");
mainTL.add(turnAnimation(), "start2, -=5");
mainTL.add(fuelAnimation(), "start2");
mainTL.add(musicBoardAnimation());
mainTL.add(musicAnimation(), "start3");
mainTL.add(speedometerSecondAnimation(), "start3");
mainTL.add(tachometerSecondAnimation(), "start3");

GSDevTools.create();