import styled from 'styled-components';

const SignUpContent = styled.div`
  .signup-bg {
    background-color: #156064;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    width: 65%;
    height: max-content;
    max-width: 500px;
    color: white;
    text-align: center;
  }
  .signup-border {
    border-radius: 5%;
    margin: auto auto;
    padding: 10px 40px;
  }

  .signup-input-holder {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* height: 200px; */
    margin: 2em 0;
    gap: 15px;
  }

  .signup-button-holder {
    display: flex;
    justify-content: space-evenly;
    margin: 2em 0;
  }

  .logo {
    width: 45%;
    margin: 0 auto;
    display: flex;
  }

  input::placeholder {
    color: white;
    font-size: 20px;
  }

  #error-Message {
    color: #b26500;
    padding: 5px;
    border-radius: 5px;
  }

  #back-nav {
    position: absolute;
    top: 53px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    cursor: pointer;
  }
`;
export default SignUpContent;
