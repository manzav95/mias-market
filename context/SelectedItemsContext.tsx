"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type PaymentPreference =
  | "Venmo"
  | "Apple Pay"
  | "Zelle"
  | "Cash in person";

export type SelectedLine = {
  id: string;
  name: string;
  price: string;
  quantity: number;
  note: string;
};

type SelectedItemsContextValue = {
  items: SelectedLine[];
  addOrIncrement: (payload: {
    id: string;
    name: string;
    price: string;
  }) => void;
  removeLine: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  setNote: (id: string, note: string) => void;
  clear: () => void;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  toggleDrawer: () => void;
  paymentPreference: PaymentPreference;
  setPaymentPreference: (p: PaymentPreference) => void;
  totalCount: number;
};

const SelectedItemsContext = createContext<SelectedItemsContextValue | null>(
  null,
);

export function SelectedItemsProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<SelectedLine[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [paymentPreference, setPaymentPreference] =
    useState<PaymentPreference>("Venmo");

  const addOrIncrement = useCallback(
    (payload: { id: string; name: string; price: string }) => {
      setItems((prev) => {
        const idx = prev.findIndex((l) => l.id === payload.id);
        if (idx === -1) {
          return [
            ...prev,
            {
              id: payload.id,
              name: payload.name,
              price: payload.price,
              quantity: 1,
              note: "",
            },
          ];
        }
        const next = [...prev];
        next[idx] = {
          ...next[idx],
          quantity: next[idx].quantity + 1,
        };
        return next;
      });
      setDrawerOpen(true);
    },
    [],
  );

  const removeLine = useCallback((id: string) => {
    setItems((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    const q = Math.max(1, Math.min(99, Math.floor(quantity)));
    setItems((prev) =>
      prev.map((l) => (l.id === id ? { ...l, quantity: q } : l)),
    );
  }, []);

  const setNote = useCallback((id: string, note: string) => {
    setItems((prev) =>
      prev.map((l) => (l.id === id ? { ...l, note } : l)),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const toggleDrawer = useCallback(
    () => setDrawerOpen((o) => !o),
    [],
  );

  const totalCount = useMemo(
    () => items.reduce((n, l) => n + l.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      addOrIncrement,
      removeLine,
      setQuantity,
      setNote,
      clear,
      drawerOpen,
      setDrawerOpen,
      toggleDrawer,
      paymentPreference,
      setPaymentPreference,
      totalCount,
    }),
    [
      items,
      addOrIncrement,
      removeLine,
      setQuantity,
      setNote,
      clear,
      drawerOpen,
      toggleDrawer,
      paymentPreference,
      totalCount,
    ],
  );

  return (
    <SelectedItemsContext.Provider value={value}>
      {children}
    </SelectedItemsContext.Provider>
  );
}

export function useSelectedItems() {
  const ctx = useContext(SelectedItemsContext);
  if (!ctx) {
    throw new Error("useSelectedItems must be used within SelectedItemsProvider");
  }
  return ctx;
}
