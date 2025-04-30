import React from "react";
import { Container, Logo, Menu } from "./styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  const handleLogoff = () =>{
    localStorage.clear();
    window.location.href = "/login"
  }

  const userLogged = localStorage.getItem('User')

  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </Logo>
      <Menu>
        {!userLogged?
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <ul>
                <li>
                  <span>Cadastro/Login</span>
                </li>
            </ul>
          </Link>
          :
          <Link to="/login" onClick={handleLogoff} style={{ textDecoration: 'none' }}>
            <ul>
                <li>
                  <span>Sair</span>
                </li>
            </ul>
          </Link>
        }
      </Menu>
    </Container>
  );
};

export default Home;
