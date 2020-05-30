/** @format */

import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Contact2() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    axios.post('/api/form', data);
  };

  return (
    <div className='form-class'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Imię:</label>
        <input
          name='firstName'
          placeholder='Imię'
          ref={register({ required: true, minLength: 3, maxLength: 20 })}
        />
        {errors.firstName && errors.firstName.type === 'required' && (
          <p>to pole jest obowiązkowe</p>
        )}
        {errors.firstName && errors.firstName.type === 'minLength' && (
          <p>to pole musi zawierać minimum 3 znaki</p>
        )}
        {errors.firstName && errors.firstName.type === 'maxLength' && (
          <p>to pole może zawierać maksymalnie 20 znaków</p>
        )}
        <label>Email:</label>
        <input
          name='email'
          placeholder='adres@email.com'
          ref={register({
            required: 'Required',

            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'invalid email address',
            },
          })}
        />
        {errors.email && errors.email.type === 'required' && (
          <p>to pole jest obowiązkowe</p>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <p>to nie jest adres email</p>
        )}
        <label>Wiadomość:</label>
        <textarea
          name='message'
          placeholder='Tu wpisz swoją wiadomość'
          ref={register({ required: 'Required', minLength: 18, maxLength: 99 })}
        />
        {errors.message && errors.message.type === 'required' && (
          <p>to pole jest obowiązkowe</p>
        )}
        {errors.message && errors.message.type === 'minLength' && (
          <p>to pole musi zawierać minimum 18 znaków</p>
        )}
        <input type='submit' />
      </form>
    </div>
  );
}
export default Contact2;
