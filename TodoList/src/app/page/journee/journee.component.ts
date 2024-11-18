import { NgFor, NgIf } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TacheService } from '../../models/tache';


@Component({
  selector: 'app-journee',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormsModule,
    NgbModule
  ],
  templateUrl: './journee.component.html',
  styleUrl: './journee.component.css'
})
export class JourneeComponent implements OnInit{
  // je gerer le drawer de la suggestions
  isDrawerOpen = false;

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    document.body.classList.toggle('overflow-hidden', this.isDrawerOpen);
  }

  // je gere le choix des theme de couleurs 

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

  // je gere la tache de la journee

  ngOnInit(): void {
    
  }
  

  onSave(){
    
  }
  
}
