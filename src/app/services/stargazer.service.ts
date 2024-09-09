import { Injectable, inject } from '@angular/core';
import { AuthService } from '../pages/auth/auth.service';
import { Firestore, addDoc, collection, doc, getDocs, query, setDoc, where } from '@angular/fire/firestore';
import {dag4} from '@stardust-collective/dag4';
import { AlertController, ModalController } from '@ionic/angular';

declare const window: any;

@Injectable({
  providedIn: 'root'
})
export class StargazerService {
  private db: Firestore = inject(Firestore);
  
  constructor(
    private auth: AuthService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) { 
  }

  async getResources() {
    let nodes: any[] = [];
    let workloads: any[] = [];

    const nodesCollection = collection(this.db, 'nodes');
    const q = query(nodesCollection, where('userId', '==', this.auth.user.uid));
    nodes = (await getDocs(q)).docs;

    const workloadsCollection = collection(this.db, 'workloads');
    const workloadsQuery = query(workloadsCollection, where('userId', '==', this.auth.user.uid));
    workloads = (await getDocs(workloadsQuery)).docs;

    return [...nodes, ...workloads];
  }

  async activateStargazerProviders() {
    const walletProvider = window.stargazer;

    if (!walletProvider) {
      throw new Error('Unable to get wallet provider, is stargazer installed?');
    }

    if (!('getProvider' in walletProvider)) {
      throw new Error('This seems like a really old version of stargazer');
    }

    /**
     * An standard EIP-1193 Provider.
     */
    const ethProvider = walletProvider.getProvider('ethereum');
    await ethProvider.activate();

    /**
     * A compliant EIP-1193 Provider (JSON-RPC).
     */
    const dagProvider = walletProvider.getProvider('constellation');
    await dagProvider.activate();

    return {
      ethProvider,
      dagProvider
    };
  }

  async conect() {
    const {
      ethProvider, 
      dagProvider
    } = await this.activateStargazerProviders();

    /**
     * Each provider gets enabled on the first request
     */
    const ethAccounts = await ethProvider.request({method: 'eth_accounts', params: []});

    const dagAccounts = await dagProvider.request({method: 'dag_accounts', params: []});
    
    console.log('Stargazer wallet accounts: ', ethAccounts, dagAccounts);
    const userDoc =  doc(this.db, `users/${this.auth.user.uid}`)
    setDoc(userDoc, {accounts: {ethAccounts, dagAccounts}}, { merge: true });
  }

  async signWorkloadData(html: any) {
    this.modalCtrl.dismiss();
    this.alertCtrl.create({
      header: 'Workload Signed Successfully',
      message: 'We have successfully signed your workload data!'
    }).then(alertEl => alertEl.present()).catch(err => console.log(err));

    // Add Node to DB
    console.log("Adding Workload to DB");

    const nodesCollection = collection(this.db, 'workloads');
    const newNode = {
      code: html,
      userId: this.auth.user.uid
    };
    addDoc(nodesCollection, newNode).then(() => {
      this.alertCtrl.create({
        header: 'Workload added successfully!',
        message: 'Your workload is running on Stellar Network!'
      }).then(alertEl => alertEl.present()).catch(err => console.log(err));
    }).catch(err => console.log(err));
  }

  async signNodeData(nodeInfo: any) {
    this.modalCtrl.dismiss();
    this.alertCtrl.create({
      header: 'Node Signed Successfully',
      message: 'We have successfully signed your node data!'
    }).then(alertEl => alertEl.present()).catch(err => console.log(err));

    // Add Node to DB
    console.log("Adding Node to DB");

    const nodesCollection = collection(this.db, 'nodes');
    const newNode = {
      nodeInfo,
      userId: this.auth.user.uid
    };
    addDoc(nodesCollection, newNode).then(() => {
      this.alertCtrl.create({
        header: 'Node added successfully!',
        message: 'Your node has been added to Stellar Network!'
      }).then(alertEl => alertEl.present()).catch(err => console.log(err));
    }).catch(err => console.log(err));

    // const {dagProvider} = await this.activateStargazerProviders();

    // // Sign Node
    // console.log("Signing Node");

    // const data: any = {
    //   nodeInfo,
    //   userId: this.auth.user.uid
    // };
    
    // // Encode the data - Base64 < JSON < data
    // const dataEncoded = window.btoa(JSON.stringify(data));
    
    // // Encode the string directly if "data" is a string:
    // // const data = "This is a custom string.";
    // //
    // //                      Base64 < String
    // // const dataEncoded = window.btoa(data);
    
    // // Get $DAG accounts
    // const dagAccounts = await dagProvider.request({method: 'dag_accounts', params: []});
    
    // // Extract $DAG account 0
    // const userAddress = dagAccounts[0];
    
    // const signature = await dagProvider.request({
    //   method: 'dag_signData',
    //   params: [userAddress, dataEncoded]
    // });
    
    // const publicKey = await dagProvider.request({
    //   method: 'dag_getPublicKey',
    //   params: [userAddress]
    // });
    
    // // Send your signature trio for further verification
    // const payload = {dataEncoded, signature, publicKey};
    
    // // Verify signature using dag4.js
    // // Build the message with prefix
    // const message = `\u0019Constellation Signed Data:\n${dataEncoded.length}\n${dataEncoded}`;
    
    // const result = await dag4.keyStore.verifyData(publicKey, message, signature);
    // // true -> verification succeeded
    // // false -> verification failed
      
    // if(result) {
    //   this.alertCtrl.create({
    //     header: 'Node Signed Successfully',
    //     message: 'We have successfully signed your node data!'
    //   }).then(alertEl => alertEl.present()).catch(err => console.log(err));

    //   // Add Node to DB
    //   console.log("Adding Node to DB");

    //   const nodesCollection = collection(this.db, 'nodes');
    //   const newNode = {
    //     payload,
    //     nodeInfo,
    //     userId: this.auth.user.uid
    //   };
    //   addDoc(nodesCollection, newNode).then(() => {
    //     this.alertCtrl.create({
    //       header: 'Node added successfully!',
    //       message: 'Your node has been added to Stellar Network!'
    //     }).then(alertEl => alertEl.present()).catch(err => console.log(err));
    //   }).catch(err => console.log(err));

    // } else {
    //   this.alertCtrl.create({
    //     header: 'Node Signed Failed',
    //     message: 'We have failed to sign your node data!'
    //   }).then(alertEl => alertEl.present()).catch(err => console.log(err));
    // }

  }
}
