import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const CONTACT = {
  email: "abinashtechofficial@gmail.com",
  phone: "918428302003",
  whatsapp: "918428302003",
  telegram: "https://t.me/abinash1323",
  instagram: "https://www.instagram.com/fearless_fighter_abi/",
  linkedin: "https://www.linkedin.com/in/abinash-p-friendstech",
  github: "https://github.com/abinash3466",
  stockBot: "https://t.me/Stock_Mod_bot",
};

const enquiryText =
  "Hi Abinash, I visited your portfolio and would like to discuss a project with you.";

const GMAIL_COMPOSE = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${encodeURIComponent(
  CONTACT.email
)}&su=${encodeURIComponent("Project Discussion - Portfolio Enquiry")}&body=${encodeURIComponent(
  enquiryText
)}`;

const WHATSAPP_LINK = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  enquiryText
)}`;

const projects = [
  {
    no: "01",
    type: "LOGISTICS / WEB PLATFORM",
    title: "Eagle Transport",
    description:
      "A practical transport operations platform designed around vehicle management, bookings, payments and business workflows.",
    tags: ["React", "Node.js", "MongoDB"],
    status: "Completed",
    metric: "Business System",
    link: "https://eagletransports.onrender.com",
  },
  {
    no: "02",
    type: "AI / TELEGRAM AUTOMATION",
    title: "AI Stock Analysis Bot",
    description:
      "A Telegram automation workflow combining market APIs, structured data and AI-assisted stock analysis.",
    tags: ["Retool", "Airtable", "Upstox API", "Telegram"],
    status: "Live",
    metric: "AI Automation",
    link: CONTACT.stockBot,
  },
  {
    no: "03",
    type: "LOGISTICS / TRANSPORT PLATFORM",
    title: "Thamizhan Transport",
    description:
      "A transport-focused web platform built to present services, operations and customer-facing transport information in a clean digital experience.",
    tags: ["React", "JavaScript", "Responsive UI"],
    status: "Live",
    metric: "Transport Platform",
    link: "https://thamizhan-transport.onrender.com",
  },
];

const services = [
  {
    no: "01",
    icon: "</>",
    title: "Web Development",
    description:
      "Responsive websites and practical web applications designed around real business needs.",
  },
  {
    no: "02",
    icon: "✦",
    title: "AI Automation",
    description:
      "Smart workflows connecting AI, APIs and repetitive business processes.",
  },
  {
    no: "03",
    icon: "▦",
    title: "Business Dashboards",
    description:
      "Clean operational dashboards for reporting, tracking and decision making.",
  },
  {
    no: "04",
    icon: "↗",
    title: "Telegram Bots",
    description:
      "Bots for alerts, data lookup, automation and AI-powered workflows.",
  },
];

const skills = [
  "React",
  "JavaScript",
  "HTML / CSS",
  "Node.js",
  "Python",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "n8n",
  "Retool",
  "Airtable",
  "AI Automation",
];

const contactCards = [
  {
    icon: "mail",
    label: "EMAIL",
    title: "Open Gmail compose",
    subtitle: CONTACT.email,
    href: GMAIL_COMPOSE,
    accent: "#66dcff",
    external: true,
  },
  {
    icon: "phone",
    label: "CALL",
    title: "Talk directly",
    subtitle: "+91 84283 02003",
    href: `tel:+${CONTACT.phone}`,
    accent: "#aa98ff",
  },
  {
    icon: "whatsapp",
    label: "WHATSAPP",
    title: "Quick conversation",
    subtitle: "+91 84283 02003",
    href: WHATSAPP_LINK,
    accent: "#72efb0",
    external: true,
  },
  {
    icon: "telegram",
    label: "TELEGRAM",
    title: "@abinash1323",
    subtitle: "Message me directly",
    href: CONTACT.telegram,
    accent: "#66c9ff",
    external: true,
  },
  {
    icon: "instagram",
    label: "INSTAGRAM",
    title: "@fearless_fighter_abi",
    subtitle: "Connect on Instagram",
    href: CONTACT.instagram,
    accent: "#e48fff",
    external: true,
  },
  {
    icon: "linkedin",
    label: "LINKEDIN",
    title: "Professional network",
    subtitle: "abinash-p-friendstech",
    href: CONTACT.linkedin,
    accent: "#73aaff",
    external: true,
  },
  {
    icon: "github",
    label: "GITHUB",
    title: "Explore my source code",
    subtitle: "@abinash3466",
    href: CONTACT.github,
    accent: "#f3f6ff",
    external: true,
  },
];

const profileImage = `${import.meta.env.BASE_URL}abinash.jpeg`;

function Icon({ name }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "arrow") {
    return (
      <svg {...props}>
        <path d="M7 17 17 7" />
        <path d="M8 7h9v9" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...props}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg {...props}>
        <path d="M7 3H4.8A1.8 1.8 0 0 0 3 4.8C3 13.75 10.25 21 19.2 21A1.8 1.8 0 0 0 21 19.2V17l-4.5-1-1.1 2.2a14.2 14.2 0 0 1-9.6-9.6L8 7.5 7 3Z" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg {...props}>
        <path d="M20 11.6A8 8 0 0 1 8.2 18.7L4 20l1.3-4.1A8 8 0 1 1 20 11.6Z" />
        <path d="M9 8.5c.4 2.5 2 4.2 4.6 5.2" />
      </svg>
    );
  }

  if (name === "telegram") {
    return (
      <svg {...props}>
        <path d="m21 4-4 16-5.5-4-3 3 .5-5 8-7-10 6-4-1.5L21 4Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg {...props}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg {...props}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10v7" />
        <path d="M8 7v.01" />
        <path d="M12 17v-4a3 3 0 0 1 6 0v4" />
        <path d="M12 10v7" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg {...props}>
        <path d="M15 22v-3.8c.04-1-.34-1.97-1.05-2.68 3.5-.39 7.18-1.72 7.18-7.78A6.08 6.08 0 0 0 19.5 3.5 5.67 5.67 0 0 0 19.35.3S18.08-.1 15 1.9a14.4 14.4 0 0 0-6 0C5.92-.1 4.65.3 4.65.3A5.67 5.67 0 0 0 4.5 3.5a6.08 6.08 0 0 0-1.63 4.24c0 6.05 3.68 7.39 7.18 7.78A3.8 3.8 0 0 0 9 18.2V22" />
        <path d="M9 19c-3 .92-3-1.5-4.2-2" />
      </svg>
    );
  }

  return null;
}

function usePageObservers() {
  useEffect(() => {
    const revealItems = [...document.querySelectorAll("[data-reveal]")];
    const sections = [...document.querySelectorAll("main section[id]")];
    const navLinks = [...document.querySelectorAll(".nav-links a[data-section-link]")];

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -70px 0px" }
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!activeEntry) return;
        const id = activeEntry.target.id;

        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });

        const nextUrl = id === "home"
          ? window.location.pathname
          : `${window.location.pathname}#${id}`;
        if (`${window.location.pathname}${window.location.hash}` !== nextUrl) {
          window.history.replaceState(null, "", nextUrl);
        }
      },
      {
        rootMargin: "-22% 0px -58% 0px",
        threshold: [0.08, 0.2, 0.4],
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);
}

function useSmoothVisualEffects(glowRef, progressRef) {
  useEffect(() => {
    const glow = glowRef.current;
    const progress = progressRef.current;
    if (!progress) return undefined;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let pointerFrame = 0;
    let scrollFrame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;

    const paintPointer = () => {
      pointerFrame = 0;
      if (glow) {
        glow.style.transform = `translate3d(${pointerX - 190}px, ${pointerY - 190}px, 0)`;
      }
    };

    const onPointerMove = (event) => {
      if (!finePointer) return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!pointerFrame) pointerFrame = window.requestAnimationFrame(paintPointer);
    };

    const paintScroll = () => {
      scrollFrame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      progress.style.transform = `scaleX(${value})`;
    };

    const onScroll = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(paintScroll);
    };

    if (finePointer) window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    paintScroll();

    return () => {
      if (finePointer) window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
    };
  }, [glowRef, progressRef]);
}

function TiltCard({ as: Tag = "div", className = "", children, ...props }) {
  const ref = useRef(null);
  const frame = useRef(0);
  const rectRef = useRef(null);
  const next = useRef({ rx: 0, ry: 0, x: 50, y: 50 });

  const paint = () => {
    frame.current = 0;
    if (!ref.current) return;
    const { rx, ry, x, y } = next.current;
    ref.current.style.setProperty("--rx", `${rx}deg`);
    ref.current.style.setProperty("--ry", `${ry}deg`);
    ref.current.style.setProperty("--mx", `${x}%`);
    ref.current.style.setProperty("--my", `${y}%`);
  };

  const handlePointerEnter = (event) => {
    if (event.pointerType !== "mouse" || window.innerWidth < 900 || !ref.current) return;
    rectRef.current = ref.current.getBoundingClientRect();
  };

  const handlePointerMove = (event) => {
    if (event.pointerType !== "mouse" || window.innerWidth < 900 || !ref.current) return;
    const rect = rectRef.current || ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    next.current = {
      rx: (0.5 - y) * 5,
      ry: (x - 0.5) * 6,
      x: x * 100,
      y: y * 100,
    };

    if (!frame.current) frame.current = window.requestAnimationFrame(paint);
  };

  const handlePointerLeave = () => {
    rectRef.current = null;
    next.current = { rx: 0, ry: 0, x: 50, y: 50 };
    if (!frame.current) frame.current = window.requestAnimationFrame(paint);
  };

  useEffect(
    () => () => {
      if (frame.current) window.cancelAnimationFrame(frame.current);
    },
    []
  );

  return (
    <Tag
      ref={ref}
      className={`tilt-card ${className}`}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      {children}
    </Tag>
  );
}

function ContactCard({ icon, label, title, subtitle, href, accent, external }) {
  return (
    <TiltCard
      as="a"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="contact-card"
      style={{ "--accent": accent }}
      aria-label={`${label}: ${title}`}
    >
      <span className="card-spotlight" />
      <div className="contact-icon">
        <Icon name={icon} />
      </div>
      <div className="contact-copy">
        <span>{label}</span>
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </div>
      <div className="contact-arrow">
        <Icon name="arrow" />
      </div>
    </TiltCard>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const glowRef = useRef(null);
  const progressRef = useRef(null);

  usePageObservers();
  useSmoothVisualEffects(glowRef, progressRef);

  return (
    <div className="site">
      <div className="scroll-progress" ref={progressRef} />
      <div className="cursor-glow" ref={glowRef} />
      <div className="noise" aria-hidden="true" />
      <div className="ambient ambient-a" aria-hidden="true" />
      <div className="ambient ambient-b" aria-hidden="true" />
      <div className="ambient ambient-c" aria-hidden="true" />

      <header className="navbar shell">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)} aria-label="Abinash P - Home">
          <span className="brand-mark" aria-hidden="true">AP</span>
          <span className="brand-copy">
            <strong>Abinash P.</strong>
            <small><i className="brand-live-dot" />WEB DEVELOPER <b>/</b> AI AUTOMATION</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a data-section-link href="#about" onClick={() => setMenuOpen(false)}>
            <span>01.</span>About
          </a>
          <a data-section-link href="#work" onClick={() => setMenuOpen(false)}>
            <span>02.</span>Work
          </a>
          <a data-section-link href="#services" onClick={() => setMenuOpen(false)}>
            <span>03.</span>Services
          </a>
          <a data-section-link href="#contact" onClick={() => setMenuOpen(false)}>
            <span>04.</span>Contact
          </a>
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
            <span>05.</span>GitHub ↗
          </a>
        </nav>

        <a href="#contact" className="nav-cta">
          <i />
          Let&apos;s work
          <Icon name="arrow" />
        </a>

        <button
          type="button"
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>
        <section className="hero shell" id="home">
          <div className="hero-sparkles" aria-hidden="true">
            <i /><i /><i /><i /><i /><i />
          </div>

          <div className="hero-visual">
            <div className="visual-glow" aria-hidden="true" />
            <div className="visual-orbit orbit-one" aria-hidden="true" />
            <div className="visual-orbit orbit-two" aria-hidden="true" />

            <TiltCard className="profile-frame">
              <span className="profile-sheen" aria-hidden="true" />
              <div className="frame-top">
                <span>AP.DEV / PROFILE</span>
                <span className="online"><i /> ONLINE</span>
              </div>

              <div className="image-wrap">
                <img
                  src={profileImage}
                  alt="Abinash P"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                <div className="image-overlay" aria-hidden="true" />
                <div className="image-scan" aria-hidden="true" />
                <div className="image-code">
                  <span>developer.mode</span>
                  <strong>ACTIVE_</strong>
                </div>
              </div>

              <div className="profile-bottom">
                <div className="profile-name-block">
                  <span>HELLO, I&apos;M</span>
                  <h2>Abinash P.</h2>
                  <i className="profile-name-line" aria-hidden="true" />
                </div>
                <div className="profile-role">
                  WEB DEVELOPER
                  <strong>AI AUTOMATION</strong>
                </div>
              </div>
            </TiltCard>

            <div className="float-chip chip-code">
              <div className="window-dots"><i /><i /><i /></div>
              <code>const mindset = <b>&quot;build&quot;</b>;</code>
            </div>

            <div className="float-chip chip-focus">
              <small>CURRENT FOCUS</small>
              <strong>Web + AI</strong>
              <span>→ shipping useful products</span>
            </div>
          </div>

          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" />
              AVAILABLE FOR WORK
              <i />
              TAMIL NADU · INDIA
            </div>

            <h1>
              I turn business
              <br />
              problems into
              <br />
              <span>digital systems.</span>
            </h1>

            <div className="title-line"><i /></div>

            <div className="hero-intro">
              <span />
              <p>
                I&apos;m <strong>Abinash P</strong> — a web developer focused on building clean,
                useful digital products, automation workflows and business-first solutions.
              </p>
            </div>

            <div className="hero-actions">
              <a href="#work" className="primary-btn">
                Explore my work
                <span><Icon name="arrow" /></span>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-btn">
                Start a conversation <Icon name="arrow" />
              </a>
            </div>

            <div className="hero-stats">
              <div><span>PROJECTS</span><strong>03+</strong></div>
              <div><span>EXPERIENCE</span><strong>6 Mo.</strong></div>
              <div><span>FOCUS</span><strong>Web + AI</strong></div>
            </div>
          </div>
        </section>

        <section className="section shell about" id="about" data-reveal>
          <div className="section-head">
            <div>
              <span className="section-index">01 / ABOUT</span>
              <h2>More than code.<br /><span>I understand business.</span></h2>
            </div>
            <p>
              Commerce background combined with practical web development, customer-facing
              experience and a strong interest in solving useful problems through technology.
            </p>
          </div>

          <div className="about-grid">
            <TiltCard className="code-panel">
              <span className="card-spotlight" />
              <div className="code-panel-top">
                <span>about_me.json</span>
                <div><i /><i /><i /></div>
              </div>
              <div className="code-body">
                <p><span>01</span><code><em>const</em> developer = {"{"}</code></p>
                <p><span>02</span><code>&nbsp;&nbsp;name: <b>&quot;Abinash P&quot;</b>,</code></p>
                <p><span>03</span><code>&nbsp;&nbsp;mindset: <b>&quot;Problem Solver&quot;</b>,</code></p>
                <p><span>04</span><code>&nbsp;&nbsp;focus: <b>&quot;Useful Products&quot;</b>,</code></p>
                <p><span>05</span><code>&nbsp;&nbsp;approach: <b>&quot;Business First&quot;</b></code></p>
                <p><span>06</span><code>{"}"}</code></p>
              </div>
              <div className="skill-cloud">
                {skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </TiltCard>

            <div className="about-cards">
              <TiltCard className="info-card">
                <span className="card-spotlight" />
                <div className="info-top"><span>EDUCATION</span><b>⌘</b></div>
                <h3>B.Com</h3>
                <p>Thiruvalluvar Arts &amp; Science College</p>
                <small>2022 — 2025</small>
                <span className="card-code">EDU_01</span>
              </TiltCard>

              <TiltCard className="info-card">
                <span className="card-spotlight" />
                <div className="info-top"><span>BASED IN</span><b className="signal"><i /><i /><i /></b></div>
                <h3>Ambasamudram</h3>
                <p>Tirunelveli · Tamil Nadu</p>
                <div className="coordinates"><span>08.7029° N</span><i /><span>77.4520° E</span></div>
              </TiltCard>

              <TiltCard className="experience-card">
                <span className="card-spotlight" />
                <div className="experience-label"><span>REAL WORLD EXPERIENCE</span><small>06 MONTHS</small></div>
                <div className="experience-title"><h3>Area Sales Officer</h3><p>Innoviti Payment Solutions</p></div>
                <div className="experience-copy">
                  <p>
                    Worked around payment technology, merchant support, customer issues and
                    multi-location business operations.
                  </p>
                  <div>
                    <span>POS Operations</span>
                    <span>Merchant Support</span>
                    <span>Field Coordination</span>
                    <span>Customer Handling</span>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </section>

        <section className="section shell work" id="work" data-reveal>
          <div className="section-head">
            <div>
              <span className="section-index">02 / SELECTED WORK</span>
              <h2>Built to solve.<br /><span>Not just to show.</span></h2>
            </div>
            <p>
              Selected projects where development, automation and practical business thinking
              come together.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <TiltCard
                as="a"
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <span className="card-spotlight" />
                <span className="project-sheen" aria-hidden="true" />
                <div className="project-top">
                  <span>{project.no}</span>
                  <div className="project-status"><i />{project.status}</div>
                </div>
                <div className="project-content">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-metric">
                  <small>SYSTEM TYPE</small>
                  <strong>{project.metric}</strong>
                </div>
                <div className="project-bottom">
                  <div className="project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <span className="project-arrow"><Icon name="arrow" /></span>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        <section className="section shell services" id="services" data-reveal>
          <div className="services-intro">
            <span className="section-index">03 / CAPABILITIES</span>
            <h2>What I can<br /><span>build for you.</span></h2>
            <p>
              Focused digital solutions for businesses, startups and teams that need practical technology.
            </p>
            <div className="services-note">
              <i />
              <span>Business-first builds. Clean UI. Useful automation.</span>
            </div>
          </div>

          <div className="services-list">
            {services.map((service) => (
              <TiltCard className="service-card" key={service.title}>
                <span className="card-spotlight" />
                <div className="service-top">
                  <span className="service-no">{service.no}</span>
                  <span className="service-arrow"><Icon name="arrow" /></span>
                </div>
                <div className="service-icon">{service.icon}</div>
                <div className="service-name">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        <section className="section shell contact" id="contact" data-reveal>
          <div className="contact-panel">
            <div className="contact-orb contact-orb-a" aria-hidden="true" />
            <div className="contact-orb contact-orb-b" aria-hidden="true" />

            <div className="contact-left">
              <div className="contact-status"><span /> AVAILABLE FOR WORK &amp; FREELANCE</div>
              <span className="contact-label">04 / LET&apos;S CONNECT</span>
              <h2>Have an idea?<br /><span>Let&apos;s build it.</span></h2>
              <p>
                Looking for a developer, planning a freelance project or just want to discuss an
                idea? Reach me directly through your preferred platform.
              </p>
              <div className="contact-availability">
                <span className="pulse-dot" />
                <div><small>CURRENT STATUS</small><strong>Open to opportunities</strong></div>
              </div>
            </div>

            <div className="contact-right">
              {contactCards.map((item) => <ContactCard key={item.label} {...item} />)}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <a href="#home" className="brand brand-footer" aria-label="Abinash P - Home">
          <span className="brand-mark" aria-hidden="true">AP</span>
          <span className="brand-copy"><strong>Abinash P.</strong><small>WEB + AI</small></span>
        </a>
        <p>
          WEB DEVELOPER · AI AUTOMATION · {" "}
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">GITHUB ↗</a>
        </p>
        <span>© 2026 ABINASH P.</span>
      </footer>
    </div>
  );
}

export default App;
