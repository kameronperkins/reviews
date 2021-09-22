import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import styled from '@emotion/styled';
import React from 'react';
import { useHistory } from 'react-router';
import William from '../assets/images/william.png';

export interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
  const history = useHistory();
  const Home = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 2rem 15rem;
    @media (max-width: 420px) {
      padding: 2rem;
    }
  `;

  const HomeLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const Introduction = styled.div`
    font-size: 1.5rem;
  `;

  const IntroductionBold = styled.div`
    font-size: 2rem;
    font-weight: bold;
  `;

  const IntroductionByLine = styled.div`
    font-size: 0.875rem;
    font-weight: bold;
  `;

  const ButtonWrapper = styled.div`
    padding-top: 2rem;
  `;

  const miscColor = useColorModeValue('rgba(0,0,0,1)', '#1A202C');
  const yellowColor = useColorModeValue('#ECC94B', '#FAF089');
  const MyWork = styled(Button)`
    background-color: ${yellowColor};
    color: ${miscColor};
  `;

  const offsetColor = useColorModeValue('', 'invert(1)');
  const Will = styled(Image)`
    filter: ${offsetColor};
    @media (max-width: 420px) {
      padding-top: 2rem;
    }
  `;
  return (
    <Home>
      <HomeLeft>
        <Introduction>
          Hello, I'm
        </Introduction>
        <IntroductionBold>
          William Shakespeare
        </IntroductionBold>
        <IntroductionByLine>
          Playwright
        </IntroductionByLine>
        <ButtonWrapper>
          <MyWork onClick={() => history.push('/plays')}>My work</MyWork>
          &nbsp;
          &nbsp;
          <Button onClick={() => history.push('/reviews')}>Leave review</Button>
        </ButtonWrapper>
      </HomeLeft>
      <Will src={William} alt='Bust of William Shakespeare' filter='invert' />
    </Home>
  );
}

export default Home;