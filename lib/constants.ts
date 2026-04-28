/**
 * Mia’s Mini Market — site configuration
 * Edit these values for your live business details.
 */

/** Order + contact inquiries go here (mailto recipient). */
export const ORDER_EMAIL = "dahliazavala1@gmail.com";

export const SITE_NAME = "Mia’s Mini Market";

/**
 * Optional PNG/SVG in `public/images/` (e.g. `"mia-logo.png"`).
 * Leave empty to use the built-in text logo.
 */
export const LOGO_IMAGE_PATH = "mia-logo.png";

/** Shown on the site — replace with your real handles / numbers. */
export const PAYMENT_DETAILS = {
  venmo: "@dahliazavala",
  applePay: "9253241849",
  zelle: "9257279138",
  cashNote:
    "Cash is welcome. Please message us to arrange a meetup!",
} as const;
