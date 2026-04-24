const researchPartners = [
  {
    name: "National Museum of the Philippines",
    role: "Museum records",
    description:
      "Used for official gallery pages, artwork location, museum publications, and collection notes.",
  },
  {
    name: "National Commission for Culture and the Arts",
    role: "Context essays",
    description:
      "Used for historical interpretation, National Artist references, and broader art-historical framing.",
  },
  {
    name: "Cultural Center of the Philippines",
    role: "Art encyclopedia",
    description:
      "Used for the CCP Encyclopedia of Philippine Art entry on Botong Francisco's mural.",
  },
  {
    name: "National Library of the Philippines",
    role: "Object history",
    description:
      "Used for the public history of Juan Luna's Bandera Filipina and its significance as a flag image.",
  },
  {
    name: "National Historical Commission of the Philippines",
    role: "Historical context",
    description:
      "Used for the political context of the flag image and the 1899 struggle for independence.",
  },
];

const artworks = [
  {
    id: 1,
    title:
      "The Assassination of Governor Bustamante (El Asesinato del Gobernador Bustamante)",
    artist: "Felix Resurreccion Hidalgo",
    year: "Undated",
    sortYear: 1884,
    medium: "Oil on canvas",
    dimensions: "420.4 x 353.1 cm",
    location: "National Museum of Fine Arts, Manila",
    image: "./The Assassination of Governor.webp",
    cardClass: "gallery-span-3",
    frameClass: "artwork-frame--hero",
    theme: "Colonial violence",
    timelineNote:
      "The exhibit opens with a scene where colonial authority collapses into violence.",
    cardSummary:
      "Hidalgo turns a notorious colonial killing into a dramatic warning about abusive power.",
    description:
      "Inside the Palacio del Gobernador, friars, soldiers, banners, and blades crowd the stairway while the governor's body collapses at the center of the unrest.",
    subject:
      "A historical reconstruction of the 1719 killing of Governor-General Fernando Manuel de Bustamante during a clash involving colonial officials and friars.",
    meaning:
      "The work does more than narrate an event. It presents colonial rule as unstable and morally damaged, suggesting that authority loses legitimacy when power turns violent and self-serving.",
    context:
      "The National Museum publication lists the work as El Asesinato del Gobernador Bustamante, also known as La Iglesia Contra el Estado. The painting revisits a colonial episode that later Filipino reformists understood as a sign of conflict between civil government and clerical influence.",
    analysis:
      "Hidalgo compresses the action into a narrow interior so the viewer feels trapped in the same burst of violence. Diagonal movement, sharp highlights, and red accents force attention toward the fatal center of the scene.",
    curatorNote:
      "I placed this first because it introduces the exhibit through the problem of colonial power itself. The later works answer that violence with grief, resistance, memory, and collective ideals.",
    references: [
      {
        title:
          "National Museum of the Philippines, Treasures of Philippine Art: El Asesinato del Gobernador Bustamante",
        href: "https://www.nationalmuseum.gov.ph/wp-content/uploads/2021/09/El-Asesinato-del-Gobernador-Bustamante-by-Felix-Resurreccion-Hidalgo.pdf",
        type: "Museum book",
        note: "Used for the official title, alternate title, medium, size, and conservation notes.",
      },
      {
        title: "National Museum Publications",
        href: "https://www.nationalmuseum.gov.ph/publications/",
        type: "Museum",
        note: "Confirms the museum publication used in the artwork record.",
      },
    ],
  },
  {
    id: 2,
    title: "Spoliarium",
    artist: "Juan Luna",
    year: "1884",
    sortYear: 1884,
    medium: "Oil on canvas",
    dimensions: "approximately 426 x 772 cm",
    location: "Spoliarium Hall, National Museum of Fine Arts, Manila",
    image: "./spoliarium.webp",
    cardClass: "gallery-span-3",
    frameClass: "artwork-frame--hero",
    theme: "Public suffering",
    timelineNote:
      "A Roman arena becomes an allegory for humiliation, grief, and oppression.",
    cardSummary:
      "Luna uses a Roman subject to turn humiliation, grief, and oppression into a nationalist allegory.",
    description:
      "Dead gladiators are dragged into the spoliarium while grieving figures linger in the shadows and a band of light falls across the broken bodies.",
    subject:
      "The aftermath of gladiatorial combat in ancient Rome, specifically the place where the fallen are stripped after the spectacle.",
    meaning:
      "Although the scene is Roman, Filipino readers associated the dragged bodies with colonial subjugation. The painting transforms public spectacle into a meditation on how empire dehumanizes the defeated.",
    context:
      "Painted in Rome and completed in 1884, the monumental canvas won the top gold medal at the Exposicion Nacional de Bellas Artes in Madrid. Rizal and other reformists read it as proof that Filipino talent and political feeling could command international attention.",
    analysis:
      "The huge scale, procession-like diagonal, and concentrated highlights on the corpses direct the eye toward suffering rather than victory. Luna's earth reds, black shadows, and muscular brushwork make the canvas feel ceremonial, heavy, and tragic.",
    curatorNote:
      "I treat Spoliarium as the emotional center of the exhibit because it converts pain into public meaning. It deepens the story from colonial violence into the felt experience of humiliation and sacrifice.",
    references: [
      {
        title: "Spoliarium Hall, National Museum of the Philippines",
        href: "https://www.nationalmuseum.gov.ph/exhibitions/fine-arts/gallery-spoliarium-hall/",
        type: "Museum",
        note: "Used for the current museum location and exhibition context.",
      },
      {
        title: "NCCA In Focus: The Art of Juan Luna",
        href: "https://ncca.gov.ph/about-culture-and-arts/in-focus/the-art-of-juan-luna/",
        type: "Agency",
        note: "Used for the artwork's scale, 1884 Madrid success, and nationalist reading.",
      },
      {
        title:
          "NCCA In Focus: Suffering Colonialism: Modernity as Sacrifice and Salvation in Philippine Colonial Painting",
        href: "https://ncca.gov.ph/about-culture-and-arts/in-focus/suffering-colonialism-modernity-as-sacrifice-and-salvation-in-philippine-colonial-painting/",
        type: "Agency",
        note: "Used for the allegorical reading of suffering and colonial oppression.",
      },
    ],
  },
  {
    id: 3,
    title: "Souvenir de 1899 (Bandera Filipina)",
    artist: "Juan Luna",
    year: "1899",
    sortYear: 1899,
    medium: "Watercolor on paper",
    dimensions: "Not specified in the cited museum pages",
    location:
      "National Museum of Fine Arts, Manila (loan from the National Library of the Philippines)",
    image: "./Souvenirde1999.webp",
    cardClass: "gallery-span-2",
    frameClass: "artwork-frame--standard",
    theme: "Resistance and symbol",
    timelineNote:
      "The flag becomes the exhibit's clearest image of defiance and hope.",
    cardSummary:
      "A flag, distant smoke, and a faint American banner compress war, hope, and defiance into one image.",
    description:
      "The Philippine flag flies brightly in the foreground while smoke, a river, and a distant town under attack sit farther back in the composition.",
    subject:
      "An image of the Philippine flag during the Philippine-American War, now widely known as Souvenir de 1899 or Bandera Filipina.",
    meaning:
      "Luna uses the flag as more than decoration. It becomes the emotional center of the painting, making patriotism visible even while the background suggests destruction and foreign aggression.",
    context:
      "The National Museum notes that Luna gave the watercolor to Ferdinand Blumentritt during his visit to Litomerice. NHCP identifies the work as a May 21, 1899 sketch created amid efforts to draw international attention to the Filipino struggle for independence.",
    analysis:
      "The painting relies on contrast: a clear, wind-filled flag in front, smoke and conflict behind. Because the scene is spare, the symbol reads immediately and the political message becomes concentrated rather than crowded.",
    curatorNote:
      "I placed this after Spoliarium because it shifts the exhibit from suffering to resistance. The flag works as a visual answer to oppression, turning grief into a declaration of nationhood.",
    references: [
      {
        title: "NMP Welcomes Blumentritt Kin",
        href: "https://www.nationalmuseum.gov.ph/2025/02/04/nmp-welcomes-blumentritt-kin/",
        type: "Museum",
        note: "Used for the work's current display status and its history as Luna's gift to Blumentritt.",
      },
      {
        title:
          "National Library of the Philippines: 127th National Flag Day ft. Juan Luna's Bandera Filipina",
        href: "https://web.nlp.gov.ph/127th-national-flag-day-ft-juan-lunas-bandera-filipina/",
        type: "Library",
        note: "Used for the work's public history as a flag image and its continuing national symbolism.",
      },
      {
        title: "NHCP: The Aguinaldo Shrine's Williams-Dubois Flag",
        href: "https://nhcp.gov.ph/articles/the-aguinaldo-shrines-williams-dubois-flag/",
        type: "Agency",
        note: "Used for the 1899 date, political context, and visual reading of the background conflict.",
      },
    ],
  },
  {
    id: 4,
    title: "Commonwealth Triumphal Arch",
    artist: "Guillermo E. Tolentino",
    year: "Commonwealth era",
    sortYear: 1935,
    medium: "Plaster maquette",
    dimensions: "Not specified in the cited museum records",
    location: "National Museum of Fine Arts, Manila",
    image: "./Commonwealth Triumphant Arch.webp",
    cardClass: "gallery-span-2",
    frameClass: "artwork-frame--standard",
    theme: "Nation-building",
    timelineNote:
      "The story turns from resistance toward the difficult task of building a republic.",
    cardSummary:
      "Tolentino imagines independence as a shared act of carrying the nation forward together.",
    description:
      "Human figures support an arch like a collective structure in motion, combining classical monumentality with the familiar rhythm of bayanihan.",
    subject:
      "A model for a proposed Commonwealth monument that represents Filipinos physically carrying the future of the nation.",
    meaning:
      "The work turns nationhood into cooperation. Rather than centering one hero, it imagines the republic as something upheld by many regions, peoples, and bodies working together.",
    context:
      "NCCA records the piece as a plaster work by National Artist Guillermo Tolentino, while museum reports list a model of the Commonwealth Triumphal Arch in the National Museum collection. TFAM's discussion of Tolentino explains that the design drew on bayanihan and the festival arch as symbols of a semi-independent government moving toward a republic.",
    analysis:
      "Tolentino balances the solidity of the arch with the strain of the supporting figures, creating tension between monument and movement. The design merges classical public sculpture with folk imagery so political aspiration feels both official and local.",
    curatorNote:
      "This piece belongs near the end of the exhibit because it changes the language of the story. Instead of showing violence or grief, it imagines freedom as organized cooperation and shared labor.",
    references: [
      {
        title: "NCCA Talapamana: Works of National Artists - Visual Arts",
        href: "https://talapamana.ncca.gov.ph/index.php/component/content/article/works-of-national-artists-visual-arts?Itemid=101&catid=13",
        type: "Agency",
        note: "Used for the title, medium, and attribution to Guillermo Tolentino.",
      },
      {
        title: "TFAM Journal of No. 35",
        href: "https://www.tfam.museum/journal/Detail.aspx?aID=25&ddlLang=en-us&id=35",
        type: "Journal",
        note: "Used for Tolentino's explanation of the design as bayanihan and a transition toward the republic.",
      },
      {
        title: "National Museum Annual Report 2016",
        href: "https://www.nationalmuseum.gov.ph/wp-content/uploads/2021/07/2.-NM-AR-2016-pdf-final.pdf",
        type: "Museum report",
        note: "Used to confirm that a model of the Commonwealth Triumphal Arch is listed in the museum's holdings.",
      },
    ],
  },
  {
    id: 5,
    title: "Filipino Struggles Through History",
    artist: 'Carlos "Botong" Francisco',
    year: "1964",
    sortYear: 1964,
    medium: "Oil on canvas mural",
    dimensions: "271 x 2,000 cm",
    location: "Old Senate Session Hall, National Museum of Fine Arts, Manila",
    image: "./Filipino Struggles through History.webp",
    cardClass: "gallery-span-2",
    frameClass: "artwork-frame--wide",
    imageClass: "artwork-image--mural",
    theme: "Historical memory",
    timelineNote:
      "Botong closes the sequence by turning many struggles into one public memory.",
    cardSummary:
      "Botong Francisco stitches many struggles into one public mural so national history reads as a collective achievement.",
    description:
      "The mural strings together heroes, crowds, battles, and civic episodes in a long, rhythmic panorama driven by warm colors and sweeping outlines.",
    subject:
      "A monumental visual narrative of Philippine history, from early communities and colonial rule to revolution, occupation, and postwar recovery.",
    meaning:
      "The mural argues that national identity is cumulative. No single figure carries the whole story; instead, history is built from many linked struggles remembered in public.",
    context:
      "The National Museum's Old Senate Session Hall identifies the work as a major commission for Manila City Hall. CCP notes that Francisco received the 1964 commission to create a historical mural for the Bulwagang Katipunan, while NCCA records the work as a National Cultural Treasure.",
    analysis:
      "Francisco uses flowing contours, repeated clusters of figures, and a dense sequence of episodes to keep the eye moving. The mural's narrative continuity makes history feel alive, crowded, and communal rather than distant.",
    curatorNote:
      "I close the exhibit with this mural because it gathers earlier themes into one act of remembrance. It shows that colonial conflict, resistance, and nation-building survive when art turns them into shared memory.",
    references: [
      {
        title: "National Museum: Senate Hall",
        href: "https://www.nationalmuseum.gov.ph/exhibitions/fine-arts/gallery-senate-hall/",
        type: "Museum",
        note: "Used for the current museum location and commission history connected to Manila City Hall.",
      },
      {
        title: "CCP Encyclopedia of Philippine Art: Filipino Struggles Through History",
        href: "https://epa.culturalcenter.gov.ph/3/82/2182/",
        type: "Encyclopedia",
        note: "Used for the mural's 1964 date, subject coverage, and public narrative purpose.",
      },
      {
        title: "NCCA Talapamana: Works of National Artists - Visual Arts",
        href: "https://talapamana.ncca.gov.ph/index.php/component/content/article/works-of-national-artists-visual-arts?Itemid=101&catid=13",
        type: "Agency",
        note: "Used for the listed dimensions and National Cultural Treasure record.",
      },
    ],
  },
];

const galleryGrid = document.querySelector("#gallery-grid");
const timelineGrid = document.querySelector("#timeline-grid");
const researchPillGrid = document.querySelector("#research-pill-grid");
const referencesGrid = document.querySelector("#references-grid");
const modal = document.querySelector("#artwork-modal");
const modalPanel = modal.querySelector(".modal-panel");
const closeButton = document.querySelector("#modal-close");
const modalImage = document.querySelector("#modal-image");
const modalStage = document.querySelector("#modal-stage");
const modalTitle = document.querySelector("#modal-title");
const modalArtist = document.querySelector("#modal-artist");
const modalYear = document.querySelector("#modal-year");
const modalMedium = document.querySelector("#modal-medium");
const modalSourceCount = document.querySelector("#modal-source-count");
const modalLocation = document.querySelector("#modal-location");
const modalDimensions = document.querySelector("#modal-dimensions");
const modalDescription = document.querySelector("#modal-description");
const modalSubject = document.querySelector("#modal-subject");
const modalMeaning = document.querySelector("#modal-meaning");
const modalContext = document.querySelector("#modal-context");
const modalAnalysis = document.querySelector("#modal-analysis");
const modalCuratorNote = document.querySelector("#modal-curator-note");
const navToggle = document.querySelector("#nav-toggle");
const siteNav = document.querySelector("#site-nav");
const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
const heroWorkCount = document.querySelector("#hero-work-count");
const heroTimeline = document.querySelector("#hero-timeline");
const heroSourceCount = document.querySelector("#hero-source-count");
const researchWorkCount = document.querySelector("#research-work-count");
const researchSourceCount = document.querySelector("#research-source-count");
const researchInstitutionCount = document.querySelector(
  "#research-institution-count"
);

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

function getArtworkNumber(id) {
  return String(id).padStart(2, "0");
}

function getSourceCount() {
  return artworks.reduce((total, artwork) => total + artwork.references.length, 0);
}

function getTimelineRange() {
  const years = artworks.map((artwork) => artwork.sortYear);
  return `${Math.min(...years)}-${Math.max(...years)}`;
}

function getSourceLabel(count) {
  return `${count} source${count === 1 ? "" : "s"}`;
}

function closeNavigation() {
  if (!navToggle || !siteNav) {
    return;
  }

  navToggle.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("is-open");
}

function setupNavigation() {
  if (!navToggle || !siteNav) {
    return;
  }

  navToggle.addEventListener("click", () => {
    const willOpen = !siteNav.classList.contains("is-open");
    siteNav.classList.toggle("is-open", willOpen);
    navToggle.setAttribute("aria-expanded", String(willOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) {
      closeNavigation();
    }
  });
}

function createArtworkCard(artwork) {
  const article = document.createElement("article");
  article.className = `fade-up artwork-card ${artwork.cardClass}`;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "artwork-button";
  button.dataset.artworkId = artwork.id;
  button.setAttribute("aria-haspopup", "dialog");
  button.innerHTML = `
    <div class="artwork-media ${artwork.frameClass}">
      <div class="artwork-badge-row">
        <span class="artwork-pill artwork-pill--light">${getArtworkNumber(artwork.id)}</span>
        <span class="artwork-pill artwork-pill--dark">${artwork.theme}</span>
      </div>
      <img
        src="${getArtworkImage(artwork)}"
        alt="${getArtworkAlt(artwork)}"
        loading="lazy"
        decoding="async"
        class="artwork-image ${getArtworkImageClass(artwork)}"
      />
    </div>
    <div class="artwork-content">
      <div class="artwork-meta">
        <span class="meta-pill">${artwork.year}</span>
        <span class="meta-pill">${artwork.medium}</span>
      </div>
      <div>
        <p class="artwork-kicker">Curatorial note</p>
        <h3 class="artwork-title">${artwork.title}</h3>
        <p class="artwork-artist">${artwork.artist}</p>
      </div>
      <p class="artwork-summary">${artwork.cardSummary}</p>
      <div class="artwork-footer">
        <span>${getSourceLabel(artwork.references.length)}</span>
        <span class="card-arrow">Open full record</span>
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

function createTimelineCard(artwork) {
  const article = document.createElement("article");
  article.className = "fade-up timeline-card";

  const year = document.createElement("p");
  year.className = "timeline-year";
  year.textContent = artwork.year;

  const title = document.createElement("h3");
  title.className = "timeline-title";
  title.textContent = artwork.title;

  const theme = document.createElement("p");
  theme.className = "timeline-theme";
  theme.textContent = artwork.theme;

  const note = document.createElement("p");
  note.className = "timeline-note";
  note.textContent = artwork.timelineNote;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "timeline-action";
  button.textContent = "View artwork";
  button.addEventListener("click", () => openModal(artwork.id, button));

  article.append(year, title, theme, note, button);

  return article;
}

function renderTimeline() {
  const cards = [...artworks]
    .sort((left, right) => left.sortYear - right.sortYear)
    .map(createTimelineCard);
  timelineGrid.replaceChildren(...cards);
}

function createResearchPartnerCard(partner) {
  const article = document.createElement("article");
  article.className = "fade-up partner-card";
  article.innerHTML = `
    <p class="card-eyebrow">${partner.role}</p>
    <h3>${partner.name}</h3>
    <p>${partner.description}</p>
  `;

  return article;
}

function renderResearchPartners() {
  const cards = researchPartners.map(createResearchPartnerCard);
  researchPillGrid.replaceChildren(...cards);
}

function getReferenceMeta(reference) {
  const host = new URL(reference.href).hostname.replace(/^www\./, "");

  return {
    ...reference,
    host,
  };
}

function createReferenceRow(reference, index) {
  const meta = getReferenceMeta(reference);
  const row = document.createElement("tr");

  const numberCell = document.createElement("td");
  numberCell.textContent = String(index + 1).padStart(2, "0");

  const typeCell = document.createElement("td");
  const typeBadge = document.createElement("span");
  typeBadge.className = "reference-type";
  typeBadge.textContent = meta.type;
  typeCell.append(typeBadge);

  const sourceCell = document.createElement("td");

  const link = document.createElement("a");
  link.href = meta.href;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.className = "reference-link";
  link.textContent = meta.title;
  link.title = meta.href;

  const noteLine = document.createElement("p");
  noteLine.textContent = meta.note;

  const hostLine = document.createElement("p");
  hostLine.className = "card-eyebrow reference-host";
  hostLine.textContent = meta.host;

  sourceCell.append(link, noteLine, hostLine);
  row.append(numberCell, typeCell, sourceCell);

  return row;
}

function createReferenceTable(artwork) {
  const article = document.createElement("article");
  article.className = "fade-up panel reference-card";

  const header = document.createElement("div");
  header.className = "reference-card-header";

  const titleGroup = document.createElement("div");
  titleGroup.className = "reference-title-group";

  const eyebrow = document.createElement("p");
  eyebrow.className = "card-eyebrow";
  eyebrow.textContent = "Reference Table";

  const title = document.createElement("h3");
  title.className = "reference-title";
  title.textContent = artwork.title;

  const count = document.createElement("span");
  count.className = "reference-count";
  count.textContent = getSourceLabel(artwork.references.length);

  titleGroup.append(eyebrow, title);
  header.append(titleGroup, count);

  const tableWrap = document.createElement("div");
  tableWrap.className = "reference-table-wrap";

  const table = document.createElement("table");
  table.className = "reference-table";
  table.innerHTML = `
    <thead>
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Type</th>
        <th scope="col">Source and use</th>
      </tr>
    </thead>
  `;

  const body = document.createElement("tbody");

  artwork.references.forEach((reference, index) => {
    body.append(createReferenceRow(reference, index));
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

function renderSummaryStats() {
  const workCount = artworks.length;
  const sourceCount = getSourceCount();
  const institutionCount = researchPartners.length;
  const timelineRange = getTimelineRange();

  heroWorkCount.textContent = `${workCount} works`;
  heroTimeline.textContent = timelineRange;
  heroSourceCount.textContent = getSourceLabel(sourceCount);
  researchWorkCount.textContent = String(workCount);
  researchSourceCount.textContent = String(sourceCount);
  researchInstitutionCount.textContent = String(institutionCount);
}

function populateModal(artwork) {
  modalImage.src = getArtworkImage(artwork);
  modalImage.alt = getArtworkAlt(artwork);
  modalStage.textContent = artwork.theme;
  modalTitle.textContent = artwork.title;
  modalArtist.textContent = artwork.artist;
  modalYear.textContent = artwork.year;
  modalMedium.textContent = artwork.medium;
  modalSourceCount.textContent = getSourceLabel(artwork.references.length);
  modalLocation.textContent = artwork.location;
  modalDimensions.textContent = artwork.dimensions;
  modalDescription.textContent = artwork.description;
  modalSubject.textContent = artwork.subject;
  modalMeaning.textContent = artwork.meaning;
  modalContext.textContent = artwork.context;
  modalAnalysis.textContent = artwork.analysis;
  modalCuratorNote.textContent = artwork.curatorNote;
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
      closeNavigation();
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

function init() {
  renderGallery();
  renderTimeline();
  renderResearchPartners();
  renderReferences();
  renderSummaryStats();
  setupNavigation();
  setupModalEvents();
  setupSectionTracking();
}

init();
