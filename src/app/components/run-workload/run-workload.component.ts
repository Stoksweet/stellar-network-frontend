import { Component, OnInit } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';
import { StargazerService } from 'src/app/services/stargazer.service';

@Component({
  selector: 'app-run-workload',
  templateUrl: './run-workload.component.html',
  styleUrls: ['./run-workload.component.scss'],
})
export class RunWorkloadComponent  implements OnInit {
  editor: Editor;
  html = '';
  isLoading = false;

  toolbar: Toolbar = [
    ['code'],
  ];

  constructor(
    private stargazer: StargazerService
  ) { }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  onSubmitWorkload() {
    this.stargazer.signWorkloadData(this.html);
  }

}
