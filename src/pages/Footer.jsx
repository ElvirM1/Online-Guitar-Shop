import { useTranslation } from 'react-i18next';
import React from 'react';

export default function Footer() {
  const { i18n } = useTranslation();

  const footerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    padding: "1.5rem",
    backgroundColor: "#222"
  };

  const buttonStyle = {
    backgroundColor: "#555",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  return (
    <footer style={footerStyle}>
      <button
        style={buttonStyle}
        onClick={() => i18n.changeLanguage('en')}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#FF6428"}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = "#555"}
      >
        EN
      </button>
      <button
        style={buttonStyle}
        onClick={() => i18n.changeLanguage('mk')}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#FF6428"}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = "#555"}
      >
        MK
      </button>
      <button
        style={buttonStyle}
        onClick={() => i18n.changeLanguage('al')}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = "#FF6428"}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = "#555"}
      >
        AL
      </button>
    </footer>
  );
}
