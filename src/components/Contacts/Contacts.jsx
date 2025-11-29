import { Mail, Linkedin, Github } from "lucide-react";
import "./Contacts.css";

const contacts = [
  {
    icon: <Mail size={16} />,
    label: "Email",
    href: "mailto:alex.manis@outlook.com",
    text: "My E-mail",
  },
  {
    icon: <Linkedin size={16} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alex-manis/",
    text: "My LinkedIn",
  },
  {
    icon: <Github size={16} />,
    label: "GitHub",
    href: "https://github.com/alex-manis",
    text: "My GitHub",
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <h3 className="contacts-title">Contacts</h3>
      <p className="contacts-subtitle">Let's work together!</p>

      <div className="contacts-list">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            className="contact-link"
            target={
              contact.href.startsWith("http") ||
              contact.href.startsWith("mailto")
                ? "_blank"
                : undefined
            }
            rel={
              contact.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
          >
            {contact.icon} {contact.text}
          </a>
        ))}
      </div>
    </section>
  );
}
