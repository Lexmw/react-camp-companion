import styled from 'styled-components';

const LoginPageContent = styled.div `
.login-bg{
  background-color: #156064;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  width: 60%;
  height: 85%;
  max-width: 500px;
  color: white;
  text-align: center;
}
.login-border{
  border-radius: 5%;
  margin: auto auto;
  padding: 20px 40px;
}

.login-input-holder{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;
}

input::placeholder{
  color:  white;
  font-size: 20px;
}

.login-button-holder{
  display: flex;
  justify-content: space-evenly;
}

.logo{
  width: 45%;
  margin: 0 auto;
  display:flex;
}

#error-Message{
  color: #b26500;
  padding: 5px;
  border-radius: 5px;
}
`
export default LoginPageContent;
