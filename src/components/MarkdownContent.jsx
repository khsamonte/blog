import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import gfm from "remark-gfm";

import { preprocessMarkdown } from "../utils/preprocessMarkdown";

const MarkdownContent = ({ markdownFile, dataToProcess = "default" }) => {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!markdownFile) {
      setMarkdown("");
      return;
    }

    setLoading(true);

    fetch(markdownFile)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(preprocessMarkdown(text, dataToProcess));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching markdown:", error);
        setLoading(false);
      });
  }, [markdownFile, dataToProcess]);

  const renderMarkdown = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (!markdown) {
      return <p>Empty.</p>;
    } else {
      return (
        <ReactMarkdown
          remarkPlugins={[gfm]}
          children={markdown}
          components={{
            a: ({ node, ...props }) => {
              if (props.href === "character-name") {
                return <NameSpan>{props.children}</NameSpan>;
              } else if (props.href === "location-name") {
                return <LocationSpan>{props.children}</LocationSpan>;
              }
              return <a {...props}>{props.children}</a>;
            },
          }}
        />
      );
    }
  };

  return <MarkdownContainer>{renderMarkdown()}</MarkdownContainer>;
};

const MarkdownContainer = styled.div`
  /* font-family: "NotoSansJP-Light"; */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 300;
  margin: 0 0 1.5em;
  line-height: 1.5;
  list-style: none;

  h2 {
    /* font-family: "NotoSansJP-Regular"; */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    /* font-size: 1.625em; */
    font-size: 1.375em;
    font-weight: 400;
    margin: 0 0 0.75em;
  }

  h3 {
    /* font-family: "NotoSansJP-Regular"; */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    /* font-size: 1.375em; */
    font-size: 1.175em;
    font-weight: 400;
    margin: 0 0 1.5em;
  }

  h4 {
    /* font-family: "NotoSansJP-Light"; */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    font-size: 1.175em;
    font-weight: 300;
    margin: 0 0 1.5em;
  }

  /* Dates */
  h5 {
    color: rgb(239, 132, 75);
    /* font-family: "NotoSansJP-Light"; */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    font-size: 1em;
    font-weight: 300;
    margin: 0 0 1.5em;
  }

  hr {
    border: none;
    border-top: 1px solid rgb(63, 65, 65);
    margin: 0 0 1.5em;
  }

  &.character-name {
    color: rgb(239, 132, 75);
  }

  p,
  ul {
    /* color: rgb(209, 213, 219); */
    color: #fff;
    font-family: "NotoSansJP-Light";
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    /* font-size: 0.875em; */
    font-size: 1em;
    font-weight: 300;
    margin: 0 0 1.5em;
    line-height: 1.5em;
    list-style: none;
  }

  a {
    color: rgb(239, 132, 75);
  }

  table {
    border-collapse: collapse;
    border-top: 1px solid rgb(239, 132, 75);
    font-family: "NotoSansJP-Light";
    font-size: 1.25em;
    font-weight: 300;
    margin: 0 0 1.5em;
    width: 100%;
  }

  pre {
    border: 1px solid rgb(239, 132, 75);
    font-family: "NotoSansJP-Light";
    font-size: 1.25em;
    font-weight: 300;
    margin: 0 0 1.5em;
    padding: 8px;

    white-space: pre-wrap; /* Since CSS 2.1 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
  }

  code {
    font-family: "NotoSansJP-Light";
    font-weight: 300;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid rgb(239, 132, 75);
    border-right: 1px solid rgb(239, 132, 75);
  }

  th:first-child,
  td:first-child {
    border-left: 1px solid rgb(239, 132, 75);
  }

  /* Style for the first column */
  th:first-child,
  td:first-child {
    text-align: left;
  }

  img {
    max-width: 100%;
  }

  table,
  table th,
  table td,
  pre {
    color: #d6d0c6;
    font-size: 1em;
    font-weight: 300;
  }
`;

const NameSpan = styled.span`
  color: rgb(239, 132, 75);
`;

const LocationSpan = styled.span`
  color: violet;
`;

export default MarkdownContent;
