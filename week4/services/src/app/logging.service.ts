import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root' // ✅ Ensures a singleton instance
})
export class LoggingService {
  logStatusChange(status: string) { // ✅ Use camelCase for consistency
    console.log('A server status changed, new status: ' + status);
  }
}
