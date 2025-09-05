import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-chef-equip',
  templateUrl: './chef-equip.component.html',
  styleUrls: ['./chef-equip.component.css'],
  standalone: true,
  imports: [FormsModule, NgFor, CommonModule]
})
export class ChefEquipComponent implements OnInit {
  // ... (garde tous tes filtres et données existants)
  filters = {
    promo: {
      location: '',
      category: '',
      budget: '',
      date: ''
    },
    cuisine: {
      location: '',
      type: '',
      budget: '',
      date: ''
    },
    froid: {
      location: '',
      type: '',
      budget: '',
      date: ''
    },
    preparation: {
      location: '',
      type: '',
      budget: '',
      date: ''
    },
    service: {
      location: '',
      type: '',
      budget: '',
      date: ''
    }
  };

  // ... (garde toutes tes données existantes - promoItems, cookingEquipment, etc.)
  promoItems = [
    {
      id: 1,
      category: 'four',
      location: 'casablanca',
      price: 840,
      image: 'FourMax.jpg',
      title: 'Four Maxichef',
      specs: [
        { icon: 'fas fa-thermometer-half', text: '10 niveaux' },
        { icon: 'fas fa-bolt', text: '380V' },
        { icon: 'fas fa-expand', text: '80x60cm' }
      ],
      oldPrice: 1200,
      currentPrice: 840
    },
    {
      id: 2,
      category: 'plancha',
      location: 'rabat',
      price: 487,
      image: 'Plancha.jpg',
      title: 'Plancha Inox PRO-GAZ',
      specs: [
        { icon: 'fas fa-ruler-horizontal', text: '80cm' },
        { icon: 'fas fa-fire', text: 'Thermostat' },
        { icon: 'fas fa-weight', text: '45kg' }
      ],
      oldPrice: 650,
      currentPrice: 487
    },
    {
      id: 3,
      category: 'pack',
      location: 'marrakech',
      price: 2800,
      image: 'Pack.jpg',
      title: 'Pack Cuisine STARTUP',
      specs: [
        { icon: 'fas fa-boxes', text: '12 pièces' },
        { icon: 'fas fa-utensils', text: 'Complet' }
      ],
      oldPrice: 3500,
      currentPrice: 2800
    },
    {
      id: 4,
      category: 'frigo',
      location: 'tanger',
      price: 800,
      image: 'Armoire.jpg',
      title: 'Armoire Frigo DELUXE',
      specs: [
        { icon: 'fas fa-snowflake', text: '-18°C' },
        { icon: 'fas fa-box-open', text: '600L' },
        { icon: 'fas fa-tachometer-alt', text: 'Digital' }
      ],
      oldPrice: 950,
      currentPrice: 800
    },
    {
      id: 5,
      category: 'cuisson',
      location: 'fes',
      price: 600,
      image: 'CuisinièrePRO.jpg',
      title: 'Cuisinière PRO',
      specs: [
        { icon: 'fas fa-fire', text: '6 feux' },
        { icon: 'fas fa-thermometer-half', text: 'Four intégré' },
        { icon: 'fas fa-expand', text: '90x60cm' }
      ],
      oldPrice: 750,
      currentPrice: 600
    }
  ];

  cookingEquipment = [
    {
      id: 1,
      type: 'four',
      price: 900,
      location: 'casablanca',
      image: 'Four.jpg',
      title: 'Four Professionnel',
      description: 'Four professionnel 10 niveaux avec convection, capacité 20 plateaux, idéal pour boulangeries et restaurants.',
      rating: 5,
      reviews: 24
    },
    {
      id: 2,
      type: 'friteuse',
      price: 650,
      location: 'rabat',
      image: 'Friteuse.jpg',
      title: 'Friteuse Professionnelle',
      description: 'Friteuse gaz 2 bacs 12L, thermostat réglable, filtration automatique, parfaite pour snacks et fast-foods.',
      rating: 4,
      reviews: 18
    },
    {
      id: 3,
      type: 'rechaud',
      price: 750,
      location: 'marrakech',
      image: 'Rechaud.jpg',
      title: 'Réchaud Plaque',
      description: 'Réchaud professionnel 4 feux avec plaque en acier inoxydable, puissance 15kW, idéal pour cuisson intensive.',
      rating: 5,
      reviews: 12
    },
    {
      id: 4,
      type: 'grill',
      price: 850,
      location: 'tanger',
      image: 'GrillPoulet.jpg',
      title: 'Grill à Poulet',
      description: 'Grill vertical professionnel pour poulet rôti, capacité 12 poulets, système de rotation automatique.',
      rating: 4,
      reviews: 15
    },
    {
      id: 5,
      type: 'grill',
      price: 950,
      location: 'fes',
      image: 'Doner.jpg',
      title: 'Döner Grill',
      description: 'Grill à broche professionnel pour döner kebab, hauteur 1m80, capacité 50kg de viande, système auto-nettoyant.',
      rating: 5,
      reviews: 22
    }
  ];

  coldEquipment = [
    {
      id: 1,
      type: 'armoire',
      price: 750,
      location: 'casablanca',
      image: 'Armoire.jpg',
      title: 'Armoire à Froid',
      description: 'Armoire frigorifique professionnelle 600L, température réglable de +2°C à +8°C, idéale pour la restauration.',
      rating: 5,
      reviews: 12
    },
    {
      id: 2,
      type: 'refrigerateur',
      price: 650,
      location: 'rabat',
      image: 'Refrigerateur.jpg',
      title: 'Réfrigérateur Pro',
      description: 'Réfrigérateur professionnel 2 portes, 400L, système No Frost, parfait pour les établissements de restauration.',
      rating: 4,
      reviews: 16
    },
    {
      id: 3,
      type: 'congelateur',
      price: 800,
      location: 'marrakech',
      image: 'Congelateur.jpg',
      title: 'Congélateur Pro',
      description: 'Congélateur coffre 500L, température -18°C, capacité de stockage importante pour produits surgelés.',
      rating: 5,
      reviews: 9
    },
    {
      id: 4,
      type: 'machine',
      price: 550,
      location: 'tanger',
      image: 'Machine.jpg',
      title: 'Machine à Glaçons',
      description: 'Machine professionnelle produisant 50kg de glaçons par jour, système autonettoyant, idéale pour restaurants.',
      rating: 4,
      reviews: 14
    },
    {
      id: 5,
      type: 'console',
      price: 700,
      location: 'fes',
      image: 'Console.jpg',
      title: 'Console Réfrigérée',
      description: 'Console réfrigérée verticale 2 portes, affichage digital, température réglable, parfaite pour les supermarchés.',
      rating: 5,
      reviews: 7
    }
  ];

  preparationEquipment = [
    {
      id: 1,
      type: 'trancheuse',
      price: 600,
      location: 'casablanca',
      image: 'Trancheuse.jpg',
      title: 'Trancheuse Pro',
      description: 'Trancheuse professionnelle inox, lame 30cm, épaisseur réglable de 1 à 20mm, idéale pour charcuteries et fromages.',
      rating: 4,
      reviews: 11
    },
    {
      id: 2,
      type: 'robot',
      price: 450,
      location: 'rabat',
      image: 'Robot.jpg',
      title: 'Robot Culinaire',
      description: 'Robot multifonction 1200W, bol inox 4L, 5 accessoires inclus (couteau, batteur, fouet, pétrin, râpe).',
      rating: 5,
      reviews: 21
    },
    {
      id: 3,
      type: 'machine',
      price: 500,
      location: 'marrakech',
      image: 'Pates.jpg',
      title: 'Machine à Pâtes',
      description: 'Machine à pâtes professionnelle avec 9 moules inclus, production 15kg/h, structure en acier inoxydable.',
      rating: 4,
      reviews: 13
    },
    {
      id: 4,
      type: 'crepiere',
      price: 550,
      location: 'tanger',
      image: 'CrépiereProfessionnelle.jpg',
      title: 'Crépière Professionnelle',
      description: 'Crépière gaz 60cm, plaque en fonte, thermostat réglable, idéale pour crêpes et galettes.',
      rating: 5,
      reviews: 8
    },
    {
      id: 5,
      type: 'bainmarie',
      price: 650,
      location: 'fes',
      image: 'Bain-Marie.jpg',
      title: 'Bain-Marie',
      description: 'Bain-marie électrique 6 gn, température réglable 30-90°C, parfait pour restauration collective.',
      rating: 4,
      reviews: 10
    }
  ];

  serviceEquipment = [
    {
      id: 1,
      type: 'cafe',
      price: 550,
      location: 'casablanca',
      image: 'Cafe.jpg',
      title: 'Machine à Café Pro',
      description: 'Machine à café pro2 groupes, système de mouture intégré, capacité 100 tasses/heure, idéale pour cafés.',
      rating: 5,
      reviews: 32
    },
    {
      id: 2,
      type: 'percolateur',
      price: 600,
      location: 'rabat',
      image: 'Percolateur.jpg',
      title: 'Percolateur Professionnel',
      description: 'Percolateur inox 15L, thermostat réglable, système de filtration, parfait pour événements et réceptions.',
      rating: 4,
      reviews: 17
    },
    {
      id: 3,
      type: 'barbepapa',
      price: 450,
      location: 'marrakech',
      image: 'BarbeaPapa.jpg',
      title: 'Machine à Barbe à Papa',
      description: 'Machine professionnelle avec réservoir en acier inoxydable, production rapide (1 barbe à papa/30sec), inclut 10 bâtons.',
      rating: 4,
      reviews: 9
    },
    {
      id: 4,
      type: 'popcorn',
      price: 400,
      location: 'tanger',
      image: 'Pop-Corn.jpg',
      title: 'Machine à Pop-Corn',
      description: 'Machine à popcorn commerciale 120V, capacité 5kg/heure, cuve en acier inoxydable, chariot inclus.',
      rating: 5,
      reviews: 11
    }
  ];

  popularEquipment = [
    {
      id: 1,
      image: 'Robot.jpg',
      title: 'Robot Culinaire Pro',
      description: 'Robot multifonction 12L puissance 1500W pour professionnels. Inclut batteur, hachoir et accessoires inox pour une polyvalence maximale en cuisine.',
      price: 450,
      rating: 4,
      reviews: 21
    },
    {
      id: 2,
      image: 'Cafe.jpg',
      title: 'Machine à Café Pro',
      description: 'Machine expresso automatique avec broyeur céramique et système de mousseur pro. Capacité 2L, programmable et compatible avec grains et moulu.',
      price: 550,
      rating: 5,
      reviews: 32
    },
    {
      id: 3,
      image: 'Pack.jpg',
      title: 'Pack Cuisine Complète',
      description: 'Solution clé en main comprenant four professionnel, plaque de cuisson 6 feux et batterie de cuisine inox. Idéal pour restaurants et traiteurs avec garantie 2 ans.',
      price: 2800,
      rating: 5,
      reviews: 8
    }
  ];

  blogPosts = [
    {
      id: 1,
      image: 'Equipementcuisine.jpg',
      date: '15 Juin 2025',
      title: 'Comment choisir son équipement de cuisine professionnelle',
      excerpt: 'Découvrez nos conseils pour sélectionner le matériel adapté à votre activité et à votre espace...'
    },
    {
      id: 2,
      image: 'culinaires.jpg',
      date: '2 Juin 2025',
      title: 'Les tendances 2025 en matière d\'équipements culinaires',
      excerpt: 'Tour d\'horizon des innovations et tendances qui marquent cette année dans le monde de la cuisine.'
    },
    {
      id: 3,
      image: 'petitecuisine.jpg',
      date: '20 Mai 2025',
      title: 'Optimiser l\'espace dans une petite cuisine professionnelle',
      excerpt: 'Nos astuces pour maximiser l\'efficacité de votre cuisine même avec un espace limité...'
    },
    {
      id: 4,
      image: 'Entretiencuisine.jpg',
      date: '10 Mai 2025',
      title: 'Entretien des équipements de cuisine : nos meilleures pratiques',
      excerpt: 'Comment prolonger la durée de vie de votre matériel professionnel avec un entretien adapté...'
    }
  ];

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollHandlers();
    }
  }

  initScrollHandlers(): void {
    if (typeof document !== 'undefined') {
      setTimeout(() => {
        document.querySelectorAll('.scroll-container').forEach(container => {
          const scroll = container.querySelector('.equipment-scroll') || 
                        container.querySelector('.blog-scroll');
          const leftBtn = container.querySelector('.scroll-left');
          const rightBtn = container.querySelector('.scroll-right');
          
          if (scroll && leftBtn && rightBtn) {
            leftBtn.addEventListener('click', () => {
              scroll.scrollBy({ left: -300, behavior: 'smooth' });
            });
            
            rightBtn.addEventListener('click', () => {
              scroll.scrollBy({ left: 300, behavior: 'smooth' });
            });
          }
        });

        const promoScroller = document.querySelector('.promo-scroller');
        if (promoScroller) {
          const leftArrow = promoScroller.querySelector('.left-arrow');
          const rightArrow = promoScroller.querySelector('.right-arrow');
          const cards = promoScroller.querySelector('.promo-cards');
          
          if (leftArrow && rightArrow && cards) {
            leftArrow.addEventListener('click', () => {
              cards.scrollBy({ left: -300, behavior: 'smooth' });
            });
            
            rightArrow.addEventListener('click', () => {
              cards.scrollBy({ left: 300, behavior: 'smooth' });
            });
          }
        }
      }, 100);
    }
  }

  // MÉTHODE CORRIGÉE pour basculer l'affichage des filtres
  toggleFilter(filterCardId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const filterCard = document.getElementById(filterCardId);
      
      if (filterCard) {
        // Basculer la classe 'active'
        if (filterCard.classList.contains('active')) {
          this.renderer.removeClass(filterCard, 'active');
        } else {
          this.renderer.addClass(filterCard, 'active');
          
          // Faire défiler vers le début
          const scrollContainer = filterCard.closest('.scroll-container') || 
                                filterCard.closest('.promo-scroller');
          const scrollContent = scrollContainer?.querySelector('.equipment-scroll') || 
                              scrollContainer?.querySelector('.promo-cards');
          
          scrollContent?.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        }
      }
    }
  }

  resetAllFilters(section: string): void {
    if (this.filters[section as keyof typeof this.filters]) {
      this.filters[section as keyof typeof this.filters] = {
        location: '',
        category: section === 'promo' ? '' : '',
        type: '',
        budget: '',
        date: ''
      };
    }
  }

  // ... (garde toutes tes méthodes de vérification de visibilité)
  isPromoItemVisible(item: any): boolean {
    const filter = this.filters.promo;
    
    if (filter.location && item.location !== filter.location) {
      return false;
    }
    
    if (filter.category && item.category !== filter.category) {
      return false;
    }
    
    if (filter.budget) {
      const price = item.price;
      const [min, max] = filter.budget.split('-').map(Number);
      
      if (filter.budget.endsWith('+')) {
        if (price < min) return false;
      } else if (price < min || price > max) {
        return false;
      }
    }
    
    return true;
  }

  isCookingItemVisible(item: any): boolean {
    const filter = this.filters.cuisine;
    
    if (filter.location && item.location !== filter.location) {
      return false;
    }
    
    if (filter.type && item.type !== filter.type) {
      return false;
    }
    
    if (filter.budget) {
      const price = item.price;
      const [min, max] = filter.budget.split('-').map(Number);
      
      if (filter.budget.endsWith('+')) {
        if (price < min) return false;
      } else if (price < min || price > max) {
        return false;
      }
    }
    
    return true;
  }

  isColdItemVisible(item: any): boolean {
    const filter = this.filters.froid;
    
    if (filter.location && item.location !== filter.location) {
      return false;
    }
    
    if (filter.type && item.type !== filter.type) {
      return false;
    }
    
    if (filter.budget) {
      const price = item.price;
      const [min, max] = filter.budget.split('-').map(Number);
      
      if (filter.budget.endsWith('+')) {
        if (price < min) return false;
      } else if (price < min || price > max) {
        return false;
      }
    }
    
    return true;
  }

  isPreparationItemVisible(item: any): boolean {
    const filter = this.filters.preparation;
    
    if (filter.location && item.location !== filter.location) {
      return false;
    }
    
    if (filter.type && item.type !== filter.type) {
      return false;
    }
    
    if (filter.budget) {
      const price = item.price;
      const [min, max] = filter.budget.split('-').map(Number);
      
      if (filter.budget.endsWith('+')) {
        if (price < min) return false;
      } else if (price < min || price > max) {
        return false;
      }
    }
    
    return true;
  }

  isServiceItemVisible(item: any): boolean {
    const filter = this.filters.service;
    
    if (filter.location && item.location !== filter.location) {
      return false;
    }
    
    if (filter.type && item.type !== filter.type) {
      return false;
    }
    
    if (filter.budget) {
      const price = item.price;
      const [min, max] = filter.budget.split('-').map(Number);
      
      if (filter.budget.endsWith('+')) {
        if (price < min) return false;
      } else if (price < min || price > max) {
        return false;
      }
    }
    
    return true;
  }

  getRatingStars(rating: number): string {
    return '★★★★★'.substring(0, rating) + '☆☆☆☆☆'.substring(0, 5 - rating);
  }

  // Getters pour les items filtrés
  get filteredPromoItems() {
    return this.promoItems;
  }

  get filteredCookingEquipment() {
    return this.cookingEquipment;
  }

  get filteredColdEquipment() {
    return this.coldEquipment;
  }

  get filteredPreparationEquipment() {
    return this.preparationEquipment;
  }

  get filteredServiceEquipment() {
    return this.serviceEquipment;
  }






scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
    
    // Optionnel: Ajouter un smooth scroll supplémentaire
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80; // Ajustez selon votre header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 0);
  }
}