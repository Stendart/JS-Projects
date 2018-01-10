class snowflake
{
	constructor()
	{
		this.type= Math.floor(Math.random()*2);
		this.posY=100;
		this.posX= Math.floor(Math.random() * 1000);
		//this.skin;
		//this.style="position:absolute";
console.log("X coordinate of snowflake: "+this.posX);
	/*	this.skin = document.createElement('div');
		this.skin.style.width='135px';
		this.skin.style.height='135px';
		this.skin.style.backgroundImage = "url(http://galerey-room.ru/images_thumb/093225_1419402745.png)";
		this.left = this.posX;
		this.top = this.posY;

		document.body.appendChild(this.skin);*/
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
		
		this.skin = document.createElement('div');
		this.skin.style.width = 135 + "px";
		this.skin.style.height = 135 + "px";
		this.skin.style.backgroundImage = "url(http://galerey-room.ru/images_thumb/093225_1419402745.png)";
this.skin.style.position= "absolute";
		this.skin.style.left= this.posX + "px";
		this.skin.style.top= this.posY + "px";
//console.log("Log left: " + )
		document.body.appendChild(this.skin);
	}

	snow2()
	{
		this.skin = document.createElement('div');
		this.skin.style.width = 135+"px";
		this.skin.style.height = 135+"px";
		this.skin.style.backgroundImage = "url(http://galerey-room.ru/images_thumb/093119_1419402679.png)";
//this.style="position:absolute";
this.skin.style.position= "absolute";
		this.skin.style.left= this.posX + "px";
		this.skin.style.top= this.posY + "px";

		document.body.appendChild(this.skin);
	}

	snow3()
	{
		this.skin = document.createElement('div');
		this.skin.style.width = 135+"px";
		this.skin.style.height = 135+"px";
		this.skin.style.backgroundImage = "url(http://galerey-room.ru/images_thumb/093242_1419402762.png)";
//this.style="position:absolute";
this.skin.style.position= "absolute";
		this.skin.style.left= this.posX + "px;";
		this.skin.style.top= this.posY + "px;";

		document.body.appendChild(this.skin);
	}

	snow()
	{
			console.log("Test>><<"+this);
		//this.skin.style.left++ +"px";
		this.posY++;
		this.skin.style.top = this.posY +"px";
	}
}

class Main
{
	constructor()
	{
		this.mas = [10]; 
		for(var i=0; i<10; i++)
		{
			this.mas[i] = new snowflake();
			this.mas[i].identify();
		}
		console.log("Привет мир");
		
	}
	/*createSnow()
	{
		var mas = [10] 
		for(var i=0; i<10; i++)
		{
			mas[i] = new snowflake();
			mas[i].identify();
		}
		return mas;
	}*/

	game()
	{
			console.log("Test!"+this);
		this.mas.forEach(function(el){
			el.snow();
		})
	}

	/*pack()
	{
		console.log("Test111");
		console.log("Test"+this);
		this.game();
	}*/

	play()
	{
		console.log("Test"+this);
		this.game();
		//window.setInterval(this.pack, 100);
		window.setTimeout(()=>this.play(), 1000);
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