import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CreateNodeComponent } from 'src/app/components/create-node/create-node.component';
import { RunWorkloadComponent } from 'src/app/components/run-workload/run-workload.component';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  declarations: [
    CreateNodeComponent,
    RunWorkloadComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgxEditorModule
  ],
  exports: [
    CreateNodeComponent,
    RunWorkloadComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
