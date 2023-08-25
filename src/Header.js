import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <Layout>
        <HomeLink to='/'>
          <Logo>Jieun</Logo>
        </HomeLink>
        <Items>
          <List>
            <StyledLink to='/'>Home</StyledLink>
          </List>
          <List>
            <StyledLink to='/skill'>Skill</StyledLink>
          </List>
          <List>
            <StyledLink to='/contact'>Contact</StyledLink>
          </List>
        </Items>
      </Layout>
    </>
  );
}
const Layout = styled.div`
  height: 5rem;
  background-color: pink;
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
`;
const Logo = styled.button`
  all: unset;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.5rem;
`;

const Items = styled.ul`
  list-style-type: none;
  line-height: 5rem;
`;
const List = styled.li`
  float: left;
  margin-right: 2rem;
`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: black;
  }
`;

const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
  line-height: 5rem;
`;
