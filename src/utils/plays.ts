export const getPlays = () => {
  const plays = [
    "All's Well That Ends Well (1602)",
    "Antony and Cleopatra (1606)",
    "As You Like It (1599)",
    "Comedy of Errors (1589)",
    "Coriolanus (1607)",
    "Cymbeline (1609)",
    "Hamlet (1600)",
    "Henry IV, Part I (1597)",
    "Henry IV, Part II (1597)",
    "Henry V (1598)",
    "Henry VI, Part I (1591)",
    "Henry VI, Part II (1590)",
    "Henry VI, Part III (1590)",
    "Henry VIII (1612)",
    "Julius Caesar (1599)",
    "King John (1596)",
    "King Lear (1605)",
    "Love's Labour's Lost (1594)",
    "Macbeth (1605)",
    "Measure for Measure (1604)",
    "Merchant of Venice (1596)",
    "Merry Wives of Windsor (1600)",
    "Midsummer Night's Dream (1595)",
    "Much Ado about Nothing (1598)",
    "Othello (1604)",
    "Pericles (1608)",
    "Richard II (1595)",
    "Richard III (1592)",
    "Romeo and Juliet (1594)",
    "Taming of the Shrew (1593)",
    "Tempest (1611)",
    "Timon of Athens (1607)",
    "Titus Andronicus (1593)",
    "Troilus and Cressida (1601)",
    "Twelfth Night (1599)",
    "Two Gentlemen of Verona (1594)",
    "Winter's Tale (1610)",
  ];

  return plays;
};

export const getRandomPlay = () => {
  const min = 2
  const max = getPlays().length;
  const index = Math.floor(Math.random() * (max - min + 1)) + min;

  return getPlays()[index];
}

let count = 0;
export const getNextPlay = () => {
  const plays = getPlays();
  const play = getPlays()[count];

  if (count <= plays.length) {
    count += 1;
  }
  if (count > plays.length) {
    count = 0;
  }

  return play;
};