import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  // external links (github, hosted demos, etc) need a real <a> tag
  // because react-router's <Link> tries to handle them as internal routes
  const isExternal =
    typeof props.link === "string" && /^https?:\/\//.test(props.link);

  const buttonLabel = (
    <>
      <BiLinkExternal /> &nbsp;
      {props.isBlog ? "View Blog" : "View Project"}
    </>
  );

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* if a card doesn't have a link yet (wip projects), just skip the button */}
        {props.link && isExternal && (
          <a
            className="btn btn-primary"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonLabel}
          </a>
        )}
        {props.link && !isExternal && (
          <Link className="btn btn-primary" to={props.link}>
            {buttonLabel}
          </Link>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
