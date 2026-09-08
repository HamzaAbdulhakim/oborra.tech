import React from "react";
import "./EditorialHeroCard.css";
import { FaFacebook, FaTelegram } from "react-icons/fa";
/**
 * EditorialHeroCard
 * A premium RTL editorial hero card with portrait image, gradient overlay,
 * quote block, and gold-accent CTA. Designed for Arabic content.
 */
function EditorialHeroCard({
  imageUrl,
  imageCaption,
  label,
  headline,
  body,
  quote,
  quoteSource,
  ctaText,
  ctaHref = "#",
}) {
  return (
    <article className="editorial-card">
      {/* Image Side */}
      <div className="editorial-card__image-wrap">
        <img
          className="editorial-card__image"
          src={imageUrl}
          alt={headline}
          loading="lazy"
        />
        {imageCaption && (
          <span className="editorial-card__image-caption">{imageCaption}</span>
        )}
      </div>

      {/* Content Side */}
      <div className="editorial-card__content">
        {label && <span className="editorial-card__label">{label}</span>}

        <h2 className="editorial-card__headline">{headline}</h2>

        {body && <p className="editorial-card__body">{body}</p>}

        {quote && (
          <blockquote className="editorial-card__quote">
            <p className="editorial-card__quote-text">{quote}</p>
            {quoteSource && (
              <cite className="editorial-card__quote-source">
                {quoteSource}
              </cite>
            )}
          </blockquote>
        )}
{/* 
        <a href={ctaHref} className="editorial-card__cta">
          <span>{ctaText}</span>
          <svg
            className="editorial-card__cta-arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
        </a>
*/}
        <div className="social-link">
  <a
    href="https://www.facebook.com/hamza.abdulhakim"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <i className="card-icon">
      <FaFacebook />
    </i>
  </a>

   <a
   href="https://t.me/ibnuAbdi120"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Telegram"
 >
   <i className="card-icon">
     <FaTelegram />
   </i>
 </a>
</div>
      </div>
    </article>
  );
}

export default EditorialHeroCard;
