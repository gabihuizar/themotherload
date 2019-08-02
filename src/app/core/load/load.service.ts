import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Load } from './load';
import { ConfigService } from 'src/app/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  constructor(
    private configService: ConfigService,
    private http: HttpClient) { }

  getLoads(): Promise<Load[]> {
    const url = this.configService.motherloadServiceUrl;

    return this.http.get<Load[]>(url).pipe().toPromise();
  }
}
