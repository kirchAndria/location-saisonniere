// Formatage des prix, partagé par toutes les pages destination
// (Ikopa garde sa propre copie dans Ikopa/format.js pour rester isolée).
const nf = new Intl.NumberFormat("fr-FR");

const symbols = { MGA: "\u00a0Ar", EUR: "\u00a0€" };

export function money(amount, currency = "MGA") {
  const formatted = nf.format(amount).replace(/[\u202f\u00a0]/g, "\u00a0");
  const symbol = symbols[currency] ?? `\u00a0${currency}`;
  return currency === "EUR" ? `${formatted}${symbol}` : `${formatted}${symbol}`;
}

// Accepte un objet ou un tableau de tarifs, renvoie des lignes affichables.
export function formatPrices(pricing) {
  if (!pricing) return [];

  return [].concat(pricing).map((p) => ({
    label: p.label ?? null,
    text: money(p.amount, p.currency),
    unit: p.unit ? `/ ${p.unit}` : p.duration ? `/ ${p.duration}` : "",
  }));
}

export const telHref = (n) => `tel:${n.replace(/[^\d+]/g, "")}`;
