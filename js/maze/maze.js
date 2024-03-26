const canvas=document.getElementById("myCanvas");
// canvas.width=1200;

const ctx = canvas.getContext("2d");
const mazeSolver = new MazeSolver(20,20,0,0,0); //(x,y,witdh,height,angle)



animate();
let newAngle;
function randomfunc(){
    newAngle=2*Math.PI*Math.random();
    console.log("randomfunc",newAngle);
    console.log("KLICK");
    animate(newAngle)
}

function animate(newAngle){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    canvas.height=window.innerHeight*.8; // change to segmentetttttttttts
    mazeSolver.draw(ctx,newAngle);
    console.log("animate", newAngle);
    graph.draw(ctx);
    // requestAnimationFrame(animate)
}

