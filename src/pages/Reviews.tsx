import styled from '@emotion/styled';
import React from 'react';
import { useReviews } from '../utils/queries/reviews';
import PlaywrightReview from '../components/PlaywrightReview';
import AddReview from '../components/AddReview';
import { useDisclosure } from '@chakra-ui/react';

export interface ReviewsProps {

}

const Reviews: React.FC<ReviewsProps> = () => {
  const { data: reviewData } = useReviews();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Reviews = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  `;

  if (!reviewData || (reviewData && reviewData.length === 0)) {
    return (
      <Reviews>
        Loading...
      </Reviews>
    )
  }

  return (
    <>
      <AddReview isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Reviews>
        {
          reviewData && reviewData.sort().map(review => {
            return (
              <PlaywrightReview key={review.id} review={review} />
            )
          })
        }
      </Reviews>
    </>
  );
}

export default Reviews;