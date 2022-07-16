import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ModalController } from '@ionic/angular';
import { SorteosmodalPage } from '../sorteosmodal/sorteosmodal.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages:any;
  l1open:boolean = false;
  l2open:boolean = false;
  constructor(private as: ApiService, private mc: ModalController) { }

  ngOnInit() {
    this.getMenuLoterias();
  }

  getMenuLoterias(){
    this.as.getMenuLoterias().subscribe((response)=>{
      this.pages = response;
    }); 
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

}
