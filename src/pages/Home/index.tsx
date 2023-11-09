import { useEffect, useState } from "react";
import { Container } from "../../components/Container";
import { CardUser } from "./components/CardUser";
import { PublicationsHeader } from "./components/PublicationsHeader";
import { PublicationsList } from "./components/PublicationsList";
import { SearchForm } from "./components/SearchForm";
import { api } from "../../api/axios";
import { LoadingMessage } from "./components/LoadingMessage";

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
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false);

  async function getGithubUser() {
    const response = await api.get(`/users/lzhudson`)
    const user = response.data;
    setUser(user)
  }

  async function getPublications(searchQuery: string) {
    const response = await api.get(`search/issues?q=${searchQuery}%20repo:lzhudson/github-blog`);
    const { data: publications } = response;
    setPublications(publications.items);
  }

  function onChangeSearch(search: string) {
    setSearch(search)
  }

  useEffect(() => {
    getGithubUser();
    getPublications(search);
  }, [])

  useEffect(() => {
    getPublications(search)
  }, [search])

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
      
        <>
          <PublicationsHeader publications={publications} />
          <SearchForm
            search={search}
            onChangeSearch={onChangeSearch}
          />
        </>
      {publications.length ? (
        <>
          <PublicationsList publications={publications} />
        </>
      ) : <LoadingMessage />}
    </Container>
  )
}