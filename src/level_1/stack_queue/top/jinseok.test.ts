import solution from './jinseok';

describe('각 탑의 송신을 수신하는 탑의 위치를 반환한다.', () => {
  it('탑이 [6, 9, 5, 7, 4] 이면, 수신되는 탑은 [0, 0, 2, 2, 4] 이다.', () => {
    // arrange
    const heighs = [6, 9, 5, 7, 4];

    // act
    const result = solution(heighs);

    // assert
    expect([0,0,2,2,4]).toEqual(result);
  });

  it('탑이 [3, 9, 9, 3, 5, 7, 2] 이면, 수신되는 탑은 [0, 0, 0, 3, 3, 3, 6] 이다.', () => {
    // arrange
    const heighs = [6, 9, 5, 7, 4];

    // act
    const result = solution(heighs);

    // assert
    expect([0,0,2,2,4]).toEqual(result);
  });

  it('탑이 [1, 5, 3, 6, 7, 6, 5] 이면, 수신되는 탑은 [0, 0, 2, 0, 0, 5, 6] 이다.', () => {
    // arrange
    const heighs = [6, 9, 5, 7, 4];

    // act
    const result = solution(heighs);

    // assert
    expect([0,0,2,2,4]).toEqual(result);
  });
});
