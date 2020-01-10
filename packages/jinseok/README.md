# Solve Programmers Algorithms

## 스타일 가이드

[Airbnb Javascript Style Guilde](https://github.com/airbnb/javascript) 를 준수합니다.

### 스타일 가이드 커스텀

**`for-of` 이터레이터 사용 가능**
```javascript
for (const v of [1, 2, 3, 4, 5]) console.log(v);
```

**`function`으로 선언된 함수는 미리 선언되지 않아도 사용 가능**
```javascript
test()

function test() {
  console.log('test');
}
```

## ESLint

- eslint
- eslint-config-airbnb-base
- eslint-plugin-import

```bash
npm i -D eslint eslint-config-airbnb-base eslint-plugin-import
```

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser

```bash
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```
