
import { useQuery } from "react-query";
import { getReviews } from "./axios";

export const useReviews = () => {
  return useQuery('reviews', async () => {
    const data = getReviews();

    return data;
  }, {});
}