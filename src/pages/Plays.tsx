import { SimpleGrid } from '@chakra-ui/layout';
import React from 'react';
import Play from '../components/Play';
import { getPlays } from '../utils/plays';

export interface PlaysProps {

}

const Plays: React.FC<PlaysProps> = () => {
  const plays = getPlays();
  return (
    <SimpleGrid minChildWidth='10rem' spacing='2rem'>
      {
        plays.sort().map(title => {
          return (
            <Play key={title} title={title} />
          )
        })
      }
    </SimpleGrid>
  );
}

export default Plays;