import { Injectable } from '@angular/core';
import { AngularfirebaseService } from 'src/app/shared/helpers/angularfirebase.service';
import { SectionModel } from 'src/app/shared/models/section.model';
import { Observable } from 'rxjs';
import { RoomModel } from 'src/app/shared/models/room.model';
import { SeatModel } from 'src/app/shared/models/seat.model';
import { ConfigSection } from 'src/app/shared/models/config-section';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private afb: AngularfirebaseService) { }



  getSections() {
    return this.afb.colWithIds$<SectionModel[]>('sections');
  }

  getSection(sectionId: string): Observable<SectionModel> {
    // Start Using AngularFirebase Service!!
    return this.afb.doc$<SectionModel>(`sections/${sectionId}`);
  }

  getSectionRooms(sectionId: string): Observable<any> {
    return this.afb.colWithIds$<RoomModel[]>(`sections/${sectionId}/room`);
  }

  getSectionRoom(sectionId: string, roomId: string): Observable<RoomModel> {
    // Start Using AngularFirebase Service!!
    return this.afb.doc$<RoomModel>(`sections/${sectionId}/room/${roomId}`);
  }
  getSectionSeats(sectionId: string, roomId: string): Observable<SeatModel[]> {
    return this.afb.colWithIds$<SeatModel[]>(
      `sections/${sectionId}/room/${roomId}/seats`
    );
  }
  getSectionSeat(sectionId: string, roomId: string, seatId: string): Observable<SeatModel> {
    // Start Using AngularFirebase Service!!
    return this.afb.doc$<SeatModel>(`sections/${sectionId}/room/${roomId}/seats/${seatId}`);
  }

  //configs
  getConfigSection(): Observable<ConfigSection>{
    return this.afb.doc$<ConfigSection>(`config/section/`)

  }
}
