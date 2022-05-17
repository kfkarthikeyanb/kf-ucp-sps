import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit, OnDestroy, AfterViewChecked {
  constructor() {}

  ngOnInit() {}

  ngOnDestroy(): void {}

  ngAfterViewChecked() {}
}
