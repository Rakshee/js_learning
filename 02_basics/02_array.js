const marvel_heros=["thor","ironman","spiderman"];
const dc_heros=["superman","batman","flash"];


// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros=marvel_heros.concat(dc_heros);
// console.log(all_heros);



// const all_new_heros=[...marvel_heros,...dc_heros];//spread op
// console.log(all_new_heros);


// const an_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

// const real_an_arr=an_arr.flat(Infinity);
// console.log(real_an_arr);


console.log(Array.isArray("Kunu"));
console.log(Array.from("Kunu"));
console.log(Array.from({name:"Kunu"}));

let score1=100
let score2=200
let score3=300


const user_scores=Array.of(score1,score2,score3);
console.log(user_scores);
