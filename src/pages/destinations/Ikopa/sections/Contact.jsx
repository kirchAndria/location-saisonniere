import { contactBlocks, contactEmail } from "../ikopaContent";
import { telHref } from "../format";

function Contact({ data }) {
  return (
    <section id="contact" className="ik-section ik-section--tint">
      <div className="ik-contact">
        <header className="ik-head ik-head--tight">
          <span className="ik-eyebrow">Localisation &amp; contact</span>
          <h2>
            Anosizato Est,
            <br />
            <em>Antananarivo</em>.
          </h2>
          <p>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
        </header>

        <div className="ik-contact__blocks">
          {contactBlocks.map((block) => (
            <div key={block.key} className="ik-contact__block">
              <h3>{block.label}</h3>
              <p>{block.hint}</p>

              {(data.contacts[block.key] || []).map((number) => (
                <a key={number} href={telHref(number)}>
                  {number}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
