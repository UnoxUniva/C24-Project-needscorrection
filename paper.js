class paper{
    constructor(x,y,r)
    {
    var paper_options={
        isStatic:false,
        density:1.2,
        restitution:1.5,
        friction:0.5
    }

    this.body = Bodies.circle(x,y,20,paper_options);
        this.radius = 20;
        
        
        World.add(world,this.body)
    }
    display(){
        var position= this.body.position

        rectMode(CENTER)
    }
}    
