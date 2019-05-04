import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MemberService} from '../../../services/member.service';
import {NbWindowService} from '@nebular/theme';

@Component({
  selector: 'ngx-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {

  @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;
  source: LocalDataSource = new LocalDataSource();
  memberCreateForm : FormGroup;

  constructor(private member: MemberService,
              private windowService: NbWindowService) {
  }

  ngOnInit() {
    this.getMembers();
    this.memberCreateForm = new FormGroup({
      'name': new FormControl('name', [
        Validators.required,
        Validators.minLength(4),
      ]),
      'id': new FormControl('id', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });

  }

  openWindow(contentTemplate) {
    this.windowService.open(
      contentTemplate,
      {
        title: '멤버추가',
      },
    );
  }
  //
  // private createMember(): void {
  //   this.createMember(name, id);
  // }

  private async getMembers(): Promise<void> {
    const members = await this.member.getMembers();
    this.source.load(members.data);
  }

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [],
    },
    hideSubHeader: true,
    editable: false,

    columns: {
      No: {
        title: '번호',
        type: 'number',
      },
      Name: {
        title: '이름',
        type: 'string',
      },
      Id: {
        title: '아이디',
        type: 'string',
      },
      RegDate: {
        title: '등록일',
        type: 'string',
      },
      UpdDate: {
        title: '수정일',
        type: 'string',
      },
    },
  };

}
