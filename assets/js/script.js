// ═══════════════════════════════════════════════════════════
//  ⚑  KAD SE FILIP RODI: promeni sledeći red u  true
//     i ceo sajt postaje proslava ("DA! 🎉").
const PORODILA_SE = false;
// ═══════════════════════════════════════════════════════════

// —— Sadržaj ——————————————————————————————————————————————
// Veliki odgovori kroz koje se vrti na svaki klik.
// Slobodno dodaj/izbaci bilo šta. Kraće = krupnije na ekranu.
const odgovori = [
  `NE.`,
  `NE JOŠ.`,
  `I DALJE NE.`,
  `NIJE JOŠ.`,
  `JOK.`,
  `NE-A.`,
  `SAMO ŠTO NIJE.`,
  `EVO, SAD ĆE.`,
  `PRC.`,
  `NEGATIVNO.`,
  `NE, HVALA.`,
  `MOŽDA SUTRA. (NE.)`,
  `PITAJ SUTRA.`,
  `NIŠTA OD TOGA.`,
  `NEEE.`,
];

// —— Logika ————————————————————————————————————————————————

function nasumicno(niz) {
  return niz[Math.floor(Math.random() * niz.length)];
}

const el = {
  verdict: document.getElementById("verdict"),
  subtitle: document.getElementById("subtitle"),
  shuffle: document.getElementById("shuffle"),
};

// veličina velikog teksta se prilagođava dužini (da uvek staje lepo)
function postaviOdgovor(tekst) {
  el.verdict.textContent = tekst;
  const n = tekst.length;
  if (n <= 4)        el.verdict.style.fontSize = "clamp(5rem, 26vw, 12rem)";
  else if (n <= 9)   el.verdict.style.fontSize = "clamp(3.6rem, 18vw, 7.5rem)";
  else if (n <= 15)  el.verdict.style.fontSize = "clamp(2.8rem, 13vw, 5.5rem)";
  else               el.verdict.style.fontSize = "clamp(2.2rem, 10vw, 4.2rem)";

  // mala „pop" animacija na svakoj promeni
  el.verdict.classList.remove("pop");
  void el.verdict.offsetWidth; // restart animacije
  el.verdict.classList.add("pop");
}

// —— Režim: JOŠ NIJE (default) ——
let poslednji = "";
function novOdgovor() {
  let t;
  do { t = nasumicno(odgovori); } while (odgovori.length > 1 && t === poslednji);
  poslednji = t;
  postaviOdgovor(t);
}

// —— Režim: PORODILA SE 🎉 ——
function setupProslava() {
  document.body.classList.add("born");
  postaviOdgovor("DA!");
  el.subtitle.textContent = "Filip je konačno stigao! 🎉";
  el.shuffle.textContent = "Još konfeta! 🎉";
  el.shuffle.addEventListener("click", konfete);
  konfete();
}

// —— Konfete (jednostavan emoji „burst") ——
function konfete() {
  const emoji = ["🎉", "👶", "🍼", "🎈", "💙", "✨"];
  for (let i = 0; i < 36; i++) {
    const k = document.createElement("span");
    k.className = "konfeta";
    k.textContent = emoji[Math.floor(Math.random() * emoji.length)];
    k.style.left = Math.random() * 100 + "vw";
    k.style.fontSize = 18 + Math.random() * 22 + "px";
    k.style.animationDelay = Math.random() * 0.4 + "s";
    k.style.animationDuration = 2.4 + Math.random() * 1.8 + "s";
    document.body.appendChild(k);
    k.addEventListener("animationend", () => k.remove());
  }
}

// —— Pokretanje ——
if (PORODILA_SE) {
  setupProslava();
} else {
  el.shuffle.addEventListener("click", novOdgovor);
  novOdgovor();
}
