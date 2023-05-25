import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { PostInfoCard, PostInfoDataList, PostInfoHeader } from "./style";
import { GithubLink } from "../../../../components/GithubLink";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function PostInfo() {
  return (
    <PostInfoCard>
      <PostInfoHeader>
        <a className="back-link" href=""><FontAwesomeIcon icon={faChevronLeft} />Voltar</a>
        <GithubLink />
      </PostInfoHeader>
      <h1>
        JavaScript data types and data structure
      </h1>
      <PostInfoDataList className="user-social-list">
        <li>
          <FontAwesomeIcon icon={faGithub} />
          <span>lzhudson</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDay} />
          <time>Há 1 dia</time>
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          <span>5 comentário</span>
        </li>

      </PostInfoDataList>
    </PostInfoCard>
  )
}