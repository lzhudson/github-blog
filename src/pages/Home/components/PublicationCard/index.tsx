import { Publication } from "../..";
import { PublicationCardContainer } from "./styles";

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication } : PublicationCardProps) {
  return (
    <PublicationCardContainer>
      <header>
        <h3>
          {publication.title}
        </h3>
        <time>Há 1 dia</time>
      </header>
      <p>
        {publication.body.length > 181 ?`${publication.body.substring(0, 181)}...` : publication.body}
      </p>
    </PublicationCardContainer>
  )
}