import React from "react";
import { styled } from "styled-components";

const MainLayout = ({ children }) => {
  return (
    <SiteContent>
      <MainColumn>{children}</MainColumn>
    </SiteContent>
  );
};

export default MainLayout;

const SiteContent = styled.div`
  display: flex;
  font-size: 16px;
  grid-gap: 30px;
  margin: 0 auto;
  max-width: 1366px;
  padding: 5.5em 3em;
  position: relative;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    padding: 5.5em 2.5em;
  }

  @media screen and (max-width: 480px) {
    /* font-size: 14px; */
    padding: 5.5em 1.5em;
  }
`;

const MainColumn = styled.div`
  width: 100%;

  h1 {
    color: rgb(239, 132, 75);
    /* font-family: "NotoSansJP-Regular"; */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    font-size: 1.625em;
    font-weight: 400;
    padding-bottom: 1em;
  }

  blockquote {
    padding: 0 2em;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
