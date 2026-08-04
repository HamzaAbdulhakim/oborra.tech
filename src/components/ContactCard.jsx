function ContactCard({ contact }) {
  const Icon = contact.icon;

  return (
    <a
      href={contact.link}
      className="contact-card"
      target="_blank"
      rel="noreferrer"
    >
      <div className="contact-icon">
        <Icon />
      </div>

      <div className="contact-content">
        <h3>{contact.title}</h3>
        <p>{contact.value}</p>
      </div>
    </a>
  );
}

export default ContactCard;