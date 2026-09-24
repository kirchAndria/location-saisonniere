import { useEffect, useState } from "react";
import { heroConfig } from "./heroConfig";

const pad = (n) => String(n).padStart(2, "0");

// Un fichier "existe" s'il répond avec un vrai type image
// (le serveur de dev Vite renvoie sinon index.html avec un statut 200).
async function isImage(url) {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok && (res.headers.get("content-type") || "").startsWith("image/");
  } catch {
    return false;
  }
}

/**
 * Détecte les photos hero-01, hero-02… présentes dans /public/images/hero.
 * Retourne : null pendant la recherche, puis un tableau (vide si aucune photo).
 * Seules des requêtes HEAD légères sont faites : aucune image n'est téléchargée ici.
 */
export default function useHeroSlides() {
  const [slides, setSlides] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const { folder, prefix, extension, maxSlides, captions } = heroConfig;

    const numbers = Array.from({ length: maxSlides }, (_, i) => i + 1);

    Promise.all(
      numbers.map(async (n) => {
        const src = `${folder}/${prefix}${pad(n)}.${extension}`;
        return (await isImage(src)) ? { n, src, ...(captions[n] || {}) } : null;
      })
    ).then((found) => {
      if (!cancelled) setSlides(found.filter(Boolean));
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return slides;
}
