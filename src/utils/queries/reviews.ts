
import { useQuery } from "react-query";
import { LOCAL_STORAGE_REVIEWS_KEY } from "../mutations/review";
import { getReviews } from "./axios";
import { Review } from '../../models/review';

export const useReviews = () => {
  return useQuery('reviews', async () => {
    const data = await getReviews();
    const mergedReviews = [
      ...getLocalStorageReviews(),
      ...data,
    ]
    return mergedReviews;
  }, {
    refetchOnWindowFocus: false
  });
}

export const getLocalStorageReviews = () => {
  const reviewsJSON = window.localStorage.getItem(LOCAL_STORAGE_REVIEWS_KEY);

  if (!reviewsJSON) return [];

  const reviews = JSON.parse(reviewsJSON) as Review[];

  return reviews;
}