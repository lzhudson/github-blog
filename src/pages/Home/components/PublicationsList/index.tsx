import { PublicationCard } from "../PublicationCard";
import { PublicationsListContainer } from "./style";

export function PublicationsList() {
  return (
    <PublicationsListContainer>
      <li>
        <PublicationCard />
      </li>
      <li>
        <PublicationCard />
      </li>
      <li>
        <PublicationCard />
      </li>
      <li>
        <PublicationCard />
      </li>
      <li>
        <PublicationCard />
      </li>
      <li>
        <PublicationCard />
      </li>
    </PublicationsListContainer>
  )
}