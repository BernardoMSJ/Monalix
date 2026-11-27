export const MONALIX_COLORS = {
  reforco: "#12C98A",      // Verde — Reforço
  novoAngulo: "#3D8BFF",   // Azul — Novo Ângulo
  divergencia: "#FF6B5E",  // Coral — Divergência
  marinho: "#1E2340",      // Azul-marinho — fundo base / ícones sobre fundo claro
  dourado: "#E09D24",      // Dourado — marca / selo Pensador
  ametista: "#9147D8",     // Ametista — selo Instituição
  branco: "#FFFFFF",       // Branco — estado padrão sobre imagem / cliques
} as const;

export const CONTRIBUTION_MAX_CHARS = 600;

/**
 * Formata números acima de 1.000 no padrão do monaliX:
 * Ex.: 50 -> "50", 1200 -> "1,2 mil", 15000 -> "15 mil"
 */
export function formatMonalixCount(value: number): string {
  const safe = Math.max(0, Math.floor(value));
  if (safe <= 1000) {
    return String(safe);
  }
  const thousands = safe / 1000;
  const formatted = Number.isInteger(thousands)
    ? String(thousands)
    : thousands.toFixed(1).replace(".", ",");
  return `${formatted} mil`;
}
