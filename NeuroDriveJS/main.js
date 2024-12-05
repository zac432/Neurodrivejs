const canvas=document.getElementById("myCanvas");
canvas.width=200;

const ctx = canvas.getContext("2d");
const car = new Car(100,100,30,50);
car.draw(ctx);

animate();  //call the funtion to animate it 

function animate(){
    car.update();   //updating the spot of the car 
    canvas.height=window.innerHeight;
    car.draw(ctx);  //redrawing the car on the updated spot 
    requestAnimationFrame(animate);  //recursive call to animate the car
}