window.addEventListener("load",function(){
class Rectangulo {
  constructor (x, y){
    this.x = x;
    this.y = y;
  }
  static area (a, b) {
    return a * b;
  }
  static perimetro (a,b) {
    return a + a + b + b;
  }
}
let rectangulo1 =  new Rectangulo (2,3);
document.getElementById("demo66").innerHTML = Rectangulo.perimetro(2,3);
document.getElementById("demo67").innerHTML = Rectangulo.area(2,3);

// Ejemplo de callback
setTimeout(amor, 4000);
function amor(){
  document.getElementById("demo68").innerHTML = "!!! Te Amo mucho Mi Conejita Hermosa!!!"
}

// Ejemplo de setInterval()
setInterval(contador_tiempo, 1000);
function contador_tiempo(){
  let d = new Date();
  document.getElementById("demo69").innerHTML = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
}

// Ejemplo de promise
function myDisplayer(some) {
  document.getElementById("demo70").innerHTML = some;
}
let myPromise = new Promise(function(myResolve, myReject){
  let x =5;
// cambia la variable x por el numero 5 y cambiara el resultado a error
  if (x == 0){
    myResolve("OK");
  } else {
    myReject("ERROR");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);

},true);
