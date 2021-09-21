import styled from '@emotion/styled';
import React from 'react';
import { useReviews } from '../utils/queries/reviews';
import PlaywrightReview from './PlaywrightReview';

export interface ReviewsProps {

}

const Reviews: React.FC<ReviewsProps> = () => {
  const { data: reviewData } = useReviews();

  const Reviews = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  return (
    <Reviews>
      {
        reviewData && reviewData.map(review => {
          return (
            <PlaywrightReview review={review} />
          )
        })
      }
    </Reviews>
  );
}

export default Reviews;