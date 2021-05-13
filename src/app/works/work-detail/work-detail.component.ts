import { Component, OnInit } from '@angular/core';
import {IWork, WorkService} from "../../services/works/work.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {

  workId: number | undefined;

  work: IWork | undefined;

  constructor(private workService: WorkService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void
  {
    this.activatedRoute.paramMap.subscribe(params => {
      // @ts-ignore
      this.workId = +params.get('id');
    });

    this.workService.getWorkById(this.workId).subscribe(
      data => { this.work = data }
    );
  }

}
