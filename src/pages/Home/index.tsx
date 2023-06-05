import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { CardUser } from "./components/CardUser";
import { PublicationsHeader } from "./components/PublicationsHeader";
import { PublicationsList } from "./components/PublicationsList";
import { SearchForm } from "./components/SearchForm";
import { api } from "../../api/axios";

export interface User {
  avatar_url: string;
  bio: string;
  company: string;
  html_url: string;
  followers: string;
  login: string;
  name: string;
}

export interface Publication {
  number: number;
  title: string;
  body: string;
  created_at: string;
}

export function Home() {
  const [user, setUser] = useState<User>({} as User);
  const [publications, setPublications] = useState<Publication[]>([]);

  async function getGithubUser() {
    const response = await api.get(`/users/lzhudson`)
    const user = response.data;
    setUser(user)
  }

  async function getPublications() {
    const response = await api.get('search/issues?q=repo:lzhudson/github-blog');
    const { data: publications } = response;
    setPublications(publications.items);
  }

  useEffect(() => {
    getGithubUser();
    getPublications();
  }, [])

  return (
    <Container>
      <CardUser
        avatar_url={user.avatar_url}
        bio={user.bio}
        company={user.company}
        followers={user.followers}
        html_url={user.html_url}
        login={user.login}
        name={user.name}
      />
      <PublicationsHeader />
      <SearchForm />
      {publications.length ? (
        <PublicationsList publications={publications} />
      ) : 'Carregando...'}
    </Container>
  )
}