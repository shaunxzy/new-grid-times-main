import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <IconWrapper>
          <Search size={24}/>
          <Menu size={24}/>
        </IconWrapper>
        <Logo />
        <ButtonWrapper>
          <Button>SUBSCRIBE</Button>
          <LinkWrapper>Already a subscriber?</LinkWrapper>
        </ButtonWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const IconWrapper = styled.div`
  display: none;
  flex-direction: row;
  

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    gap: 2rem;
  }
`

const ButtonWrapper = styled.div`
  display: none;
  flex-direction: column;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

const LinkWrapper = styled.div`
  text-underline-offset: 0.1rem;
  text-decoration: underline;
  font-style: italic;
`

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    align-items: baseline;
    justify-content: space-between;
  }
`;

export default Header;
