import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Load } from '../core/load/load';
import { LoadService } from '../core/load/load.service';

@Component({
  selector: 'app-loads-list',
  templateUrl: './loads-list.component.html',
  styleUrls: ['./loads-list.component.scss']
})
export class LoadsListComponent implements OnInit {

  loadsSub: Subscription;
  loads: Load[];

  constructor(private loadService: LoadService) { }

  async ngOnInit(): Promise<void> {
    this.loads = await this.loadService.getLoads();
  }

}
