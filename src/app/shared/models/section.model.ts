import { RoomModel } from './room.model';
import { MovieModel } from './movie.model';
import { Timestamp } from '@firebase/firestore-types';

export class SectionModel{
    id?: string;
    name?: string;
    price?: number;
    time?: Timestamp | Date;
    ageCategory?: string;
    fiction?: boolean;
    genre?: string;
    hasAudio?: boolean;
    hasPhotos?: boolean;
    hasVideos?: boolean;
    rating?: number;
    status?: string;

    constructor(init?: Partial<SectionModel>){
        Object.assign(this, init);
    }
}