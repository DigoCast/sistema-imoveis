import React from "react";
import { Container, Logo, Menu } from "./styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </Logo>
      <Menu>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <ul>
            <li>
              <span>Cadastro/Login</span>
            </li>
          </ul>
        </Link>
      </Menu>
    </Container>
  );
};

export default Home;
