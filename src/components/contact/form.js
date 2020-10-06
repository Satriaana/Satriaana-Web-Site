import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
const templateId = process.env.REACT_APP_YOUR_CONTACT_TEMPLATE_ID;
const userId = process.env.REACT_APP_YOUR_USER_ID;

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();

    emailjs.init(userId);
    emailjs.sendForm(serviceId, templateId, e.target).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error);
      },
    );

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="form">
      <div className="col-md-8" style={{ textAlign: 'start' }}>
        <h1 style={{ marginBottom: '30px' }}>Reach out to us</h1>
      </div>
      <form onSubmit={handleContactSubmit}>
        <input
          required
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          required
          name="message"
          id="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="col-md-3" style={{ alignSelf: 'flex-end' }}>
          <button
            class="btn btn-primary"
            style={{ width: '100px', height: '40px' }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
