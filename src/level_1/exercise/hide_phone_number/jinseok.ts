export default function solution(phone_number: string): string {
  const length = phone_number.length;
  const divided_index = length - 4;

  return [
    phone_number.substring(0, divided_index).replace(/\d/g, '*'),
    phone_number.substring(divided_index, length)
  ].join('');
}
