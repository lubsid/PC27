class rope{
	constructor(pointA,bodyB)
	{
		
		var options={
			pointA:pointA,
			bodyB:bodyB,
			//stiffness:0.7
			
		}
		//this.pointA=pointA;
		//console.log(options);
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		//var pointA=this.rope.bodyA.position;
		//var pointB=this.rope.bodyB.position;

		strokeWeight(2);

	//	var Anchor1X=pointA.x
	//	var Anchor1Y=pointA.y

	//	var Anchor2X=pointB.x+this.offsetX
	//	var Anchor2Y=pointB.y+this.offsetY

		line(this.rope.pointA.x,this.rope.pointA.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y);
	}

}