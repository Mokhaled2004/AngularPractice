import { Component } from '@angular/core';
import { ServerComponent } from '../server/server.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-servers',
  imports: [ ServerComponent, FormsModule, CommonModule ],
  templateUrl: './servers.component.html', 
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    } ,2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
