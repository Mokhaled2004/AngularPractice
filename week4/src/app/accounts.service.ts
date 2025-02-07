import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable({
  providedIn: 'root' // ✅ Singleton service
})
export class AccountsService {
  accounts = [
    { name: 'Master Account', status: 'active' },
    { name: 'Testaccount', status: 'inactive' },
    { name: 'Hidden Account', status: 'unknown' }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.loggingService.logStatusChange(status);
  }

  // ✅ Rename this method to match its usage in `account.component.ts`
  onStatusChanged(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.statusUpdated.emit(newStatus); // Notify other components
    this.loggingService.logStatusChange(newStatus);
  }
}
