import React from "react";
import { Container, Description, Img, Itens } from "./styles";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { urlApi } from "../../services/Api";

const Card = ({thumb, tipo, endereco, valor, slug}) => {
  return (
    <Container>
        <Link to={`/imovel/${slug}`} style={{ textDecoration: 'none' }}>
        <Img>
          <img src={`${urlApi}/uploads/${thumb}`} alt=""/>
        </Img>
        <Description>
          <h4>{tipo}</h4>
          <Itens>
            <span>
              <FaMapMarkerAlt /> {endereco}
            </span>
            <span>R$ {valor} / mês</span>
          </Itens>
          Detalhes <FaArrowRight />
        </Description>
    </Link>
      </Container>
  );
};

export default Card;
