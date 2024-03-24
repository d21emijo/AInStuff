class MazeSolver{
    constructor(x,y,witdh,height){
        this.x=x;
        this.y=y;
        this.witdh=witdh;
        this.height=height;
        // this.angle=newAngle;
    }

    draw(ctx,newAngle){
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(newAngle); //angle of view?
        ctx.beginPath();
        ctx.arc(
            0, //placement
            0, //placement
            15, // r
            0,
            1.*Math.PI
        )
        ctx.fillStyle = "#412922"; //mörk
        ctx.fill();
        ctx.beginPath();
        ctx.arc(
            0, //placement
            0, //placement
            10,
            0,
            2*Math.PI
        )
        ctx.fillStyle = "#B58577"; //ljus
        ctx.fill();
        // ctx.restore();
        // ctx.save();

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fillRect(0,0, 2, 15);
        ctx.restore();
    }


}