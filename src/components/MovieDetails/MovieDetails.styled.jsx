import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 25px;
  font-weight: 600;
  text-decoration: none;
`;
export const Wrapper = styled.div`
  width: 120px;
  font-size: 20px;
  color: black;
  margin-bottom: 20px;
  background-color: rgb(243, 237, 237);
  border-radius: 20px;
  cursor: pointer;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
`;

export const Title2 = styled.h3`
  margin-bottom: 15px;
`;

export const Article = styled.article`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

export const Text = styled.p`
  font-size: 19px;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  font-size: 19px;
  font-weight: 500;

  &:first-child {
  margin-bottom: 10px;
`;
