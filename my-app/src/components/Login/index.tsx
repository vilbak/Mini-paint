import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import Spinner from '../UI/Spinner/';
import './style.css';
import { auth } from '../../store/actions';
import Button from '../UI/Button';


const Login: React.FC = () => {
  const isSignUp = true;
  const dispatch = useDispatch();
  const history = useHistory();
  const authenticate = useSelector((state: any) => state.auth.authenticated);

  const loading = useSelector((state: any) => state.auth.loading);

  const { register, handleSubmit } = useForm();

  /* function for auth */
  const clickHandler = async (data: any) => {
    try {
      // @ts-ignore
      dispatch(auth(data.email, data.password, isSignUp));
    } catch (e) {
      console.error(e);
    }
  };


  if (authenticate) {
    history.push('/main');
  }
  return ((loading ? <Spinner /> :
    <Card className={'login'}>
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
        <div className={'actions'}>
          <Button type="submit" className={'btn'}>
            Log in
          </Button>
          <Link className={'btn_login'} to="/register">Switch to Register</Link>
        </div>
      </form>
    </Card>));

};

export default Login;
