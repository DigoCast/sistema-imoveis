import React from "react";
import { Container, Description, Img, Itens } from "./styles";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Container>
        <Link to="/imovel" style={{ textDecoration: 'none' }}>
        <Img>
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </Img>
        <Description>
          <h4>Apartamento</h4>
          <Itens>
            <span>
              <FaMapMarkerAlt /> Jardim Satélite, São José dos Campos
            </span>
            <span>R$ 1.900,00 / mês</span>
          </Itens>
          Detalhes <FaArrowRight />
        </Description>
    </Link>
      </Container>
  );
};

export default Card;
