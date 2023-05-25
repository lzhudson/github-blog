import { Code, PostContentContainer } from "./style";

export function PostContent() {
  return (
    <article>
      <PostContentContainer>
        <p>
          <strong>Programming languages all have built-in data structures, but these
            often differ from one language to another.</strong> This article attempts
          to list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data structures.
          Wherever possible, comparisons with other languages are drawn.
          <a href="">Dynamic typing</a>
          JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        </p>
        <Code>
          <span className="variable">let</span> foo = <span className="value">42</span>;   <span className="comment">// foo is now a number</span>
          foo = <span className="value">'bar'</span>;    <span className="comment">// foo is now a string</span>
          foo = <span className="value">true</span>;    <span className="comment"> // foo is now a boolean</span>
        </Code>
      </PostContentContainer>
    </article>
  )
}