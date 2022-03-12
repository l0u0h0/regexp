const str = `
010-1234-5678
helltheohi@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog
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
The quick brown fox jumps over the lazy dog
abbcccdddd
`

str1 = str1.replace(regexp1, 'AAA')
console.log(str1)
