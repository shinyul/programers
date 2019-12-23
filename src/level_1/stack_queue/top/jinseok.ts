function solution(heights: number[]): number[] {
  const answer = [];
  const size = heights.length - 1;

  for (let i = size; i > -1; i--) {
    answer[i] = 0;

    for (let j = i - 1; j > -1; j--) {
      if (heights[i] < heights[j]) {
        answer[i] = j + 1;
        break;
      }
    }
  }

  return answer;
}

export default solution;
