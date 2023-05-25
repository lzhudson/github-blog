import { PostContent } from "./components/PostContent";
import { PostInfo } from "./components/PostInfo";
import { PostInfoContainer } from "./style";

export function Post() {
  return (
    <main>
      <PostInfoContainer>
        <PostInfo />
        <PostContent />
      </PostInfoContainer>
    </main>
  )
}