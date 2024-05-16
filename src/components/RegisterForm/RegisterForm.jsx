'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import RadioButtons from '@/components/RadioButtons';

import schema from './schema';

const RegisterForm = ({ eventId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ eventId, ...data }),
    });

    if (response.ok) {
      console.log({ eventId, ...data });
      console.log('Form submitted successfully');
      reset();
    } else {
      console.log('Error submitting form');
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col relative">
        <label htmlFor="fullName">Full Name</label>

        <input className="border" {...register('fullName')} />

        <p className="field-error">{errors.fullName?.message}</p>
      </div>

      <div className="flex flex-col relative">
        <label htmlFor="email">Email</label>

        <input className="border" {...register('email')} />

        <p className="field-error">{errors.email?.message}</p>
      </div>

      <div className="flex flex-col relative">
        <label htmlFor="dateOfBirth">Date of birth</label>

        <input className="border" {...register('dateOfBirth')} />

        <p className="field-error">{errors.dateOfBirth?.message}</p>
      </div>

      <RadioButtons register={register} errors={errors} />

      <button className="mx-auto flex border py-1 px-4 anim-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
