import { Observable } from 'rxjs';

export interface ConfigSection {
    fiction?: Array<string>;
    nonFiction?: Array<string>;
    ageCategory?: Array<string>;
}
