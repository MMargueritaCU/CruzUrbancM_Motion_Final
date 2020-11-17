import {gsap} from "gsap";
import {dayMonsterAnimation} from "./demo.js"
import {sparkleAnimation} from "./demo.js"
import {zSymbolsAnimation} from "./demo.js"

const mainTL = gsap.timeline();
mainTL.add(sparkleAnimation())
mainTL.add(dayMonsterAnimation());
mainTL.add(zSymbolsAnimation());

