import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import { Section, Form } from './styles';
import Container from '../../styles/Container';
import Button from '../../styles/Button';
import Background from '../../styles/Background';

import logoImg from '../../assets/logo.svg';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post('ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push('/');
    } catch (error) {
      alert('Error no cadastro, tente novamente');
    }
  }
  return (
    <Container>
      <Background>
        <Section>
          <img src={logoImg} alt="Logo" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
            <Link to="/">
              <FiArrowLeft size={16} color="#e02041" />
              Logon
            </Link>
          </p>
        </Section>

        <Form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <div>
            <input
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
              maxLength="2"
            />
          </div>

          <Button>Cadastar</Button>
        </Form>
      </Background>
    </Container>
  );
};

export default Register;
