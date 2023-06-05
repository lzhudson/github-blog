import { Publication } from "../..";
import { PublicationCard } from "../PublicationCard";
import { PublicationsListContainer } from "./style";

interface PublcationsListProps {
  publications: Publication[];
}

export function PublicationsList({ publications }: PublcationsListProps) {
  return (
    <PublicationsListContainer>
      {publications.map(publication => (
        <li key={publication.number}>
          <PublicationCard publication={publication} />
        </li>
      ))}
    </PublicationsListContainer>
  )
}