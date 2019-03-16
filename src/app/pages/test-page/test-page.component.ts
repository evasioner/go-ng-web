import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {SmartTableData} from "../../@core/data/smart-table";

@Component({
  selector: 'ngx-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit() {
  }

  source: LocalDataSource = new LocalDataSource();
}
