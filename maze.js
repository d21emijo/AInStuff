const canvas=document.getElementById("myCanvas");
canvas.width=200;

const ctx = canvas.getContext("2d");
const mazeSolver = new MazeSolver(20,20,0,0,0); //(x,y,witdh,height,angle)
// const controls = new controls(0);
// mazeSolver.draw(ctx);

animate();
// randomfunc();
let newAngle;
function randomfunc(){
    // let newAngle=0;

    newAngle=1*Math.random();
    console.log("randomfunc",newAngle);
    console.log("KLICK");
}

function animate(newAngle){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    newAngle=0;
    // console.log(newAngle)
    
    canvas.height=window.innerHeight*.8; // change to segmentetttttttttts
    mazeSolver.draw(ctx,newAngle);

    test = document.getElementById("testing");
    test.addEventListener("click", () =>{
        console.log("clkiak2")
        console.log("i animate",newAngle);
        requestAnimationFrame(animate);
    });
}
