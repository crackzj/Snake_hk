import Snake from './snack';
import Food from './food';
import ScorePanel from './score';
class Game{
  private snake: Snake;
  private food: Food;
  private scorePanel: ScorePanel;
  private direction: string = '';
  private isEnd: boolean = true;
  private arrows: string[] = ['ArrowDown','ArrowUp','ArrowLeft','ArrowRight'];
  constructor(){
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();   
    this.init();
  }

  init(){
    document.addEventListener('keydown',this.keydownHandler.bind(this));
    this.run();
  }

  keydownHandler(event: KeyboardEvent){
    console.log(event.key);
   if(this.arrows.includes(event.key)){
      this.direction = event.key;
   }
  }
  run(){
     let x = this.snake.X;
     let y = this.snake.Y;
     switch(this.direction){
       case 'ArrowUp':
       case 'Up':
         y-=10;
         break;
       case 'ArrowDown':
       case 'Down':
         y+=10;
         break;
       case 'ArrowLeft':
       case 'Left':
         x-=10;
         break;
       case 'ArrowRight':
       case 'Right':
         x+=10;
         break;
     } 
     const title = document.querySelector('#title')!;
     if(this.grow(x,y)){
       this.scorePanel.addScore();
       this.scorePanel.levelUp();
       this.food.generateFood();
       title.innerHTML = 'Congratulations!!!';
       setTimeout(()=>{title.innerHTML= '康康吃屁大作战'},1000);
     }
     try {
      this.snake.X = x;
      this.snake.Y = y;
     } catch (err) {
      
       title.innerHTML = err;
       this.isEnd = false;  
     }
     
     const duration =1300 - this.scorePanel.level*100;
    this.isEnd && setTimeout(this.run.bind(this),duration);
  }

  grow(x: number, y: number){
    return x === this.food.X && y === this.food.Y;
  }
}

export default Game;