const canvas=document.getElementById("myCanvas");
canvas.height=window.innerHeight;
canvas.width=200;

const ctx = canvas.getContext("2d");
const mazeSolver = new MazeSolver(50,50,25,15);
mazeSolver.draw(ctx);


