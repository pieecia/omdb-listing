import { StyledContainer } from "@/components/Container/Container.styles.ts";
import { StyledHeader, StyledLogo } from "@/components/Header/Header.styles.ts";

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLogo to="/">Movie App</StyledLogo>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
