import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import Particle from "../Particle";
import emberLogo from "../../Assets/Projects/ember-2.png";
import meetEmberShot from "../../Assets/Ember/meet-ember.png";
import securityShot from "../../Assets/Ember/security.png";
import vaultShot from "../../Assets/Ember/vault.png";
import featuresShot from "../../Assets/Ember/features.png";
import memoryShot from "../../Assets/Ember/memory.png";
import appearanceShot from "../../Assets/Ember/appearance.png";
import generalShot from "../../Assets/Ember/general.png";
import aboutPanelShot from "../../Assets/Ember/about-panel-full.png";
import "./Ember.css";

// release notes come back as github markdown. strip the formatting noise
// so the 200-char preview reads as plain text.
function stripMarkdown(text) {
  return text
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/(^|\s)_([^_]+)_(?=\s|$)/g, "$1$2")
    .replace(/~~([^~]+)~~/g, "$1")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*>\s+/gm, "")
    .trim();
}

function getFirstParagraph(body) {
  if (!body) return "";
  const lines = body.split("\n").filter((line) => {
    const t = line.trim();
    if (!t) return false;
    if (t.startsWith("#")) return false;
    if (t.startsWith("Released:")) return false;
    if (t.startsWith("---")) return false;
    return true;
  });
  const first = stripMarkdown(lines[0] || "");
  return first.length > 200 ? first.slice(0, 200) + "..." : first;
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getPlatform(name) {
  if (/\.exe$/i.test(name)) return "Windows";
  if (/\.dmg$/i.test(name)) return "macOS";
  if (/\.(AppImage|deb|rpm|snap)$/i.test(name)) return "Linux";
  return null;
}

// honor user motion preference. scrollIntoView with explicit behavior
// overrides CSS scroll-behavior, so we have to check at call time.
function getScrollBehavior() {
  if (typeof window === "undefined" || !window.matchMedia) return "smooth";
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}

const SECTIONS = [
  { id: "meet-ember", label: "Meet Ember" },
  { id: "why-local-first", label: "Why Local-First" },
  { id: "how-she-thinks", label: "How She Thinks" },
  { id: "make-her-yours", label: "Make Her Yours" },
  { id: "who-she-is", label: "Who She Is" },
  { id: "how-shes-built", label: "How She's Built" },
  { id: "releases", label: "Releases" },
];

function ZoomImage({ src, alt, onZoom }) {
  return (
    <img
      src={src}
      alt={alt}
      className="ember-zoomable"
      onClick={() => onZoom({ src, alt })}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onZoom({ src, alt });
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Open larger view: ${alt}`}
    />
  );
}

function Ember() {
  const [releases, setReleases] = useState([]);
  const [installer, setInstaller] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const [lightbox, setLightbox] = useState(null);
  const navRef = useRef(null);
  const lightboxCloseRef = useRef(null);
  const lastFocusedRef = useRef(null);

  useEffect(() => {
    Promise.all([
      fetch("https://api.github.com/repos/niansahc/ember-2/releases")
        .then((res) => (res.ok ? res.json() : [])),
      fetch("https://api.github.com/repos/niansahc/ember-2-installer/releases/latest")
        .then((res) => (res.ok ? res.json() : null)),
    ])
      .then(([releasesData, installerData]) => {
        setReleases(releasesData.slice(0, 5));
        setInstaller(installerData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // measure the global navbar so the section nav sits flush under it
  // (no visible background strip between the two).
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;
    const setHeight = () => {
      const h = navbar.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--global-navbar-h",
        `${Math.round(h)}px`
      );
    };
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  // active-section detection. picks the section closest to the top of the
  // viewport, accounting for the two stacked nav bars.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      {
        rootMargin: "-130px 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // close lightbox on escape and lock body scroll while open.
  // also move focus to the close button on open and return it to
  // the trigger on close so keyboard users don't lose context.
  useEffect(() => {
    if (lightbox) {
      lastFocusedRef.current = document.activeElement;
      const handleKey = (e) => {
        if (e.key === "Escape") setLightbox(null);
      };
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
      // focus the close button after the modal renders
      requestAnimationFrame(() => lightboxCloseRef.current?.focus());
      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener("keydown", handleKey);
      };
    } else if (lastFocusedRef.current) {
      lastFocusedRef.current.focus();
      lastFocusedRef.current = null;
    }
  }, [lightbox]);

  // on mobile (when the nav overflows), keep the active pill in view by
  // setting the ul's scrollLeft directly. avoids scrollIntoView walking
  // up to the document and nudging the page.
  useEffect(() => {
    if (!navRef.current) return;
    const ul = navRef.current.querySelector("ul");
    if (!ul || ul.scrollWidth <= ul.clientWidth) return;
    const activeLink = ul.querySelector(
      `a[data-section="${activeSection}"]`
    );
    if (!activeLink) return;
    const target =
      activeLink.offsetLeft -
      ul.clientWidth / 2 +
      activeLink.offsetWidth / 2;
    ul.scrollTo({ left: target, behavior: getScrollBehavior() });
  }, [activeSection]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: getScrollBehavior(), block: "start" });
  };

  const downloads = {};
  if (installer && installer.assets) {
    installer.assets.forEach((asset) => {
      const platform = getPlatform(asset.name);
      if (platform) downloads[platform] = asset.browser_download_url;
    });
  }

  return (
    <Container fluid className="project-section ember-page">
      <Particle />

      <nav
        className="ember-section-nav"
        ref={navRef}
        aria-label="Page sections"
      >
        <ul>
          {SECTIONS.map((s) => {
            const isActive = activeSection === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  data-section={s.id}
                  className={isActive ? "active" : ""}
                  aria-current={isActive ? "location" : undefined}
                  onClick={(e) => handleNavClick(e, s.id)}
                >
                  {s.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <Container className="ember-content">
        <img src={emberLogo} alt="Ember-2 logo" className="ember-logo" />
        <h1 className="project-heading">
          <strong className="orange">Ember-2</strong>
        </h1>

        <section id="meet-ember" className="ember-section ember-row">
          <div className="ember-copy">
            <h2 className="ember-section-heading">Meet Ember</h2>
            <p>
              Ember is a personal AI assistant that runs entirely on your own
              machine. She remembers what you said last week, accumulates
              context over weeks and months, and gets to know you over time
              without sending a single byte of your data anywhere.
            </p>
            <p>
              Most AI assistants are built around the assumption that the
              conversation ends. Ember is built around the assumption that it
              does not.
            </p>
            <p className="ember-keystone">
              She is a technical project and a position about what AI systems
              owe the people who use them.
            </p>
            <div className="ember-buttons">
              <a
                href="https://github.com/niansahc/ember-2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="Fork and star Ember-2 on GitHub"
              >
                <CgGitFork style={{ fontSize: "1.2em", verticalAlign: "-2px" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em", verticalAlign: "-2px" }} />
              </a>
              <a
                href={
                  downloads["Windows"] ||
                  "https://github.com/niansahc/ember-2-installer/releases/latest"
                }
                target={downloads["Windows"] ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Download Installer
              </a>
            </div>
            <p className="ember-platform-note">
              {installer ? installer.tag_name : ""} · Tested on Windows 11
              (64-bit) · macOS and Linux builds coming when testers are
              available
            </p>
          </div>
          <figure className="ember-figure">
            <ZoomImage
              src={meetEmberShot}
              alt="Ember home screen with greeting 'Coffee first, Chastain?'"
              onZoom={setLightbox}
            />
            <figcaption>
              "Coffee first, Chastain?" One of Ember's time-of-day greetings,
              picked at random.
            </figcaption>
          </figure>
        </section>

        <section id="why-local-first" className="ember-section ember-row ember-row-flipped">
          <div className="ember-figure-stack">
            <figure className="ember-figure">
              <ZoomImage
                src={securityShot}
                alt="Ember security settings: PIN lock, vault, cloud API keys"
                onZoom={setLightbox}
              />
              <figcaption>
                Security settings. PIN lock, vault location, and any cloud
                API keys you add (if you want to use a cloud model, the
                option exists).
              </figcaption>
            </figure>
            <figure className="ember-figure">
              <ZoomImage
                src={vaultShot}
                alt="Ember vault settings panel"
                onZoom={setLightbox}
              />
              <figcaption>
                Your memory vault. A folder of plain JSON on your machine
                that you can read.
              </figcaption>
            </figure>
          </div>
          <div className="ember-copy">
            <h2 className="ember-section-heading">Why Local-First</h2>
            <p>
              Most AI systems are built on a trade. You get capability. They get
              your data. The terms are buried in a privacy policy, and what
              happens when the company changes its mind is mostly up to them.
            </p>
            <p>
              Ember is built differently. Your memory vault lives on your
              hardware. Local inference means nothing leaves your machine.
              Privacy is not a promise. It is the architecture.
            </p>
            <p>
              Your data lives in open formats you can read, export, or delete.
              No lock-in. No hostage data. You should be able to leave, and you
              can.
            </p>
          </div>
        </section>

        <section id="how-she-thinks" className="ember-section ember-row">
          <div className="ember-copy">
            <h2 className="ember-section-heading">How She Thinks</h2>
            <p>
              Ember accumulates. Every conversation, every journal entry, every
              pattern that emerges across weeks and months deepens what she
              knows about you.
            </p>
            <p>
              Her memory is append-only. Her retrieval finds what is relevant.
              A constitutional review layer evaluates her responses against a
              defined set of values before they reach you.
            </p>
          </div>
          <div className="ember-figure-stack">
            <figure className="ember-figure">
              <ZoomImage
                src={featuresShot}
                alt="Ember feature settings: web search, vision, deviation engine"
                onZoom={setLightbox}
              />
              <figcaption>
                Features panel. Web search, vision, deviation engine, and
                other capabilities you can toggle.
              </figcaption>
            </figure>
            <figure className="ember-figure">
              <ZoomImage
                src={memoryShot}
                alt="Ember memory settings panel"
                onZoom={setLightbox}
              />
              <figcaption>
                Memory settings. Append-only by design, with retrieval
                that finds what is relevant.
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="make-her-yours" className="ember-section ember-section-pair">
          <h2 className="ember-section-heading ember-heading-centered">
            Make Her Yours
          </h2>
          <div className="ember-pair">
            <figure className="ember-figure">
              <ZoomImage
                src={appearanceShot}
                alt="Ember appearance settings: five themes plus a custom option"
                onZoom={setLightbox}
              />
            </figure>
            <figure className="ember-figure">
              <ZoomImage
                src={generalShot}
                alt="Ember general settings: conversational style options Casual, Balanced, Thoughtful"
                onZoom={setLightbox}
              />
            </figure>
          </div>
          <p className="ember-pair-caption">
            Five themes or customize your own. Three conversational styles.
            Make her yours.
          </p>
        </section>

        <section id="who-she-is" className="ember-section ember-row">
          <div className="ember-copy">
            <h2 className="ember-section-heading">Who She Is</h2>
            <p>
              Ember is sincere, direct, and warm without being soft. She thinks
              with you, not at you. She tracks the specific thing you said
              rather than the category it belongs to. She sits with difficulty
              without making it clinical.
            </p>
            <p>
              She is curious by disposition, comfortable with not knowing, and
              economical with words. She has a sense of humor that does not
              punch down. She holds her ground when challenged and changes her
              mind when given better reasoning, not when given displeasure.
            </p>
            <p>She was built to reduce the cost of asking for help.</p>
          </div>
          <figure className="ember-figure">
            <ZoomImage
              src={aboutPanelShot}
              alt="Ember About panel"
              onZoom={setLightbox}
            />
          </figure>
        </section>

        <section id="how-shes-built" className="ember-section ember-section-wide ember-copy">
          <h2 className="ember-section-heading">How She's Built</h2>
          <p>
            Ember is built by one person who reads code and reasons about
            systems but does not write production code every day. The
            workflow is designed around that. Decisions happen in
            conversation. Implementation happens in supervised sessions.
            Every change is reviewed before it ships.
          </p>

          <h3 className="ember-subheading">The Cast</h3>
          <ul className="ember-cast">
            <li>
              <strong>The Architect</strong> (human): designs, decides,
              approves. Every PR. Every release.
            </li>
            <li>
              <strong>Manager</strong> (claude.ai chat): research, project
              management, coordination. Drafts plans and prompts.
            </li>
            <li>
              <strong>G, M, Y</strong> (Claude Code instances): build the
              backend, frontend, and installer. Each in its own repo, each
              in its own terminal color.
            </li>
            <li>
              <strong>Deep</strong> (claude.ai with extended thinking):
              literature synthesis before architecture decisions.
            </li>
            <li>
              <strong>The Council</strong> (rotating reviewer personas):
              five lenses for high-stakes calls: privacy, register,
              architecture, constraints, test discipline.
            </li>
          </ul>

          <h3 className="ember-subheading">Decision Gates</h3>
          <p>
            Big work follows a sequence. Research first. Council if the
            call is high-stakes. Stress-test the approach with grill-me.
            Plan the build. Then build it. Manager recommends. The
            Architect decides. Build instances implement.
          </p>

          <h3 className="ember-subheading">Testing Discipline</h3>
          <p>
            Four tiers of evals run at every release: fast unit and
            integration tests, manual streaming regression, deterministic
            eval tools (retrieval, web search, behavioral battery), and
            Haiku-judged cloud evals at release boundaries. Test count is
            tracked precisely. Flaky tests are fixed in the release they
            are found, never carried forward.
          </p>

          <p>
            The code is open source under AGPL-3.0. The architecture,
            decision logs, and the full build philosophy are documented
            and public.
          </p>

          <div className="ember-buttons">
            <a
              href="https://github.com/niansahc/ember-2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="Fork and star Ember-2 on GitHub"
            >
              <CgGitFork style={{ fontSize: "1.2em", verticalAlign: "-2px" }} />{" "}
              <AiFillStar style={{ fontSize: "1.1em", verticalAlign: "-2px" }} />
            </a>
            <a
              href={
                downloads["Windows"] ||
                "https://github.com/niansahc/ember-2-installer/releases/latest"
              }
              target={downloads["Windows"] ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Download Installer
            </a>
          </div>

          <p className="ember-doc-link">
            <a
              href="https://github.com/niansahc/ember-2/blob/main/docs/BUILDING_EMBER.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the full build doc →
            </a>
          </p>
        </section>

        <section id="releases" className="ember-section ember-section-wide">
          <h2 className="ember-section-heading">Releases</h2>

          {loading && (
            <p className="ember-muted">Loading releases...</p>
          )}

          {error && (
            <p className="ember-muted">
              Could not load releases. Check the{" "}
              <a
                href="https://github.com/niansahc/ember-2/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="ember-orange-link"
              >
                releases page
              </a>{" "}
              directly.
            </p>
          )}

          {!loading &&
            !error &&
            releases.map((release) => (
              <div key={release.id} className="ember-release-card">
                <div className="ember-release-head">
                  <h3>{release.name || release.tag_name}</h3>
                  <span>{formatDate(release.published_at)}</span>
                </div>
                <p>{getFirstParagraph(release.body)}</p>
                <a
                  href={release.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ember-orange-link"
                >
                  Full release notes →
                </a>
              </div>
            ))}

          {!loading && !error && (
            <p className="ember-all-releases">
              <a
                href="https://github.com/niansahc/ember-2/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                View all releases on GitHub
              </a>
            </p>
          )}
        </section>
      </Container>

      {lightbox && (
        <div
          className="ember-lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged: ${lightbox.alt}`}
        >
          <button
            ref={lightboxCloseRef}
            type="button"
            className="ember-lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close enlarged view"
          >
            ×
          </button>
          <img src={lightbox.src} alt={lightbox.alt} />
        </div>
      )}
    </Container>
  );
}

export default Ember;
