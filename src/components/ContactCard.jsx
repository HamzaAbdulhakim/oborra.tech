function ContactCard({ contact }) {
  const Icon = contact.icon;

  return (
    <a
      href={contact.link}
      className="contact-card"
      target="_blank"
      rel="noreferrer"
    >
      <div className="card-icon">
        <Icon />
      </div>

      <div className="contact-content">
        <h3 className="title">{contact.title}</h3>
        <p className="subtitle">{contact.value}</p>
      </div>
    </a>
  );
}

export default ContactCard;