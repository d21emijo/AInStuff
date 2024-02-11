const canvas=document.getElementById("myCanvas");
canvas.height=window.innerHeight;
canvas.width=200;

const ctx = canvas.getContext("2d");
const mazeSolver= new mazeSolver(100,100,30,50);
mazeSolver.draw(ctx);