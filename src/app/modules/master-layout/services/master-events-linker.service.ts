import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MasterEventsLinkerService {
  /*************** Variables **********************/
  private showSnackBarSource = new Subject<any>();
  showSnackBar$ = this.showSnackBarSource.asObservable();

  private navBarSearchSource = new Subject<string>();
  navBarSearchSource$ = this.navBarSearchSource.asObservable();

  /*************** Functions **********************/
  doSearch(searchText: string) {
    this.navBarSearchSource.next(searchText);
  }
}
