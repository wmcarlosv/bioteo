import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-resultados-anteriores',
  templateUrl: './resultados-anteriores.page.html',
  styleUrls: ['./resultados-anteriores.page.scss'],
})
export class ResultadosAnterioresPage
{
	
  resultados_anteriores: any[];
  date:any;
  loading:any;

  constructor(private Api: ApiService, private lc: LoadingController) {}
  ionViewWillEnter() 
  {
   this.getResultadosanteriores();
  }

  async getResultadosanteriores(){
    this.loading = await this.lc.create({
      message: "Loading..."
    });

    this.Api.getResultadosanteriores().subscribe((response)=>{
      this.resultados_anteriores = response;
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
    console.log(final_date);
    this.Api.getSorteosByFecha(final_date).subscribe((response)=>{
      this.resultados_anteriores = response;
    });
  }

}
