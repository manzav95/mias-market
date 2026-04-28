import { ORDER_EMAIL } from "@/lib/constants";

export type FaqItem = {
  id: string;
  q: string;
  a: string;
};

/** Replace placeholder answers (see `PLACEHOLDER`) with your own copy in this file. */
const PLACEHOLDER =
  "Add your answer in data/faq.ts (replace this paragraph).";

export const faqs: FaqItem[] = [
  {
    id: "order-how",
    q: "How do I order?",
    a: "Browse the Shop page or the category cards on the home page, then tap Select Items on anything you want. Open Selected Items in the header to review your list, adjust quantities, and add notes for colors or custom details. When you press Email My Order Request, your email app opens with your full list, prices, and an estimated subtotal so you can send it in one tap.",
  },
  {
    id: "pickup-shipping",
    q: "Do you ship? How do I get my order?",
    a: "We do not offer shipping right now, orders are for local pickup only. In your email, tell us what general area works for you and a couple of days and times that are best. We will reply to confirm a pickup plan and any details needed to keep it smooth and safe.",
  },
  {
    id: "payment-methods",
    q: "What payment methods do you accept?",
    a: "We accept Venmo, Apple Pay, Zelle, and cash for local pickup. After you email your request, we will reply to confirm what is available, the total, and the best way to pay. If you have a preferred method, include it in your message so we can confirm the details quickly.",
  },
  {
    id: "handmade",
    q: "Are items really handmade?",
    a: "Yes. Everything is handmade in small batches or made to order, depending on the item. Because each piece is made by hand, you might see tiny differences from one item to the next, that is part of what makes them special. If you have a specific look in mind, add a note in your order email and we will do our best to match it.",
  },
  {
    id: "custom",
    q: "Can I request custom items?",
    a: "Yes, many items can be customized. You can request colors, themes, initials, charm styles, or small changes like different bead mixes or bouquet colors. Add your request in the Notes box for each selected item, or describe it in the email, and we will reply to confirm what is possible and the price if anything changes.",
  },
  {
    id: "contact",
    q: "How do I contact you?",
    a: `Email is the best way to reach us at ${ORDER_EMAIL}. You can use the Contact page or the Email My Order Request button from Selected Items. We read every message and reply as soon as we can.`,
  },
  {
    id: "cat-hair-claws",
    q: "What should I know about hair claw clips?",
    a: "Hair claw clips come in different sizes, so the best choice depends on hair thickness and style. Small claws are great for half-up styles, bangs, and smaller sections, and big claws hold more hair for full twists and thicker hair. If you want a specific color, glitter, or theme, add a note and we will confirm what is available.",
  },
  {
    id: "cat-pipe-animals",
    q: "What are pipe cleaner animals?",
    a: "Pipe cleaner animals are tiny handmade fuzzy friends made from soft craft pipe cleaners. They are cute for desks, shelves, and gifts, and they can often be made in different colors or as different animals. These are delicate handmade items, so they are best handled gently and are not recommended for very young children.",
  },
  {
    id: "cat-clay",
    q: "What are clay items?",
    a: "Clay items include small charms, trinkets, and cute accessories made from craft clay. Some pieces are glossy and smooth, and others have textures or tiny details. Clay can chip if dropped, so we recommend gentle use and storing items in a small pouch or safe spot when not in use.",
  },
  {
    id: "cat-bouquet",
    q: "What are pipe cleaner bouquets?",
    a: "Pipe cleaner bouquets are handmade mini flower bundles made with pipe cleaners and ribbon. They are made for decorating, gifting, and smiling, and they last much longer than real flowers. If you want certain colors, a favorite flower style, or a themed bouquet, include your ideas in the notes and we will reply with options.",
  },
  {
    id: "cat-keychains",
    q: "What are clay keychains?",
    a: "Clay keychains are small handmade clay charms attached to a key ring. They are perfect for backpacks, keys, and zipper pulls. If you want a specific color, letter, or charm style, add a note in your order request and we will confirm what we can make.",
  },
  {
    id: "cat-squishies",
    q: "What are balloon squishies?",
    a: "Balloon squishies are tiny soft squeeze toys made with small balloons and a soft filling. They are fun for fidgeting and party favors. Like any balloon item, they should be kept away from sharp objects and supervised around small kids.",
  },
  {
    id: "cat-bracelets",
    q: "What should I know about bracelets?",
    a: "Bracelets are handmade and can vary a little in bead mix and sizing. If you want certain colors, a name, or a theme, add details in the notes. If you need a smaller or larger fit, tell us in your email and we will confirm what sizing is possible.",
  },
  {
    id: "cat-bedazzled",
    q: "What are bedazzled items?",
    a: "Bedazzled items are sparkly pieces decorated by hand with rhinestones and gems. They shine a lot in the light and make great gifts. For custom bedazzled items like phone cases, include your phone model and your color theme in the notes so we can confirm the exact fit and design.",
  },
];
