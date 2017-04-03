/**
 * New typescript file
 */
import { Hero } from './hero';
import { HeroSearchService } from './hero-search.service';
import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  moduleId: module.id,
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers:[HeroSearchService]
})

export class HeroSearchComponent implements OnInit{
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();
    constructor(
      private heroSearchService: HeroSearchService,
      private router: Router
    ){}
    
    search(term:string):void{
      this.searchTerms.next(term);
    }
   ngOnInit():void{
     this.heroes = this.searchTerms
      .debounceTime(300) // wait 300ms after each keystroke
      .distinctUntilChanged() // ignore if next search term is the same as previous
      //switch to new Observable each time the term changes
      .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
   }
  goToDetail(hero: Hero): void{
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
