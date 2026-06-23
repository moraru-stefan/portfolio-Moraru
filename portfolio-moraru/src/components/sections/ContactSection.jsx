import useReveal from "../../hooks/useReveal";

export default function ContactSection({ contact }) {
  const [contactRef, contactVisible] = useReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name")?.toString().trim();
    const email = fd.get("email")?.toString().trim();
    const subject = fd.get("subject")?.toString().trim();
    const message = fd.get("message")?.toString().trim();

    const to = "moraru495@gmail.com";
    const fullSubject = `[Portfolio] ${subject || contact.form.defaultSubject}`;
    const body =
      `${contact.form.mailName}: ${name}\n` +
      `${contact.form.mailEmail}: ${email}\n\n` +
      `${contact.form.mailMessage}:\n${message}\n`;

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(fullSubject)}&body=${encodeURIComponent(body)}`;
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-5">
      <div
        ref={contactRef}
        className={`container reveal ${contactVisible ? "is-visible" : ""}`}
      >
        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-5">
            <h2 className="h3 fw-bold mb-3">{contact.title}</h2>
            <p className="text-muted mb-4">{contact.lead}</p>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-outline-light" href="mailto:moraru495@gmail.com">
                <i className="fa-solid fa-envelope me-2"></i>Email
              </a>
              <a
                className="btn btn-outline-light"
                href="https://www.linkedin.com/in/stefan-moraru-6230641b8/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin me-2"></i>LinkedIn
              </a>
              <a
                className="btn btn-outline-light"
                href="https://github.com/moraru-stefan"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github me-2"></i>GitHub
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="contact-card p-4 p-md-5 rounded-4 border shadow-sm h-100">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label">{contact.form.name}</label>
                    <input
                      className="form-control"
                      name="name"
                      type="text"
                      placeholder={contact.form.namePlaceholder}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label">{contact.form.email}</label>
                    <input
                      className="form-control"
                      name="email"
                      type="email"
                      placeholder={contact.form.emailPlaceholder}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">{contact.form.subject}</label>
                    <input
                      className="form-control"
                      name="subject"
                      type="text"
                      placeholder={contact.form.subjectPlaceholder}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">{contact.form.message}</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder={contact.form.messagePlaceholder}
                      required
                    />
                  </div>
                  <div className="col-12 d-flex flex-wrap gap-2 align-items-center">
                    <button className="btn btn-primary" type="submit">
                      <i className="fa-solid fa-paper-plane me-2"></i>
                      {contact.send}
                    </button>
                    <span className="contact-hint text-muted small">{contact.hint}</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
