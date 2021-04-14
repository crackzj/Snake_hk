class ScorePanel{
  private score = 0;
  public level = 1;
  private scoreEl: HTMLElement;
  private levelEl: HTMLElement;
  private maxLevel: number;
  constructor(maxLevel: number = 10){
    this.maxLevel = maxLevel;
    this.scoreEl = document.querySelector('#score')!;
    this.levelEl = document.querySelector('#level')!;
  }
 
  addScore(){
    this.scoreEl.innerHTML = 'score:' + (++this.score);
  }
  levelUp(){
    if(this.score % 10 ===0 && this.level < this.maxLevel){
      this.levelEl.innerHTML = 'level:' + (++this.level);
    } 
  }
}

export default ScorePanel;