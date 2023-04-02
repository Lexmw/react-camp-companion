import styled from 'styled-components';

const DashContent = styled.div`
  #content-area {
    margin-left: 280px;
    padding: 15px;
    margin-top: -2%;
  }

  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .heading h1 {
    color: #156064;
    margin-bottom: 10px;
  }

  .cards {
    display: inline-flex;
    overflow: auto;
    margin-bottom: 30px;
  }

  .card {
    background: #fff;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
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

  .user-title {
    display: block;
    font-size: 0.8rem;
    text-align: center;
    margin: 10px 0;
  }

  .education {
    font-size: 0.8rem;
    display: inline-block;
    color: lightgray;
  }

  .schools {
    font-size: 0.8rem;
  }

  .cards h6 {
    font-size: 0.7rem;
    color: rgb(110, 107, 107);
  }

  .date {
    font-size: 1.3rem;
    display: block;
    border-left: 5px solid greenyellow;
    position: relative;
    left: -20px;
    padding: 5px 40px;
    margin: 20px 0;
  }

  .job-type {
    background-color: orange;
    width: 20px;
    height: 20px;
    font-size: 0.6rem;
    border-radius: 50%;
    color: white;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
  }

  .job-type-os {
    background-color: lightskyblue;
    width: 20px;
    height: 20px;
    font-size: 0.6rem;
    border-radius: 50%;
    color: white;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
  }

  .location {
    font-size: 0.8rem;
    font-weight: 300;
    display: block;
    margin-bottom: 0.1rem;
  }

  .position {
    font-size: 0.8rem;
    font-weight: 500;
    display: block;
    margin-bottom: 0.1rem;
  }

  .time {
    font-size: 0.8rem;
    font-weight: 300;
    display: block;
    color: rgb(110, 107, 107);
    margin-bottom: 0.1rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    background-color: #b9b5b5;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    table-layout: fixed;
    border-collapse: collapse;
    word-wrap: break-word;
  

    thead {
      th {
        font-size: 0.8rem;
        padding: 15px 10px;
        text-align: left;
        text-transform: uppercase;
        font-weight: 500;
        color: rgb(75, 72, 72);
        border: none;
      }
    }

    tbody {
      background-color: white;
      font-size: 0.8rem;

      td {
        padding: 15px 10px;
      }
    }
  }

  #map-placeholder{
    background: #6B9080;
    height: 45vh;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
  #content-area {
    margin-left: 0px;
  }
  .heading {
    margin-top: 50px;
    width: 100%;
    display: block;
  }

  .heading h1 {
    font-size: 1.4em;
    text-align: center;
  }

  .heading p {
    font-size: .9em;
    text-align: center;
  }

  }
`;
export default DashContent;
