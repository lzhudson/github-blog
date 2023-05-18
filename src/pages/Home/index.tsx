import { Container } from "../../components/Container";
import { CardUser } from "./components/CardUser";
import { PublicationsHeader } from "./components/PublicationsHeader";
import { PublicationsList } from "./components/PublicationsList";
import { SearchForm } from "./components/SearchForm";

export function Home() {
  return (
    <Container>
      <CardUser />
      <PublicationsHeader />
      <SearchForm />
      <PublicationsList />
    </Container>
  )
}