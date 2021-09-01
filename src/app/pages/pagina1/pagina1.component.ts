import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{


  nombre:string = 'Canalete';
  segundos:number = 0;
  timerSubscription!:Subscription ;

  constructor() { 
    console.log('Pagina 1 component: Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Pagina 1 component: ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('Pagina 1 component: ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('Pagina 1 component: ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('Pagina 1 component: ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('Pagina 1 component: ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('Pagina 1 component: ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('Pagina 1 component: ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('Timer limpio');
  }

  ngOnInit(): void {
    console.log('Pagina 1 component: ngOnInit');
    this.timerSubscription = interval(1000).subscribe(
      i => {
        //console.log(i);
        this.segundos = i;
      }
    );
  }


  guardar(){

  }
}
