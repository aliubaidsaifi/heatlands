'use client';

import { useState } from 'react';
import Reveal from '../ui/Reveal';

const projectTypes = [
  'New Build',
  'Extension',
  'Loft Conversion',
  'Kitchen',
  'Bathroom',
  'Electrical',
  'Plumbing',
  'Plastering / Finishing',
  'Full Renovation',
  'Other',
];

const budgets = [
  'Not sure yet',
  'Under £25,000',
  '£25,000 – £50,000',
  '£50,000 – £100,000',
  '£100,000 – £250,000',
  'Over £250,000',
];

const empty = {
  name: '',
  email: '',
  phone: '',
  type: '',
  location: '',
  budget: '',
  message: '',
};

/**
 * EnquiryForm
 *
 * Front-end only. Validation and the success state are real; submission is
 * not wired to anything yet.
 *
 * To connect it: replace the body of `submit` with a POST to your endpoint
 * (a Next.js route handler at app/api/enquiry/route.js, Formspree, or the
 * client's CRM). The `values` object is already shaped for it.
 */
export default function EnquiryForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Please enter a valid email address.';
    if (!values.type) next.type = 'Please choose a project type.';
    if (!values.message.trim()) next.message = 'Please tell us a little about the project.';
    return next;
  };

  const submit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) {
      const first = document.getElementById(Object.keys(next)[0]);
      if (first) first.focus();
      return;
    }

    // TODO: POST `values` to your endpoint here.
    setSent(true);
    setValues(empty);
  };

  const err = (key) =>
    errors[key] ? (
      <span
        id={`${key}-error`}
        style={{ color: 'var(--bronze)', fontSize: '0.78rem' }}
      >
        {errors[key]}
      </span>
    ) : null;

  const aria = (key) => ({
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `${key}-error` : undefined,
  });

  if (sent) {
    return (
      <Reveal>
        <h2 className="hd hd-2" style={{ marginBottom: 14 }}>
          Thank you — your enquiry has been noted.
        </h2>
        <p className="lede" style={{ maxWidth: '46ch' }}>
          We&rsquo;ll be in touch to talk through the project and arrange a time to look at
          the property.
        </p>
        <button
          type="button"
          className="btn btn-outline"
          style={{ marginTop: 26 }}
          onClick={() => setSent(false)}
        >
          Send another enquiry
        </button>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <form className="form-grid" onSubmit={submit} noValidate>
        <div className="field">
          <label htmlFor="name">
            Name <span className="field-req">*</span>
          </label>
          <input id="name" name="name" type="text" value={values.name} onChange={set('name')} {...aria('name')} />
          {err('name')}
        </div>

        <div className="field">
          <label htmlFor="email">
            Email <span className="field-req">*</span>
          </label>
          <input id="email" name="email" type="email" value={values.email} onChange={set('email')} {...aria('email')} />
          {err('email')}
        </div>

        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" value={values.phone} onChange={set('phone')} />
        </div>

        <div className="field">
          <label htmlFor="type">
            Project type <span className="field-req">*</span>
          </label>
          <select id="type" name="type" value={values.type} onChange={set('type')} {...aria('type')}>
            <option value="">Please choose</option>
            {projectTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          {err('type')}
        </div>

        <div className="field">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Area or postcode"
            value={values.location}
            onChange={set('location')}
          />
        </div>

        <div className="field">
          <label htmlFor="budget">Estimated budget</label>
          <select id="budget" name="budget" value={values.budget} onChange={set('budget')}>
            <option value="">Please choose</option>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>

        <div className="field form-full">
          <label htmlFor="message">
            Message <span className="field-req">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="What are you planning, and roughly when?"
            value={values.message}
            onChange={set('message')}
            {...aria('message')}
          />
          {err('message')}
        </div>

        <div className="form-full">
          <button type="submit" className="btn btn-primary">
            Request a Free Quote
          </button>
        </div>
      </form>
    </Reveal>
  );
}
