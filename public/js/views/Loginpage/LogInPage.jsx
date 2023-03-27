import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import InputWithIcon from '../../components/inputWithIcon';
import SolidButton from '../../components/solidButton';
import OutlinedButton from '../../components/outlinedButton';
import LoginPageContent from './style';
import logo from '../../../assets/camp.png';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorBgColor, setErrorBgColor] = useState("transparent")
  const navigate = useNavigate();

  const UserLogin = () => {
    const url = 'http://[::1]:3000/users/login';
    const data = {
      email: email,
      password:password
    };
    axios
      .post(url, data)
      .then(res => {
        if (res.status >= 200 && res.status <= 299) {
          return navigate('/dashboard');
        };
      })
      .catch(e => {
        console.log(e);
        if (e == 'Error: Request failed with status code 422') {
          setErrorBgColor("#ffff");
          setErrorMessage("All fields must be completed. Be sure that the email is in the form of an email, and that the password is at least 8 characters.");
        }

        else if (e == 'Error: Request failed with status code 401') {
          setErrorBgColor("#ffff");
          setErrorMessage("Invalid email or password.");
        };
        return null;
      })
  };

  return (
    <LoginPageContent>
      <div className="login-bg login-border">
        <img src={logo} className="logo" />
        <h1>Welcome to Camp Companion...</h1>
        <p>Please enter your information to log in.</p>
        <div id="error-Message" style={{"backgroundColor":`${errorBgColor}`}}>{errorMessage}</div>
        <form>
          <div className="login-input-holder">
            <InputWithIcon
              color="neutral"
              className="input"
              placeholderText="Email"
              onChange={e => setEmail(e.target.value)}
              required={true}
            ></InputWithIcon>
            <InputWithIcon
              color="neutral"
              type="password"
              placeholderText="Password"
              onChange={e => setPassword(e.target.value)}
              required={true}
            ></InputWithIcon>
          </div>
          <div className="login-button-holder">
            <SolidButton
              color="primary"
              innerText="Sign Up"
              function={() => navigate('/signup')}
            ></SolidButton>
            <OutlinedButton
              color="neutral"
              innerText="Log In"
              function={UserLogin}
            ></OutlinedButton>
          </div>
        </form>
      </div>
    </LoginPageContent>
  );
}
