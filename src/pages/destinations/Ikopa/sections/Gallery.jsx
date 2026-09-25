import { ikopaImages } from "../ikopaContent";

function Gallery() {
  return (
    <section className="ik-section">
      <header className="ik-head">
        <span className="ik-eyebrow">Galerie</span>
        <h2>
          Le lieu
          <br />
          en <em>images</em>.
        </h2>
      </header>

      <div className="ik-gallery">
        {ikopaImages.gallery.map((image) => (
          <figure
            key={image.src + image.alt}
            className="ik-gallery__item"
            style={{ "--cols": image.cols, "--rows": image.rows }}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
