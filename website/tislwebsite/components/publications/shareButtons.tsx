import React from 'react';

interface ShareButtonsProps {
  slug: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ slug }) => {
  const shareUrl = `https://yourwebsite.com/publication/${slug}`;
  const title = 'When does Self-Prediction help? Understanding Auxiliary Tasks in Reinforcement Learning';

  return (
    <div className="share-box inline-block">
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn-twitter"
            aria-label="twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(shareUrl)}&t=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn-facebook"
            aria-label="facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>

          <a href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl)}`} className="share-btn-email">
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn-linkedin"
          >
            <i className="fab fa-linkedin"></i>
          </a>
    </div>
  );
};

export default ShareButtons;
