import styled from '@emotion/styled';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { ReactComponent as SkullIcon } from '../assets/images/skull-icon.svg';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Link, useHistory } from 'react-router-dom';

export interface NavigationProps {

}

const Navigation: React.FC<NavigationProps> = () => {
  const history = useHistory();
  const navColor = useColorModeValue('rgba(0, 0, 0, 1)', 'rgba(255,255,255,1)');
  const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;    
    align-items: center;
    border-bottom: 1px solid ${navColor};    
    position: sticky;
    top: 0px;
    background-color: inherit;
  `;

  const Links = styled.div`
    width: 33%;
    display: flex;
    justify-content: space-between;
  `;

  const SkullWrapper = styled.div`
    width: 2.5rem;
    margin-top: 10px;
    fill: ${navColor};
    cursor: pointer;
  `;

  const handleHomeClick = () => {
    history.push('/home');
  }

  return (
    <Nav>
      <SkullWrapper onClick={handleHomeClick}>
        <SkullIcon />
      </SkullWrapper>
      <Links>
        <Link to='/home'>Home</Link>
        <Link to='/plays'>Plays</Link>
        <Link to='/reviews'>Reviews</Link>
      </Links>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Nav>
  );
}

export default Navigation;