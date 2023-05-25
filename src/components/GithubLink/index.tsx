import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GithubLinkContainer } from "./style";

export function GithubLink() {
  return (
    <GithubLinkContainer href="">
      Github
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </GithubLinkContainer>
  )
}