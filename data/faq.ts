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
    a: "Browse the Shop page or home categories, tap Select Items, then open Selected Items in the header. When you are ready, press Email My Order Request — your mail app opens with your list.",
  },
  {
    id: "pickup-shipping",
    q: "Do you ship? How do I get my order?",
    a: "We do not offer shipping — local pickup only. When you email your order, include your preferred pickup area. We will reply with what is possible.",
  },
  {
    id: "payment-methods",
    q: "What payment methods do you accept?",
    a: "Venmo, Apple Pay, Zelle, and cash in person for local meets. After we confirm your order by email, we will share the right payment details for the method you choose.",
  },
  {
    id: "handmade",
    q: "Are items really handmade?",
    a: PLACEHOLDER,
  },
  {
    id: "custom",
    q: "Can I request custom items?",
    a: PLACEHOLDER,
  },
  {
    id: "contact",
    q: "How do I contact you?",
    a: `The best way to reach us is by email at ${ORDER_EMAIL}.`,
  },
  {
    id: "cat-hair-claws",
    q: "What should I know about hair claw clips?",
    a: PLACEHOLDER,
  },
  {
    id: "cat-pipe-animals",
    q: "What are pipe cleaner animals?",
    a: PLACEHOLDER,
  },
  {
    id: "cat-clay",
    q: "What are clay items?",
    a: PLACEHOLDER,
  },
  {
    id: "cat-bouquet",
    q: "What are pipe cleaner bouquets?",
    a: PLACEHOLDER,
  },
  {
    id: "cat-keychains",
    q: "What are clay keychains?",
    a: PLACEHOLDER,
  },
  {
    id: "cat-squishies",
    q: "What are balloon squishies?",
    a: PLACEHOLDER,
  },
  {
    id: "cat-bracelets",
    q: "What should I know about bracelets?",
    a: PLACEHOLDER,
  },
  {
    id: "cat-bedazzled",
    q: "What are bedazzled items?",
    a: PLACEHOLDER,
  },
];
