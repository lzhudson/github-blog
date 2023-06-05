import { useParams } from "react-router-dom";
import { PostContent } from "./components/PostContent";
import { PostInfo } from "./components/PostInfo";
import { PostInfoContainer } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../api/axios";

interface PostContent {
  title: string;
  html_url: string;
  created_at: string;
  comments: number;
  body: string;
}

export function Post() {
  const { id } = useParams();
  const [postContent, setPostContent] = useState<PostContent>({} as PostContent)
  const [loading, setLoading] = useState(false);
  async function getPostData() {
    setLoading(true);
    const response = await api.get(`/repos/lzhudson/github-blog/issues/${id}`);
    console.log(response)
    setPostContent(response.data)
    setLoading(false)
  }

  useEffect(() => {
    getPostData();
  }, [])

  return (
    <main>
      {!loading ? (
        <PostInfoContainer>
          <PostInfo 
            title={postContent.title}
            createdAt={postContent.created_at}
            totalComments={postContent.comments}
            postLink={postContent.html_url}
          />
        <PostContent content={postContent.body} />
      </PostInfoContainer>
      ) : 'Loading...'}
    </main>
  )
}