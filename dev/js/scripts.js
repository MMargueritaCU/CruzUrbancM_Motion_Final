import {gsap} from "gsap";
import {GSDevTools} from "gsap/GSDevTools";

import {logoAnimation} from "./logo.js";
import {primaryOutlineAnimation} from "./outline.js";
import {secondaryOutlineAnimation} from "./outline.js";
import {tertiaryOutlineAnimation} from "./outline.js";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline()
mainTL.add(logoAnimation());
mainTL.add(primaryOutlineAnimation(), "start");
mainTL.add(secondaryOutlineAnimation(), "start, -=3.5");
mainTL.add(tertiaryOutlineAnimation());

GSDevTools.create();