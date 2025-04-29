import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, ContainerForm, Divisor, Form, Label } from "./styles";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <h2>Acesse a sua conta</h2>
      <p>Entre com seu email e senha</p>
      <ContainerForm>
        <Form>
          <Label>Email</Label>
          <Input type="text" placeholder="Informe seu Email"></Input>
          <Label>Senha</Label>
          <Input type="password" placeholder="Informe sua Senha"></Input>
          <Button>Fazer Login</Button>
        </Form>
        <Divisor>
          <hr />
          <p>ou</p>
          <hr />
        </Divisor>
        <Link to="/cadastro"><Button>Fazer Cadastro</Button></Link>
      </ContainerForm>
    </Container>
  );
};

export default Login;
