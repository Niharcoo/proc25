class Bin{
	constructor(x,y)
	{
	
		this.width=200;
		this.height=200;
    var option={
      isStatic:true
    }
		this.bin=Bodies.rectangle(x,y ,this.width, this.height,option);
	this.image=loadImage("images/binimage.png");
				
		World.add(world, this.bin);

	}
	display()
	{
			var pos=this.bin.position;
			push()
			translate(pos.x, pos.y);
			imageMode(CENTER);
			//angleMode(RADIANS);
   
			//rotate(this.angle)
		image(this.image,0,0,this.width,this.height);
			pop()

	}
}
