import { Mail, Linkedin, Github } from "lucide-react";
import { SOCIAL_LINKS } from "../../constants";
import "./Contacts.css";

const CONTACTS = [
  {
    icon: <Mail size={16} />,
    label: "Email",
    href: `mailto:${SOCIAL_LINKS.email}`,
    text: "My E-mail",
  },
  {
    icon: <Linkedin size={16} />,
    label: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    text: "My LinkedIn",
  },
  {
    icon: <Github size={16} />,
    label: "GitHub",
    href: SOCIAL_LINKS.github,
    text: "My GitHub",
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <h3 className="contacts__title">Contacts</h3>
      <p className="contacts__subtitle">Let's work together!</p>

      <div className="contacts__list">
        {CONTACTS.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            className="contacts__link"
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {contact.icon} {contact.text}
          </a>
        ))}
      </div>
    </section>
  );
}
