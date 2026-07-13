/**
 * Hangi IPTV? — Ana JavaScript
 * Firma verilerini, filtreleri, FAQ ve analitik olaylarını yönetir.
 *
 * Firma bilgilerini güncellemek için aşağıdaki `providers` dizisini düzenleyin.
 */

/* ========================================
   FİRMA VERİLERİ — Kolayca düzenlenebilir
   ======================================== */
const providers = [
  {
    name: "Firma Adı 1",
    logo: "https://example.com/logo1.png",
    slogan: "Firma sloganı buraya gelecek",
    description: "Firma hakkında kısa açıklama buraya gelecek.",
    filmReview: "Film arşivi değerlendirmesi buraya gelecek.",
    seriesReview: "Dizi arşivi değerlendirmesi buraya gelecek.",
    liveReview: "Canlı yayın değerlendirmesi buraya gelecek.",
    devices: ["Smart TV", "Android TV", "Telefon", "Bilgisayar"],
    pros: [
      "Artı özellik 1",
      "Artı özellik 2"
    ],
    cons: [
      "Eksi özellik 1",
      "Eksi özellik 2"
    ],
    lastChecked: "Henüz kontrol edilmedi",
    website: "https://example.com",
    sponsored: false
  },
  {
    name: "Firma Adı 2",
    logo: "https://example.com/logo2.png",
    slogan: "Firma sloganı buraya gelecek",
    description: "Firma hakkında kısa açıklama buraya gelecek.",
    filmReview: "Film arşivi değerlendirmesi buraya gelecek.",
    seriesReview: "Dizi arşivi değerlendirmesi buraya gelecek.",
    liveReview: "Canlı yayın değerlendirmesi buraya gelecek.",
    devices: ["Smart TV", "Android TV", "Telefon", "Bilgisayar"],
    pros: [
      "Artı özellik 1",
      "Artı özellik 2"
    ],
    cons: [
      "Eksi özellik 1",
      "Eksi özellik 2"
    ],
    lastChecked: "Henüz kontrol edilmedi",
    website: "https://example.com",
    sponsored: false
  },
  {
    name: "Firma Adı 3",
    logo: "https://example.com/logo3.png",
    slogan: "Firma sloganı buraya gelecek",
    description: "Firma hakkında kısa açıklama buraya gelecek.",
    filmReview: "Film arşivi değerlendirmesi buraya gelecek.",
    seriesReview: "Dizi arşivi değerlendirmesi buraya gelecek.",
    liveReview: "Canlı yayın değerlendirmesi buraya gelecek.",
    devices: ["Smart TV", "Android TV", "Telefon", "Bilgisayar"],
    pros: [
      "Artı özellik 1",
      "Artı özellik 2"
    ],
    cons: [
      "Eksi özellik 1",
      "Eksi özellik 2"
    ],
    lastChecked: "Henüz kontrol edilmedi",
    website: "https://example.com",
    sponsored: false
  },
  {
    name: "Firma Adı 4",
    logo: "https://example.com/logo4.png",
    slogan: "Firma sloganı buraya gelecek",
    description: "Firma hakkında kısa açıklama buraya gelecek.",
    filmReview: "Film arşivi değerlendirmesi buraya gelecek.",
    seriesReview: "Dizi arşivi değerlendirmesi buraya gelecek.",
    liveReview: "Canlı yayın değerlendirmesi buraya gelecek.",
    devices: ["Smart TV", "Android TV", "Telefon", "Bilgisayar"],
    pros: [
      "Artı özellik 1",
      "Artı özellik 2"
    ],
    cons: [
      "Eksi özellik 1",
      "Eksi özellik 2"
    ],
    lastChecked: "Henüz kontrol edilmedi",
    website: "https://example.com",
    sponsored: false
  },
  {
    name: "Firma Adı 5",
    logo: "https://example.com/logo5.png",
    slogan: "Firma sloganı buraya gelecek",
    description: "Firma hakkında kısa açıklama buraya gelecek.",
    filmReview: "Film arşivi değerlendirmesi buraya gelecek.",
    seriesReview: "Dizi arşivi değerlendirmesi buraya gelecek.",
    liveReview: "Canlı yayın değerlendirmesi buraya gelecek.",
    devices: ["Smart TV", "Android TV", "Telefon", "Bilgisayar"],
    pros: [
      "Artı özellik 1",
      "Artı özellik 2"
    ],
    cons: [
      "Eksi özellik 1",
      "Eksi özellik 2"
    ],
    lastChecked: "Henüz kontrol edilmedi",
    website: "https://example.com",
    sponsored: false
  },
  {
    name: "Firma Adı 6",
    logo: "https://example.com/logo6.png",
    slogan: "Firma sloganı buraya gelecek",
    description: "Firma hakkında kısa açıklama buraya gelecek.",
    filmReview: "Film arşivi değerlendirmesi buraya gelecek.",
    seriesReview: "Dizi arşivi değerlendirmesi buraya gelecek.",
    liveReview: "Canlı yayın değerlendirmesi buraya gelecek.",
    devices: ["Smart TV", "Android TV", "Telefon", "Bilgisayar"],
    pros: [
      "Artı özellik 1",
      "Artı özellik 2"
    ],
    cons: [
      "Eksi özellik 1",
      "Eksi özellik 2"
    ],
    lastChecked: "Henüz kontrol edilmedi",
    website: "https://example.com",
    sponsored: false
  },
  {
    name: "Firma Adı 7",
    logo: "https://example.com/logo7.png",
    slogan: "Firma sloganı buraya gelecek",
    description: "Firma hakkında kısa açıklama buraya gelecek.",
    filmReview: "Film arşivi değerlendirmesi buraya gelecek.",
    seriesReview: "Dizi arşivi değerlendirmesi buraya gelecek.",
    liveReview: "Canlı yayın değerlendirmesi buraya gelecek.",
    devices: ["Smart TV", "Android TV", "Telefon", "Bilgisayar"],
    pros: [
      "Artı özellik 1",
      "Artı özellik 2"
    ],
    cons: [
      "Eksi özellik 1",
      "Eksi özellik 2"
    ],
    lastChecked: "Henüz kontrol edilmedi",
    website: "https://example.com",
    sponsored: false
  },
  {
    name: "Firma Adı 8",
    logo: "https://example.com/logo8.png",
    slogan: "Firma sloganı buraya gelecek",
    description: "Firma hakkında kısa açıklama buraya gelecek.",
    filmReview: "Film arşivi değerlendirmesi buraya gelecek.",
    seriesReview: "Dizi arşivi değerlendirmesi buraya gelecek.",
    liveReview: "Canlı yayın değerlendirmesi buraya gelecek.",
    devices: ["Smart TV", "Android TV", "Telefon", "Bilgisayar"],
    pros: [
      "Artı özellik 1",
      "Artı özellik 2"
    ],
    cons: [
      "Eksi özellik 1",
      "Eksi özellik 2"
    ],
    lastChecked: "Henüz kontrol edilmedi",
    website: "https://example.com",
    sponsored: false
  },
  {
    name: "Firma Adı 9",
    logo: "https://example.com/logo9.png",
    slogan: "Firma sloganı buraya gelecek",
    description: "Firma hakkında kısa açıklama buraya gelecek.",
    filmReview: "Film arşivi değerlendirmesi buraya gelecek.",
    seriesReview: "Dizi arşivi değerlendirmesi buraya gelecek.",
    liveReview: "Canlı yayın değerlendirmesi buraya gelecek.",
    devices: ["Smart TV", "Android TV", "Telefon", "Bilgisayar"],
    pros: [
      "Artı özellik 1",
      "Artı özellik 2"
    ],
    cons: [
      "Eksi özellik 1",
      "Eksi özellik 2"
    ],
    lastChecked: "Henüz kontrol edilmedi",
    website: "https://example.com",
    sponsored: false
  },
  {
    name: "Firma Adı 10",
    logo: "https://example.com/logo10.png",
    slogan: "Firma sloganı buraya gelecek",
    description: "Firma hakkında kısa açıklama buraya gelecek.",
    filmReview: "Film arşivi değerlendirmesi buraya gelecek.",
    seriesReview: "Dizi arşivi değerlendirmesi buraya gelecek.",
    liveReview: "Canlı yayın değerlendirmesi buraya gelecek.",
    devices: ["Smart TV", "Android TV", "Telefon", "Bilgisayar"],
    pros: [
      "Artı özellik 1",
      "Artı özellik 2"
    ],
    cons: [
      "Eksi özellik 1",
      "Eksi özellik 2"
    ],
    lastChecked: "Henüz kontrol edilmedi",
    website: "https://example.com",
    sponsored: false
  }
];

/* ========================================
   Durum
   ======================================== */
const state = {
  search: "",
  sponsorship: "all", // all | sponsored | organic
  device: "all",
  searchTracked: false
};

/* ========================================
   Analytics yardımcıları
   ======================================== */
function trackEvent(eventName, params) {
  try {
    if (typeof gtag === "function") {
      gtag("event", eventName, params || {});
    }
  } catch (err) {
    // Analytics hata verse bile site çalışmaya devam eder
  }
}

/* ========================================
   Yardımcılar
   ======================================== */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getInitials(name) {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function getRelAttribute(sponsored) {
  if (sponsored) {
    return "nofollow sponsored noopener noreferrer";
  }
  return "nofollow noopener noreferrer";
}

function filterProviders() {
  const query = state.search.trim().toLocaleLowerCase("tr");

  return providers.filter(function (provider) {
    const nameMatch =
      !query || provider.name.toLocaleLowerCase("tr").indexOf(query) !== -1;

    let sponsorshipMatch = true;
    if (state.sponsorship === "sponsored") {
      sponsorshipMatch = provider.sponsored === true;
    } else if (state.sponsorship === "organic") {
      sponsorshipMatch = provider.sponsored !== true;
    }

    let deviceMatch = true;
    if (state.device !== "all") {
      deviceMatch =
        Array.isArray(provider.devices) &&
        provider.devices.indexOf(state.device) !== -1;
    }

    return nameMatch && sponsorshipMatch && deviceMatch;
  });
}

/* ========================================
   Kart oluşturma
   ======================================== */
function createProviderCard(provider, index) {
  const card = document.createElement("article");
  card.className =
    "provider-card" + (provider.sponsored ? " is-sponsored" : "");
  card.dataset.name = provider.name;
  card.dataset.index = String(index);

  const detailsId = "provider-details-" + index;
  const initials = escapeHtml(getInitials(provider.name));
  const rel = getRelAttribute(provider.sponsored);

  const devicesHtml = (provider.devices || [])
    .map(function (d) {
      return '<span class="device-tag">' + escapeHtml(d) + "</span>";
    })
    .join("");

  const prosHtml = (provider.pros || [])
    .map(function (item) {
      return "<li>" + escapeHtml(item) + "</li>";
    })
    .join("");

  const consHtml = (provider.cons || [])
    .map(function (item) {
      return "<li>" + escapeHtml(item) + "</li>";
    })
    .join("");

  const sponsoredBadge = provider.sponsored
    ? '<span class="sponsored-badge">SPONSORLU</span>'
    : "";

  card.innerHTML =
    '<div class="provider-top">' +
    '  <div class="provider-logo-wrap">' +
    '    <img class="provider-logo" src="' +
    escapeHtml(provider.logo) +
    '" alt="' +
    escapeHtml(provider.name) +
    ' logosu" width="180" height="90" loading="lazy" decoding="async">' +
    '    <div class="provider-logo-fallback" aria-hidden="true">' +
    initials +
    "</div>" +
    "  </div>" +
    '  <div class="provider-meta">' +
    '    <div class="provider-name-row">' +
    '      <h3 class="provider-name">' +
    escapeHtml(provider.name) +
    "</h3>" +
    sponsoredBadge +
    "    </div>" +
    '    <p class="provider-slogan">' +
    escapeHtml(provider.slogan) +
    "</p>" +
    '    <p class="provider-checked">Son kontrol: ' +
    escapeHtml(provider.lastChecked) +
    "</p>" +
    "  </div>" +
    "</div>" +
    '<p class="provider-description">' +
    escapeHtml(provider.description) +
    "</p>" +
    '<div class="provider-details" id="' +
    detailsId +
    '" hidden>' +
    '  <div class="provider-reviews">' +
    '    <div class="review-block">' +
    "      <h4>Film Arşivi</h4>" +
    "      <p>" +
    escapeHtml(provider.filmReview) +
    "</p>" +
    "    </div>" +
    '    <div class="review-block">' +
    "      <h4>Dizi Arşivi</h4>" +
    "      <p>" +
    escapeHtml(provider.seriesReview) +
    "</p>" +
    "    </div>" +
    '    <div class="review-block">' +
    "      <h4>Canlı Yayın</h4>" +
    "      <p>" +
    escapeHtml(provider.liveReview) +
    "</p>" +
    "    </div>" +
    '    <div class="review-block">' +
    "      <h4>Desteklenen Cihazlar</h4>" +
    '      <div class="device-tags">' +
    devicesHtml +
    "</div>" +
    "    </div>" +
    "  </div>" +
    '  <div class="pros-cons">' +
    '    <div class="pros-box">' +
    "      <h4>Artılar</h4>" +
    "      <ul>" +
    prosHtml +
    "</ul>" +
    "    </div>" +
    '    <div class="cons-box">' +
    "      <h4>Eksiler</h4>" +
    "      <ul>" +
    consHtml +
    "</ul>" +
    "    </div>" +
    "  </div>" +
    "</div>" +
    '<div class="provider-actions">' +
    '  <a class="btn btn-primary js-website-link" href="' +
    escapeHtml(provider.website) +
    '" target="_blank" rel="' +
    rel +
    '" data-provider="' +
    escapeHtml(provider.name) +
    '">Siteyi Ziyaret Et</a>' +
    '  <button type="button" class="btn btn-outline js-details-toggle" aria-expanded="false" aria-controls="' +
    detailsId +
    '" data-provider="' +
    escapeHtml(provider.name) +
    '">Detayları Gör</button>' +
    "</div>";
  // Logo hata / yükleme
  const img = card.querySelector(".provider-logo");
  const wrap = card.querySelector(".provider-logo-wrap");

  function showFallback() {
    if (wrap) {
      wrap.classList.add("has-fallback");
    }
    if (img) {
      img.removeAttribute("src");
      img.alt = "";
    }
  }

  if (img) {
    img.addEventListener("error", showFallback);
    // Bazı tarayıcılarda önbellekten hata zaten gelmiş olabilir
    if (img.complete && img.naturalWidth === 0) {
      showFallback();
    }
  }

  return card;
}

function renderProviders() {
  const listEl = document.getElementById("providers-list");
  const emptyEl = document.getElementById("no-results");
  if (!listEl || !emptyEl) return;

  const filtered = filterProviders();
  listEl.innerHTML = "";

  if (filtered.length === 0) {
    emptyEl.hidden = false;
    return;
  }

  emptyEl.hidden = true;

  filtered.forEach(function (provider) {
    const originalIndex = providers.indexOf(provider);
    const card = createProviderCard(provider, originalIndex);
    listEl.appendChild(card);

    trackEvent("provider_view", {
      provider_name: provider.name,
      sponsored: provider.sponsored
    });
  });
}

/* ========================================
   Olay bağlama
   ======================================== */
function bindProviderListEvents() {
  const listEl = document.getElementById("providers-list");
  if (!listEl) return;

  listEl.addEventListener("click", function (event) {
    const detailsBtn = event.target.closest(".js-details-toggle");
    if (detailsBtn) {
      const detailsId = detailsBtn.getAttribute("aria-controls");
      const panel = detailsId ? document.getElementById(detailsId) : null;
      if (!panel) return;

      const isOpen = detailsBtn.getAttribute("aria-expanded") === "true";
      const nextOpen = !isOpen;

      detailsBtn.setAttribute("aria-expanded", String(nextOpen));
      panel.hidden = !nextOpen;
      detailsBtn.textContent = nextOpen ? "Detayları Gizle" : "Detayları Gör";

      if (nextOpen) {
        trackEvent("provider_details_open", {
          provider_name: detailsBtn.getAttribute("data-provider") || ""
        });
      }
      return;
    }

    const websiteLink = event.target.closest(".js-website-link");
    if (websiteLink) {
      trackEvent("provider_website_click", {
        provider_name: websiteLink.getAttribute("data-provider") || ""
      });
    }
  });
}

function bindSearchAndFilters() {
  const searchInput = document.getElementById("provider-search");
  const sponsorshipFilters = document.getElementById("sponsorship-filters");
  const deviceFilters = document.getElementById("device-filters");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      state.search = searchInput.value;

      if (!state.searchTracked && state.search.trim().length > 0) {
        state.searchTracked = true;
        trackEvent("search_use", { query_length: state.search.trim().length });
      }

      renderProviders();
    });
  }

  function bindFilterGroup(container, key, eventName) {
    if (!container) return;

    container.addEventListener("click", function (event) {
      const btn = event.target.closest(".filter-btn");
      if (!btn || !container.contains(btn)) return;

      const value =
        key === "sponsorship"
          ? btn.getAttribute("data-sponsorship")
          : btn.getAttribute("data-device");

      if (!value) return;

      state[key] = value;

      const buttons = container.querySelectorAll(".filter-btn");
      buttons.forEach(function (b) {
        const isActive =
          (key === "sponsorship"
            ? b.getAttribute("data-sponsorship")
            : b.getAttribute("data-device")) === value;
        b.classList.toggle("is-active", isActive);
        b.setAttribute("aria-pressed", String(isActive));
      });

      trackEvent(eventName, { value: value });
      renderProviders();
    });
  }

  bindFilterGroup(sponsorshipFilters, "sponsorship", "sponsorship_filter_use");
  bindFilterGroup(deviceFilters, "device", "device_filter_use");
}

function bindMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Menüyü aç");
    nav.classList.remove("is-open");
  }

  function openMenu() {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Menüyü kapat");
    nav.classList.add("is-open");
  }

  toggle.addEventListener("click", function () {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    if (expanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

function bindFaq() {
  const list = document.getElementById("faq-list");
  if (!list) return;

  list.addEventListener("click", function (event) {
    const trigger = event.target.closest(".faq-trigger");
    if (!trigger || !list.contains(trigger)) return;

    const panelId = trigger.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;
    if (!panel) return;

    const item = trigger.closest(".faq-item");
    const isOpen = trigger.getAttribute("aria-expanded") === "true";

    // Diğerlerini kapat (tek açık accordion)
    list.querySelectorAll(".faq-item").forEach(function (other) {
      if (other === item) return;
      const otherTrigger = other.querySelector(".faq-trigger");
      const otherPanelId = otherTrigger
        ? otherTrigger.getAttribute("aria-controls")
        : null;
      const otherPanel = otherPanelId
        ? document.getElementById(otherPanelId)
        : null;
      const otherIcon = otherTrigger
        ? otherTrigger.querySelector(".faq-icon")
        : null;

      if (otherTrigger) {
        otherTrigger.setAttribute("aria-expanded", "false");
      }
      if (otherPanel) {
        otherPanel.hidden = true;
      }
      if (otherIcon) {
        otherIcon.textContent = "+";
      }
      other.classList.remove("is-open");
    });

    const nextOpen = !isOpen;
    trigger.setAttribute("aria-expanded", String(nextOpen));
    panel.hidden = !nextOpen;
    if (item) {
      item.classList.toggle("is-open", nextOpen);
    }

    const icon = trigger.querySelector(".faq-icon");
    if (icon) {
      icon.textContent = nextOpen ? "−" : "+";
    }

    if (nextOpen) {
      const questionText = trigger.querySelector("span")
        ? trigger.querySelector("span").textContent
        : "";
      trackEvent("faq_open", { question: questionText });
    }
  });
}

function setFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}

/* ========================================
   Başlat
   ======================================== */
document.addEventListener("DOMContentLoaded", function () {
  setFooterYear();
  bindMobileMenu();
  bindSearchAndFilters();
  bindProviderListEvents();
  bindFaq();
  renderProviders();
});
