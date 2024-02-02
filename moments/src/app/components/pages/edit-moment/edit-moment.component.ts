import { MomentService } from './../../../services/moment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrl: './edit-moment.component.css',
})
export class EditMomentComponent implements OnInit {
  constructor(private momentService: MomentService) {}

  ngOnInit(): void {}
}
