import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
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

const SECTIONS = [
  { id: "meet-ember", label: "Meet Ember" },
  { id: "why-local-first", label: "Why Local-First" },
  { id: "how-she-thinks", label: "How She Thinks" },
  { id: "make-her-yours", label: "Make Her Yours" },
  { id: "who-she-is", label: "Who She Is" },
  { id: "how-its-built", label: "How It's Built" },
  { id: "releases", label: "Releases" },
];

function Ember() {
  const [releases, setReleases] = useState([]);
  const [installer, setInstaller] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const navRef = useRef(null);

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

  // on mobile, scroll the nav so the active pill stays in view.
  useEffect(() => {
    if (!navRef.current) return;
    const activeLink = navRef.current.querySelector(
      `a[data-section="${activeSection}"]`
    );
    if (activeLink) {
      activeLink.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeSection]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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

      <nav className="ember-section-nav" ref={navRef}>
        <ul>
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                data-section={s.id}
                className={activeSection === s.id ? "active" : ""}
                onClick={(e) => handleNavClick(e, s.id)}
              >
                {s.label}
              </a>
            </li>
          ))}
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
              Most AI assistants are built around a single assumption: the
              conversation ends. You send a query, the system responds, and
              whatever happened between you disappears. That assumption shapes
              everything (what gets optimized, what gets ignored, and what kinds
              of failure are even considered possible).
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
              >
                Source on GitHub
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
            <img src={meetEmberShot} alt="Ember home screen with greeting 'Coffee first, Chastain?'" />
            <figcaption>
              "Coffee first, Chastain?" — One of Ember's time-of-day greetings,
              picked at random.
            </figcaption>
          </figure>
        </section>

        <section id="why-local-first" className="ember-section ember-row ember-row-flipped">
          <figure className="ember-figure ember-figure-stack">
            <img src={securityShot} alt="Ember security settings: PIN lock, vault, cloud API keys" />
            <img src={vaultShot} alt="Ember vault settings panel" />
          </figure>
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
          <figure className="ember-figure ember-figure-stack">
            <img src={featuresShot} alt="Ember feature settings: web search, vision, deviation engine" />
            <img src={memoryShot} alt="Ember memory settings panel" />
          </figure>
        </section>

        <section id="make-her-yours" className="ember-section ember-section-pair">
          <h2 className="ember-section-heading ember-heading-centered">
            Make Her Yours
          </h2>
          <div className="ember-pair">
            <figure className="ember-figure">
              <img src={appearanceShot} alt="Ember appearance settings: six themes including Ember, Midnight, Forest, Ocean, Bloom, Custom" />
            </figure>
            <figure className="ember-figure">
              <img src={generalShot} alt="Ember general settings: conversational style options Casual, Balanced, Thoughtful" />
            </figure>
          </div>
          <p className="ember-pair-caption">
            Six themes. Three conversational styles. Make her yours.
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
            <img src={aboutPanelShot} alt="Ember About panel" />
          </figure>
        </section>

        <section id="how-its-built" className="ember-section ember-section-wide">
          <h2 className="ember-section-heading">How It's Built</h2>
          <p>
            Ember is built by one person using a three-way collaboration:
            direction, architecture, and implementation handled as separate
            roles. Every change is read and approved before it ships. Every
            significant decision is documented before it is built.
          </p>
          <p>
            The code is open source under AGPL-3.0. The architecture is
            documented and public.
          </p>
          <p className="ember-text-link">
            <a
              href="https://github.com/niansahc/ember-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source on GitHub →
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
    </Container>
  );
}

export default Ember;
