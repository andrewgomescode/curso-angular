import { environment } from './../../../../environments/environment.development';
import { MomentService } from './../../../services/moment.service';
import { Moment } from '../../../Moment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;

  faSearch = faSearch;
  searchTerm: string = '';

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });

      this.allMoments = data;
      this.moments = data;
    });
  }
  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.moments = this.allMoments.filter((moment) => {
      return moment.title.toLowerCase().includes(value);
    });
  }
}
