		var t1 = 0;
		let delta = 1;
class snowflake
{
	constructor()
	{

		
		this.type= Math.floor(Math.random()*2);
		this.posY=-50;
		this.posX= Math.floor(Math.random() * document.body.clientWidth);
		this.speedSnow = Math.floor((Math.random()*4)+1) * delta + 10;
	
		this.skin = document.createElement('div');
		this.skin.style.width = this.skin.style.height = (Math.random()*(50-10+1))+10 + "px";
		//this.skin.style.height = 40 + "px";
		this.skin.style.position= "absolute";
		this.skin.style.left= this.posX + "px";
		this.skin.style.top= this.posY + "px";
		document.body.appendChild(this.skin);
		//this.identify();

		this.skin.style.backgroundImage = [ "url(http://galerey-room.ru/images_thumb/093225_1419402745.png)",
											"url(http://galerey-room.ru/images_thumb/093119_1419402679.png)",
											"url(http://galerey-room.ru/images_thumb/093242_1419402762.png)"] [Math.floor(Math.random()*2)]



		this.degRotate = 0;
		this.rotation = Math.floor(Math.random()*(12)) - 6;			//Первая часть вопроса, заданного в методе snow()
		//console.log(this.rotation);

	}


	snow()
	{
		this.posY+=this.speedSnow;
		this.posX+=this.rotation/2;
		this.skin.style.top = this.posY +"px";
		this.skin.style.left = this.posX +"px";
		this.degRotate+=this.rotation;
		this.skin.style.transform = "rotate(" + this.degRotate + "deg)";		//rotation of snowflake
		//this.rotation++;			//Как тут лучше поступить? Этот параметр не трогать, а чисто его плюсовать в переменной, отвечающий за угол поворота? 
									//Если непосредственно его плюсовать, то вращение в разные стороны пришлось бы делать через условие. Как правильнее?

console.log("t1 = " + t1);
		let t2 = performance.now();		//Проверить и вынести в отдельный метод
		delta = (t2-t1);
		t1 = t2;
		console.log(delta);
		
		console.log("t2 = " + t2);
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
