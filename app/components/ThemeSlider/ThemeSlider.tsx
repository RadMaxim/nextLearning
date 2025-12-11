// app/components/ThemeSlider.tsx
"use client";
import React from "react";
import {useThemeStore} from "@/app/components/stores/themeStore";

export default function ThemeSlider() {
    const theme = useThemeStore((t)=>t.mode);
    const toggleTheme = useThemeStore((t)=>t.toggleTheme);

    const checked = theme === "dark";

    return (
        <label style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
            userSelect: "none"
        }}>
            <span style={{ fontSize: 12 }}>{checked ? "Dark" : "Light"}</span>
            <input
                type="checkbox"
                checked={checked}
                onChange={toggleTheme}
                style={{ display: "none" }}
                aria-label="Toggle theme"
            />
            <span
                style={{
                    width: 44,
                    height: 24,
                    background: checked ? "var(--accent)" : "#cbd5e1",
                    borderRadius: 999,
                    position: "relative",
                    transition: "background 0.2s ease"
                }}
            >
        <span
            style={{
                position: "absolute",
                top: 2,
                left: checked ? 22 : 2,
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "var(--bg)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
                transition: "left 0.2s ease"
            }}
        />
      </span>
        </label>
    );
}
