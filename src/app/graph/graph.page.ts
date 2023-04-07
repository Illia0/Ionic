import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Chart, registerables } from 'chart.js'

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {

  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;

  lineChart:any;
  xn:number = 0;
  xk:number = 0;
  a:number = 0;
  h:number = 0;
  data1: string[]=[];
  xx:string[]=[];
  yy:number[]=[];

  constructor() { Chart.register(...registerables);}

  ngOnInit() {
  }

  lineChartMetod(){
    if (this.lineChart instanceof Chart){
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: "line",
      data:{
        labels: this.xx,
        datasets:[
          {
            label: "Графік функції",
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yy,
            spanGaps: false,
          }
        ]
      }
    });
  }

  graphras(xn:any, xk:any, a:any, h:any){
    this.data1 = [];
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.a = parseFloat(a);
    this.h = parseFloat(h);
    let x: number = 0, y: number = 0;
    x = this.xn;
    this.xx = new Array();
    this.yy = new Array();
    while (x < this.xk){
      if (x<2.5){
        y = Math.sin(x+3)/(Math.pow(x,5)/Math.tan(2*x*x*x))
      }
      else{
        if (x<=this.a){
          y=(Math.abs(x)+2)/Math.pow(Math.cos(x*x*x+2*x+1),2)
        }
        else{
          y=Math.pow(Math.sin(x+5),2)/(Math.pow(Math.abs(x)+2, 1.0/3.0)-1)
        }
      }
      this.xx.push(x.toFixed(1))
      this.yy.push(parseFloat(y.toFixed(1)))
      let s ="x= " + x.toFixed(1) + " y= " + y.toFixed(1);
      this.data1.push(s)
      x=x+this.h;
    }
    this.lineChartMetod();
  }
}

