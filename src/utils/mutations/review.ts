import { Review } from '../../models/review';

export const LOCAL_STORAGE_REVIEWS_KEY = 'reviews';

export const addReview = (newReview: Review) => {
  const reviewsJSON = window.localStorage.getItem(LOCAL_STORAGE_REVIEWS_KEY);
  const response = { success: true, message: 'Successfully added review!' };
  if (!reviewsJSON) {
    const reviews = [
      newReview,
    ]

    window.localStorage.setItem(LOCAL_STORAGE_REVIEWS_KEY, JSON.stringify(reviews));
    return response;
  }

  const updatedReviews: Review[] = JSON.parse(reviewsJSON);
  updatedReviews.unshift(newReview);

  window.localStorage.setItem(LOCAL_STORAGE_REVIEWS_KEY, JSON.stringify(updatedReviews));
  return response;
};