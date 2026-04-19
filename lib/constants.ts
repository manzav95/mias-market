/**
 * Mia’s Mini Market — site configuration
 * Edit these values for your live business details.
 */

/** Order + contact inquiries go here (mailto recipient). */
export const ORDER_EMAIL = "hello@miasminimarket.com";

export const SITE_NAME = "Mia’s Mini Market";

/**
 * Optional PNG/SVG in `public/images/` (e.g. `"mia-logo.png"`).
 * Leave empty to use the built-in text logo.
 */
export const LOGO_IMAGE_PATH = "mia-logo.png";

/** Shown on the site — replace with your real handles / numbers. */
export const PAYMENT_DETAILS = {
  venmo: "@YourVenmoUsername",
  applePay: "your.email@example.com or (555) 555-5555",
  zelle: "your.email@example.com or (555) 555-5555",
  cashNote:
    "Cash is welcome for local in-person pickup — message us to arrange a meetup!",
} as const;
