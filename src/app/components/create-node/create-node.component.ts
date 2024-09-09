import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';
import { StargazerService } from 'src/app/services/stargazer.service';

@Component({
  selector: 'app-create-node',
  templateUrl: './create-node.component.html',
  styleUrls: ['./create-node.component.scss'],
})
export class CreateNodeComponent  implements OnInit {
  isLoading = true;
  deviceInfo: any;

  constructor(
    private stargazer: StargazerService
  ) { }

  ngOnInit() {
    Device.getInfo().then(info => {
      this.deviceInfo = info;
      console.log('Device: ', info);
      this.isLoading = false;
    }).catch(err => console.log(err));
  }

  getObjectEntries() {
    return Object.entries(this.deviceInfo);
  }

  onSubmitNode() {
    this.stargazer.signNodeData(this.deviceInfo);
  }

}
