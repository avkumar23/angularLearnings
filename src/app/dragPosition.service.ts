import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';

const appKey = '5afd9f16-fe86-4db3-83a5-1b719e2c80ca';

@Injectable()
export class dragPositionService {

  xValue: any;
  yValue: any;

  constructor(private http: HttpClient) {

  }

  getXinitPos() {
    this.http.post(`/Thingworx/Things/CMU_TH_NAVIGATION/Services/getPoint`, {
    }, {
      headers: {
        'appKey': appKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).subscribe((data: any) => {
      this.xValue = data.X;
    }, error => {
      console.log('xxxxxxxxxxxxxxxxxThere was an error getting data from thingworx serverxxxxxxxxxxxxxxxxxxxxxx', error);
    });
    return this.xValue;
  }

  getYinitPos() {
    this.http.post(`/Thingworx/Things/CMU_TH_NAVIGATION/Services/getPoint`, {
    }, {
      headers: {
        'appKey': appKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).subscribe((data: any) => {
      this.yValue = data.Y;
    }, error => {
      console.log('xxxxxxxxxxxxxxxxxThere was an error getting data from thingworx serverxxxxxxxxxxxxxxxxxxxxxx', error);
    });
    return this.yValue;
  }

  savePositionToDB() {
    //set position data to DB.  
  }

}