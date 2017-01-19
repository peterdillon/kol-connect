import { Pipe, PipeTransform } from '@angular/core';
// import { FilterService } from '../../app/filter.service';
import { Filter } from '../../app/filter';

@Pipe({
    name: 'categoryFilter',
    pure: false
})

// @Injectable()
export class CategoryFilterPipe implements PipeTransform {
    constructor() { }

    transform(items: Filter[], category: String): Filter[] {
        // filter items array, items which match and return true will be kept, false will be filtered out        
        if (typeof items === 'undefined') {
            return items;
        }
        return items.filter(item => {
            return item.category == category;
        });
    }
}