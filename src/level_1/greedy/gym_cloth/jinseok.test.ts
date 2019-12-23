import solution, { eliminate } from './jinseok';

describe('체육 수업에 참여할 수 있는 최대 인원을 구할 수 있다.', () => {
  it('전체 학생 수는 5, 체육복을 잃은 학생은 [2, 4], 여분의 체육복이 있는 학생은 [1, 3, 5] 일 때, 수업에 참여할 수 있는 최대 인원은 5이다.', () => {
    // arrange
    const person = 5;
    const lost = [2, 4];
    const reserve = [1, 3, 5];

    // act
    const expected = solution(person, lost, reserve);

    // assert
    expect(expected).toBe(5);
  });

  it('전체 학생 수는 5, 체육복을 잃은 학생은 [2, 4], 여분의 체육복이 있는 학생은 [3] 일 때, 수업에 참여할 수 있는 최대 인원은 4이다.', () => {
    // arrange
    const person = 5;
    const lost = [2, 4];
    const reserve = [3];

    // act
    const expected = solution(person, lost, reserve);

    // assert
    expect(expected).toBe(4);
  });

  it('전체 학생 수는 3, 체육복을 잃은 학생은 [3], 여분의 체육복이 있는 학생은 [1] 일 때, 수업에 참여할 수 있는 최대 인원은 2이다.', () => {
    // arrange
    const person = 3;
    const lost = [3];
    const reserve = [1];

    // act
    const expected = solution(person, lost, reserve);

    // assert
    expect(expected).toBe(2);
  });

  it('전체 학생 수는 5, 체육복을 잃은 학생은 [1, 2, 4], 여분의 체육복이 있는 학생은 [2, 3] 일 때, 수업에 참여할 수 있는 최대 인원은 4이다.', () => {
    // arrange
    const person = 5;
    const lost = [1, 2, 4];
    const reserve = [2, 3];

    // act
    const expected = solution(person, lost, reserve);

    // assert
    expect(expected).toBe(4);
  });

  it('전체 학생 수는 5, 체육복을 잃은 학생은 [1, 2, 4], 여분의 체육복이 있는 학생은 [2, 3] 일 때, 수업에 참여할 수 있는 최대 인원은 4이다.', () => {
    // arrange
    const person = 5;
    const lost = [1, 2, 4];
    const reserve = [2, 3];

    // act
    const expected = solution(person, lost, reserve);

    // assert
    expect(expected).toBe(4);
  });

  it('전체 학생 수는 5, 체육복을 잃은 학생은 [1, 2, 4], 여분의 체육복이 있는 학생은 [2, 3] 일 때, 수업에 참여할 수 있는 최대 인원은 5이다.', () => {
    // arrange
    const person = 5;
    const lost = [1, 2, 4];
    const reserve = [2, 3];

    // act
    const expected = solution(person, lost, reserve);

    // assert
    expect(expected).toBe(4);
  });

  it('전체 학생 수는 7, 체육복을 잃은 학생은 [2, 3, 4], 여분의 체육복이 있는 학생은 [1, 2, 3, 6] 일 때, 수업에 참여할 수 있는 최대 인원은 6이다.', () => {
    // arrange
    const person = 7;
    const lost: number[] = [2, 3, 4];
    const reserve: number[] = [1, 2, 3, 6];

    // act
    const expected = solution(person, lost, reserve);

    // assert
    expect(expected).toBe(6);
  });

  it('전체 학생 수는 7, 체육복을 잃은 학생은 [2, 3, 4], 여분의 체육복이 있는 학생은 [1, 5] 일 때, 수업에 참여할 수 있는 최대 인원은 6이다.', () => {
    // arrange
    const person = 7;
    const lost: number[] = [2, 3, 4];
    const reserve: number[] = [1, 5];

    // act
    const expected = solution(person, lost, reserve);

    // assert
    expect(expected).toBe(6);
  });
});
