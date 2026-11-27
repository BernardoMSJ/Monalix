"use client";

import React from "react";
import { formatMonalixCount, MONALIX_COLORS } from "@/lib/monalix-tokens";

export type ContributionKind = "reforco" | "novo_angulo" | "divergencia";

interface ContributionCounterProps {
  kind: ContributionKind;
  clicksCount: number;
  writtenCount: number;
  isActive?: boolean;
  onLightBackground?: boolean;
}

const KIND_META: Record<ContributionKind, { label: string; color: string }> = {
  reforco: { label: "Reforço", color: MONALIX_COLORS.reforco },
  novo_angulo: { label: "Novo Ângulo", color: MONALIX_COLORS.novoAngulo },
  divergencia: { label: "Divergência", color: MONALIX_COLORS.divergencia },
};

/**
 * Exibe:
 *   50 | 200
 *   Reforço
 * - Esquerda (cliques): fonte menor, peso normal
 * - Direita (escritas): na cor da contribuição, negrito, destaque maior
 */
export function ContributionCounter({
  kind,
  clicksCount,
  writtenCount,
  isActive = false,
  onLightBackground = false,
}: ContributionCounterProps) {
  const meta = KIND_META[kind];
  const neutralColor = onLightBackground
    ? MONALIX_COLORS.marinho
    : MONALIX_COLORS.branco;
  const accentColor = isActive || !onLightBackground ? meta.color : meta.color;

  return (
    <div className="mt-1 flex flex-col items-center leading-tight select-none">
      <div className="flex items-baseline gap-1">
        <span
          className="text-[11px] font-normal"
          style={{ color: neutralColor }}
        >
          {formatMonalixCount(clicksCount)}
        </span>
        <span
          className="text-[11px] font-normal opacity-80"
          style={{ color: neutralColor }}
        >
          |
        </span>
        <span
          className="text-[13px] font-bold"
          style={{ color: accentColor }}
        >
          {formatMonalixCount(writtenCount)}
        </span>
      </div>
      <span
        className="mt-0.5 text-[11px] font-bold"
        style={{ color: accentColor }}
      >
        {meta.label}
      </span>
    </div>
  );
}
