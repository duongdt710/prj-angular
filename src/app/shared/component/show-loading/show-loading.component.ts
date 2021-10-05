import { Component, OnInit } from '@angular/core';
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-show-loading',
  templateUrl: './show-loading.component.html',
  styleUrls: ['./show-loading.component.scss']
})
export class ShowLoadingComponent implements OnInit {
  // color: ThemePalette = 'primary';
  // mode: ProgressSpinnerMode = 'determinate';
  // value = 60;
  constructor() { }

  ngOnInit(): void {
  }

}
