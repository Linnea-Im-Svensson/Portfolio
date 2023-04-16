import { useEffect, useState } from 'react';
import Btn from './btn';
import { sendContactForm } from '../../lib/api';

export default function ContactForm() {
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showmessage, setShowMessage] = useState(false);

  const handleSubmit = async () => {
    await sendContactForm(formInfo);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 4000);
    setFormInfo({ ...formInfo, name: '', email: '', message: '' });
  };

  return (
    <>
      <div
        className={`fixed top-20 rounded-lg p-4 bg-teal-800 ${
          showmessage ? 'block' : 'hidden'
        }`}
      >
        Thank you for contacting me!
      </div>
      <form
        className='flex flex-col gap-6 px-6 py-8 rounded-xl md:w-1/3 w-full h-fit'
        onSubmit={(e) => (handleSubmit(), e.preventDefault())}
      >
        <h1 className='text-indigo-200 text-3xl font-semibold'>Contact me</h1>
        <div className='flex flex-col'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            required
            className='bg-transparent border-2 rounded-lg p-2'
            value={formInfo.name}
            onChange={(e) => setFormInfo({ ...formInfo, name: e.target.value })}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='name'>Email:</label>
          <input
            type='email'
            id='email'
            required
            className='bg-transparent border-2 rounded-lg p-2'
            value={formInfo.email}
            onChange={(e) =>
              setFormInfo({ ...formInfo, email: e.target.value })
            }
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='name'>Message:</label>
          <textarea
            id='message'
            required
            className='bg-transparent border-2 rounded-lg md:h-96 h-60 p-2'
            value={formInfo.message}
            onChange={(e) =>
              setFormInfo({ ...formInfo, message: e.target.value })
            }
          />
        </div>
        <div className='m-auto'>
          <Btn style='secondary'>Submit</Btn>
        </div>
      </form>
    </>
  );
}
