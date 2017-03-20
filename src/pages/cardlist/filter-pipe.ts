import { Pipe, PipeTransform } from '@angular/core';
import { FilterService } from '../../app/filter.service';
// import { Filter } from '../../app/filter';

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

        // function doesItemContainPublication(item: any, title: any) {
        //     return item.publications.filter(p => p.title == 'Atrial Fibrillation').length > 0
        // }
        
            
        return items.filter(item => {

            // if (this.fs.filter.top40 && item.rank > 40) {
            //     return false;
            // }   
            
            // Ask about true/false value toggle display
            // if (this.fs.filter.top40 && item["top40"] == false) {
            //     return false;
            // }

            // //Demo of filtering an array
            // // return doesItemContainPublication(item, 'Atrial Fibrillation');

            // // Talk to Johnson about how to access nested json objects, I had to move the data up a level.
            // if(  ( this.fs.filter.totalSize && item["totalSize"] < this.fs.filter.totalSize  )  ) { 
            //     return false;
            // }
            
            //fs.filters = [..{name:MD, selected:true}...]
            var result = false;

            //Get all selected degree filters
            var degreeFilters = this.fs.filters.filter(f => {
                return f.category == "degree" && f.selected;
            });
            if(!degreeFilters.length) {
                result = true;
            }
            degreeFilters.forEach(f => {
                if(f.name == item["Degree"]) {
                    result = true;
                }
            });

            return result;
        });
    }
}