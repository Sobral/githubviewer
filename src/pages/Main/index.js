import React, { Component } from 'react';
import { FaGithub, FaPlus } from 'react-icons/fa';

import {
  Container,
  Form,
  SubmitButton,
  RepoContainer,
} from '../../styles/MainStyle';

import api from '../../services/api';

class Main extends Component {
  constructor() {
    super();
    this.state = { newRepoName: '', repositories: [] };
  }

  handleChange = e => {
    this.setState({
      newRepoName: e.target.value,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { newRepoName, repositories } = this.state;

    const response = await api.get(`/repos/${newRepoName}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      newRepoName: '',
      repositories: [...repositories, data],
    });
  };

  render() {
    const { newRepoName, repositories } = this.state;

    return (
      <>
        <Container>
          <h1>
            <FaGithub /> Repositories
          </h1>

          <Form onSubmit={this.handleSubmit}>
            <input
              autoComplete="off"
              onChange={this.handleChange}
              type="text"
              name="repositorio"
              placeholder="Adicionar repositório"
              value={newRepoName}
            />

            <SubmitButton>
              <FaPlus color="#FFF" size={14} />
            </SubmitButton>
          </Form>
        </Container>
        {repositories.map(repository => (
          <RepoContainer key={repository.name}>
            {repository.name}
            <span>Detalhes</span>
          </RepoContainer>
        ))}
      </>
    );
  }
}

export default Main;
