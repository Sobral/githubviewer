import React, { Component } from 'react';
import { FaGithub, FaPlus } from 'react-icons/fa';

import {
  Container,
  Form,
  SubmitButton,
  RepoContainer,
} from '../../styles/MainStyle';

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

  handleSubmit = e => {
    e.preventDefault();
    const { newRepoName, repositories } = this.state;

    const newRepositories = [...repositories, newRepoName];

    this.setState({
      newRepoName: '',
      repositories: newRepositories,
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
          <RepoContainer key={repository}> {repository} </RepoContainer>
        ))}
      </>
    );
  }
}

export default Main;
