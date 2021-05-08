import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {IWork, WorkService} from "../services/works/work.service";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  works: IWork[] | undefined;
  loading: boolean = false;

  constructor(private workService: WorkService) { }

  ngOnInit(): void
  {
    this.loading = true;

    this.workService.getAllWorks().subscribe(
      data => {
        this.works = data;
        this.loading = false;
      },
      error => {
        if (!environment.production)
        {
          console.log(error);
        }

        this.loading = false;
      });
  }

}
