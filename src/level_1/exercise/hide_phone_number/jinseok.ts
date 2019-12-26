export default function solution(phone_number: string): string {
  return phone_number.replace(/\d+(?=\d{4})/, num => '*'.repeat(num.length));
}
