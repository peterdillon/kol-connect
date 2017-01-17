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

        function doesItemContainPublication(item: any, title: any) {
            return item.publications.filter(p => p.title == 'Atrial Fibrillation').length > 0
        }

        
        
        return items.filter(item => {
            if (this.fs.filter.top40) {
                //Pretend this means "top 40"
                // return item.rank < 15;

                //Demo of filtering an array
                return doesItemContainPublication(item, 'Atrial Fibrillation');
            }
            return true;
        });
    }
}