import { Component } from '@angular/core';
import { CdkDragEnd} from '@angular/cdk/drag-drop';  
import { dragPositionService } from './dragPosition.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'angular8firstapp';
  initialPosition: { x: any; y: any; };
  position = { ...this.initialPosition };
  offset: { x: string | number; y: string | number; };

  constructor(service : dragPositionService){ //dependency injection
    this.initialPosition = { x: service.getXinitPos(), y: service.getYinitPos() };
  } 

  dragEnd(event: CdkDragEnd) {

    this.offset = { ...(<any>event.source._dragRef)._passiveTransform };

    this.position.x = this.initialPosition.x + this.offset.x;
    this.position.y = this.initialPosition.y + this.offset.y;

    // this.initialPosition.x = this.offset.x;
    // this.initialPosition.y = this.offset.y;

    console.log(this.position, this.initialPosition, this.offset);
  }



}
