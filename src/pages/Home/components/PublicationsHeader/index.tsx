import { Publication } from "../..";
import { PublicationsHeaderContainer } from "./style";

interface PublicationsHeaderProps {
  publications: Publication[];
}

export function PublicationsHeader({ publications } : PublicationsHeaderProps) {
  const totalPublications = publications.length;
  return (
    <PublicationsHeaderContainer>
      <h2>Publicações</h2>
      <span>{totalPublications} publicaçõe{publications.length > 1 ? 's' : ''}</span>
    </PublicationsHeaderContainer>
  )
}