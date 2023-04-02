import styled from 'styled-components';

const SideMenuContent = styled.div`
    background: #156064;
    width: 280px;
    position: fixed;
    top: 0;
    left: 0px;
    bottom: 0;
    height: 100%;
    padding: 15px 0px;

  #ham-menu{
    display:none;
  }

  #menu-close{
    display: none;
  }

  nav {
    padding-top: 50px;
    margin: 0px 40px;
  }

  nav a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 15px 30px;
  }

  a.fa {
    color: white;
    font-size: size 1.4rem;
    margin-right: 0.8rem;
    width: 30px;
    position: relative;
  }

a:hover {
    transition: all 0.3s ease-in-out;
    background: #b26500;
    border-left: 5px solid #ff9100;
    padding: 15px 30px 15px 25px;
  }

  a.fa:hover {
    color: #ff9100;
  }

  a.active {
    background: $purpleDark;
    border-left: 5px solid #ff9100;
    padding: 15px 30px 15px 25px;
  }

  a.fa:active {
    color: #ff9100;
  }

  .card {
    background: #fff;
    border-radius: 5px;
    padding: 10px;
    margin: 0px 40px;
    overflow: auto;
  }

  .user-img {
    background: url('https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ')
      no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 115px;
    height: 115px;
    border-radius: 50%;
    margin: 0 auto;
  }

  .user-name {
    font-size: 1rem;
    color: purple;
    display: block;
    text-align: center;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    display: ${(props) => props.show ? 'block' : 'none'};
    flex-direction: column;
    z-index: 900;

    #ham-menu{
      display: block;
      margin: 8px;
      font-size: 90px;
      color: black;
      background: #156064;
    }

    #menu-close {
      display: block;
      position: absolute;
      top: 0px;
      right: 0px;
      margin: 8px;
      color: black;
      background: #156064;
    }
  }
`;

export default SideMenuContent;
