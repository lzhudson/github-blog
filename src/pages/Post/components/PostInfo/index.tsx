import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { PostInfoCard, PostInfoDataList, PostInfoHeader } from "./style";
import { GithubLink } from "../../../../components/GithubLink";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { distanceToNow } from "../../../../utils/date";
import { Link } from "react-router-dom";

interface PostInfoProps {
  title: string;
  createdAt: string;
  totalComments: number;
  postLink: string;
}

export function PostInfo({ title, createdAt, postLink, totalComments } : PostInfoProps) {
  return (
    <PostInfoCard>
      <PostInfoHeader>
        <Link className="back-link" to="/"><FontAwesomeIcon icon={faChevronLeft} />Voltar</Link>
        <GithubLink link={postLink} />
      </PostInfoHeader>
      <h1>
        {title}
      </h1>
      <PostInfoDataList className="user-social-list">
        <li>
          <FontAwesomeIcon icon={faGithub} />
          <span>lzhudson</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDay} />
          <time>{distanceToNow(createdAt)}</time>
        </li>
        {totalComments ? (
          <li>
            <FontAwesomeIcon icon={faComment} />
            <span>{totalComments} comentário {totalComments > 1 ? 's' : ''}</span>
          </li>
        ) : ''}
      </PostInfoDataList>
    </PostInfoCard>
  )
}