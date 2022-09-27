// Street Figther JS
const MIN_POWER = 10;
const MAX_POWER = 30;




let vida_ryu = 100;
let vida_ken = 100;


console.log(vida_ken)
console.log(vida_ryu)

let round = 0;

while(vida_ryu > 0 && vida_ken > 0){
round += 1;
let golpe_ryu = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
console.log("Golpe ryu " + golpe_ryu);

let golpe_ken = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
console.log("Golpe ken "+ golpe_ken);

if(golpe_ryu === golpe_ken){
    vida_ken -= golpe_ryu
    vida_ryu -= golpe_ken
}else if(golpe_ryu < golpe_ken){
    vida_ryu -= golpe_ken
}else{
    vida_ken -= golpe_ryu
}

console.log("round N°" + round)
console.log("Vida ryu " + vida_ryu)
console.log("Vida ken " + vida_ken)

}
if(vida_ryu === vida_ken){
    console.log("Empate")
}else if(vida_ryu > 0){
    console.log("Gano ryu")
} else{
    console.log("Gano ken")
}