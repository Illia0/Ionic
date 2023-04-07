import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  a: number = 0;
  b: number = 0;
  c: number = 0;

  ras(a: any, b: any) {
    this.a = parseFloat(a)
    this.b = parseFloat(b)
    this.c = 1
    for(let i=a;i<b;i++){
      if (i%6==0){
        this.c = this.c * i;
      }
    }
    if (this.c == 1){
      this.c = 0;
    }
  }

}
