import { useParams } from "react-router-dom";

import MarkdownContent from "./MarkdownContent";

import { toTitleCase } from "../utils/stringUtils";

const Post = () => {
  const basePath = process.env.PUBLIC_URL || "";
  const { category, post } = useParams();
  const path = `${basePath}/markdown/${category}/${post}.md`;
  return (
    <>
      <h1>{toTitleCase(post)}</h1>
      <MarkdownContent markdownFile={path} dataToProcess={category} />
    </>
  );
};

export default Post;
