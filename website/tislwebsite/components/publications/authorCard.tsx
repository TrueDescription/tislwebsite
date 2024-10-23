import React from "react";

interface AuthorCardProps {
  name: string;
  title: string;
  bio?: string;
  avatar: string;
  links: {
    email?: string;
    twitter?: string;
    scholar?: string;
    github?: string;
  };
}

const AuthorCard: React.FC<AuthorCardProps> = ({
  name,
  title,
  bio,
  avatar,
  links,
}) => {
  return (
    <div className="media author-card content-widget-hr">
      <a href="#">
        <img className="avatar mr-3 avatar-circle" src={avatar} alt={name} />
      </a>
      <div className="media-body">
        <h5 className="card-title">
          <a href="#">{name}</a>
        </h5>
        <h6 className="card-subtitle">{title}</h6>
        {bio && <p className="card-text">{bio}</p>}
        {links.email && (
          <a href={links.email}>
            <i className="fas fa-envelope"></i>
          </a>
        )}
        {links.twitter && (
          <a href={links.twitter} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        )}
        {links.scholar && (
          <a href={links.scholar} target="_blank" rel="noopener noreferrer">
            <i className="ai ai-google-scholar"></i>
          </a>
        )}
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default AuthorCard;
