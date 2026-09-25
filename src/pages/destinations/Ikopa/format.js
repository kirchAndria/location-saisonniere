const nf = new Intl.NumberFormat("fr-FR");

// 250000 -> "250 000 Ar" (espace insécable)
export const money = (n) => `${nf.format(n).replace(/[\u202f\u00a0]/g, "\u00a0")}\u00a0Ar`;

// Accepte un objet ou un tableau de tarifs, renvoie des lignes affichables.
export function formatPrices(pricing) {
  if (!pricing) return [];

  return [].concat(pricing).map((p) => ({
    label: p.label ?? null,
    text: money(p.amount),
    unit: p.unit ? `/ ${p.unit}` : p.duration ? `/ ${p.duration}` : "",
  }));
}

export const telHref = (n) => `tel:${n.replace(/[^\d+]/g, "")}`;
