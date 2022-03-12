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