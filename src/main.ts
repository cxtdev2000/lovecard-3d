import "./styles/main.css";
import { initCalendar } from "./features/calendar";
import { initCountdown } from "./features/countdown";
import { initEnvelope } from "./features/envelope";
import { initFlipCards } from "./features/flip-cards";
import { initGallery } from "./features/gallery";
import { initGift } from "./features/gift";
import { initMusic } from "./features/music";
import { initPetals } from "./features/petals";
import { initRsvp } from "./features/rsvp";
import { $ } from "./lib/dom";
import { applyTierClass } from "./lib/perf";
import { initReveal } from "./lib/reveal";
import { initTilt } from "./lib/tilt";
import { render } from "./render";

applyTierClass();
render($("#app"));

const music = initMusic();
const petals = initPetals();
initEnvelope(() => {
  music.start();
  petals.start();
});
initCountdown();
initFlipCards();
initGallery();
initGift();
initRsvp();
initCalendar();
initReveal();
initTilt();
