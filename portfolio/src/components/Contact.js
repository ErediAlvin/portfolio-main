import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <h1>Get in Touch</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}