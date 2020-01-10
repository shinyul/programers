export default function solution(text: string): number {
  const size: number = text.length > 1 ? Math.floor(text.length / 2) : 1;
  return Math.min(...[...Array(size)].map((_, i) => compress(text, i + 1).length));
}

function compress(text: string, size: number): string {
  return combine(
    ...chunk(text, size).reduce(
      ([result, current, repeat]: [string, string, number], value) => {
        return current === value ? [result, value, repeat + 1] : [combine(result, current, repeat), value, 1];
      },
      ['', '', 1]
    ) as [string, string, number]
  );
}

function combine(data: string, current: string, repeat: number): string{
  return `${data}${output(current, repeat)}`;
}

function output(value: string, repeat: number): string {
  return repeat > 1 ? `${repeat}${value}` : value;
}

function chunk(text: string, size = 1): string[] {
  const leng = text.length / size;
  const result = [];
  let idx = 0;

  while (idx < leng) {
    result[idx] = text.substring(idx * size, (idx + 1) * size);
    idx += 1;
  }

  return result;
};
