import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements AfterViewInit {
  isNavettesFilterActive = false;
  isLocationFilterActive = false;
  isChauffeurFilterActive = false;
  isAlternatifsFilterActive = false;

  ngAfterViewInit() {
    this.initScrollHandlers();
  }

  private initScrollHandlers() {
    this.setupScrollContainers();
  }

  private setupScrollContainers() {
    // Configuration pour tous les conteneurs de défilement
    const containers = document.querySelectorAll('.scroll-container');
    
    containers.forEach(container => {
      const scrollElement = container.querySelector('.equipment-scroll');
      const leftBtn = container.querySelector('.scroll-left');
      const rightBtn = container.querySelector('.scroll-right');

      if (leftBtn && scrollElement) {
        leftBtn.addEventListener('click', () => {
          (scrollElement as HTMLElement).scrollBy({ left: -300, behavior: 'smooth' });
        });
      }

      if (rightBtn && scrollElement) {
        rightBtn.addEventListener('click', () => {
          (scrollElement as HTMLElement).scrollBy({ left: 300, behavior: 'smooth' });
        });
      }
    });
  }

  toggleFilter(section: string) {
    switch(section) {
      case 'navettes':
        this.isNavettesFilterActive = !this.isNavettesFilterActive;
        break;
      case 'location':
        this.isLocationFilterActive = !this.isLocationFilterActive;
        break;
      case 'chauffeur':
        this.isChauffeurFilterActive = !this.isChauffeurFilterActive;
        break;
      case 'alternatifs':
        this.isAlternatifsFilterActive = !this.isAlternatifsFilterActive;
        break;
    }
  }
}