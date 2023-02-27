import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {Room, RoomList} from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {

  hotelName = "JW Marriot";
  numberOfRooms = 10;
  hide = false;

  rooms : Room = {
    availableRooms : 10,
    totalRooms : 20,
    bookedRooms : 5
  };

  selectedRoom !: RoomList;

  roomList : RoomList[] =[];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  constructor() { }
  ngAfterViewChecked(): void {
    this.headerComponent.title = "Rooms View in After view checked";
  }

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    // this.headerComponent.title = "Rooms View";  // this is also allowed but not the best practice
  }

  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomList = [
      {
        roomNumber : 1,
        roomType : "Delux Room",
        amenities : "AC, Free Wifi, TV, Kitchen",
        price : 5000,
        checkInTime : new Date('11-Nov-2022'),
        checkOutTime : new Date('12-Nov-2022')
      },
      {
        roomNumber : 2,
        roomType : "2 Bed Room",
        amenities : "AC, Free Wifi, TV",
        price : 4000,
        checkInTime : new Date('11-Nov-2022'),
        checkOutTime : new Date('12-Nov-2022')
      },
      {
        roomNumber : 3,
        roomType : "Single Bed Room",
        amenities : "AC, Free Wifi, TV",
        price : 2000,
        checkInTime : new Date('11-Nov-2022'),
        checkOutTime : new Date('12-Nov-2022')
      }
    ];
  }

  addRoom(){
    const room: RoomList = {
      roomNumber: 4,
      roomType: "2 Bed Room",
      amenities: "AC, TV",
      price: 500,
      checkInTime: new Date('11-Nov-2022'),
      checkOutTime: new Date('13-Nov-2022')
    };
    this.roomList = [...this.roomList,room];
  }

  toggle(){
    this.hide = !this.hide;
  }

  selectRoom(room:RoomList){
    console.log(room);
    this.selectedRoom = room;
  }

}
