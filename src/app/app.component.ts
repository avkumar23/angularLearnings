import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CdkDragEnd} from '@angular/cdk/drag-drop';
import { dragPositionService } from './dragPosition.service';

const appKey = '5afd9f16-fe86-4db3-83a5-1b719e2c80ca';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private service: dragPositionService, private http: HttpClient) { // dependency injection

  }
  // title = 'angular8firstapp';
  isActive = false ;
  colSpan = 2;

  initialPosition: { x: any; y: any; };
  position = { ...this.initialPosition };
  offset: { x: string | number; y: string | number; };


  email = 'me@example.com';

  dragEnd(event: CdkDragEnd) {

    this.offset = { ...(<any>event.source._dragRef)._passiveTransform };

    this.position.x = this.initialPosition.x + this.offset.x;
    this.position.y = this.initialPosition.y + this.offset.y;

    // this.initialPosition.x = this.offset.x;
    // this.initialPosition.y = this.offset.y;

    console.log(this.position, this.initialPosition, this.offset);
  }

  // This is for an example of Event Bubbling.
  onDivClicked() {
    console.log('Div was clicked');
    console.log('----------------x Position------------------', this.service.getXinitPos());
    console.log('----------------y Position------------------', this.service.getYinitPos());

  }
  onToggle($event: any) {
    $event.stopPropagation();
    console.log('toggle on/off', $event);
  }
  // Example of event filtering.
  onKeyUp1() {
    console.log('ENTER button is pressed');
  }
  onKeyUp2($event: any) {
    console.log('The value enteresd is : ', $event.target.value);
  }
  onKeyUp3(email: any) {
    console.log('The value enteresd is : ', email);
  }
  // Example of two-way binding
  onKeyUp4() {
    console.log('The value enteresd is : ', this.email);
  }

  ngOnInit() {
    this.initialPosition = { x: 0, y: 0 };
    console.log('----------------x Position------------------', this.service.getXinitPos());
    console.log('----------------y Position------------------', this.service.getYinitPos());
  }

}
