import { getLocalStorageReviews } from "./reviews";

describe('review crud', () => {
  it('returns an array', () => {
    const response = getLocalStorageReviews();

    expect(response).toBeDefined();
  });
})