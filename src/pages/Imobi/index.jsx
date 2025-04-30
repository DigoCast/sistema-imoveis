import React, { Fragment, useEffect, useState } from "react";
import Input from  "../../components/Input"
import TextArea from "../../components/TextArea"
import Button from "../../components/Button"
import Api, { urlApi } from "../../services/Api"
import { Container, Description, Left, Profile, ProfileContact, ProfileDescription, ProfileFormContact, ProfileImg, Right, Thumb } from "./styles";
import TopBanner from "../../components/TopBanner";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

const Imobi = () => {
  const {slug} = useParams();
  const [dataImobi, setDataImobi] = useState([]);

  useEffect(() => {
    Api.get(`/listimobi/${slug}`)
      .then((res) => {
        setDataImobi(res.data)
      })
      .catch(() => {
        console.log("Erro: Erro ao listar imóvel")
      })
  }, [slug])

  const {
    tipo,
    cidade,
    endereco,
    descricao,
    thumb,
    name,
    email,
    telefone,
    userId
  } = dataImobi;

  const [client_name, setClientName] = useState('')
  const [client_email, setClientEmail] = useState('')
  const [client_mensagem, setClientMessage] = useState('')

  const dataMessage = {
    client_name,
    client_email,
    client_mensagem,
    userId
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // anula o comportamento comum de um form
    Api.post('/createmessage', dataMessage)
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
    <Fragment>
      <TopBanner tipo={tipo} descricao={descricao} thumb={thumb} />
      <Container>
        <Left>
          <Thumb>
            <img src={`${urlApi}/uploads/${thumb}`}/>
          </Thumb>
          <Description>
            <h2>{tipo}</h2>
            <h5>Cidade: {cidade}</h5>
            <h5>Endereço: {endereco}</h5>
            <p>{descricao}</p>
          </Description>
        </Left>
        <Right>
          <Profile>
            <ProfileImg>
              <img src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt="" />
            </ProfileImg>
            <ProfileDescription>
              <h3>{name}</h3>
              <p>Descrição do Usuário</p>
            </ProfileDescription>
          </Profile>
          <ProfileContact>
              <h3>Informações para Contato:</h3>
              <p>{telefone}</p>
              <p>{email}</p>
          </ProfileContact>
          <ProfileFormContact>
            <h3>Contate o Anunciante</h3>
            <form onSubmit={handleSubmit} autoComplete="off">
              <Input 
                type="hidden" 
                name="userId"
                value={userId ?? ''}
              />
              <Input 
                type="text" 
                placeholder="Nome:"
                name="client_name"
                onChange={(e) => setClientName(e.target.value)}
              />
              <Input 
                type="text" 
                placeholder="Email:"
                name="client_email"
                onChange={(e) => setClientEmail(e.target.value)}
              />
              <TextArea 
                placeholder="Mensagem:"
                name="client_mensagem"
                onChange={(e) => setClientMessage(e.target.value)}
              ></TextArea>
              <Button>Enviar Mensagem</Button>
            </form>
          </ProfileFormContact>
        </Right>
      </Container>
    </Fragment>
  );
};

export default Imobi;
