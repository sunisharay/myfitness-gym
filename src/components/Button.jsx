import { ArrowUpRight } from 'lucide-react';
import { handleAnchor } from '../utils/scroll';

/**
 * Button / link with a hover sweep and a sliding arrow.
 * - href="#section" → smooth in-page scroll (onClick runs first).
 * - href="https://…" → opens in a new tab.
 * - no href → real <button>.
 */
export default function Button({
  href,
  onClick,
  variant = 'gold', // 'gold' | 'outline' | 'dark'
  icon: Icon = ArrowUpRight,
  type,
  className = '',
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim();
  const content = (
    <>
      <span className="btn__label">{children}</span>
      {Icon && (
        <span className="btn__icon" aria-hidden="true">
          <Icon size={18} strokeWidth={2} />
        </span>
      )}
    </>
  );

  if (href && href.startsWith('#')) {
    return (
      <a
        className={classes}
        href={href}
        onClick={(e) => handleAnchor(e, href.slice(1), onClick)}
        {...rest}
      >
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type || 'button'} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
