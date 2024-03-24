class Graph {
    constructor(points = [],segments = []){
        this.points = points+10;
        this.segments = segments;
    }
    draw(ctx){
        for (const seg of this.segments){
            seg.draw(ctx);
        }
        for (const point of this.points){
            point.draw(ctx);
        }
    }
}