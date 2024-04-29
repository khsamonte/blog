import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <h1>Posts</h1>
      <NavList>
        <NavItem>
          <Link to={`/japanese/first-year-studying-japanese`}>
            First Year Studying Japanese
          </Link>
        </NavItem>
      </NavList>
    </div>
  );
};

const NavList = styled.ul`
  list-style: none;
  margin: 0;
`;

const NavItem = styled.li`
  line-height: 1;
  padding: 0.5em 0;
  width: 100%;
`;

const Link = styled(NavLink)`
  color: skyblue;
  font-family: Helvetica;
  font-size: 1em;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Category;
