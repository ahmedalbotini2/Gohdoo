(function () {
  "use strict";

  /* =========================================================
     Translations
  ========================================================= */
  const translations = {
    en: {
      nav_features: "Features",
      nav_privacy: "Privacy",
      nav_download: "Download",
      nav_cta_text: "Download",

      ayah_ref: "Surah An-Nur, 24:30",
      ayah_translation: "Tell the believing men to reduce [some] of their vision and guard their private parts. That is purer for them. Indeed, Allah is Acquainted with what they do.",
      hero_title_1: "Your Assistant for",
      hero_title_2: "a Purer Digital Life",
      hero_sub: "System-wide AI content filtering that protects your screen in real time — with absolute privacy.",
      hero_cta_download: "Download for Android",
      hero_cta_learn: "Learn More",
      hero_note: "On-device by default. Nothing you see is ever stored.",

      trust_1: "Runs on-device",
      trust_2: "Zero data storage",
      trust_3: "Real-time filtering",
      trust_4: "Fully customizable",

      features_eyebrow: "How Ghadhoo Protects You",
      features_title: "One purpose. Three layers of care.",

      feature_1_title: "Local AI",
      feature_1_desc: "Fully on-device analysis of text and images. Works offline, and nothing ever leaves your phone.",
      feature_1_tag: "100% Private",

      feature_2_title: "Pro AI",
      feature_2_desc: "Optional cloud-assisted engine for higher accuracy on complex scenes, when you need extra strength.",
      feature_2_tag: "Maximum Accuracy",

      feature_3_title: "Deep Customization",
      feature_3_desc: "Adjust blur intensity, choose your overlay color, and tune the experience to fit your comfort.",
      feature_3_tag: "Made Yours",

      privacy_eyebrow: "Our Promise",
      privacy_title: "What you see stays with you. Always.",
      privacy_desc: "Ghadhoo never stores, saves, or shares your screen data. Every frame is analyzed in the moment, then forgotten — by design, not by policy.",
      privacy_point_1: "No screenshots ever saved",
      privacy_point_2: "No screen data sent to servers by default",
      privacy_point_3: "No account required to use the app",

      cta_eyebrow: "Begin Today",
      cta_title: "Lower your gaze. Raise your peace.",
      cta_sub: "Free to download. Runs quietly in the background, protecting every app on your screen.",
      cta_button: "Download Ghadhoo",

      footer_copy: "© 2026 Ghadhoo App. All rights reserved."
    },
    ar: {
      nav_features: "المزايا",
      nav_privacy: "الخصوصية",
      nav_download: "تحميل",
      nav_cta_text: "تحميل",

      ayah_ref: "سورة النور، ٢٤:٣٠",
      ayah_translation: "",
      hero_title_1: "تطبيقك المساعد",
      hero_title_2: "لغض البصر",
      hero_sub: "فلترة ذكية لمحتوى الشاشة بالكامل، تحمي عينيك في الوقت الفعلي، مع خصوصية تامة.",
      hero_cta_download: "تحميل لأندرويد",
      hero_cta_learn: "اعرف المزيد",
      hero_note: "يعمل على جهازك افتراضيًا. لا شيء تراه يُحفظ أبدًا.",

      trust_1: "يعمل محليًا على جهازك",
      trust_2: "لا تخزين للبيانات إطلاقًا",
      trust_3: "فلترة فورية",
      trust_4: "تخصيص كامل",

      features_eyebrow: "كيف يحميك غُضُّوا",
      features_title: "هدف واحد. ثلاث طبقات من العناية.",

      feature_1_title: "المعالجة المحلية",
      feature_1_desc: "تحليل كامل على جهازك للنصوص والصور. يعمل بلا إنترنت، ولا تغادر بياناتك هاتفك أبدًا.",
      feature_1_tag: "خصوصية ١٠٠٪",

      feature_2_title: "المعالجة الاحترافية",
      feature_2_desc: "محرك سحابي اختياري لدقة أعلى في المشاهد المعقدة، عند حاجتك لقوة إضافية.",
      feature_2_tag: "أعلى دقة",

      feature_3_title: "تخصيص متقدم",
      feature_3_desc: "اضبط شدة التمويه، واختر لون التغطية، وصمّم التجربة بما يناسب راحتك.",
      feature_3_tag: "بصمتك الخاصة",

      privacy_eyebrow: "وعدنا لك",
      privacy_title: "ما تراه يبقى معك. دائمًا.",
      privacy_desc: "لا يقوم غُضُّوا أبدًا بتخزين أو حفظ أو مشاركة بيانات شاشتك. يُحلَّل كل مشهد لحظيًا ثم يُنسى — بالتصميم، لا بمجرد سياسة.",
      privacy_point_1: "لا لقطات شاشة تُحفظ أبدًا",
      privacy_point_2: "لا إرسال لبيانات الشاشة للخوادم افتراضيًا",
      privacy_point_3: "لا حاجة لحساب لاستخدام التطبيق",

      cta_eyebrow: "ابدأ اليوم",
      cta_title: "غُضّ بصرك، وارتقِ بسكينتك.",
      cta_sub: "تحميل مجاني. يعمل بهدوء في الخلفية، ويحمي كل تطبيق على شاشتك.",
      cta_button: "حمّل غُضُّوا",

      footer_copy: "© 2026 تطبيق غُضُّوا. جميع الحقوق محفوظة."
    }
  };

  const STORAGE_THEME_KEY = "ghadhoo-theme";
  const STORAGE_LANG_KEY = "ghadhoo-lang";

  const root = document.documentElement;

  /* =========================================================
     Theme
  ========================================================= */
  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    const icons = document.querySelectorAll("#themeIcon, .icon-btn#themeToggleMobile i");
    icons.forEach((icon) => {
      icon.classList.remove("fa-moon", "fa-sun");
      icon.classList.add(theme === "dark" ? "fa-moon" : "fa-sun");
    });
    try { localStorage.setItem(STORAGE_THEME_KEY, theme); } catch (e) {}
  }

  function initTheme() {
    let saved;
    try { saved = localStorage.getItem(STORAGE_THEME_KEY); } catch (e) {}
    applyTheme(saved === "light" || saved === "dark" ? saved : "dark");
  }

  function toggleTheme() {
    const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(current);
  }

  /* =========================================================
     Language / i18n
  ========================================================= */
  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    document.querySelectorAll("#langLabel").forEach((el) => {
      el.textContent = lang === "ar" ? "EN" : "AR";
    });
    document.querySelectorAll(".lang-btn span").forEach((el) => {
      el.textContent = lang === "ar" ? "EN" : "AR";
    });

    try { localStorage.setItem(STORAGE_LANG_KEY, lang); } catch (e) {}
  }

  function initLanguage() {
    let saved;
    try { saved = localStorage.getItem(STORAGE_LANG_KEY); } catch (e) {}
    applyLanguage(saved === "ar" || saved === "en" ? saved : "en");
  }

  function toggleLanguage() {
    const current = root.getAttribute("lang") === "ar" ? "en" : "ar";
    applyLanguage(current);
  }

  /* =========================================================
     Mobile menu
  ========================================================= */
  function initMobileMenu() {
    const menuBtn = document.getElementById("menuToggle");
    const mobileNav = document.getElementById("mobileNav");
    if (!menuBtn || !mobileNav) return;

    menuBtn.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
      const icon = menuBtn.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars", !isOpen);
        icon.classList.toggle("fa-xmark", isOpen);
      }
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        const icon = menuBtn.querySelector("i");
        if (icon) { icon.classList.add("fa-bars"); icon.classList.remove("fa-xmark"); }
      });
    });
  }

  /* =========================================================
     Scroll reveal for feature cards
  ========================================================= */
  function initScrollReveal() {
    const items = document.querySelectorAll(".feature-card, .privacy-inner, .cta-inner");
    if (!("IntersectionObserver" in window)) return;

    items.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((el) => observer.observe(el));
  }

  /* =========================================================
     Init
  ========================================================= */
  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initLanguage();
    initMobileMenu();
    initScrollReveal();

    document.getElementById("themeToggle").addEventListener("click", toggleTheme);
    document.getElementById("themeToggleMobile").addEventListener("click", toggleTheme);
    document.getElementById("langToggle").addEventListener("click", toggleLanguage);
    document.getElementById("langToggleMobile").addEventListener("click", toggleLanguage);
  });
})();