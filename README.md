# 정규표현식(RegExp)

정규식 (Regular Expression)

## 역할

- 문자의 검색(Search)
- 문자의 대체(Replace)
- 문자의 추출(Extract)

## 사이트

https://regexr.com/

## 정규식 생성

```js
// 생성자
new RegExp("표현", "옵션");
new RegExp("[a-z]", "gi") /
  // 리터럴
  포현 /
  옵션 /
  [a - z] /
  gi;
```

## 예제 문자

```js
const str = `
010-1234-5678
helltheohi@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;
```

## 메소드

| 메소드  | 문법                               | 설명                      |
| ------- | ---------------------------------- | ------------------------- |
| test    | `정규식.test(문자)`                | 일치 여부 반환(Boolean)   |
| match   | `문자열.match(정규식)`             | 일치하는 문자의 배열 반환 |
| replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자 대체        |

## 플래그(옵션)

| 플래그 | 설명                                |
| ------ | ----------------------------------- |
| g      | 모든 문자 일치(global)              |
| i      | 영어 대소문자를 구분 X(ignore case) |
| m      | 여러 줄 일치(multi line)            |
