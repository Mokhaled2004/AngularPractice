import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerComponent } from './server/server.component';  
import { ServersComponent } from './servers/servers.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServerComponent, ServersComponent , ],  
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']  
  styles: [`
    h3 {
      color: dodgerblue;
    `]
})
export class AppComponent {
  title = 'my-first-app';
}
