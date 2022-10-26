import React from 'react';
import Seo from '../components/Seo';
const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const url = `${process.env.STRAPI_API_URL}/api/emails`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: formData,
      }),
    });

    console.log('resp', await response.json());
  };

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Seo title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </>
  );
};

export default Contact;
