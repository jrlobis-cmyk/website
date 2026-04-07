/* ================================================================
   script.js — Dark Programmer Apology Website
   ================================================================ */

"use strict";

/* ================================================================
   SECTION 1: CONFIGURATION — edit these
   ================================================================ */

const DISPLAY_NAME = "Jazlee";

/*
  Multi-step verification questions & answers.
  Each step must be passed in order.
*/
const VERIFICATION_STEPS = [
  {
    question: "complete the date:",
    prefix:   "10/",
    suffix:   "/2024",
    answer:   "14",
    inputmode: "numeric",
    maxlength: "2",
    placeholder: "__",
    hint:     null,
  },
  {
    question: "what is my favorite ulam?",
    prefix:   "",
    suffix:   "",
    answer:   "chicken curry",
    inputmode: "text",
    maxlength: "20",
    placeholder: "_ _ _ _ _ _ _ _ _ _",
    hint:     "// two words, all lowercase",
  },
  {
    question: "what is our favorite snack on dates?",
    prefix:   "",
    suffix:   "",
    answer:   "french fries",
    inputmode: "text",
    maxlength: "20",
    placeholder: "_ _ _ _ _ _ _ _ _ _",
    hint:     "// two words, all lowercase",
  },
];

const PHOTOS = [
  "PHOTOS/1725268195393.jpg",
  "PHOTOS/1725275807403_1.jpg",
  "PHOTOS/IMG_20241004_101952_070.jpg",
  "PHOTOS/IMG_20241004_110334_420.jpg",
  "PHOTOS/IMG_20241004_110347_798.jpg",
  "PHOTOS/IMG_20241214_201958_207.jpg",
  "PHOTOS/IMG_20241214_202010_624.jpg",
  "PHOTOS/IMG_20241220_204737_172.jpg",
  "PHOTOS/IMG_20241228_185506_617.jpg",
  "PHOTOS/IMG_20241228_185509_306.jpg",
  "PHOTOS/IMG_20241228_190318_039.jpg",
  "PHOTOS/IMG_20241228_190321_176.jpg",
  "PHOTOS/IMG_20250204_110405_298.jpg",
  "PHOTOS/IMG_20250316_185103_546.jpg",
  "PHOTOS/IMG_20250316_185107_292.jpg",
  "PHOTOS/IMG_20250316_185108_978.jpg",
  "PHOTOS/IMG_20250316_185110_729.jpg",
  "PHOTOS/IMG_20250414_183923_536.jpg",
  "PHOTOS/IMG_20250414_183925_404.jpg",
  "PHOTOS/IMG_20250414_191552_816.jpg",
  "PHOTOS/IMG_20250414_191629_506.jpg",
  "PHOTOS/IMG_20250520_164025_996.jpg",
  "PHOTOS/IMG_20250614_170023_258.jpg",
  "PHOTOS/IMG_20250614_170031_639.jpg",
  "PHOTOS/IMG_20251214_162133_950.jpg",
  "PHOTOS/IMG_20260108_145303.jpg",
  "PHOTOS/IMG_20260108_153753.jpg",
  "PHOTOS/IMG_20260108_163721.jpg",
  "PHOTOS/IMG_20260108_163753.jpg",
  "PHOTOS/IMG_20260111_144710.jpg",
  "PHOTOS/IMG_20260118_132506.jpg",
  "PHOTOS/Messenger_creation_01F2BB77-5D6E-47ED-8781-07C3D91699AB~2.jpeg",
  "PHOTOS/Messenger_creation_12AD9F04-57C4-4CC8-B2EB-EB1C9F317387.jpeg",
  "PHOTOS/Messenger_creation_12B3D344-155E-409C-AE04-E0B49F726973.jpeg",
  "PHOTOS/Messenger_creation_138A1012-9DF2-4D3E-AE34-E722F004214F.jpeg",
  "PHOTOS/Messenger_creation_196A6172-F347-4AF7-A098-3A24977C8E81.jpeg",
  "PHOTOS/Messenger_creation_1C8EB35C-9DCC-4F6F-B1C9-BD33C7C379DA~2.jpeg",
  "PHOTOS/Messenger_creation_20AA54DF-206D-48DC-B250-081DE61C8CA6.jpeg",
  "PHOTOS/Messenger_creation_22FB0805-1A0F-4F61-B5AE-9DA08FD12234.jpeg",
  "PHOTOS/Messenger_creation_292653D9-16E1-42D0-A0C7-F6BE69498522.jpeg",
  "PHOTOS/Messenger_creation_2A8638DB-C65C-4C19-BFE4-3A2ACE6DEC05.jpeg",
  "PHOTOS/Messenger_creation_2B1512E1-AC1C-4B04-9BC0-AD6F72F6CA30.jpeg",
  "PHOTOS/Messenger_creation_2B7A84A1-CCE8-400D-8FD0-E4BDDA18D3EE.jpeg",
  "PHOTOS/Messenger_creation_323A73AF-0F69-4B62-9F1D-CDC6B3A6D1EF~2.jpeg",
  "PHOTOS/Messenger_creation_36EE48F5-EEE4-4515-816B-30124AEB0619.heic",
  "PHOTOS/Messenger_creation_39DE8337-0879-4D4E-836A-039012C30B93.jpeg",
  "PHOTOS/Messenger_creation_3AA11D59-D79A-4592-A6C2-E4C3DE102CE0.jpeg",
  "PHOTOS/Messenger_creation_3DCC18AC-47CA-4670-B32D-74866DC62E2C~2.jpeg",
  "PHOTOS/Messenger_creation_3DFB4191-8EAD-449A-BC7D-C17C779E9861.jpeg",
  "PHOTOS/Messenger_creation_443F679A-289E-4C4D-BA83-894E60D2C01C.heic",
  "PHOTOS/Messenger_creation_46864408-2C7C-4D97-AE5B-29442DB75516.jpeg",
  "PHOTOS/Messenger_creation_48179961-B082-45EF-8B8E-A50918701413.heic",
  "PHOTOS/Messenger_creation_4B0EAA97-AEC3-4331-8674-7C5C1DA738BE.jpeg",
  "PHOTOS/Messenger_creation_4C90339F-496F-4978-B61B-63E59612BDB8~2.jpeg",
  "PHOTOS/Messenger_creation_4D955941-494C-4F4F-B588-6F8F08112482.jpeg",
  "PHOTOS/Messenger_creation_5237E7AA-DCC6-49CD-ACA4-0061B9F4BE38.jpeg",
  "PHOTOS/Messenger_creation_5313FECC-480A-46D5-A345-6827145DB148.jpeg",
  "PHOTOS/Messenger_creation_557A9635-6DA2-42D2-8F53-9F7698B4C576.jpeg",
  "PHOTOS/Messenger_creation_57AD890C-FFD0-4372-AC20-54973593AFF8.jpeg",
  "PHOTOS/Messenger_creation_599215EC-A7DD-4336-A50C-19DD83EEC4AA.jpeg",
  "PHOTOS/Messenger_creation_5B0CA0BD-3DEB-4403-BA58-A733FBBB8949~2.jpeg",
  "PHOTOS/Messenger_creation_5C2DCBB8-EE1C-4081-B7CE-32D0B30C83A6.jpeg",
  "PHOTOS/Messenger_creation_5CB152D2-E2E9-4882-ABF0-99482DAD7D1D.jpeg",
  "PHOTOS/Messenger_creation_607D746C-2E7C-4E9A-A579-02B5AF49DBDC.jpeg",
  "PHOTOS/Messenger_creation_60A88BFC-6918-42DD-A71B-B7E70CBFDBA6.jpeg",
  "PHOTOS/Messenger_creation_61409944-01A8-4B06-B5BA-DB2086E437C5.jpeg",
  "PHOTOS/Messenger_creation_673640B8-6CD0-480C-99CF-70A1C4B728F9.jpeg",
  "PHOTOS/Messenger_creation_6F877165-DF95-4A12-9D49-BC4B1BFAC49B.jpeg",
  "PHOTOS/Messenger_creation_718A3F62-A622-445F-AACA-C8C5B6243F79.heic",
  "PHOTOS/Messenger_creation_77006B75-10A9-4BBD-8E99-7689C8470931.jpeg",
  "PHOTOS/Messenger_creation_7880DFB1-7579-4906-B9A7-CD14B6AD7512.heic",
  "PHOTOS/Messenger_creation_7BD0AD32-8C47-48D7-9C42-CE42ECDC2724.jpeg",
  "PHOTOS/Messenger_creation_7EA47462-CCC9-4EBB-B71D-3CAA2BF1B1EF.jpeg",
  "PHOTOS/Messenger_creation_8043F6DF-D282-449E-AA14-3D02D86F025D.heic",
  "PHOTOS/Messenger_creation_82DC6C97-83CA-4DCC-9AF5-EA87B032D3FC.jpeg",
  "PHOTOS/Messenger_creation_8B4D402F-2289-4DE1-B357-D41559D8F8FD.jpeg",
  "PHOTOS/Messenger_creation_8B6153E7-B68B-4DA0-971B-5DED83E7A16B.jpeg",
  "PHOTOS/Messenger_creation_95C76EF4-3C7C-4F72-9146-B0923C82868D.jpeg",
  "PHOTOS/Messenger_creation_97192297-9087-4B60-B48B-DB203F01F6E7.jpeg",
  "PHOTOS/Messenger_creation_9B0F68CC-FA42-4AF0-8621-DF54AA1092AD.jpeg",
  "PHOTOS/Messenger_creation_A8476C0C-9576-4CBB-907B-BAE12112093F.jpeg",
  "PHOTOS/Messenger_creation_A9A57EBD-8903-412D-9CAB-2D521018F8DD.jpeg",
  "PHOTOS/Messenger_creation_AF7C9F1E-245E-4102-8CF7-262CCA75D0CE.jpeg",
  "PHOTOS/Messenger_creation_B0C2A1CC-6D9F-4D2A-8345-2180B49924D9.jpeg",
  "PHOTOS/Messenger_creation_B7E741DB-9190-462F-8475-2F17CE70287F.heic",
  "PHOTOS/Messenger_creation_BBF742E3-F5D5-495F-8685-CEBD910C7139.jpeg",
  "PHOTOS/Messenger_creation_C4811662-258F-4A71-8177-E8A9D3654AF7~2.jpeg",
  "PHOTOS/Messenger_creation_C7568221-0296-4071-8ECC-2EAD66E8D812.jpeg",
  "PHOTOS/Messenger_creation_CAEC3812-7E6A-4F06-86C1-F7BDFD9F4DF3.jpeg",
  "PHOTOS/Messenger_creation_D2775911-E029-487A-8826-6620BFB11AAE.jpeg",
  "PHOTOS/Messenger_creation_D328DF54-6338-41AB-AE17-2BF485CA67FD~2.jpeg",
  "PHOTOS/Messenger_creation_D5439692-D15D-4315-9AFB-CCD0D1B79D42.jpeg",
  "PHOTOS/Messenger_creation_D6FB5205-2B17-4676-8022-2BF8A5942E78~2.jpeg",
  "PHOTOS/Messenger_creation_D8A56420-E0A3-4FD8-820C-9418EFC613B6.heic",
  "PHOTOS/Messenger_creation_D8D433B9-DDD0-426A-AA6E-872102A142D8.jpeg",
  "PHOTOS/Messenger_creation_D9DDAABA-033A-4F77-BA2C-351136B2AE75.jpeg",
  "PHOTOS/Messenger_creation_E28816B0-FE7E-4CA2-A0C5-DBCEF65E1787.jpeg",
  "PHOTOS/Messenger_creation_E410AB06-FCD4-4358-9CA0-B0E0EB6DB70F~2.jpeg",
  "PHOTOS/Messenger_creation_F0D58214-B72F-4931-AF3F-D4EFD50DBF2C.jpeg",
  "PHOTOS/Messenger_creation_F11465D3-6C64-4F98-AAD3-C109E15FB7FE.jpeg",
  "PHOTOS/Messenger_creation_F14F7E13-1CA4-4921-B47F-0FDF08E4B25B.jpeg",
  "PHOTOS/Messenger_creation_F4D75257-395F-4C56-96B0-04CF57020CCE.jpeg",
  "PHOTOS/Messenger_creation_F4F62DCC-ECC6-4D53-B234-C40BF2AA449D.jpeg",
  "PHOTOS/Messenger_creation_F7D5A69E-5FD7-4E8A-B4CC-702A92630012~2.jpeg",
  "PHOTOS/Messenger_creation_FEEFCFD9-CDBA-462D-9914-37C9BC71D109.jpeg"
];

const CAPTIONS = [
  "the day we laughed without worry.",
  "i still remember your smile here.",
  "my favorite version of us, before the mistakes.",
  "i wouldn't trade this memory, even now.",
  "you made ordinary days feel extraordinary.",
  "this moment stays in my heart forever.",
  "a memory i'll never forget, though i failed you.",
  "how did i take you for granted?",
  "you were radiant that day, as always.",
  "i wish i could go back and do better.",
  "this is what happiness looked like with you.",
  "still brings a bittersweet smile to me.",
  "you have no idea how much you meant to me.",
  "the small moments with you were the greatest.",
  "remember how we laughed until we couldn't breathe?",
  "i cherish this look on your face here.",
  "this is us at our happiest, before the pain.",
  "i'm grateful we shared this, even for a while.",
  "you made everything feel brighter.",
  "forever holding onto this memory, with all its love and regret.",
];

const BATCH_SIZE = 30;


/* ================================================================
   SECTION 2: MULTI-STEP VERIFICATION LOGIC
   ================================================================ */

let currentStep = 0;

/* Renders the UI for the given step index */
function renderStep(stepIndex) {
  const step = VERIFICATION_STEPS[stepIndex];

  /* ── progress dots ── */
  const dots = document.querySelectorAll(".step-dot");
  dots.forEach((dot, i) => {
    dot.classList.remove("active", "done");
    if (i < stepIndex)  dot.classList.add("done");
    if (i === stepIndex) dot.classList.add("active");
  });

  /* ── step counter ── */
  document.getElementById("step-counter").textContent =
    `[${stepIndex + 1}/${VERIFICATION_STEPS.length}]`;

  /* ── question ── */
  const qEl = document.getElementById("verify-question-text");
  qEl.style.opacity = "0";
  setTimeout(() => {
    qEl.textContent = step.question;
    qEl.style.opacity = "1";
  }, 180);

  /* ── prefix / suffix ── */
  const prefixEl = document.getElementById("date-prefix");
  const suffixEl = document.getElementById("date-suffix");
  prefixEl.textContent = step.prefix;
  suffixEl.textContent = step.suffix;
  prefixEl.style.display = step.prefix ? "inline" : "none";
  suffixEl.style.display = step.suffix ? "inline" : "none";

  /* ── input ── */
  const input = document.getElementById("answer-input");
  input.value       = "";
  input.inputMode   = step.inputmode;
  input.maxLength   = step.maxlength;
  input.placeholder = step.placeholder;
  input.focus();

  /* ── hint ── */
  const hintEl = document.getElementById("step-hint");
  if (step.hint) {
    hintEl.textContent = step.hint;
    hintEl.style.display = "block";
  } else {
    hintEl.style.display = "none";
  }

  /* ── clear error ── */
  document.getElementById("error-msg").classList.remove("show");

  /* ── animate blank row in ── */
  const blankRow = document.querySelector(".blank-row");
  blankRow.classList.remove("step-slide-in");
  void blankRow.offsetWidth; // reflow
  blankRow.classList.add("step-slide-in");
}

function checkAnswer() {
  const input  = document.getElementById("answer-input");
  const errorMsg = document.getElementById("error-msg");
  const raw    = input.value.trim();
  const answer = raw.toLowerCase();
  const expected = VERIFICATION_STEPS[currentStep].answer.toLowerCase();

  if (answer === expected) {
    errorMsg.classList.remove("show");

    /* Mark current dot as done */
    const dots = document.querySelectorAll(".step-dot");
    dots[currentStep].classList.remove("active");
    dots[currentStep].classList.add("done");

    currentStep++;

    if (currentStep >= VERIFICATION_STEPS.length) {
      /* All steps passed — show access granted then reveal */
      showAccessGranted();
    } else {
      /* Advance to next step */
      renderStep(currentStep);
    }
  } else {
    errorMsg.classList.add("show");
    input.value = "";
    input.focus();

    input.animate(
      [
        { transform: "translateX(0)" },
        { transform: "translateX(-7px)" },
        { transform: "translateX(7px)" },
        { transform: "translateX(-4px)" },
        { transform: "translateX(4px)" },
        { transform: "translateX(0)" },
      ],
      { duration: 350, easing: "ease" }
    );
  }
}

function showAccessGranted() {
  const body = document.querySelector(".terminal-body");
  body.innerHTML = `
    <div class="access-granted-msg">
      <div class="ag-line">
        <span class="prompt">$</span>
        <span class="cmd"> verifying identity...</span>
      </div>
      <div class="ag-line ag-delay-1">
        <span class="prompt">></span>
        <span class="cmd highlight"> ALL CHECKS PASSED ✓</span>
      </div>
      <div class="ag-line ag-delay-2">
        <span class="prompt">$</span>
        <span class="cmd"> welcome, Jazlee.</span>
      </div>
      <div class="ag-line ag-delay-3">
        <span class="prompt">$</span>
        <span class="cmd"> loading message...</span>
      </div>
      <div class="progress-bar-wrap ag-delay-4">
        <div class="progress-bar-fill" id="progress-bar-fill"></div>
      </div>
    </div>
  `;

  /* Animate progress bar then transition */
  setTimeout(() => {
    const fill = document.getElementById("progress-bar-fill");
    if (fill) fill.style.width = "100%";
  }, 900);

  setTimeout(() => {
    revealMainPage();
  }, 2200);
}

/* ================================================================
   SECTION 3: PAGE TRANSITION
   ================================================================ */

function revealMainPage() {
  const verifyPage = document.getElementById("verify-page");
  const mainPage   = document.getElementById("main-page");

  verifyPage.classList.add("exit");

  verifyPage.addEventListener("animationend", () => {
    verifyPage.style.display = "none";
    mainPage.classList.remove("hidden");
    mainPage.classList.add("enter");

    typeHeroName();
    buildGallery();
    setupScrollReveal();
  }, { once: true });
}


/* ================================================================
   SECTION 4: DOM READY — init step 0
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  renderStep(0);

  const input = document.getElementById("answer-input");
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkAnswer();
  });
  input.addEventListener("input", () => {
    document.getElementById("error-msg").classList.remove("show");
  });
});


/* ================================================================
   SECTION 5: TYPING EFFECT — hero name
   ================================================================ */

function typeHeroName() {
  const el    = document.getElementById("typed-name");
  const name  = DISPLAY_NAME;
  let   index = 0;
  setTimeout(() => {
    const interval = setInterval(() => {
      el.textContent += name[index];
      index++;
      if (index >= name.length) clearInterval(interval);
    }, 90);
  }, 600);
}


/* ================================================================
   SECTION 6: MUSIC PANEL TOGGLE
   ================================================================ */

function toggleMusicPanel() {
  const panel = document.getElementById("music-panel");
  panel.classList.toggle("collapsed");
}


/* ================================================================
   SECTION 7: GALLERY BUILDER
   ================================================================ */

let loadedCount = 0;

function buildGallery() {
  const countDisplay = document.getElementById("photo-count-display");
  countDisplay.textContent = `${PHOTOS.length}`;
  renderBatch(0, Math.min(BATCH_SIZE, PHOTOS.length));
  updateLoadMoreButton();
}

function renderBatch(start, end) {
  const grid = document.getElementById("gallery-grid");
  for (let i = start; i < end; i++) {
    const src     = PHOTOS[i];
    const caption = CAPTIONS[i % CAPTIONS.length];
    const item    = document.createElement("div");
    item.className   = "gallery-item reveal";
    item.dataset.idx = i;
    item.innerHTML = `
      <div class="gallery-img-wrap">
        <img src="${src}" alt="memory ${i + 1}" loading="lazy"
             onerror="this.closest('.gallery-item').style.display='none'" />
        <div class="gallery-overlay">
          <p class="gallery-caption">${caption}</p>
        </div>
        <span class="gallery-index">[${String(i).padStart(3, "0")}]</span>
      </div>
    `;
    item.addEventListener("click", () => openLightbox(i));
    grid.appendChild(item);
  }
  loadedCount = end;
  observeNewRevealItems();
  updateLoadMoreButton();
}

function loadMorePhotos() {
  const nextEnd = Math.min(loadedCount + BATCH_SIZE, PHOTOS.length);
  renderBatch(loadedCount, nextEnd);
}

function updateLoadMoreButton() {
  const wrap      = document.getElementById("load-more-wrap");
  const remaining = document.getElementById("remaining-count");
  const left      = PHOTOS.length - loadedCount;
  if (loadedCount >= PHOTOS.length) {
    wrap.classList.add("done");
  } else {
    wrap.classList.remove("done");
    remaining.textContent = `(${left} more)`;
  }
}


/* ================================================================
   SECTION 8: LIGHTBOX
   ================================================================ */

let currentLbIndex = 0;

function openLightbox(index) {
  currentLbIndex = index;
  const lb      = document.getElementById("lightbox");
  const img     = document.getElementById("lb-img");
  const caption = document.getElementById("lb-caption");
  const counter = document.getElementById("lb-counter");
  img.src             = PHOTOS[index];
  img.alt             = `memory ${index + 1}`;
  caption.textContent = CAPTIONS[index % CAPTIONS.length];
  counter.textContent = `[${String(index).padStart(3, "0")}] / [${String(PHOTOS.length - 1).padStart(3, "0")}]`;
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

function lbNav(direction) {
  let next = currentLbIndex + direction;
  if (next < 0)              next = PHOTOS.length - 1;
  if (next >= PHOTOS.length) next = 0;
  openLightbox(next);
}

document.addEventListener("keydown", (e) => {
  const lb = document.getElementById("lightbox");
  if (!lb.classList.contains("open")) return;
  if (e.key === "ArrowRight") lbNav(1);
  if (e.key === "ArrowLeft")  lbNav(-1);
  if (e.key === "Escape")     closeLightbox();
});

document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target === document.getElementById("lightbox")) closeLightbox();
});


/* ================================================================
   SECTION 9: SCROLL REVEAL
   ================================================================ */

let revealObserver = null;

function setupScrollReveal() {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  observeNewRevealItems();
}

function observeNewRevealItems() {
  if (!revealObserver) return;
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => revealObserver.observe(el));
}

/* ── SWIPE for lightbox ── */
let touchStartX = 0;
document.getElementById("lightbox").addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});
document.getElementById("lightbox").addEventListener("touchend", (e) => {
  const diff = touchStartX - e.changedTouches[0].screenX;
  if (Math.abs(diff) > 50) lbNav(diff > 0 ? 1 : -1);
});
