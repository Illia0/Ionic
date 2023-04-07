import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  a:number[][] = [];
  n:number = 0;
  constructor() {}
  arrayras(n:any){
    this.a=[];
    try{
      this.n = parseInt(n);
      this.a = Array(this.n);
      console.log("Array created")
      for(let i=0;i<this.n;i++){
        this.a[i] = Array(this.n);
        for(let j=0;j<this.n;j++){
          let aa:number = i+1+j
          this.a[i][j] = aa - 5
        }
      }
    }
    catch(error){
      console.log(error)
    }
  }
  getColor(b:number){
    return b % 2 == 0 && b > 0 ? 'green' : 'red'
  }
}
