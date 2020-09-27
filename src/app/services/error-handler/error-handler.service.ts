import { Injectable } from '@angular/core';
import { SnackBarService } from '../notifcations/notifcations.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private _snackbarService: SnackBarService) { }

  errorHandler(code: number, message: string) {
    switch (code) {
        case 202:
          this._snackbarService.openSnackBar(message, 'X');
          break;
        case 203:
          this._snackbarService.openSnackBar(message, 'X');
          break;
        case 204:
            this._snackbarService.openSnackBar(message, 'X');
          break;
        default:
          break;
      }
  }
}