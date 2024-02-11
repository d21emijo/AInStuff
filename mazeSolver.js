class mazeSolver{
    constructor(x,y,witdh,height){
        this.x=x;
        this.x=x;
        this.height=height;
        this.witdh=witdh;

    }
    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            this.x-this.witdh/2,
            this.x-this.height/2,
            this.witdh,
            this.height
        );
        ctx.fill();
    }
}