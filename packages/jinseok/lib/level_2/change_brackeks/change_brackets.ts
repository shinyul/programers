const START_BRACKET = '(';
const END_BRACKET = ')';

/**
 * 올바른 문자열인지 판단한다.
 */
export function isCorrect(text: string): boolean  {
  if (!isCorrectedStartAndEnd(text)) return false;
  return [...getMatchedText(text)].every((v: string) => isCorrectedStartAndEnd(v));
};

/**
 * '(' -> ')'으로, ')' -> '('로 변환한다.
 */
export function revertCharacter (character: string): string {
  return (character === START_BRACKET) ? END_BRACKET : START_BRACKET;
}

/**
 * 올바른 문자열을 가져온다.
 */
export function* getMatchedText(text: string): Generator<string> {
  for (const [value] of recursive(text)) yield value;
};

/**
 * 올바른 문자열을 가져온다.
 */
function* getText(text: string): Generator {
  for (const [value, rest] of recursive(text)) {
    if (isCorrect(value)) yield value;
    else {
      yield changeText(value, rest);
      break;
    }
  }
};

/**
 * 올바른 문자열로 변환한다.
 */
export function parse(text: string): string {
  if (text === '') return '';
  if (isCorrect(text)) return text;

  return [...getText(text)].join('');
}

/**
 * 정확하지 않은 문자열을 변환한다.
 */
function changeText(text: string, rest: string): string {
  return `(${[...getText(rest)].join('')})${text.substring(1, text.length -1).replace(/\(|\)/g, revertCharacter)}`;
}

/**
 * '('로 시작하고, ')'로 끝나는지 판단한다.
 */
function isCorrectedStartAndEnd(text: string): boolean {
  return text.startsWith(START_BRACKET) && text.endsWith(END_BRACKET);
}

/**
 * 문자열을 균형잡힌 문자열 갯수만큼 순회한다.
 */
function* recursive(text: string): Generator<string[]> {
  let count = 0;
  let pointer = 0;

  for (const [i, v] of text.split('').entries()) {
    if (v === START_BRACKET) count++;
    else count--;

    if (count === 0) {
      yield [text.substring(pointer, i + 1) as string, text.substring(pointer, text.length)];
      pointer = i + 1;
    }
  }
}
