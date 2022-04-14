import { Component, Directive, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',  //as element
  // selector: '[app-servers]',    //as attribute
  selector: '.app-servers',     //as class
  templateUrl: './servers.component.html',
  // template:`<app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
  // styles:[`
  // h3{
  //   color:dodgerblue;
  // }`]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

   }
  // constructor(private serversService: ServersService) {
  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is' +' ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}

