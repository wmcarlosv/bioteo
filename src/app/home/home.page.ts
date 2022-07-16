import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ModalController } from '@ionic/angular';
import { SorteosmodalPage } from '../sorteosmodal/sorteosmodal.page';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  king_lotteries: any[];
  loading:any;

  constructor(private Api: ApiService, private mc: ModalController, private lc: LoadingController) {}

  ionViewWillEnter(){
    this.getLotteries();
  }

  async presentModal(id:number, nombre:String){
    const modal = await this.mc.create({
      component: SorteosmodalPage,
      componentProps: {
        'sorteo_id': id,
        'nombre_sorteo': nombre
      }
    });
    
    modal.present();
  }

  async getLotteries(){
    this.loading = await this.lc.create({
      message: 'Loading...'
    });
    this.Api.getHomeLotteries().subscribe((response)=>{
      this.king_lotteries = response;
      this.lc.dismiss();
    });

    this.loading.present();
  }

  getNumbers(list: String):any{
    let data = list.split(',');
    let html = "";
    for(let i=0; i < data.length; i++){
      html+="<li class='number-tab'>"+data[i]+"</li>";
    }
    return html;
  }

  cambiarIdioma():void{
    console.log("hello");
    this.Api.changeLanguage("en");
  }

}
