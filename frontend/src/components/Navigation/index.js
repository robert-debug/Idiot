import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import logo from '../../assets/Idiot.png';
import './Navigation.css';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  let login;
  let sessionLinks;
  const onClick = (e) =>{
    history.push('/')
  }
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
        {/* <span className='idiot-span'>
          <NavLink exact to="/">IdIoT</NavLink>
        </span> */}
        <img className='logo' src={logo} onClick={onClick}></img>
        
        {isLoaded && sessionLinks}
      </div>
    </nav>
  );
}

export default Navigation;