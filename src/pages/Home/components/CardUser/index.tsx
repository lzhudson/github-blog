import { CardUserContainer, CardUserImageContainer, CardUserInfoContainer, CardUserSocialList } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export function CardUser() {
  return (
    <CardUserContainer>
      <CardUserImageContainer>
        <img src="https://github.com/lzhudson.png" alt="Hudson Holanda" />
      </CardUserImageContainer>
      <CardUserInfoContainer className="user-info-container">
        <header>
          <h1>Hudson Holanda</h1>
          <a href="">
            Github 
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        <CardUserSocialList className="user-social-list">
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <span>lzhudson</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Joyjet</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </li>
          
        </CardUserSocialList>
      </CardUserInfoContainer>
    </CardUserContainer>
  )
}