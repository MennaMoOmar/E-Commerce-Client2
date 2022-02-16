import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AbstractRemoteServiceService {
  /******************* Variables *******************/
  /******************* Constructor *******************/
  constructor() {}

  /******************* Angular Lifecycle *******************/
  ngOnInit(): void {}
  /******************* Functions *******************/
  get apiURl() {
    return environment.apiUrl;
  }
}
