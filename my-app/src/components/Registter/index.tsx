import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import './style.css';
import { auth } from '../../store/actions';
import Button from '../UI/Button';


const Register: React.FC = () => {
  const dispatch = useDispatch();
  const authenticate = useSelector((state: any) => state.auth.authenticated);
  const { register, handleSubmit } = useForm();


  /* function for auth */
  const clickHandler = async (data: any) => {

    if (data.confirm === data.password) {
      try {
        // @ts-ignore
        dispatch(auth(data.email, data.password));
      } catch (e) {
        console.error(e);
      }
    }
  };

  let authRedirect = null;

  if (authenticate) {
    authRedirect = <Redirect to={'/main'} />;
  }

  return (
    <Card className={'login'}>
      {authRedirect}
      <form onSubmit={handleSubmit(clickHandler)}>
        <div
          className={'control'}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            {...register('email')}
            className={'input'}
            type="text"
            placeholder="E-mail"
          />
        </div>
        <div
          className={`control`}
        >
          <label htmlFor="password">Password</label>
          <input
            {...register('password')}
            className={'input'}
            type="password"
            placeholder="Password"
          />
        </div>
        <div
          className={`control`}
        >
          <label htmlFor="password"> Confirm Password</label>
          <input
            {...register('confirm')}
            className={'input'}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className={'actions'}>
          <Button type="submit" className={'btn'}>
            Sign Up
          </Button>
          <Link className={'link'} to="/login">Switch to Login</Link>
        </div>
      </form>
    </Card>);

};

export default Register;
