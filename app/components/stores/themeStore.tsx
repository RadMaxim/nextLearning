"use client";

import { create } from "zustand";

type ThemeState = {
    mode: "light" | "dark";
    toggleTheme: () => void;
    hydrate: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
    mode: "light",

    hydrate: () => {
        if (typeof window === "undefined") return;
        const saved = localStorage.getItem("theme");
        if (saved === "light" || saved === "dark") {
            set({ mode: saved });
        }
    },

    toggleTheme: () =>
        set((state) => {
            const next = state.mode === "light" ? "dark" : "light";

            if (typeof window !== "undefined") {
                localStorage.setItem("theme", next);
            }

            return { mode: next };
        }),
}));
