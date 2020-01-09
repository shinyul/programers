import { isCorrect, parse } from './change_brackets';

describe('[2020카카오공채] 괄호 변환', () => {
  describe('올바른 가로 문자열인지 판단할 수 있다.', () => {
    it('문자열 시작이 \'(\' 아니면, false를 반환한다.', () => {
      const text = ')(';
      const result = isCorrect(text);
      expect(result).toBe(false);
    });

    it('문자열 마지막이 \')\' 아니면, false를 반환한다.', () => {
      const text = '())(';
      const result = isCorrect(text);
      expect(result).toBe(false);
    });
  });

  describe('균형잡힌 문자열을 가져올 수 있다.', () => {
    it('문자열이 빈문자열이면, 빈문자열을 반환한다.', () => {
      const text = '';
      const result = parse(text);
      expect(result).toEqual('');
    });

    it('올바른 문자열이면, 그대로 문자열을 반환한다.', () => {
      const text = '(())()';
      expect(parse(text)).toEqual(text);
    });

    it('잘못된 문자열을, 올바른 문자열로 변환하여 반환한다.', () => {
      expect(parse('()))((()')).toEqual('()(())()');
    });
  });
});
