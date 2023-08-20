// this page's styling is from index.css
import React, { useState } from 'react';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';



const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formValid = true;
    let newErrors = { ...errors };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      formValid = false;
    } else {
      newErrors.name = '';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      formValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      formValid = false;
    } else {
      newErrors.email = '';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      formValid = false;
    } else {
      newErrors.message = '';
    }

    setErrors(newErrors);
    return formValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Sent form data to the server or perform other actions
      console.log(formData);
    } else {
      // Display error messages or take other UI actions
      console.log(errors);
    }
  };

  return (
    <>
    <Header />

    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          onBlur={validateForm}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={validateForm}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          onBlur={validateForm}
        />
        {errors.message && <p>{errors.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
    
    <Footer />
    </>
  );

  
};

export default ContactForm;
