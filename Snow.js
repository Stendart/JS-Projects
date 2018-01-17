class snowflake
{
	constructor()
	{


		this.type= Math.floor(Math.random()*2);
		this.posY=-50;
		this.posX= Math.floor(Math.random() * document.body.clientWidth);
		this.speedSnow = Math.floor(1+Math.random()*4);
	
		this.skin = document.createElement('div');
		this.skin.style.width = 40 + "px";
		this.skin.style.height = 40 + "px";
		this.skin.style.position= "absolute";
		this.skin.style.left= this.posX + "px";
		this.skin.style.top= this.posY + "px";
		document.body.appendChild(this.skin);
		//this.identify();

		this.skin.style.backgroundImage = [ "url(http://galerey-room.ru/images_thumb/093225_1419402745.png)",
											"url(http://galerey-room.ru/images_thumb/093119_1419402679.png)",
											"url(http://galerey-room.ru/images_thumb/093242_1419402762.png)"] [Math.floor(Math.random()*2)]


	}

	/*identify()
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
	}*/

	snow()
	{
		this.posY+=this.speedSnow;
		this.skin.style.top = this.posY +"px";
	}
}

class Main
{
	constructor()
	{
		this.kolSnow = 0;
		this.mas = []; 
	}

	createSnowflake()
	{
		this.kolSnow++;
		this.mas[this.kolSnow] = new snowflake();
	}

	game()
	{
		this.mas.forEach((el,i)=>{
			el.snow();	
			if(el.posY>document.body.clientHeight)
			{
				this.deleteSnow(el,i);
			}
		})
	}

	play()
	{
		this.game();
		if(time==10)
		{
			time=0;
			this.createSnowflake();
		}
		time++;
		window.setTimeout(()=>this.play(), 100);
	}

	deleteSnow(el,i)
	{
		delete this.mas[i];
		document.body.removeChild(el.skin);
	}

	
}

window.onload=function()
{
	pl = new Main();
	pl.play();
}

var time = 0;
/*
const myFunc = function(){
...
window.setTimeout(myFunc, 100);
}
*/