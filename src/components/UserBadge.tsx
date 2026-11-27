"use client";

import React from "react";
import { MONALIX_COLORS } from "@/lib/monalix-tokens";

export type BadgeType = "thinker" | "institution";

interface UserBadgeProps {
  type: BadgeType;
  size?: 16 | 18 | 20;
  className?: string;
}

/**
 * Selos oficiais do monaliX: roseta de 6 lobos arredondados.
 * - Pensador: #E09D24 com estrela branca
 * - Instituição: #9147D8 com visto/check branco
 */
export function UserBadge({ type, size = 18, className = "" }: UserBadgeProps) {
  const isInstitution = type === "institution";
  const fill = isInstitution ? MONALIX_COLORS.ametista : MONALIX_COLORS.dourado;
  const label = isInstitution ? "Instituição verificada" : "Selo Pensador";

  return (
    <span
      title={label}
      aria-label={label}
      className={`ml-1 inline-flex shrink-0 items-center justify-center align-middle ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        role="img"
        aria-hidden="true"
      >
        <path
          fill={fill}
          d="M32 4c4.3 0 7.7 3.2 11.4 5.3 4.1 2.4 8.6 1.8 11.3 5.5 2.7 3.7 1.1 8.1 2.5 12.5 1.4 4.4 5.2 7.2 5.2 11.9 0 4.7-3.8 7.5-5.2 11.9-1.4 4.4.2 8.8-2.5 12.5-2.7 3.7-7.2 3.1-11.3 5.5C39.7 56.8 36.3 60 32 60c-4.3 0-7.7-3.2-11.4-5.3-4.1-2.4-8.6-1.8-11.3-5.5-2.7-3.7-1.1-8.1-2.5-12.5C5.4 32.3 1.6 29.5 1.6 24.8c0-4.7 3.8-7.5 5.2-11.9 1.4-4.4-.2-8.8 2.5-12.5 2.7-3.7 7.2-3.1 11.3-5.5C24.3 1.2 27.7 4 32 4z"
          transform="translate(0, 2) scale(1, 0.94)"
        />
        {isInstitution ? (
          <path
            d="M21 33.5L28.5 41L44 24.5"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            fill="#FFFFFF"
            d="M32 17.5l4.3 8.8 9.7 1.4-7 6.8 1.7 9.6L32 39.1l-8.7 4.5 1.7-9.6-7-6.8 9.7-1.4 4.3-8.8z"
          />
        )}
      </svg>
    </span>
  );
}
