import React from 'react'
import Input from "../../components/Input"
import Button from "../../components/Button"
import { Container, ContainerForm, Form, Label } from './styles'

const Cadastro = () => {
  return (
    <Container>
        <h2>Crie sua conta</h2>
        <p>Cadastre-se para exibir seus anuncios!</p>
        <ContainerForm>
            <Form>
                <Label>Nome</Label>
                <Input type="text" placeholder="Informe seu Nome"></Input>
                <Label>Email</Label>
                <Input type="text" placeholder="Informe seu Email"></Input>
                <Label>Senha</Label>
                <Input type="password" placeholder="Informe sua Senha"></Input>
                <Button>Cadastrar-se</Button>
            </Form>
        </ContainerForm>
    </Container>
  )
}

export default Cadastro