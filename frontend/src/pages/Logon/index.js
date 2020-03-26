import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import Container from '../../styles/Container';
import { Form, Section } from './styles';
import Button from '../../styles/Button';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

const Logon = () => {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (error) {
      alert('Falha no login, tente novamente');
    }
  }

  return (
    <Container>
      <Section>
        <img src={logoImg} alt="Logo" />

        <Form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Button>Entrar</Button>

          <Link to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </Form>
      </Section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
};

export default Logon;
