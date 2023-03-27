import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import InputWithIcon from '../../components/inputWithIcon';
import SolidButton from '../../components/solidButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SignUpContent from './style';
import logo from '../../../assets/Camp.png';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorBgColor, setErrorBgColor] = useState('transparent');

  let navigate = useNavigate();

  const UserSignUp = () => {
    const url = 'http://[::1]:3000/signup';

    if (password.length < 8) {
      setErrorBgColor('#ffff');
      setErrorMessage('Password must be at least 8 characters.');
      return;
    } else {
      const data = {
        username: username,
        email: email,
        password: password,
      };
      axios
        .post(url, data)
        .then(res => {
          if (res.status >= 200 && res.status <= 299) {
            return navigate('/dashboard');
          }
        })
        .catch(e => {
          console.log(e);
          if (e == 'Error: Request failed with status code 422') {
            setErrorBgColor('#ffff');
            setErrorMessage(
              'All fields must be completed. Be sure that the email is in the form of an email, and that the password is at least 8 characters.',
            );
          } else if (e == 'Error: Request failed with status code 401') {
            setErrorBgColor('#ffff');
            setErrorMessage('Invalid email or password.');
          }
          return null;
        });
    }
  };

  return (
    <SignUpContent>
      <div className="signup-bg signup-border">
        <div id="header">
          <div id="back-nav" onClick={() => navigate('/')}>
            <ArrowBackIcon />
            <p>Login</p>
          </div>
          <img src={logo} className="logo" />
          <h1>Sign Up for Camp Companion</h1>
          <p>Please enter your information to make an account.</p>
        </div>
        <div id="error-Message" style={{backgroundColor: `${errorBgColor}`}}>
          {errorMessage}
        </div>
        <form>
          <div className="signup-input-holder">
            <InputWithIcon
              className="input"
              color="neutral"
              placeholderText="Username"
              required={true}
              onChange={e => setUsername(e.target.value)}
            ></InputWithIcon>
            <InputWithIcon
              className="input"
              color="neutral"
              placeholderText="Email"
              required={true}
              onChange={e => setEmail(e.target.value)}
            ></InputWithIcon>
            <InputWithIcon
              className="input"
              type="password"
              color="neutral"
              placeholderText="Password"
              required={true}
              onChange={e => setPassword(e.target.value)}
            ></InputWithIcon>
          </div>
          <div className="signup-button-holder">
            <SolidButton
              color="primary"
              innerText="Sign Up"
              function={UserSignUp}
              fullWidth={true}
            ></SolidButton>
          </div>
        </form>
      </div>
    </SignUpContent>
  );
}
