import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
interface Skill {
  name: string;
  level: number;
  category: string;
}
@Component({
  selector: 'app-skills',
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
skills: Skill[] = [
    { name: 'Angular', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'MongoDB', level: 75, category: 'Backend' },
    { name: 'Express.js', level: 80, category: 'Backend' },
    { name: 'Git', level: 85, category: 'Outils' },
    { name: 'Docker', level: 70, category: 'Outils' }
  ];

  categories = ['Frontend', 'Backend', 'Outils'];

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }
}
