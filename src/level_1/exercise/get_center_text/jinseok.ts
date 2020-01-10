export default function solution(text: string): string {
  const harf = text.length / 2;
  return harf % 1 === 0 ? text.substr(harf - 1, 2) : text[Math.floor(harf)];
}
