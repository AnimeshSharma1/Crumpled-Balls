class paper {
constructor(x,y,width,height){
    
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2,

   };

    this.body = Body.ellipse( x, y, 50, 50,20,options);
    this.width = 50;
    this.height = 50;
    World.add(world, this.body);
}
display(){
    var pos = this.body.position;
    
  

    fill('red')
    rect(pos.x,pos.y,this.width,this.height);
}



}