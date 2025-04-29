import React, { useState } from 'react'
import Input from "../../components/Input"
import Button from "../../components/Button"
import { Container, ContainerForm, Form, Label } from './styles'
import Api from '../../services/Api'
import { toast } from 'react-toastify'

const Cadastro = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const inputValue = (e) => setData({...data, [e.target.name]: e.target.value} );

  const handleSubmit = (e) => {
    e.preventDefault();
    Api.post('/createuser', data)
    .then((res) => {
      if(!res.data.error === true){
        toast(res.data.message);
      }else{
        toast(res.data.message);
      }
    })
    .catch(() => {
      console.log("Erro: Erro no sistema")
    })
  }

  return (
    <Container>
        <h2>Crie sua conta</h2>
        <p>Cadastre-se para exibir seus anuncios!</p>
        <ContainerForm>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Label>Nome</Label>
                <Input type="text" name="name" placeholder="Informe seu Nome" onChange={inputValue}></Input>
                <Label>Email</Label>
                <Input type="text" name="email" placeholder="Informe seu Email" onChange={inputValue}></Input>
                <Label>Senha</Label>
                <Input type="password" name="password" placeholder="Informe sua Senha" onChange={inputValue}></Input>
                <Button type="submit">Cadastrar-se</Button>
            </Form>
        </ContainerForm>
    </Container>
  )
}

export default Cadastro