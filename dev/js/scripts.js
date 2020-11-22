import {gsap} from "gsap";
import {GSDevTools} from "gsap/GSDevTools";

import {logoAnimation} from "./logo.js";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline()
mainTL.add(logoAnimation());

GSDevTools.create();