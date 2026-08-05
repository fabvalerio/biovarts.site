(function () {
  const base = document.body.dataset.base || "";
  const active = document.body.dataset.page || "";

  const logoHeader = `<img src="${base}assets/images/logo-cinza2.png" alt="Biovarts" width="1800" height="500" class="h-8 w-auto md:h-9" />`;
  const logoFooter = `<img src="${base}assets/images/logo-branco.png" alt="Biovarts" width="2346" height="1792" class="h-[4.5rem] w-auto" />`;

  function navClass(page) {
    return page === active
      ? "text-sm font-medium text-foreground"
      : "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground";
  }

  function footerNavClass(page) {
    return page === active
      ? "text-sm text-primary-foreground"
      : "text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground";
  }

  const headerEl = document.getElementById("site-header");
  const isHome = active === "home";
  if (headerEl && !isHome) {
    headerEl.innerHTML = `
      <header class="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div class="mx-auto flex h-18 max-w-[1240px] items-center justify-between px-5 py-4 md:px-8">
          <a aria-label="Biovarts — início" href="${base}index.html" class="inline-flex items-center">
            ${logoHeader}
          </a>
          <nav class="hidden items-center gap-8 lg:flex" aria-label="Principal">
            <a href="${base}sobre.html" class="${navClass("sobre")}">Sobre</a>
            <a href="${base}produtos.html" class="${navClass("produtos")}">Produtos</a>
            <a href="${base}pesquisa-desenvolvimento.html" class="${navClass("pd")}">P&amp;D</a>
            <a href="${base}blog.html" class="${navClass("blog")}">Blog</a>
          </nav>
          <div class="hidden items-center gap-3 lg:flex">
            <a href="https://wa.me/5545999999999" target="_blank" rel="noreferrer" class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">WhatsApp</a>
            <a href="${base}contato.html" class="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">Fale com um especialista</a>
          </div>
          <button type="button" id="menu-toggle" aria-label="Abrir menu" aria-expanded="false" class="rounded-md p-2 text-foreground lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5" aria-hidden="true">
              <path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path>
            </svg>
          </button>
        </div>
        <div id="mobile-menu" class="border-t border-border bg-background px-5 py-6 lg:hidden">
          <nav class="flex flex-col gap-4" aria-label="Mobile">
            <a href="${base}sobre.html" class="${navClass("sobre")}">Sobre</a>
            <a href="${base}produtos.html" class="${navClass("produtos")}">Produtos</a>
            <a href="${base}pesquisa-desenvolvimento.html" class="${navClass("pd")}">P&amp;D</a>
            <a href="${base}blog.html" class="${navClass("blog")}">Blog</a>
            <a href="https://wa.me/5545999999999" target="_blank" rel="noreferrer" class="text-sm font-medium text-muted-foreground">WhatsApp</a>
            <a href="${base}contato.html" class="mt-2 inline-flex w-fit rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Fale com um especialista</a>
          </nav>
        </div>
      </header>`;
  }

  const footerEl = document.getElementById("site-footer");
  if (footerEl) {
    footerEl.innerHTML = `
      <footer class="ink-panel relative mt-24 overflow-hidden">
        <div class="grid-etch absolute inset-0" aria-hidden="true"></div>
        <div class="relative mx-auto grid max-w-[1240px] gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="${base}index.html" class="inline-flex items-center" aria-label="Biovarts — início">
              ${logoFooter}
            </a>
            <p class="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/60">Tecnologia nacional para produção de pellets farmacêuticos e sistemas multiparticulados de liberação modificada.</p>
            <a href="${base}contato.html" class="mt-8 inline-flex rounded-full border border-primary-foreground/25 px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">Solicitar orçamento</a>
          </div>
          <div>
            <p class="eyebrow text-primary-foreground/45">Navegação</p>
            <ul class="mt-5 space-y-3">
              <li><a class="${footerNavClass("home")}" href="${base}index.html">Home</a></li>
              <li><a href="${base}sobre.html" class="${footerNavClass("sobre")}">Sobre</a></li>
              <li><a href="${base}produtos.html" class="${footerNavClass("produtos")}">Produtos</a></li>
              <li><a href="${base}pesquisa-desenvolvimento.html" class="${footerNavClass("pd")}">P&amp;D</a></li>
              <li><a href="${base}blog.html" class="${footerNavClass("blog")}">Blog</a></li>
              <li><a href="${base}contato.html" class="${footerNavClass("contato")}">Contato</a></li>
            </ul>
          </div>
          <div>
            <p class="eyebrow text-primary-foreground/45">Contato</p>
            <ul class="mt-5 space-y-3 text-sm text-primary-foreground/80">
              <li>Ouro Verde do Oeste — Paraná, Brasil</li>
              <li><a class="hover:text-primary-foreground" href="mailto:contato@biovarts.com.br">contato@biovarts.com.br</a></li>
              <li><a class="hover:text-primary-foreground" href="https://wa.me/5545999999999" target="_blank" rel="noreferrer">+55 (45) 99999-9999</a></li>
            </ul>
          </div>
        </div>
        <div class="relative border-t border-primary-foreground/12">
          <div class="mx-auto flex max-w-[1240px] flex-col gap-2 px-5 py-6 text-xs text-primary-foreground/45 md:flex-row md:items-center md:justify-between md:px-8">
            <span>© 2026 Biovarts. Todos os direitos reservados.</span>
            <span>Pellets farmacêuticos • MCC • Multiparticulados</span>
          </div>
        </div>
      </footer>`;
  }

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });
  }

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const success = document.getElementById("form-success");
      form.reset();
      if (success) {
        success.classList.add("visible");
        success.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }

  const sliderRoot = document.querySelector("[data-hero-slider]");
  if (sliderRoot) {
    const slides = Array.prototype.slice.call(
      sliderRoot.querySelectorAll("[data-slide]")
    );
    const copySlides = Array.prototype.slice.call(
      document.querySelectorAll("[data-hero-copy-slide]")
    );
    const dotsRoot = document.querySelector("[data-hero-dots]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const imageIntervalMs = reduceMotion ? 7000 : 5000;
    const videoIntervalMs = reduceMotion ? 7000 : 10000;
    let index = Math.max(
      0,
      slides.findIndex(function (slide) {
        return slide.classList.contains("is-active");
      })
    );
    let timer = null;

    function dwellMs(i) {
      const slide = slides[i];
      if (!slide || slide.tagName !== "VIDEO") return imageIntervalMs;
      const duration = slide.duration;
      if (duration && isFinite(duration) && duration > 0) {
        return Math.round(duration * 1000);
      }
      return videoIntervalMs;
    }

    function syncVideo(activeIndex) {
      slides.forEach(function (slide, i) {
        if (slide.tagName !== "VIDEO") return;
        if (i === activeIndex && !reduceMotion) {
          slide.muted = true;
          var playPromise = slide.play();
          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(function () {});
          }
        } else {
          slide.pause();
          try {
            slide.currentTime = 0;
          } catch (e) {}
        }
      });
    }

    function goTo(next) {
      if (!slides.length) return;
      const current = ((next % slides.length) + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === current);
      });
      copySlides.forEach(function (panel, i) {
        const active = i === current;
        panel.classList.toggle("is-active", active);
        panel.setAttribute("aria-hidden", active ? "false" : "true");
      });
      if (dotsRoot) {
        Array.prototype.forEach.call(dotsRoot.children, function (dot, i) {
          const active = i === current;
          dot.classList.toggle("is-active", active);
          dot.setAttribute("aria-selected", active ? "true" : "false");
        });
      }
      syncVideo(current);
      index = current;
    }

    if (dotsRoot && slides.length > 1) {
      slides.forEach(function (_, i) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "hero-slider__dot" + (i === index ? " is-active" : "");
        btn.setAttribute("role", "tab");
        btn.setAttribute("aria-label", "Ir para slide " + (i + 1));
        btn.setAttribute("aria-selected", i === index ? "true" : "false");
        btn.addEventListener("click", function () {
          goTo(i);
          restart();
        });
        dotsRoot.appendChild(btn);
      });
    }

    function tick() {
      goTo(index + 1);
      start();
    }

    function stop() {
      if (timer) {
        window.clearTimeout(timer);
        timer = null;
      }
    }

    function start() {
      if (slides.length < 2) return;
      stop();
      timer = window.setTimeout(tick, dwellMs(index));
    }

    function restart() {
      stop();
      start();
    }

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stop();
        slides.forEach(function (slide) {
          if (slide.tagName === "VIDEO") slide.pause();
        });
      } else {
        syncVideo(index);
        start();
      }
    });

    goTo(index);
    start();
  }
})();
