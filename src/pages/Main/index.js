import React from 'react';
import { FaGithub, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from '../../styles/MainStyle';

function Main() {
  return (
    <Container>
      <h1>
        <FaGithub /> Repositories
      </h1>

      <Form onClick={() => {}}>
        <input
          type="text"
          name="repositorio"
          placeholder="Adicionar repositório"
        />

        <SubmitButton>
          <FaPlus color="#FFF" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default Main;
