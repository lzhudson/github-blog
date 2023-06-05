import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PostContentContainer } from "./style";

interface PostContentProps {
  content: string;
}

export function PostContent({ content } : PostContentProps) {
  return (
    <article>
      <PostContentContainer>
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </PostContentContainer>
    </article>
  )
}