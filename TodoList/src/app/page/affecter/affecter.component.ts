import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-affecter',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './affecter.component.html',
  styleUrl: './affecter.component.css'
})
export class AffecterComponent {

  currentColor: string = 'lightgray'; // Couleur actuelle du composant
  colors: string[] = [
    'red', 'blue', 'green', 'yellow', 'orange',
    'purple', 'pink', 'cyan', 'lime', 'brown'
  ];
  showColors: boolean = false; // Contrôle l'affichage des couleurs

  // Méthode pour changer la couleur
  changeColor(color: string) {
    this.currentColor = color;
    this.showColors = false; // Ferme la palette de couleurs après sélection
  }

  // Méthode pour afficher ou masquer la palette de couleurs
  toggleColors() {
    this.showColors = !this.showColors;
  }

}
