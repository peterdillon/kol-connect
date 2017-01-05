import { Pipe, PipeTransform } from '@angular/core';
import { FilterService } from '../../app/filter.service';
import { Filter } from '../../app/filter';

@Pipe({
    name: 'kolsFilter',
    pure: false
})
// @Injectable()
export class KOLsFilterPipe implements PipeTransform {
    constructor(private fs: FilterService) { }

    transform(items: any[]): any {
        // filter items array, items which match and return true will be kept, false will be filtered out        
        if (typeof items === 'undefined') {
            return items;
        }

        return items.filter(item => {
            if (this.fs.filter.top40) {
                //Pretend this means "top 40"
                return item.rank < 15;
            }
            return true;
        });
    }
}