import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { SectionModel } from '../models/section.model';
import { AngularfirebaseService } from './angularfirebase.service';
import { RoomModel } from '../models/room.model';
import { SeatModel } from '../models/seat.model';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private fs: AngularFirestore, private afb: AngularfirebaseService) { }

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

}











