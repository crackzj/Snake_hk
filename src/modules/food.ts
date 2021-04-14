class Food{
  private el: HTMLElement;
  constructor(){
    this.el = document.querySelector('#food')!;
  } 
  get X(){
     return this.el.offsetLeft;
  }

   get Y(){
      return this.el.offsetTop;
   }

   generateFood(){
    const top = this.randomFood() + 'px';
    const left = this.randomFood() + 'px';
    this.el.style.left = left;
    this.el.style.top = top;
   }
   randomFood(){
    return Math.round(Math.random()*29*10);
   }
}

export default Food;