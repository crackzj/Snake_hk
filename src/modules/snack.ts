class Snake{
  private head: HTMLElement;
  private body: HTMLCollection;
  private el: HTMLElement;
  constructor(){
    this.el = document.querySelector('#snake')!;
    this.head = document.querySelector('#snake > div')!;
    this.body = this.el.getElementsByTagName('div');
  }

  get X(){
    return this.head.offsetLeft;
  }
  get Y(){
    return this.head.offsetTop;
  }

  set X(value: number){
    if(this.X === value){
      return;
    }
    this.check(value);
    this.head.style.left = value + 'px';
  }
  set Y(value: number){
    if(this.Y === value){
      return;
    }
    this.check(value);
    this.head.style.top = value + 'px';
  }
  check(value: number){
    if(value<0 || value>290){
      throw new Error('Ending,康康吃到屎了!!!');
    }
  }
  eatFood(){
    this.el.insertAdjacentHTML('beforeend',"<div></div>");
  }


}

export default Snake;