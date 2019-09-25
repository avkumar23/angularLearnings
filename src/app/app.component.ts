import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragEnd} from '@angular/cdk/drag-drop';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'angular8firstapp';

  initialPosition = { x: this.getXinitPos(), y: this.getYinitPos() };
  position = { ...this.initialPosition };
  offset = { x: 0, y: 0 };

  dragEnd(event: CdkDragEnd) {

    this.offset = { ...(<any>event.source._dragRef)._passiveTransform };

    this.position.x = this.initialPosition.x + this.offset.x;
    this.position.y = this.initialPosition.y + this.offset.y;

    // this.initialPosition.x = this.offset.x;
    // this.initialPosition.y = this.offset.y;

    console.log(this.position, this.initialPosition, this.offset);
  }

  getXinitPos(){
    return 0;
  }

  getYinitPos(){
    return 0;
  }

  savePositionToDB() {      
    //post posotion data to DB.  
  }


}
