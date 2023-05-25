import { CardUserContainer, CardUserImageContainer, CardUserInfoContainer, CardUserSocialList } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GithubLink } from "../../../../components/GithubLink";
import { User } from "../..";


export function CardUser({ avatar_url, bio, company, followers, html_url, login, name } : User) {
  return (
    <CardUserContainer>
      <CardUserImageContainer>
        <img src={avatar_url} alt="Hudson Holanda" />
      </CardUserImageContainer>
      <CardUserInfoContainer>
        <header>
          <h1>{name}</h1>
          <GithubLink link={html_url} />
        </header>
        <p>{bio}</p>
        <CardUserSocialList className="user-social-list">
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <span>{login}</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{company}</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{followers} seguidores</span>
          </li>
        </CardUserSocialList>
      </CardUserInfoContainer>
    </CardUserContainer>
  )
}