class snowflake
{
	constructor()
	{
		this.type= Math.floor(Math.random()*2);
		this.posY=100;
		this.posX= Math.floor(Math.random() * 1000);

console.log("X coordinate of snowflake: "+this.posX);
	
	this.skin = document.createElement('div');
		this.skin.style.width = 40 + "px";
		this.skin.style.height = 40 + "px";
		this.skin.style.position= "absolute";
		this.skin.style.left= this.posX + "px";
		this.skin.style.top= this.posY + "px";
		document.body.appendChild(this.skin);
		this.identify();
	}

	identify()
	{
		switch(this.type)
		{
			case 0: this.snow1();
			break;
			case 1: this.snow2();
			break;
			case 2: this.snow3();
			break;
		}
	}

	snow1()
	{
		this.skin.style.backgroundImage = "url(http://galerey-room.ru/images_thumb/093225_1419402745.png)";
	}

	snow2()
	{	
		this.skin.style.backgroundImage = "url(http://galerey-room.ru/images_thumb/093119_1419402679.png)";
	}

	snow3()
	{
		this.skin.style.backgroundImage = "url(http://galerey-room.ru/images_thumb/093242_1419402762.png)";
	}

	snow()
	{
		this.posY+=2;
		this.skin.style.top = this.posY +"px";
	}
}

class Main
{
	constructor()
	{
		this.kolSnow = 10;
		this.mas = []; 
		for(var i=0; i<this.kolSnow; i++)
		{
			this.mas[i] = new snowflake();
			//this.mas[i].identify();

		}
	}


	createSnowflake()
	{
		this.kolSnow++;
		this.mas[this.kolSnow] = new snowflake();
	}

	game()
	{
		this.mas.forEach(function(el){
			el.snow();
		})
	}


	play()
	{
		console.log("Test"+this);
		this.game();
		//window.setInterval(this.pack, 100);
		window.setTimeout(()=>this.play(), 100);
	}
}

window.onload=function()
{
	pl = new Main();
	pl.play();
}


/*
const myFunc = function(){
...
window.setTimeout(myFunc, 100);
}
*/