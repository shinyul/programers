import solution from './jinseok';

describe('텍스트 가운데 문자를 가져온다.', () => {
  it('텍스트가 abcde 이면, c를 리턴한다.', () => {
    // arrange
    const text = 'abcde';

    // act
    const expected = solution(text);

    // assert
    expect(expected).toBe('c');
  });

  it('텍스트가 abcd 이면, bc를 리턴한다.', () => {
    // arrange
    const text = 'abcd';

    // act
    const expected = solution(text);

    // assert
    expect(expected).toBe('bc');
  });
});
