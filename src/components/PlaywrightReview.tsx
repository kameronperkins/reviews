import { useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { Review } from '../models/review';

export interface PlaywrightReviewProps {
  review: Review;
}

const PlaywrightReview: React.FC<PlaywrightReviewProps> = ({ review }) => {
  const PlaywrightReview = styled.div`
    padding: 1rem;
    border: 1px solid lightgray;
    border-radius: 4px;
    margin: 1.5rem;
    width: 30rem;
  `;

  const authorColor = useColorModeValue('rgba(0,0,0,0.6)', 'rgba(255,255,255,0.7)');
  const ReviewAuthor = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 1.3rem;    
    font-weight: 600;
    color: ${authorColor};
  `;

  const dateColor = useColorModeValue('#ECC94B', '#FAF089');
  const ReviewDate = styled.div`
    text-align: left;
    font-size: 0.875rem;
    color: ${dateColor};
  `;

  const bodyColor = useColorModeValue('rgba(0,0,0,0.4)', 'rgba(255,255,255,0.6)');
  const ReviewBody = styled.div`    
    font-size: 1rem;
    text-align: left;    
    color: ${bodyColor};
  `;

  // const ReviewTitle = styled.div`
  //   text-align: left;    
  //   font-size: 1rem;
  //   font-weight: 600;
  //   color: ${bodyColor};
  // `;

  const ratingColor = useColorModeValue('#ECC94B', '#FAF089');
  const ReviewRating = styled.div`
    font-size: 1rem;
    text-align: right;
    color: ${ratingColor};
  `;

  return (
    <PlaywrightReview>
      <ReviewAuthor>
        {review.author}
      </ReviewAuthor>
      <ReviewDate>
        {new Date(review.publishDate).toLocaleString('en-us', { month: 'short', day: 'numeric', year: 'numeric' })}
      </ReviewDate>
      {/* <ReviewTitle>
        {review.title}
      </ReviewTitle> */}
      <ReviewBody>
        {review.body}
      </ReviewBody>
      <ReviewRating>
        {review.rating}/5.0
      </ReviewRating>
    </PlaywrightReview>
  );
}

export default PlaywrightReview;