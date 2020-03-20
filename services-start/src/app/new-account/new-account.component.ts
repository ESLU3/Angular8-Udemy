import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService] // al no poner AccountService aca, evito que me lo pise la herencia de appComponent
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // esto es inyección de dependencia en este componente
  constructor(private loggingService: LoggingService,
              private accountService: AccountService) {

                this.accountService.statusUpdated.subscribe(
                  (status: string) => alert('Nuevo status: ' + status)
                );
              }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });


    // asi no se usa un servicio en Angular
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus); // llamado al servicio mediante inyeccion dependencia
    // console.log('A server status changed, new status: ' + accountStatus);

  }
}
