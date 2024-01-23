import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from "../nosotros/nosotros.component";
import { ModelosComponent } from "../modelos/modelos.component";
import { GaleriaComponent } from "../galeria/galeria.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
    imports: [CommonModule, NosotrosComponent, ModelosComponent, GaleriaComponent]
})
export class LandingPageComponent {

}
