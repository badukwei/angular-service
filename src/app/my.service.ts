import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  data: any[] = [1, 2, 3];

  constructor() { }

  getData(): any[] {
    return this.data;
  }

  setData(newData: any[]): void {
    this.data = newData;
  }
}
