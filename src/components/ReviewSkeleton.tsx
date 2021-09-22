import { Box, SimpleGrid, Center, SkeletonText } from '@chakra-ui/react';
import React from 'react';

export interface ReviewSkeletonProps {

}

const ReviewSkeleton: React.FC<ReviewSkeletonProps> = () => {
  return (
    <div>
      <Center>
        <SimpleGrid columns={2} spacing={10} width='70%'>
          <Box padding="6" boxShadow="lg" >
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
          <Box padding="6" boxShadow="lg" >
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
          <Box padding="6" boxShadow="lg" >
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
          <Box padding="6" boxShadow="lg" >
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
          <Box padding="6" boxShadow="lg" >
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
          <Box padding="6" boxShadow="lg" >
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
          <Box padding="6" boxShadow="lg" >
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
          <Box padding="6" boxShadow="lg" >
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        </SimpleGrid>
      </Center>
    </div>
  );
}

export default ReviewSkeleton;