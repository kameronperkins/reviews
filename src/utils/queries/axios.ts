import axios from "axios";
import { Review } from "../../models/review";

export const getReviews = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_REVIEWS_HOST}/reviews`, { headers: { 'x-api-key': process.env.REACT_APP_REVIEWS_TOKEN } });

  const transformedData = data.map((review: { author: string, body: string, id: string, publish_date: string, rating: number }) => {
    return {
      id: review.id,
      author: review.author,
      body: review.body,
      publishDate: review.publish_date,
      rating: review.rating,
    } as Review;
  });

  return transformedData as Review[];
};