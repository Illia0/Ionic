import { Component, OnInit} from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.page.html',
  styleUrls: ['./lab3.page.scss'],
})
export class Lab3Page implements OnInit {

  data: any =[];
  data_users:any=[];
  showDetails: boolean[]= new Array(1000).fill(false);
  dataUrl ="https://api.jsonbin.io/v3/b/64241879c0e7653a0598a3f7"
  loading:any;
  constructor(public loadingController:LoadingController) { }
  async load(){
    if (this.data_users[0] != undefined ){
      this.data_users=[];
    }
    this.loading = await this.loadingController.create({
      spinner: "bubbles",
      message: "Loading..."
    });
    await this.loading.present();
    fetch(this.dataUrl).then(res =>res.json()).then(json =>{
        this.data = json;
        this.data = this.data.record;
        let i = 0;
        console.log(this.data);
        while (this.data[i] != undefined){
          this.data_users.push(this.data[i][0]);
          i++;
        }
        this.loading.dismiss();
    })
  }

  toggleDetails(i:number){
    if (this.showDetails[i]){
      this.showDetails[i]=false;
    }
    else{
      this.showDetails[i]=true;
    }
  }



  getRedColor(a:any){
    for (const user of this.data_users){
      if (a != user && a.date == user.date){
        return 'red'
      }
    }
    return ''
  }

  ngOnInit() {
  }

}
