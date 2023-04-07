import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  
  a: number = 0;
  b: number = 0;
  c: number = 0;
  d: number = 0;

  ras(a: any, b: any,c: any) {
    try{
      this.a = parseFloat(a)
      this.b = parseFloat(b)
      this.c = parseFloat(c)
      this.d = 0
      if ((this.a >10 && this.a <15) && (this.b >10 && this.b <15)){
        this.d = this.a * this.b 
      }
      if ((this.a >10 && this.a <15) && (this.c >10 && this.c <15)){
        this.d = this.a * this.c
      }
      if ((this.b >10 && this.b <15) && (this.c >10 && this.c <15)){
        this.d = this.b * this.c
      }
      if ((this.a >10 && this.a <15) && (this.b >10 && this.b <15) && (this.c >10 && this.c <15)){
        this.d = this.a * this.b * this.c
      }
    }
    catch(error){
      console.log(error);
    }
  }

}
