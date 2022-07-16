import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-sorteosmodal',
  templateUrl: './sorteosmodal.page.html',
  styleUrls: ['./sorteosmodal.page.scss'],
})
export class SorteosmodalPage {
  @Input() sorteo_id: number;
  @Input() nombre_sorteo: String;
  sorteos:any = [];
  date:any;
  loading:any;

  constructor(private mc: ModalController, private as: ApiService, private lc: LoadingController) { }

  ionViewWillEnter() {
    this.getSorteoById();
  }

  closeModal():void{
    this.mc.dismiss();
  }

  async getSorteoById(){
    this.loading = await this.lc.create({
      message: "Loading.."
    });

    this.as.getSorteosBySorteo(this.sorteo_id).subscribe((response)=>{
      this.sorteos = response;
      this.loading.dismiss();
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

  findByDate():void{
    let date = new Date(this.date);
    let day = date.getDate();
    let month = (date.getMonth() + 1);
    let year = date.getFullYear();
    let final_date = year+"/"+month+"/"+day;
    this.as.getSorteosBySorteoYfecha(this.sorteo_id, final_date).subscribe((response)=>{
      this.sorteos = response;
    });
  }
}
