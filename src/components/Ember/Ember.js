import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

// pulls the first meaningful paragraph from the release body markdown.
// skips the title line and any "Released:" datestamp at the top.
function getFirstParagraph(body) {
  if (!body) return "";
  const lines = body.split("\n").filter((line) => {
    const trimmed = line.trim();
    if (!trimmed) return false;
    if (trimmed.startsWith("#")) return false;
    if (trimmed.startsWith("Released:")) return false;
    if (trimmed.startsWith("---")) return false;
    return true;
  });
  // grab the first non-header line, cap at 200 chars
  const first = lines[0] || "";
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

function Ember() {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/niansahc/ember-2/releases")
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API returned " + res.status);
        return res.json();
      })
      .then((data) => {
        setReleases(data.slice(0, 5));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ paddingTop: "100px", paddingBottom: "50px" }}>
        <h1 className="project-heading">
          <strong className="orange">Ember-2</strong>
        </h1>
        <p
          style={{
            color: "white",
            fontSize: "1.2em",
            maxWidth: "700px",
            margin: "0 auto 40px",
          }}
        >
          A local-first personal intelligence system built for reasoning,
          memory, reflection, and long-term assistance.
        </p>

        <Row style={{ justifyContent: "center", marginBottom: "30px" }}>
          <Col md={6} style={{ textAlign: "center" }}>
            <a
              href="https://github.com/niansahc/ember-2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginRight: "12px" }}
            >
              Source on GitHub
            </a>
            <a
              href="https://github.com/niansahc/ember-2-installer/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Download Installer
            </a>
          </Col>
        </Row>

        <h2
          style={{
            color: "white",
            fontSize: "1.6em",
            fontWeight: 400,
            marginTop: "50px",
            marginBottom: "24px",
          }}
        >
          Recent Releases
        </h2>

        {loading && (
          <p style={{ color: "rgba(255,255,255,0.5)" }}>Loading releases...</p>
        )}

        {error && (
          <p style={{ color: "rgba(255,255,255,0.5)" }}>
            Could not load releases. Check the{" "}
            <a
              href="https://github.com/niansahc/ember-2/releases"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--imp-text-color)" }}
            >
              releases page
            </a>{" "}
            directly.
          </p>
        )}

        {!loading &&
          !error &&
          releases.map((release) => (
            <div
              key={release.id}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                padding: "20px 24px",
                marginBottom: "16px",
                maxWidth: "700px",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <h3
                  style={{
                    color: "white",
                    fontSize: "1.2em",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {release.name || release.tag_name}
                </h3>
                <span
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.85em",
                  }}
                >
                  {formatDate(release.published_at)}
                </span>
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.95em",
                  margin: "10px 0 12px",
                  lineHeight: "1.5",
                }}
              >
                {getFirstParagraph(release.body)}
              </p>
              <a
                href={release.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--imp-text-color)",
                  fontSize: "0.9em",
                }}
              >
                Full release notes
              </a>
            </div>
          ))}

        {!loading && !error && (
          <p style={{ marginTop: "24px" }}>
            <a
              href="https://github.com/niansahc/ember-2/releases"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9em" }}
            >
              View all releases on GitHub
            </a>
          </p>
        )}
      </Container>
    </Container>
  );
}

export default Ember;
