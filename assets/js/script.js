// ═══════════════════════════════════════════════════════════
//  ⚑  KAD SE FILIP RODI: promeni sledeći red u  true
//     i ceo sajt postaje proslava ("DA! 🎉").
const PORODILA_SE = false;
// ═══════════════════════════════════════════════════════════

// —— Sadržaj ——————————————————————————————————————————————
// Slobodno menjaj, dodaj ili izbaci bilo šta ispod.
// Svako pitanje ima svoj odgovor (par), pa uvek ima smisla.

const razgovori = [
  // —— stvari koje je Ivana ZAISTA čula ——
  { q: `„Kad je termin?"`,                       a: `Samo što nije.` },
  { q: `„Kad će Filip?"`,                         a: `Kad Filip odluči. Već sad radi šta hoće.` },
  { q: `„Je l' se dešava šta?"`,                  a: `Dešava se da me svi zovu i pitaju da l' se dešava. To se dešava.` },
  { q: `„Hoće biti blizanci?"`,                   a: `...` },
  { q: `„Pa ti si baš trudna!"`,                  a: `Imaš dobru moć zapažanja.` },
  { q: `„Je l' idete kod doktora?"`,              a: `Ne, čekamo da nam Google izda otpusnu listu.` },
  { q: `„Je l' brojiš sitno?"`,                   a: `Brojim. Uglavnom koliko puta dnevno čujem baš ovo pitanje.` },
  { q: `„MA TI ĆEŠ TO ZA PET MINUTA!"`,           a: `Odlično. Javi mi svoj broj kad kreneš da rađaš umesto mene.` },
  { q: `„Hoće li da siki?"`,                      a: `Prvo da izađe, pa ćemo o meniju.` },
  { q: `„Je l' te bole grudi, Ivana?"`,           a: `Sad me boli i to što si pitao. Hvala najlepše.` },
  { q: `„Hoće li dete biti katolik?"`,            a: `Prvo pitanje će mu biti „kad ćeš?", ne veroispovest.` },
  { q: `„Je l' idete na kontrole?"`,              a: `Ne, samo se nadamo najboljem i jedemo krastavce.` },
  { q: `„Hoće je zadržati?"`,                      a: `Mene? Nadam se da hoće — ne bih da rađam na parkingu.` },
  { q: `„Vi ćete carski, je l' da?"`,             a: `Ti odlučuješ? Super, dolazi — ti guraš, ja gledam.` },
  { q: `„Nama je u Betaniji bilo okej skroz."`,   a: `Divno za vas. Zapisujem u dnevnik nepitanih iskustava.` },
  { q: `„Ako možete da priuštite, što da ne."`,   a: `Hvala na finansijskom savetu — neplaniranom i besplatnom.` },
  { q: `„Kako još nemate ime?"`,                  a: `Zove se Filip. Znaš to. Svi znaju. Pitaš iz dosade.` },
  { q: `„Je l' ste kupili sve?"`,                 a: `Sve osim strpljenja za ovo pitanje. To je rasprodato.` },

  // —— klasici koje svaka trudnica čuje ——
  { q: `„Mogu li da pipnem stomak?"`,             a: `Ruke sebi — ovo nije izložbeni primerak.` },
  { q: `„Jesi probala da šetaš da ubrzaš?"`,      a: `Šetala sam. Do frižidera. Dva puta. Ništa.` },
  { q: `„Da l' spavaš dovoljno?"`,                a: `Spavam predivno — svakih 40 minuta, kao beba.` },
  { q: `„Uživaj u snu dok možeš!"`,               a: `Uživam tako što ga se sećam s nostalgijom.` },
  { q: `„Izgledaš umorno, jesi dobro?"`,          a: `Nosim celog čoveka u sebi 9 meseci. A ti, kako si ti?` },
];

const statusi = [
  `Proverili smo. Stomak je i dalje tu.`,
  `Stanje: i dalje trudna, i dalje ljuta.`,
  `Filip je i dalje u fazi „razmišljam o tome".`,
  `Termin je prošao pored nje kao gradski autobus — bez zaustavljanja.`,
  `Poslednji izveštaj: previše.`,
  `Ivana kaže da Filip izlazi kad on odluči, a ne kad ti pitaš.`,
  `Ažurirano upravo sada. Da, opet ništa.`,
];

const zelje = [
  `Da joj danas niko ne dira stomak bez pismene dozvole.`,
  `Da joj neko donese sladoled i ništa ne pita.`,
  `Da odspava duže od 45 minuta u komadu. Bar jednom.`,
  `Da joj gležnjevi danas budu bar malo manji od lubenica.`,
  `Da je niko ne pita „kad ćeš" narednih 24 sata.`,
  `Da nađe položaj u kom joj je udobno. (Šala. Ali nadamo se.)`,
  `Da joj kafa (bez kofeina, znamo) ostane topla do kraja.`,
  `Da Filip izađe pre nego što joj dosadi ovaj sajt.`,
  `Da neko drugi opere sudove. Danas. I sutra.`,
  `Da svako ko kaže „biće brzo" oseti jedan mali trud na sebi.`,
  `Da ima mir, tišinu i nijednu porođajnu horor-priču.`,
];

// —— Sadržaj za proslavu (kad je PORODILA_SE = true) ——————————
const poruke = [
  `Hvala svima na strpljenju. Naročito meni.`,
  `Devet meseci. Jedan Filip. Nula pitanja više, molim.`,
  `Da, prošlo je „za pet minuta". Tih pet minuta trajalo je 14 sati.`,
  `Prima se sarma. Ne primaju se saveti.`,
  `Spavaću. Kad-tad. Verovatno ne uskoro. Ali sad bar s razlogom.`,
  `Filip je stigao kad je Filip hteo. Kao što sam i rekla.`,
];

// —— Logika ————————————————————————————————————————————————

function nasumicno(niz) {
  return niz[Math.floor(Math.random() * niz.length)];
}

const el = {
  verdict: document.getElementById("verdict"),
  subtitle: document.querySelector(".subtitle"),
  status: document.getElementById("status"),
  ledger: document.querySelector(".ledger"),
  question: document.getElementById("question"),
  answer: document.getElementById("answer"),
  hope: document.getElementById("hope"),
  shuffle: document.getElementById("shuffle"),
};

// mala „pop" animacija na promeni sadržaja
function pop() {
  el.ledger.classList.remove("pop");
  void el.ledger.offsetWidth; // restart animacije
  el.ledger.classList.add("pop");
}

// —— Režim: JOŠ NIJE (default) ——
function reshuffleNije() {
  const par = nasumicno(razgovori); // pitanje i odgovor uvek idu zajedno
  el.status.textContent = nasumicno(statusi);
  el.question.textContent = par.q;
  el.answer.textContent = par.a;
  el.hope.textContent = nasumicno(zelje);
  pop();
}

// —— Režim: PORODILA SE 🎉 ——
function setupProslava() {
  document.body.classList.add("born");
  el.verdict.textContent = "DA!";
  el.subtitle.textContent = "Filip je stigao! 🎉";
  el.status.textContent = "Ivana je zvanično heroina dana.";
  el.shuffle.textContent = "Još konfeta! 🎉";

  // preuredi tri reda u čestitku
  el.ledger.innerHTML = `
    <div class="entry">
      <dt>Vest dana</dt>
      <dd class="text">Filip je konačno tu. Svi su presrećni, Ivana najviše.</dd>
    </div>
    <div class="entry">
      <dt>Ivanina poruka</dt>
      <dd class="text answer" id="poruka">…</dd>
    </div>
    <div class="entry">
      <dt>Šta sad</dt>
      <dd class="text hope">Sad sme da je pitate baš sve — osim „kad drugo".</dd>
    </div>`;

  const proslaviReshuffle = () => {
    document.getElementById("poruka").textContent = nasumicno(poruke);
    konfete();
    pop();
  };
  el.shuffle.addEventListener("click", proslaviReshuffle);
  proslaviReshuffle();
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
  el.shuffle.addEventListener("click", reshuffleNije);
  reshuffleNije();
}
