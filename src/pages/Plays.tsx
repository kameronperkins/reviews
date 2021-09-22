import { useColorModeValue } from '@chakra-ui/color-mode';
import styled from '@emotion/styled';
import React from 'react';
import { getPlays } from '../utils/plays';
export interface PlaysProps {

}

const Plays: React.FC<PlaysProps> = () => {
  const plays = getPlays();
  const groupedPlays = plays.reduce((r, a) => {
    r[a.year] = r[a.year] || [];
    r[a.year].push(a);
    return r;
  }, Object.create(null));

  const PlaysWrapper = styled.div`
    padding: 2rem 0;
  `;

  const PlayYear = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 1.3rem;    
  `;

  const LineWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;

  const yellowColor = useColorModeValue('#ECC94B', '#FAF089');
  const miscColor = useColorModeValue('rgba(0,0,0,0.6)', 'rgba(255,255,255,0.7)');
  const Line = styled.div`
    border-left: 2px dotted ${yellowColor};
    height: 2rem;
    margin: 1rem 0;    
  `;

  const TitleGrid = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;

  const TitleRow = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
  `;

  const Play = styled.div`
    margin: 0 1rem;
    padding: 1rem;
    border: 1px solid ${miscColor};
    border-radius: 4px;
  `;

  return (
    <PlaysWrapper>
      {
        Object.keys(groupedPlays).map((year, index) => (
          <>
            {
              index !== 0 &&
              <LineWrapper>
                <Line />
              </LineWrapper>
            }
            <PlayYear>{year}</PlayYear>
            <LineWrapper>
              <Line />
            </LineWrapper>
            <TitleGrid>
              <TitleRow>
                {
                  groupedPlays[year].map((play: { title: string, year: number }) => (
                    <Play>{play.title}</Play>
                  ))
                }
              </TitleRow>
            </TitleGrid>
          </>
        ))
      }
    </PlaysWrapper>
  );
}

export default Plays;