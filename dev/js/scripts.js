import {gsap} from "gsap";
import {GSDevTools} from "gsap/GSDevTools";

import {drawAnimation} from "./logo.js";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline()
mainTL.add(drawAnimation());

GSDevTools.create();