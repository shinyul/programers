function solution(n: number, lost: number[], reserve: number[]): number {
  // 정렬, 중복제거
  let [reserved, losted] = eliminate(asc(reserve), asc(lost));
  let covered = 0;

  // 체육복 체격 체크
  // 체육복을 빌려준 학생은, 더 이상 빌려 줄 체육복이 없으므로 제외한다.
  for (let i = 0; i < losted.length; i++) {
    let indexed;
    if ((indexed = reserved.indexOf(losted[i] - 1)) > -1) {
      reserved.splice(indexed, 1)
      covered++;
    } else if ((indexed = reserved.indexOf(losted[i])) > -1) {
      reserved.splice(indexed, 1)
      covered++;
    } else if ((indexed = reserved.indexOf(losted[i] + 1)) > -1) {
      reserved.splice(indexed, 1)
      covered++;
    }
  }

  return n - losted.length + covered;

  // 다른 방법
  // return n - losted.filter(a => {
  //     const b = reserved.find(r => Math.abs(r - a) <= 1)
  //     if (!b) return true;
  //     reserved = reserved.filter(r => r !== b)
  // }).length;
}

export function asc<T>(collection: T[]): T[] {
  return [...collection].sort((a, b) => {
    if (a > b) 1;
    if (a < b) -1;
    return 0;
  });
}

export function subtract<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.reduce((result, v) => {
    if (!arr2.includes(v)) result.push(v);
    return result;
  }, []);
}

export function eliminate<T>(arr1: T[], arr2: T[]): T[][] {
  return [subtract(arr1, arr2), subtract(arr2, arr1)];
}

export default solution;
