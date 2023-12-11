import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 2rem;
`;

export const StyledLogo = styled(Link)`
  font-size: 2rem;
  margin: 0;
  text-decoration: none;
  color: #000;
`;
