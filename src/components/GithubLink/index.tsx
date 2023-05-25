import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GithubLinkContainer } from "./style";

interface GithubLinkProps {
  link: string
}

export function GithubLink({ link } : GithubLinkProps) {
  return (
    <GithubLinkContainer href={link}>
      Github
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </GithubLinkContainer>
  )
}