import './Contacts.css'

const contacts = [
  { icon: '📧', label: 'Email', href: 'mailto:example@mail.com', text: 'example@mail.com' },
  { icon: '🔗', label: 'LinkedIn', href: '#', text: 'LinkedIn' },
  { icon: '🐙', label: 'GitHub', href: '#', text: 'GitHub' },
  { icon: '✈️', label: 'Telegram', href: '#', text: 'Telegram' },
]

export default function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <h3 className="contacts-title">Contacts</h3>
      <p className="contacts-subtitle">Let's work together</p>

      <div className="contacts-list">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            className="contact-link"
            target={contact.href.startsWith('http') || contact.href.startsWith('mailto') ? '_blank' : undefined}
            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {contact.icon} {contact.text}
          </a>
        ))}
      </div>
    </section>
  )
}

