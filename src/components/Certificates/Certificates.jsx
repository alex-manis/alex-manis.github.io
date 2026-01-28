import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { CERTIFICATES, DEFAULT_VIEWPORT } from "../../constants";
import "./Certificates.css";

export default function Certificates() {
  return (
    <section id="certificates" className="section certificates">
      <h3 className="section__title">Licenses & Certifications</h3>

      <div className="certificates__grid">
        {CERTIFICATES.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={DEFAULT_VIEWPORT}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="certificates__card"
          >
            <div className="certificates__icon">
              <Award size={32} />
            </div>
            <div className="certificates__content">
              <h4 className="certificates__card-title">{cert.title}</h4>
              <p className="certificates__issuer">{cert.issuer}</p>
              <p className="certificates__date">{cert.date}</p>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="certificates__link"
              >
                View Credential <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
