import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}
@Component({
  selector: 'app-projects',
  imports: [NgFor,NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
projects: Project[] = [
    {
      id: 1,
      title: 'Application E-commerce',
      description: 'Une application e-commerce complète avec panier, paiement et gestion des commandes.',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      image: 'project1.jpg',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/username/project1'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Tableau de bord pour visualiser des données avec graphiques interactifs.',
      technologies: ['Angular', 'Chart.js', 'Express.js'],
      image: 'project2.jpg',
      demoUrl: 'https://demo2.example.com',
      githubUrl: 'https://github.com/username/project2'
    },
    {
      id: 3,
      title: 'Application Mobile',
      description: 'Application mobile hybride pour la gestion de tâches.',
      technologies: ['Ionic', 'Angular', 'Firebase'],
      image: 'project3.jpg',
      githubUrl: 'https://github.com/username/project3'
    }
  ];
}
