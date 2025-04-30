import React from 'react'
import { Container, Text } from './styles'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const index = () => {
  return (
    <Container>
        <Text>
            <h2>Discover The Beauty of Your Next Flat</h2>
            <p>Thousands of people have their flats up for grabs. Don't miss your chance to grab your own house today.</p>
            <Link to="/perfil"><span>Cadastre seu anúncio</span></Link>
        </Text>
    </Container>
  )
}

export default index