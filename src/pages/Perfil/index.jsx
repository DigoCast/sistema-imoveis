import React, { useEffect, useState } from "react";
import { Container, Form, Left, Message, Right } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Api from "../../services/Api"
import { toast } from "react-toastify";
import { getLocalStorage } from "../../context/utils";

const Perfil = () => {
  const [thumb, setThumb] = useState();
  const [tipo, setTipo] = useState();
  const [endereco, setEndereco] = useState();
  const [cidade, setCidade] = useState();
  const [uf, setUf] = useState();
  const [valor, setValor] = useState();
  const [descricao, setDescricao] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [message, setMessage] = useState([]);

  const user = getLocalStorage();
  const { id } = user

  const data = {
    id,
    thumb,
    tipo,
    endereco,
    cidade,
    uf,
    valor,
    descricao,
    name,
    email,
    telefone,
  };

  useEffect(() => {
    Api.get(`/listmessage/${id}`)
      .then((res) => {
        setMessage(res.data.messagem)
      }).catch(() => {
        console.log("Erro: Erro ao listar mensagens")
      })
  }, [id])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const headers = {
      'headers':{
        'content-type': 'multipart/form-data'
      }
    }

    Api.post('/createimobi', data, headers)
      .then((res) => {
        if(!res.data.erro === true){
          toast(res.data.message);
        }else{
          toast(res.data.message);
        }
      }).catch(() => {
        console.log("Erro: Erro ao cadastrar Imovel")
      })
    // console.log(data, headers)
  }

  return (
    <Container>
      <Left>
        <h2>Minhas Mensagens</h2>
        {message.map((item, index) => (
          <Message key={index}>
            <span>Nome: {item.client_name}</span>
            <span>Email: {item.client_email}</span>
            <br/>
            <h4>Mensagem:</h4>
            <p>{item.client_mensagem}</p>
          </Message>
        ))}
          
        
      </Left>
      <Right>
        <h2>Cadastrar Imovel</h2>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Input 
            type="file" 
            name="thumb" 
            onChange={(e) => setThumb(e.target.files[0])}
          />
          <Input
            type="text"
            name="tipo"
            placeholder="Informe o tipo do imovel:"
            onChange={(e) => setTipo(e.target.value)}
          />
          <Input
            type="text"
            name="endereco"
            placeholder="Informe o endereco do imovel:"
            onChange={(e) => setEndereco(e.target.value)}
          />
          <Input
            type="text"
            name="cidade"
            placeholder="Informe a cidade do imovel:"
            onChange={(e) => setCidade(e.target.value)}
          />
          <Input 
            type="text" 
            name="uf" 
            placeholder="UF:" 
            onChange={(e) => setUf(e.target.value)}
          />
          <Input
            type="text"
            name="descricao"
            placeholder="De uma breve descricao ao anuncio:"
            onChange={(e) => setDescricao(e.target.value)}
          />
          <Input 
            type="text" 
            name="name" 
            placeholder="Informe seu nome:"
            onChange={(e) => setName(e.target.value)} 
          />
          <Input
            type="text"
            name="email"
            placeholder="Informe seu email para contato:"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            name="valor"
            placeholder="Informe o valor do imovel:"
            onChange={(e) => setValor(e.target.value)}
          />
          <Input
            type="text"
            name="telefone"
            placeholder="Informe o seu telefone:"
            onChange={(e) => setTelefone(e.target.value)}
          />
          <Button type="submit">Cadastrar Imovel</Button>
        </Form>
      </Right>
    </Container>
  );
};

export default Perfil;
