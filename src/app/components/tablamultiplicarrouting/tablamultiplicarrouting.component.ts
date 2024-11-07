import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-tablamultiplicarrouting',
    templateUrl: './tablamultiplicarrouting.component.html',
    styleUrl: './tablamultiplicarrouting.component.css'
})
export class TablamultiplicarroutingComponent implements OnInit {

    public num: number;
    public resultados: Array<number>;

    constructor(private _activeRoute: ActivatedRoute,) {
        this.num = 0;
        this.resultados = new Array<number>();
    }

    ngOnInit(): void {
        this._activeRoute.params.subscribe((parametros: Params) => {
            if (parametros['numero'] != null) {
                this.num = parseInt(parametros['numero']);
                let aux = new Array<number>();
                for (var i = 1; i <= 10; i++) {
                    var resultado = this.num * i;
                    aux.push(resultado);
                }
                this.resultados = aux;
            }
        })
    }

}
