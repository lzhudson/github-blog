import { Link } from "react-router-dom";
import { Publication } from "../..";
import { PublicationCardContainer } from "./styles";
import { distanceToNow } from "../../../../utils/date";

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <PublicationCardContainer>
      <Link to={`/post/${publication.number}`}>
        <header>
          <h3>
            {publication.title}
          </h3>
          <time>{distanceToNow(publication.created_at)}</time>
        </header>
        <p>
          {publication.body.length > 181 ? `${publication.body.substring(0, 181)}...` : publication.body}
        </p>
      </Link>
    </PublicationCardContainer>
  )
}