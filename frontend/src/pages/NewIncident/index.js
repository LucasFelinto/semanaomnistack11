import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Section, Form } from './styles';

import Background from '../../styles/Background';
import Container from '../../styles/Container';
import Button from '../../styles/Button';

const NewIncident = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(event) {
    event.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente');
    }
  }

  return (
    <Container>
      <Background>
        <Section>
          <img src={logoImg} alt="Logo" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encotrnar um herói para resolver
            isso.
            <Link to="/profile">
              <FiArrowLeft size={16} color="#e02041" />
              Voltar para profile
            </Link>
          </p>
        </Section>

        <Form onSubmit={handleNewIncident}>
          <input
            placeholder="Titulo do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            vlaue={value}
            onChange={(e) => setValue(e.target.value)}
            type="number"
          />
          <Button>Cadastar</Button>
        </Form>
      </Background>
    </Container>
  );
};

export default NewIncident;
