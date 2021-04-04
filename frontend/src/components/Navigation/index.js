import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let login;
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    login =(
      <>
        <LoginFormModal />

      </>
    )
    sessionLinks = (
      <>
        <NavLink className='nav-button' id='signup-link' to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <nav>
      <div className='bar'>

        {
          sessionUser?
          <div />:<LoginFormModal />
        }
        <span className='idiot-span'>
          <NavLink exact to="/">IdIoT</NavLink>
        </span>
        
        {isLoaded && sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;