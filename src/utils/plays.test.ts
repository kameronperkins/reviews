import { getPlays } from "./plays"

describe('plays crud', () => {
  it('returns a list of plays', () => {
    const response = getPlays();

    expect(response.length).toBeGreaterThan(0)
  })
})