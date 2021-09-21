import styled from '@emotion/styled';
import React from 'react';
import { useReviews } from '../utils/queries/reviews';
import PlaywrightReview from '../components/PlaywrightReview';

export interface ReviewsProps {

}

const Reviews: React.FC<ReviewsProps> = () => {
  const { data: reviewData } = useReviews();

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
    <Reviews>
      {
        reviewData && reviewData.sort().map(review => {
          return (
            <PlaywrightReview review={review} />
          )
        })
      }
    </Reviews>
  );
}

export default Reviews;