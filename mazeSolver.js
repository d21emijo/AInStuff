class MazeSolver{
    constructor(x,y,witdh,height){
        this.x=x;
        this.y=y;
        this.witdh=witdh;
        this.height=height;
    }
    draw(ctx){
        ctx.beginPath();
        // ctx.rect(
        //     this.x-this.witdh/2, //placement
        //     this.x-this.height/2, //placement
        //     this.witdh, // witdh of solver
        //     this.height // -- of solver
        // );
        ctx.arc(
            this.x-this.witdh/2, //placement
            this.y-this.height/2, //placement
            15,
            0,
            2*Math.PI
        );
        ctx.fill();
    }
}