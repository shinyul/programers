function solution(heights: number[]): number[] {
  const answer = [];
  const size = heights.length - 1;

  for (let i = size; i > -1; i--) {
    for (let j = i - 1; j > -1; j--) {
      if (heights[i] < heights[j]) {
        answer[i] = j + 1;
        break;
      }
    }

    if (!answer[i]) answer[i] = 0;
  }

  return answer;
}

export = solution;
