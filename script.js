const artworks = [
  {
    id: 1,
    title:
      "The Assassination of Governor-General Bustamante (La muerte del Gobernador Bustamante)",
    artist: "Felix Resurreccion Hidalgo",
    year: "1884",
    medium: "Oil on canvas",
    dimensions: "~4.12 m x 3.38 m",
    location: "National Museum of Fine Arts, Manila",
    image: "./The Assassination of Governor.webp",
    cardClass: "md:col-span-1 lg:col-span-3",
    frameClass: "min-h-[16rem] md:min-h-[18rem] xl:min-h-[20rem]",
    description:
      "Dark, earthy tones such as browns, blacks, and ochres are contrasted with striking red accents. The composition feels angular and chaotic, with friars, soldiers, religious banners, and weapons filling the interior of the Palacio del Gobernador. The overall look is dramatic, intense, and full of movement.",
    subject:
      "Depicts the violent assassination of Governor-General Bustamante in 1719.",
    meaning:
      "Critiques clerical abuse of power and highlights the conflict between church and state. It conveys chaos, fear, and betrayal.",
    context:
      "Reflects Spanish colonial tensions and is linked to the reformist ideas of the Propaganda Movement. Hidalgo gained international recognition in Europe.",
    analysis:
      "Uses strong chiaroscuro, diagonal movement, asymmetrical balance, and strong emphasis on the central act of violence.",
    interpretation:
      "A powerful historical artwork that exposes colonial injustice.",
    references: [
      "National Museum of Fine Arts, Philippines",
      "General Philippine art history sources on Felix Hidalgo",
    ],
  },
  {
    id: 2,
    title: "Spoliarium",
    artist: "Juan Luna",
    year: "1884",
    medium: "Oil on canvas",
    dimensions: "4.22 m x 7.675 m",
    location: "National Museum of Fine Arts, Manila",
    image: "./spoliarium.webp",
    cardClass: "md:col-span-1 lg:col-span-3",
    frameClass: "min-h-[16rem] md:min-h-[18rem] xl:min-h-[20rem]",
    description:
      "Dark tones of black, brown, and red dominate the canvas. Dead gladiators are dragged across the arena with strong contrasts of light and shadow heightening the drama.",
    subject: "The aftermath of a gladiatorial fight in ancient Rome.",
    meaning:
      "Symbolizes oppression and injustice and is often read as an allegory of Filipino suffering under colonization. It evokes grief, brutality, and helplessness.",
    context:
      "Won a Gold Medal in Spain in 1884, was celebrated by Jose Rizal, and became a nationalist symbol.",
    analysis:
      "Uses a dark dramatic palette, diagonal flow, realistic texture, and strong emphasis on the fallen gladiators.",
    interpretation:
      "A masterpiece symbolizing Filipino identity and resistance.",
    references: [
      "https://en.wikipedia.org/wiki/Spoliarium",
      "https://www.nationalmuseum.gov.ph/our-museums/national-museum-of-fine-arts",
      "Alcantara, P. A. (1959). Juan Luna and the Spoliarium",
      "https://repository.cpu.edu.ph/handle/20.500.12852/3064",
      "https://ncca.gov.ph/about-culture-and-arts/in-focus/suffering-colonialism-modernity-as-sacrifice-and-salvation-in-philippine-colonial-painting/",
      "https://www.youtube.com/watch?v=Wy99w1BP_sE",
    ],
  },
  {
    id: 3,
    title: "Filipino Struggles Through History",
    artist: 'Carlos "Botong" Francisco',
    year: "1964",
    medium: "Oil on canvas",
    dimensions: "2.7 m x 8 m",
    location: "National Museum of Fine Arts, Manila",
    image: "./Filipino Struggles through History.webp",
    cardClass: "md:col-span-2 lg:col-span-2",
    frameClass: "min-h-[11rem] md:min-h-[12rem] lg:min-h-[13rem]",
    imageClass:
      "mx-auto max-w-[13rem] sm:max-w-[15rem] lg:max-w-[14rem]",
    description:
      "Warm tones of red, orange, and yellow combine with strong figures and flowing lines. The mural presents scenes of revolution in a continuous and energetic narrative.",
    subject:
      "Shows the Filipino struggle for freedom, highlighting Bonifacio and the Katipuneros.",
    meaning:
      "Emphasizes unity and collective struggle. It conveys courage, urgency, and patriotism.",
    context:
      "It was commissioned for Manila City Hall during the post-war cultural revival, and Botong Francisco helped revive mural art in the Philippines.",
    analysis:
      "Uses bold color, rhythmic line, continuous narrative movement, and well-distributed balance.",
    interpretation:
      "Preserves Filipino history and identity.",
    references: [
      "National Museum of Fine Arts, Philippines",
      'Historical records on Carlos "Botong" Francisco',
    ],
  },
  {
    id: 4,
    title: "Souvenir de 1899",
    artist: "Juan Luna",
    year: "1899",
    medium: "Watercolor on paper",
    dimensions: "Not specified",
    location: "National Museum of the Philippines",
    image: "./Souvenirde1999.webp",
    cardClass: "md:col-span-1 lg:col-span-2",
    frameClass: "min-h-[14rem] md:min-h-[15rem] lg:min-h-[16rem]",
    description:
      "The Philippine flag flies prominently while a town burns in the background, creating a sharp contrast between national hope and wartime destruction.",
    subject:
      "The first artistic depiction of the Philippine flag during the Philippine-American War.",
    meaning:
      "Symbolizes nationalism and resistance, while also representing hope and pride.",
    context:
      "Painted in Bohemia and reflects the political struggle of 1899.",
    analysis:
      "Uses bright-versus-muted color contrast, centered balance, and clear emphasis on the flag.",
    interpretation:
      "Represents Filipino identity during war.",
    references: [
      "National Museum of the Philippines",
      "Historical accounts of Juan Luna",
    ],
  },
  {
    id: 5,
    title: "Commonwealth Triumphant Arch",
    artist: "Guillermo Estrella Tolentino",
    year: "c. 1935-1938",
    medium: "Bronze, marble (maquette)",
    dimensions: "Maquette model; exact dimensions not specified",
    location: "National Museum of Fine Arts, Manila",
    image: "./Commonwealth Triumphant Arch.webp",
    cardClass: "md:col-span-1 lg:col-span-2",
    frameClass: "min-h-[14rem] md:min-h-[15rem] lg:min-h-[16rem]",
    description:
      'Figures carry an arch labeled "1935" in a realistic yet carefully structured design, emphasizing cooperation and collective effort.',
    subject: "Shows Filipinos working together to build a nation.",
    meaning:
      "Represents unity, bayanihan, and hope for independence. It conveys pride and determination.",
    context:
      "Created during the Commonwealth era, but the larger project was halted by World War II.",
    analysis:
      "Uses symmetrical balance, contrast between the human figures and the structure, and movement through shared effort.",
    interpretation:
      "A symbol of national unity and progress.",
    references: [
      "National Museum of Fine Arts, Philippines",
      "Historical documentation on Guillermo Tolentino",
    ],
  },
];

const galleryGrid = document.querySelector("#gallery-grid");
const referencesGrid = document.querySelector("#references-grid");
const modal = document.querySelector("#artwork-modal");
const modalPanel = modal.querySelector(".modal-panel");
const closeButton = document.querySelector("#modal-close");
const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-title");
const modalArtist = document.querySelector("#modal-artist");
const modalYear = document.querySelector("#modal-year");
const modalMedium = document.querySelector("#modal-medium");
const modalLocation = document.querySelector("#modal-location");
const modalDimensions = document.querySelector("#modal-dimensions");
const modalDescription = document.querySelector("#modal-description");
const modalSubject = document.querySelector("#modal-subject");
const modalMeaning = document.querySelector("#modal-meaning");
const modalContext = document.querySelector("#modal-context");
const modalAnalysis = document.querySelector("#modal-analysis");
const modalInterpretation = document.querySelector("#modal-interpretation");
const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));

let lastFocusedCard = null;

function getArtworkImage(artwork) {
  return encodeURI(artwork.image);
}

function getArtworkAlt(artwork) {
  return `${artwork.title} by ${artwork.artist}`;
}

function getArtworkImageClass(artwork) {
  return artwork.imageClass || "";
}

function getPreviewText(text, maxLength = 150) {
  if (!text) {
    return "View artwork notes, context, and analysis.";
  }

  return text.length > maxLength
    ? `${text.slice(0, maxLength - 3)}...`
    : text;
}

function getArtworkNumber(id) {
  return String(id).padStart(2, "0");
}

function createArtworkCard(artwork) {
  const article = document.createElement("article");
  article.className = `fade-up artwork-card self-start ${artwork.cardClass}`;

  const button = document.createElement("button");
  button.type = "button";
  button.className =
    "artwork-trigger group block w-full overflow-hidden rounded-[1.85rem] border border-[rgba(92,64,51,0.16)] bg-[rgba(255,255,255,0.82)] text-left shadow-[var(--museum-shadow)] transition duration-300 hover:translate-y-[-4px] hover:shadow-[var(--museum-shadow-strong)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--museum-brown)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--museum-cream)]";
  button.dataset.artworkId = artwork.id;
  button.setAttribute("aria-haspopup", "dialog");
  button.innerHTML = `
    <div class="flex flex-col">
      <div class="artwork-media relative flex ${artwork.frameClass} items-center justify-center overflow-hidden border-b border-[rgba(92,64,51,0.16)] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_58%),linear-gradient(180deg,rgba(37,26,20,0.95),rgba(87,63,49,0.94))]">
        <div class="absolute inset-x-0 top-0 z-20 flex items-start justify-between p-4 sm:p-5">
          <span class="rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--museum-cream)] backdrop-blur-sm">
            ${getArtworkNumber(artwork.id)}
          </span>
          <span class="rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(24,16,12,0.22)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--museum-cream)] backdrop-blur-sm">
            View
          </span>
        </div>
        <img
          src="${getArtworkImage(artwork)}"
          alt="${getArtworkAlt(artwork)}"
          loading="lazy"
          decoding="async"
          class="relative z-10 h-full w-full object-contain p-4 transition duration-500 group-hover:scale-[1.03] sm:p-5 ${getArtworkImageClass(
            artwork
          )}"
        />
      </div>
      <div class="flex flex-col gap-5 p-6 sm:p-7">
        <div class="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--museum-grey)]">
          <span class="rounded-full border border-[rgba(92,64,51,0.16)] bg-white px-3 py-1">${artwork.year}</span>
          <span class="rounded-full border border-[rgba(92,64,51,0.16)] bg-white px-3 py-1">${artwork.medium}</span>
        </div>
        <div class="space-y-2">
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--museum-brown)]">Artwork detail</p>
          <h3 class="font-display text-3xl leading-none text-[var(--museum-charcoal)]">${artwork.title}</h3>
          <p class="text-sm leading-7 text-[var(--museum-grey)]">${artwork.artist}</p>
        </div>
        <p class="text-sm leading-7 text-[var(--museum-grey)]">${getPreviewText(artwork.description, 160)}</p>
        <div class="flex items-center justify-between gap-4 border-t border-[rgba(92,64,51,0.12)] pt-4 text-sm text-[var(--museum-grey)]">
          <span class="max-w-[14rem] truncate sm:max-w-[18rem]">${artwork.location}</span>
          <span class="card-arrow shrink-0 font-semibold text-[var(--museum-brown)] opacity-80">Open details</span>
        </div>
      </div>
    </div>
  `;
  button.addEventListener("click", () => openModal(artwork.id, button));
  article.append(button);

  return article;
}

function renderGallery() {
  const cards = artworks.map(createArtworkCard);
  galleryGrid.replaceChildren(...cards);
}

function getReferenceMeta(item) {
  if (!/^https?:\/\//i.test(item)) {
    if (/museum/i.test(item)) {
      return {
        type: "Museum",
        display: item,
      };
    }

    if (/\(\d{4}\)/.test(item)) {
      return {
        type: "Book",
        display: item,
      };
    }

    return {
      type: "Archive",
      display: item,
    };
  }

  const url = new URL(item);
  const host = url.hostname.replace(/^www\./, "");
  const display = `${host}${url.pathname}${url.search}`.replace(/\/$/, "");

  let type = "Web";

  if (/youtube\.com|youtu\.be/i.test(host)) {
    type = "Video";
  } else if (/nationalmuseum/i.test(host)) {
    type = "Museum";
  } else if (/ncca/i.test(host)) {
    type = "Agency";
  } else if (/repository|handle/i.test(display)) {
    type = "Archive";
  }

  return {
    type,
    display,
    host,
    href: item,
  };
}

function createReferenceRow(item, index) {
  const meta = getReferenceMeta(item);
  const row = document.createElement("tr");
  row.className = "align-top";

  const numberCell = document.createElement("td");
  numberCell.className =
    "border-t border-[rgba(92,64,51,0.12)] px-4 py-4 font-semibold text-[var(--museum-brown)]";
  numberCell.textContent = String(index + 1).padStart(2, "0");

  const typeCell = document.createElement("td");
  typeCell.className = "border-t border-[rgba(92,64,51,0.12)] px-4 py-4";

  const typeBadge = document.createElement("span");
  typeBadge.className = "reference-type";
  typeBadge.textContent = meta.type;
  typeCell.append(typeBadge);

  const sourceCell = document.createElement("td");
  sourceCell.className =
    "border-t border-[rgba(92,64,51,0.12)] px-4 py-4 leading-7 text-[var(--museum-grey)]";

  if (meta.href) {
    const link = document.createElement("a");
    link.href = meta.href;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.className = "reference-link break-all underline transition";
    link.textContent = meta.display;
    link.title = meta.href;

    const metaLine = document.createElement("p");
    metaLine.className =
      "mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(107,107,107,0.82)]";
    metaLine.textContent = meta.host;

    sourceCell.append(link, metaLine);
  } else {
    sourceCell.textContent = meta.display;
  }

  row.append(numberCell, typeCell, sourceCell);

  return row;
}

function createReferenceTable(artwork) {
  const article = document.createElement("article");
  article.className =
    "fade-up museum-surface overflow-hidden rounded-[1.6rem] border border-[rgba(92,64,51,0.16)] bg-[rgba(255,255,255,0.82)] shadow-[var(--museum-shadow)]";

  const header = document.createElement("div");
  header.className =
    "flex items-start justify-between gap-4 border-b border-[rgba(92,64,51,0.16)] px-6 py-5";

  const titleBlock = document.createElement("div");

  const eyebrow = document.createElement("p");
  eyebrow.className =
    "text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--museum-brown)]";
  eyebrow.textContent = "Reference Table";

  const title = document.createElement("h3");
  title.className =
    "mt-3 font-display text-3xl leading-none text-[var(--museum-charcoal)]";
  title.textContent = artwork.title;

  const count = document.createElement("span");
  count.className =
    "inline-flex shrink-0 items-center rounded-full border border-[rgba(92,64,51,0.14)] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--museum-grey)]";
  count.textContent = `${artwork.references.length} sources`;

  titleBlock.append(eyebrow, title);
  header.append(titleBlock, count);

  const tableWrap = document.createElement("div");
  tableWrap.className = "overflow-x-auto";

  const table = document.createElement("table");
  table.className = "reference-table min-w-full border-collapse text-sm";

  table.innerHTML = `
    <thead class="bg-[rgba(92,64,51,0.08)]">
      <tr>
        <th scope="col" class="w-16 px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.18em] text-[var(--museum-brown)]">No.</th>
        <th scope="col" class="w-28 px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.18em] text-[var(--museum-brown)]">Type</th>
        <th scope="col" class="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.18em] text-[var(--museum-brown)]">Source</th>
      </tr>
    </thead>
  `;

  const body = document.createElement("tbody");

  artwork.references.forEach((item, index) => {
    body.append(createReferenceRow(item, index));
  });

  table.append(body);
  tableWrap.append(table);
  article.append(header, tableWrap);

  return article;
}

function renderReferences() {
  const tables = artworks.map(createReferenceTable);
  referencesGrid.replaceChildren(...tables);
}

function populateModal(artwork) {
  modalImage.src = getArtworkImage(artwork);
  modalImage.alt = getArtworkAlt(artwork);
  modalTitle.textContent = artwork.title;
  modalArtist.textContent = artwork.artist;
  modalYear.textContent = artwork.year;
  modalMedium.textContent = artwork.medium;
  modalLocation.textContent = artwork.location;
  modalDimensions.textContent = artwork.dimensions;
  modalDescription.textContent = artwork.description;
  modalSubject.textContent = artwork.subject;
  modalMeaning.textContent = artwork.meaning;
  modalContext.textContent = artwork.context;
  modalAnalysis.textContent = artwork.analysis;
  modalInterpretation.textContent = artwork.interpretation;
}

function openModal(artworkId, trigger) {
  const artwork = artworks.find((item) => item.id === artworkId);

  if (!artwork) {
    return;
  }

  lastFocusedCard = trigger || document.activeElement;
  populateModal(artwork);
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("overflow-hidden");

  requestAnimationFrame(() => {
    modalPanel.classList.add("is-open");
    closeButton.focus();
  });
}

function closeModal() {
  modalPanel.classList.remove("is-open");

  window.setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("overflow-hidden");

    if (lastFocusedCard && typeof lastFocusedCard.focus === "function") {
      lastFocusedCard.focus();
    }
  }, 240);
}

function setupModalEvents() {
  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("flex")) {
      closeModal();
    }
  });
}

function setupSectionTracking() {
  if (!navLinks.length) {
    return;
  }

  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) {
    return;
  }

  const visibilityMap = new Map();

  function updateActiveLink() {
    let activeSectionId = sections[0].id;
    let highestRatio = -1;

    sections.forEach((section) => {
      const ratio = visibilityMap.get(section.id) ?? 0;

      if (ratio > highestRatio) {
        highestRatio = ratio;
        activeSectionId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${activeSectionId}`;
      link.classList.toggle("is-active", isActive);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        visibilityMap.set(entry.target.id, entry.intersectionRatio);
      });

      updateActiveLink();
    },
    {
      threshold: [0.2, 0.35, 0.5, 0.7],
      rootMargin: "-18% 0px -52% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));
  updateActiveLink();
}

function setupRevealAnimations() {
  const revealElements = document.querySelectorAll(".fade-up");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
    observer.observe(element);
  });
}

function init() {
  renderGallery();
  renderReferences();
  setupModalEvents();
  setupSectionTracking();
  setupRevealAnimations();
}

init();
