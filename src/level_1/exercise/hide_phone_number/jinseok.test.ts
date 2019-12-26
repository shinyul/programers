import solution from './jinseok';

describe('핸드폰 번호 뒷 4자리를 제외한, 나머지를 애스터리스크(*)로 치환하여 리턴한다.', () => {
  it('0000 이면, 0000를 리턴한다.', () => {
    // arrange
    const phone_number = '0000';

    // act
    const expected = solution(phone_number);

    // assert
    expect(expected).toEqual('0000');
  });

  it('00001222 이면, ****1222를 리턴한다.', () => {
    // arrange
    const phone_number = '00001222';

    // act
    const expected = solution(phone_number);

    // assert
    expect(expected).toEqual('****1222');
  });

  it('000012223322 이면, ********3322를 리턴한다.', () => {
    // arrange
    const phone_number = '000012223322';

    // act
    const expected = solution(phone_number);

    // assert
    expect(expected).toEqual('********3322');
  });
});
