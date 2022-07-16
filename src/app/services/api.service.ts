import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getHomeLotteries(): Observable<any>{
    return this.http.get(environment.api_url+"loterias_home");
  }

  getResultadosanteriores(): Observable<any>{
    return this.http.get(environment.api_url+"get_loterias_resultados_anteriores");
  }

  getGanadores(): Observable<any>{
    return this.http.get(environment.api_url+"get_ganadores");
  }

  getSorteoEnVivo(): Observable<any>{
    return this.http.get(environment.api_url+"get_sorte_en_vivo");
  }

  getSorteosByFecha(fecha:String): Observable<any>{
    return this.http.get(environment.api_url+"get_loterias_resultados_anteriores?fecha_sorteo="+fecha);
  }

  getSorteosBySorteo(id:number): Observable<any>{
    return this.http.get(environment.api_url+"get_sorteos_anteriores?sorteo_id="+id);
  }

  getSorteosBySorteoYfecha(id:number, fecha:String): Observable<any>{
    return this.http.get(environment.api_url+"get_sorteos_anteriores?sorteo_id="+id+"&fecha_sorteo="+fecha);
  }

  getMenuLoterias(): Observable<any>{
    return this.http.get(environment.api_url+"get_menu_loterias");
  }

  changeLanguage(lang:String){
     
  }

}
