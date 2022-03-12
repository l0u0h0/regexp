const str = `
010-1234-5678
helltheohi@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
// 생성자
// const regexp = new RegExp('the', 'gi')
// 리터럴
const regexp = /the/gi
console.log(str.match(regexp))

const regexp1 = /fox/gi
console.log(regexp1.test(str))

const regexp2 = /Heropy/gi
console.log(regexp2.test(str))

console.log(str.replace(regexp1, 'AAA'))
console.log(str)

// let는 재할당 가능
let str1 = `
010-1234-5678
helltheohi@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

str1 = str1.replace(regexp1, 'AAA')
console.log(str1)

console.log(str.match(/the/gi))
// \-> 이스케이프 문자 (문자로 해석되라는 의미)
// .은 일반적인 문자로 해석되지 않기에 \를 붙여줌
// 문자열이 문장이 끝나는 부분을 의미 $
console.log(str.match(/\.$/gim))
