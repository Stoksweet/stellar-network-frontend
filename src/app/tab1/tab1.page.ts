import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateNodeComponent } from '../components/create-node/create-node.component';
import { RunWorkloadComponent } from '../components/run-workload/run-workload.component';
import { StargazerService } from '../services/stargazer.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  resources: any[] = [];
  isLoading = true;

  constructor(
    private modalCtrl: ModalController,
    private stargazer: StargazerService
  ) {
  }
  
  async ngOnInit() {
    this.resources = await this.stargazer.getResources();
    console.log("Resources: ", this.resources);
    this.isLoading = false;
  }

  onAddNode() {
    this.modalCtrl.create({
      component: CreateNodeComponent
    }).then(modalEl => {
      modalEl.present();
    }).catch(err => console.log(err));
  }

  onAddWorkload() {
    this.modalCtrl.create({
      component: RunWorkloadComponent
    }).then(modalEl => {
      modalEl.present();
    }).catch(err => console.log(err));
  }

}
