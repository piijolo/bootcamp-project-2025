import React from "react";

export default function Contact() {
  return (
    <main className="contact-page">
      <h1>Contact Me</h1>
      <p>Feel free to reach out to me through the form below.</p>

      <form
        id="contact-form"
        action="mailto:piolosantiago15@outlook.com"
        method="post"
        encType="text/plain"
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
        />
        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <br />
        <br />

        <label htmlFor="message">Message:</label>
        <br />
        <textarea
          id="message"
          name="message"
          rows={4}
          cols={50}
          placeholder="Enter your message here"
        />
        <br />
        <br />

        <input type="submit" value="Send" />
        <input type="reset" value="Reset" />
      </form>
    </main>
  );
}