import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container, ContainerForm, Divisor, Form, Label } from "./styles";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      email, password
    })
  }
  return (
    <Container>
      <h2>Acesse a sua conta</h2>
      <p>Entre com seu email e senha</p>
      <ContainerForm>
        <Form onSubmit={handleSubmit}>
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            placeholder="Informe seu Email"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <Label>Senha</Label>
          <Input
            type="password"
            name="password"
            placeholder="Informe sua Senha"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Button type="submit">Fazer Login</Button>
        </Form>
        <Divisor>
          <hr />
          <p>ou</p>
          <hr />
        </Divisor>
        <Link to="/cadastro">
          <Button>Fazer Cadastro</Button>
        </Link>
      </ContainerForm>
    </Container>
  );
};

export default Login;
