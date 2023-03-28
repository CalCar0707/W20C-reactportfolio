import React, { useState } from 'react';

export default function Form () {
    const [formStatus, setFormStatus] = useState('Send');

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conForm = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conForm)
  }
  return (
    <div className="container">
      <h2>Contact the Developer</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="input-form">
          <label className="form-label" htmlFor="name">
            Name:   
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="input-form">
          <label className="form-label" htmlFor="email">
            Email:   
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="input-form">
          <label className="form-label" htmlFor="message">
            Message:   
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}