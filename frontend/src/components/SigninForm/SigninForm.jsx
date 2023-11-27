import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SigninForm.module.css';
import icons from '../../assets/icons/icons.svg';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/user/actions';

export const SigninForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form className={styles.signinForm} onSubmit={handleSubmit}>
        <h2 className={styles.signinTitle}>Sign in</h2>
        <div className={styles.inputContainer}>
          <label className={styles.label}>
            <svg className={styles.icon}>
              <use href={`${icons}#icon-input-envelope`} />
            </svg>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>

          <label className={styles.label}>
            <svg className={styles.icon}>
              <use href={`${icons}#icon-input-lock`} />
            </svg>

            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button
          className={styles.signinButton}
          type="submit"
          // onClick={logIn}
        >
          Sign in
        </button>
      </form>
      <Link to="/register" className={styles.link}>
        Registration
      </Link>
    </div>
  );
};
