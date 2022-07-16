import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-ganadores',
  templateUrl: './ganadores.page.html',
  styleUrls: ['./ganadores.page.scss'],
})
export class GanadoresPage {
  ganadores:any = [];
  loading:any;
  constructor(private as: ApiService, private lc: LoadingController) { }

  ionViewWillEnter() {
    this.getGanadores();
  }

  async getGanadores(){
    this.loading = await this.lc.create({
      message: "Loading...."
    });

    this.as.getGanadores().subscribe((data)=>{
      this.ganadores = data;
      this.loading.dismiss();
    });

    this.loading.present();
  }

}
