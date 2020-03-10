import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import {
  Container,
  Form,
  SubmitButton,
  RepoContainer,
} from '../../styles/MainStyle';

import api from '../../services/api';
import SubmitIcon from '../../components/SubmitIcon';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      newRepoName: '',
      repositories: [],
      loading: false,
      emptyInput: true,
    };
  }

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleChange = e => {
    const emptyInput = e.target.value.trim().length === 0;

    this.setState({
      newRepoName: e.target.value,
      emptyInput,
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    const { newRepoName, repositories } = this.state;

    const response = await api.get(`/repos/${newRepoName}`);

    const data = {
      name: response.data.full_name,
      html_url: response.data.html_url,
    };

    this.setState({
      newRepoName: '',
      repositories: [...repositories, data],
      loading: false,
    });
  };

  render() {
    const { newRepoName, repositories, loading, emptyInput } = this.state;

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

            <SubmitButton loading={loading.toString()} emptyInput={emptyInput}>
              <SubmitIcon loading={loading} />
            </SubmitButton>
          </Form>
        </Container>
        {repositories.map(repository => (
          <RepoContainer key={repository.name}>
            {repository.name}
            <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
              Detalhes
            </Link>
          </RepoContainer>
        ))}
      </>
    );
  }
}

export default Main;
