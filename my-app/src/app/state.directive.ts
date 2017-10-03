import { Directive, Input, ElementRef, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  @Input() appState: number;

  constructor(private _ElementRef: ElementRef, private _Renderer2: Renderer2) {  } // ElementRef permet de récupérer les éléments du DOM

  ngOnChanges() {
    const cssClass = `state-${this.appState}`; // Recuperer la classe CSS (en text)
    let text: string;
    const elementNode = this._ElementRef.nativeElement; // Permet de cibler l'élément du DOM
    switch (this.appState) {
      case 0:
      text = 'A livrer';
      break;
      case 1:
      text = 'En cours de livraison';
      break;
      case 2:
      text = 'Commande livrée';
      break;
      default:
      console.log(this.appState);
    }
    this._Renderer2.addClass(elementNode, cssClass); // Placer le "class=" sur l'élément du DOM
    elementNode.innerHTML = text;
  }

}
