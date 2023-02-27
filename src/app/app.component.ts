import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  // Dynamically loading component on screen -- start
  @ViewChild('user', {read: ViewContainerRef}) vcr !: ViewContainerRef;

  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms = 50;
  }
// Dynamically loading component on screen -- end
  ngOnInit(): void {

  }
  title = 'angularProject';
}
