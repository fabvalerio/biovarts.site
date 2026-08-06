(function () {
  const base = document.body.dataset.base || "";
  const active = document.body.dataset.page || "";

  const logoHeader = `<img src="${base}assets/images/logo-cinza2.png" alt="Biovarts" width="1800" height="500" class="h-8 w-auto md:h-9" />`;
  const logoFooter = `<img src="${base}assets/images/logo-branco.png" alt="Biovarts" width="210px" />`;

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
      <footer class="ink-panel relative mt-24 overflow-hidden" data-fluid-footer>
        <canvas class="footer-fluid-canvas" aria-hidden="true"></canvas>
        <div class="relative z-10 mx-auto grid max-w-[1240px] gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="${base}index.html" class="inline-flex items-center" aria-label="Biovarts — início">
              ${logoFooter}
            </a>
            <p class="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/60">Tecnologia nacional para produção de pellets farmacêuticos e sistemas multiparticulados de liberação modificada.</p>
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
        <div class="relative z-10 border-t border-primary-foreground/12">
          <div class="mx-auto flex max-w-[1240px] flex-col gap-2 px-5 py-6 text-xs text-primary-foreground/45 md:flex-row md:items-center md:justify-between md:px-8">
            <span>© 2026 Biovarts. Todos os direitos reservados.</span>
            <span>Vortex Comunicação</span>
          </div>
        </div>
      </footer>`;
  }

  /* Fluid flow field no background do footer */
  (function initFooterFluidFlow() {
    const footer = document.querySelector("[data-fluid-footer]");
    const canvas = footer && footer.querySelector(".footer-fluid-canvas");
    if (!footer || !canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    let time = 0;
    let visible = false;
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

    /* Branco / azul claro — contraste sobre o gradient-ink (#a7bac9) */
    const lineBaseColor = "226, 236, 245";
    const accentBlue = "186, 230, 253";

    function handleResize() {
      const rect = footer.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduceMotion || !animationFrameId) paintFrame(false);
    }

    function handleMouseMove(e) {
      if (reduceMotion) return;
      const rect = footer.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (inside) {
        mouse.targetX = e.clientX - rect.left;
        mouse.targetY = e.clientY - rect.top;
      } else {
        mouse.targetX = -1000;
        mouse.targetY = -1000;
      }
    }

    function handleMouseLeave() {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    }

    function paintFrame(animate) {
      if (animate) {
        time += 0.012;
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
      }

      ctx.clearRect(0, 0, width, height);

      const spacing = 32;
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      ctx.lineWidth = 1.35;
      ctx.lineCap = "round";

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;

          let angle = Math.sin(x * 0.003 + time) + Math.cos(y * 0.003 + time);

          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let isNear = false;
          if (!reduceMotion && dist < 220 && dist > 0) {
            isNear = true;
            const pushAngle = Math.atan2(dy, dx) + Math.PI;
            const force = 1 - dist / 220;
            angle = angle * (1 - force) + pushAngle * force;
          }

          const lineLen = isNear ? 24 : 15;
          const x2 = x + Math.cos(angle) * lineLen;
          const y2 = y + Math.sin(angle) * lineLen;

          const alpha = isNear
            ? 0.9
            : 0.28 + Math.sin(x * 0.01 + y * 0.01 + time) * 0.12;

          ctx.strokeStyle = isNear
            ? "rgba(" + accentBlue + ", " + alpha + ")"
            : "rgba(" + lineBaseColor + ", " + alpha + ")";

          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }
    }

    function render() {
      if (!visible) {
        animationFrameId = 0;
        return;
      }
      paintFrame(true);
      animationFrameId = requestAnimationFrame(render);
    }

    function start() {
      if (reduceMotion) {
        paintFrame(false);
        return;
      }
      if (animationFrameId || !visible) return;
      animationFrameId = requestAnimationFrame(render);
    }

    function stop() {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(handleResize);
      ro.observe(footer);
    }

    if (reduceMotion) {
      visible = true;
      start();
      return;
    }

    if (typeof IntersectionObserver !== "undefined") {
      const io = new IntersectionObserver(
        function (entries) {
          visible = entries.some(function (entry) {
            return entry.isIntersecting;
          });
          if (visible) start();
          else stop();
        },
        { rootMargin: "120px 0px", threshold: 0 }
      );
      io.observe(footer);
    } else {
      visible = true;
      start();
    }
  })();

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

  /* Globo interativo no CTA (canvas 2D) */
  (function initCtaGlobe() {
    const panel = document.querySelector("[data-cta-globe]");
    const canvas = panel && panel.querySelector("[data-globe-canvas]");
    if (!panel || !canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const MARKERS = [
      { lat: -24.79, lng: -53.64, label: "Ouro Verde" },
      { lat: -23.55, lng: -46.63, label: "São Paulo" },
      { lat: -15.79, lng: -47.88, label: "Brasília" },
      { lat: 40.71, lng: -74.01, label: "Nova York" },
      { lat: 51.51, lng: -0.13, label: "Londres" },
      { lat: 48.86, lng: 2.35, label: "Paris" },
      { lat: 35.68, lng: 139.69, label: "Tóquio" },
      { lat: 1.35, lng: 103.82, label: "Singapura" },
      { lat: 28.61, lng: 77.21, label: "Delhi" },
      { lat: 19.43, lng: -99.13, label: "Cidade do México" },
    ];

    const CONNECTIONS = [
      { from: [-24.79, -53.64], to: [-23.55, -46.63] },
      { from: [-23.55, -46.63], to: [40.71, -74.01] },
      { from: [-23.55, -46.63], to: [51.51, -0.13] },
      { from: [51.51, -0.13], to: [48.86, 2.35] },
      { from: [51.51, -0.13], to: [28.61, 77.21] },
      { from: [-23.55, -46.63], to: [1.35, 103.82] },
      { from: [1.35, 103.82], to: [35.68, 139.69] },
      { from: [40.71, -74.01], to: [19.43, -99.13] },
      { from: [-15.79, -47.88], to: [51.51, -0.13] },
    ];

    const DOT_COLOR = "rgba(186, 230, 253, ALPHA)";
    const ARC_COLOR = "rgba(147, 197, 253, 0.55)";
    const MARKER_COLOR = "rgba(224, 242, 254, 1)";
    const AUTO_ROTATE = reduceMotion ? 0 : 0.004;

    const dots = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const numDots = 1400;
    for (let i = 0; i < numDots; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / numDots);
      dots.push([
        Math.cos(theta) * Math.sin(phi),
        Math.cos(phi),
        Math.sin(theta) * Math.sin(phi),
      ]);
    }

    let rotY = 0.85;
    let rotX = 0.35;
    let animId = 0;
    let time = 0;
    let visible = false;
    let size = 460;

    const drag = {
      active: false,
      startX: 0,
      startY: 0,
      startRotY: 0,
      startRotX: 0,
      pointerId: null,
    };

    function latLngToXYZ(lat, lng, radius) {
      const phi = ((90 - lat) * Math.PI) / 180;
      const theta = ((lng + 180) * Math.PI) / 180;
      return [
        -(radius * Math.sin(phi) * Math.cos(theta)),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta),
      ];
    }

    function rotateY(x, y, z, angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [x * cos + z * sin, y, -x * sin + z * cos];
    }

    function rotateX(x, y, z, angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [x, y * cos - z * sin, y * sin + z * cos];
    }

    function project(x, y, z, cx, cy, fov) {
      const scale = fov / (fov + z);
      return [x * scale + cx, y * scale + cy, z];
    }

    function syncSize() {
      const host = canvas.parentElement || panel;
      const hostRect = host.getBoundingClientRect();
      const cssW = hostRect.width || canvas.getBoundingClientRect().width || 460;
      const cssH = hostRect.height || canvas.getBoundingClientRect().height || 460;
      const maxSize = window.matchMedia("(max-width: 767px)").matches ? 340 : 460;
      size = Math.max(240, Math.floor(Math.min(cssW, cssH || cssW, maxSize)));
      canvas.style.width = size + "px";
      canvas.style.height = size + "px";
    }

    function paintFrame(animate) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = size;
      const h = size;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.38;
      const fov = 600;

      if (animate) {
        if (!drag.active) rotY += AUTO_ROTATE;
        time += 0.015;
      }

      ctx.clearRect(0, 0, w, h);

      const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.8, cx, cy, radius * 1.5);
      glowGrad.addColorStop(0, "rgba(147, 197, 253, 0.1)");
      glowGrad.addColorStop(1, "rgba(147, 197, 253, 0)");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, w, h);

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(186, 230, 253, 0.18)";
      ctx.lineWidth = 1;
      ctx.stroke();

      for (let i = 0; i < dots.length; i++) {
        let x = dots[i][0] * radius;
        let y = dots[i][1] * radius;
        let z = dots[i][2] * radius;
        const rx = rotateX(x, y, z, rotX);
        const ry = rotateY(rx[0], rx[1], rx[2], rotY);
        x = ry[0];
        y = ry[1];
        z = ry[2];
        if (z > 0) continue;

        const p = project(x, y, z, cx, cy, fov);
        const depthAlpha = Math.max(0.22, 1 - (z + radius) / (2 * radius));
        const dotSize = 1.15 + depthAlpha * 0.9;

        ctx.beginPath();
        ctx.arc(p[0], p[1], dotSize, 0, Math.PI * 2);
        ctx.fillStyle = DOT_COLOR.replace("ALPHA", depthAlpha.toFixed(2));
        ctx.fill();
      }

      for (let c = 0; c < CONNECTIONS.length; c++) {
        const conn = CONNECTIONS[c];
        let a = latLngToXYZ(conn.from[0], conn.from[1], radius);
        let b = latLngToXYZ(conn.to[0], conn.to[1], radius);
        a = rotateX(a[0], a[1], a[2], rotX);
        a = rotateY(a[0], a[1], a[2], rotY);
        b = rotateX(b[0], b[1], b[2], rotX);
        b = rotateY(b[0], b[1], b[2], rotY);

        if (a[2] > radius * 0.3 && b[2] > radius * 0.3) continue;

        const p1 = project(a[0], a[1], a[2], cx, cy, fov);
        const p2 = project(b[0], b[1], b[2], cx, cy, fov);

        const midX = (a[0] + b[0]) / 2;
        const midY = (a[1] + b[1]) / 2;
        const midZ = (a[2] + b[2]) / 2;
        const midLen = Math.sqrt(midX * midX + midY * midY + midZ * midZ) || 1;
        const arcHeight = radius * 1.25;
        const elev = project(
          (midX / midLen) * arcHeight,
          (midY / midLen) * arcHeight,
          (midZ / midLen) * arcHeight,
          cx,
          cy,
          fov
        );

        ctx.beginPath();
        ctx.moveTo(p1[0], p1[1]);
        ctx.quadraticCurveTo(elev[0], elev[1], p2[0], p2[1]);
        ctx.strokeStyle = ARC_COLOR;
        ctx.lineWidth = 1.35;
        ctx.stroke();

        if (animate) {
          const t = (Math.sin(time * 1.2 + conn.from[0] * 0.1) + 1) / 2;
          const tx =
            (1 - t) * (1 - t) * p1[0] + 2 * (1 - t) * t * elev[0] + t * t * p2[0];
          const ty =
            (1 - t) * (1 - t) * p1[1] + 2 * (1 - t) * t * elev[1] + t * t * p2[1];

          ctx.beginPath();
          ctx.arc(tx, ty, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = MARKER_COLOR;
          ctx.fill();
        }
      }

      for (let m = 0; m < MARKERS.length; m++) {
        const marker = MARKERS[m];
        let pt = latLngToXYZ(marker.lat, marker.lng, radius);
        pt = rotateX(pt[0], pt[1], pt[2], rotX);
        pt = rotateY(pt[0], pt[1], pt[2], rotY);
        if (pt[2] > radius * 0.1) continue;

        const p = project(pt[0], pt[1], pt[2], cx, cy, fov);
        const pulse = animate ? Math.sin(time * 2 + marker.lat) * 0.5 + 0.5 : 0.5;

        ctx.beginPath();
        ctx.arc(p[0], p[1], 4 + pulse * 4, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(186, 230, 253, " + (0.25 + pulse * 0.2) + ")";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(p[0], p[1], 2.5, 0, Math.PI * 2);
        ctx.fillStyle = MARKER_COLOR;
        ctx.fill();

        if (marker.label) {
          ctx.font = "10px Sora, Manrope, system-ui, sans-serif";
          ctx.fillStyle = "rgba(224, 242, 254, 0.8)";
          ctx.fillText(marker.label, p[0] + 8, p[1] + 3);
        }
      }
    }

    function draw() {
      if (!visible) {
        animId = 0;
        return;
      }
      paintFrame(true);
      animId = requestAnimationFrame(draw);
    }

    function start() {
      syncSize();
      if (reduceMotion) {
        paintFrame(false);
        return;
      }
      if (animId || !visible) return;
      animId = requestAnimationFrame(draw);
    }

    function stop() {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = 0;
      }
    }

    function onPointerDown(e) {
      if (reduceMotion) return;
      drag.active = true;
      drag.startX = e.clientX;
      drag.startY = e.clientY;
      drag.startRotY = rotY;
      drag.startRotX = rotX;
      drag.pointerId = e.pointerId;
      try {
        canvas.setPointerCapture(e.pointerId);
      } catch (err) {}
    }

    function onPointerMove(e) {
      if (!drag.active) return;
      const dx = e.clientX - drag.startX;
      const dy = e.clientY - drag.startY;
      rotY = drag.startRotY + dx * 0.005;
      rotX = Math.max(-1, Math.min(1, drag.startRotX + dy * 0.005));
    }

    function onPointerUp() {
      drag.active = false;
      drag.pointerId = null;
    }

    function onResize() {
      syncSize();
      if (reduceMotion || !animId) paintFrame(!reduceMotion && visible);
    }

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("resize", onResize);

    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(onResize);
      ro.observe(panel);
    }

    if (reduceMotion) {
      visible = true;
      start();
      return;
    }

    if (typeof IntersectionObserver !== "undefined") {
      const io = new IntersectionObserver(
        function (entries) {
          visible = entries.some(function (entry) {
            return entry.isIntersecting;
          });
          if (visible) start();
          else stop();
        },
        { rootMargin: "120px 0px", threshold: 0 }
      );
      io.observe(panel);
    } else {
      visible = true;
      start();
    }
  })();

  /* Spotlight hover nos cards de diferencial (segue o ponteiro) */
  const reduceMotionCards = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotionCards) {
    document.querySelectorAll(".feature-card").forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", e.clientX - rect.left + "px");
        card.style.setProperty("--my", e.clientY - rect.top + "px");
      });
    });
  }

  /* Soluções: hover na lista troca a imagem lateral */
  (function initSolutionsHover() {
    const panel = document.querySelector(".solutions-panel");
    if (!panel) return;

    const items = panel.querySelectorAll(".solutions-item");
    const imgs = panel.querySelectorAll(".solutions-media__img");
    if (!items.length || imgs.length < 2) return;

    let activeIndex = 0;
    let currentSrc = imgs[0].getAttribute("src");

    function setActiveItem(item) {
      items.forEach(function (el) {
        el.classList.toggle("is-active", el === item);
      });
    }

    function swapImage(src, alt) {
      if (!src || src === currentSrc) return;

      const nextIndex = 1 - activeIndex;
      const nextImg = imgs[nextIndex];
      const currentImg = imgs[activeIndex];

      nextImg.src = src;
      nextImg.alt = alt || "";
      nextImg.setAttribute("aria-hidden", "false");
      currentImg.setAttribute("aria-hidden", "true");
      currentImg.alt = "";

      nextImg.classList.add("is-active");
      currentImg.classList.remove("is-active");

      activeIndex = nextIndex;
      currentSrc = src;
    }

    items.forEach(function (item) {
      item.addEventListener("mouseenter", function () {
        setActiveItem(item);
        swapImage(item.getAttribute("data-image"), item.getAttribute("data-alt"));
      });

      item.addEventListener("focusin", function () {
        setActiveItem(item);
        swapImage(item.getAttribute("data-image"), item.getAttribute("data-alt"));
      });
    });

    /* Preload das imagens da lista */
    items.forEach(function (item) {
      const src = item.getAttribute("data-image");
      if (!src) return;
      const preload = new Image();
      preload.src = src;
    });
  })();
})();
