import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { logout } from '../../../store/actions';
import './style.css';
import Button from '../../UI/Button';

const LogOut = () => {
  const dispatch = useDispatch();
  const authenticate = useSelector((state: any) => state.auth.authenticated);

  /*function for logout */
  const clickHandler = async (event: any) => {
    try {
      event.preventDefault();
      await dispatch(logout());

    } catch (e) {
      console.error(e);
    }
  };
  let authRedirect = null;

  if (!authenticate) {
    authRedirect = <Redirect to={'/login'} />;
  }
  return (
    <section className={'maxWidth'}>
      {authRedirect}
      <div className={'header'}>
        <h1 className={'titleHeader'}> Task Manager</h1>
        <Button onClick={clickHandler} className={'btn'}>Log out</Button>
      </div>
    </section>
  );
};

export default LogOut;
