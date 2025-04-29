import React, { Fragment } from "react";
import Input from  "../../components/Input"
import TextArea from "../../components/TextArea"
import Button from "../../components/Button"
import { Container, Description, Left, Profile, ProfileContact, ProfileDescription, ProfileFormContact, ProfileImg, Right, Thumb } from "./styles";
import TopBanner from "../../components/TopBanner";

const Imobi = () => {
  return (
    <Fragment>
      <TopBanner />
      <Container>
        <Left>
          <Thumb>
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </Thumb>
          <Description>
            <h2>Apartamento / Alugar</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              commodi dolor ipsam autem aliquid, minus aperiam consequatur
              inventore nam alias illum eum assumenda libero? Vel consectetur
              consequuntur non at laborum!
            </p>
          </Description>
        </Left>
        <Right>
          <Profile>
            <ProfileImg>
              <img src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt="" />
            </ProfileImg>
            <ProfileDescription>
              <h3>Diego Castilho</h3>
              <p>Descrição do Usuário</p>
            </ProfileDescription>
          </Profile>
          <ProfileContact>
              <h3>Informações para Contato:</h3>
              <p>(12) 1232-2131</p>
              <p>diego@gmail.com</p>
          </ProfileContact>
          <ProfileFormContact>
            <h3>Contate o Anunciante</h3>
            <form action="">
              <Input type="text" placeholder="Nome:"/>
              <Input type="text" placeholder="Email:"/>
              <TextArea placeholder="Mensagem: "></TextArea>
              <Button>Enviar Mensagem</Button>
            </form>
          </ProfileFormContact>
        </Right>
      </Container>
    </Fragment>
  );
};

export default Imobi;
