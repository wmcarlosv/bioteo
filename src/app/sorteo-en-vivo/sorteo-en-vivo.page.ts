import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { sanitizeDOMString } from '@ionic/core/dist/types/utils/sanitization';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-sorteo-en-vivo',
  templateUrl: './sorteo-en-vivo.page.html',
  styleUrls: ['./sorteo-en-vivo.page.scss'],
})
export class SorteoEnVivoPage {
  sorteo:any = [];
  title:String = "";
  id:String = "";
  descripcion:String = "";
  loading:any;
  constructor(private as: ApiService, private dom: DomSanitizer, private lc: LoadingController) { }

  ionViewWillEnter() {
    this.getSorteoEnVivo();
  }

  async getSorteoEnVivo(){
    this.loading = await this.lc.create({
      message: "Loading..."
    });

    this.as.getSorteoEnVivo().subscribe((response)=>{
      this.sorteo = response;
      this.title = this.sorteo.title[0];
      this.id = this.sorteo.id[0];
      this.descripcion = this.sorteo.descripcion;
      this.loading.dismiss();
    });

    this.loading.present();
  }

  sanatize(url){
    return this.dom.bypassSecurityTrustResourceUrl(url);
  }

}
