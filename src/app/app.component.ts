import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./pages/about/about.component";
import { HeaderComponent } from "./components/header/header.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [HeroComponent, AboutComponent, HeaderComponent, ProjectsComponent, SkillsComponent, FooterComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 title = 'Mon Portfolio';
  
  // Données du portfolio
  profile = {
    name: 'Votre Nom',
    title: 'Développeur Full Stack',
    description: 'Passionné par le développement web moderne et les nouvelles technologies.',
    email: 'votre.email@example.com',
    phone: '+212 XXX XXX XXX',
    location: 'Fès, Maroc',
    image: 'assets/profile.jpg'
  };

  skills = [
    { name: 'Angular', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 75, category: 'database' },
    { name: 'Git', level: 85, category: 'tools' }
  ];

  projects = [
    {
      id: 1,
      title: 'Application E-commerce',
      description: 'Une application e-commerce complète avec Angular et Node.js',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express'],
      image: 'assets/project1.jpg',
      github: 'https://github.com/votreusername/ecommerce',
      demo: 'https://votre-ecommerce.com',
      featured: true
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Dashboard interactif pour visualiser les données analytiques',
      technologies: ['Angular', 'Chart.js', 'Firebase'],
      image: 'assets/project2.jpg',
      github: 'https://github.com/votreusername/dashboard',
      demo: 'https://votre-dashboard.com',
      featured: true
    },
    {
      id: 3,
      title: 'API REST',
      description: 'API REST sécurisée avec authentification JWT',
      technologies: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
      image: 'assets/project3.jpg',
      github: 'https://github.com/votreusername/api',
      demo: null,
      featured: false
    }
  ];

  experiences = [
    {
      position: 'Développeur Full Stack',
      company: 'Tech Solutions',
      period: '2023 - Présent',
      description: 'Développement d\'applications web modernes avec Angular et Node.js'
    },
    {
      position: 'Développeur Frontend',
      company: 'Digital Agency',
      period: '2022 - 2023',
      description: 'Création d\'interfaces utilisateur responsive et interactives'
    },
    {
      position: 'Stagiaire Développeur',
      company: 'StartUp Innovante',
      period: '2021 - 2022',
      description: 'Apprentissage des technologies web modernes et des bonnes pratiques'
    }
  ];

  activeSection = 'home';
  isMenuOpen = false;

  ngOnInit() {
    // Animation au scroll
    this.setupScrollAnimations();
  }

  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  downloadCV() {
    // Logique pour télécharger le CV
    console.log('Téléchargement du CV...');
  }

  private setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Mettre à jour la section active
          const sectionId = entry.target.id;
          if (sectionId) {
            this.activeSection = sectionId;
          }
        }
      });
    }, { threshold: 0.3 });

    // Observer toutes les sections
    setTimeout(() => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => observer.observe(section));
    }, 100);
  }

  sendEmail() {
    window.location.href = `mailto:${this.profile.email}`;
  }

  callPhone() {
    window.location.href = `tel:${this.profile.phone}`;
  }
}