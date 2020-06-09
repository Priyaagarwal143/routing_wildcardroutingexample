import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.css']
})
export class ListitemsComponent implements OnInit {

  items = [
    { part : 'Brakes', brand : 'Activa', quantity : 3},
    { part : 'Brakes', brand : 'Bullet', quantity : 14},
    { part : 'Brakes', brand : 'Avenger', quantity : 20},
    { part : 'Wheels', brand : 'Pulsar', quantity : 8},
    { part : 'Seat Cover', brand : 'Dio', quantity : 3},
    { part : 'Seat Cover', brand : 'Vespa', quantity : 7},
    { part : 'Seat Cover', brand : 'R15', quantity : 6},
    { part : 'Mirror', brand : 'Activa', quantity : 5},
    { part : 'Mirror', brand : 'Scooter', quantity : 23},
    { part : 'Mirror', brand : 'Avenger', quantity : 45}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
