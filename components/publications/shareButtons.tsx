import React from "react";

interface ShareButtonsProps {
  slug: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ slug }) => {
  const shareUrl = `https://yourwebsite.com/publication/${slug}`;
  const title =
    "When does Self-Prediction help? Understanding Auxiliary Tasks in Reinforcement Learning";

  return (
    <div className="flex space-x-4 items-center">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition-colors"
        aria-label="Share on Twitter"
      >
        <i className="fab fa-twitter text-3xl"></i>
      </a>

      <a
        href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(shareUrl)}&t=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 transition-colors"
        aria-label="Share on Facebook"
      >
        <i className="fab fa-facebook text-3xl"></i>
      </a>

      <a
        href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl)}`}
        className="text-gray-600 hover:text-red-500 transition-colors"
        aria-label="Share via Email"
      >
        <i className="fas fa-envelope text-3xl"></i>
      </a>

      <a
        href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-700 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <i className="fab fa-linkedin text-3xl"></i>
      </a>
    </div>
  );
};

export default ShareButtons;
