export function findWinner(boxes) {
  const winComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winComb.length; i++) {
    const [a, b, c] = winComb[i];

    if (boxes[a] == boxes[b] && boxes[b] == boxes[c]) {
      return [a,b,c];
    }
  }

  return [];
}

export function areAllBoxesChecked(boxes) {
  let count = 0;

  boxes.forEach((element) => {
    if (element) {
      count++;
    }
  });

  if (count === 9) {
    return true;
  } else {
    return false;
  }
}
