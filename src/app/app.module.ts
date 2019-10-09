import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { dragPositionService } from './dragPosition.service';
import { InputUserDataFormComponent } from './pages/input-user-data-form/input-user-data-form.component';
import { DisplayUserDataComponent } from './pages/display-user-data/display-user-data.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InputUserDataFormComponent,
    DisplayUserDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [dragPositionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
