import { Component, HostListener } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  discountPercentages = [20, 25, 30, 40, 50, 60, 25, 30, 40, 50, 60];
  selectedDiscount = 0;
  
  allRestaurants = [
    {
      id: 1,
      image: 'MarocainTraditionnel.jpg',
      cuisineType: 'Marocain Traditionnel',
      name: 'Dar Tajine',
      location: 'Marrakech',
      averagePrice: 250,
      discount: 30,
      promoText: 'Menu spécial -30%'
    },
    {
      id: 2,
      image: 'CuisineMarocaine.jpg',
      cuisineType: 'Cuisine Marocaine',
      name: 'Le Palais Marrakchi',
      location: 'Casablanca',
      averagePrice: 300,
      discount: 40,
      promoText: 'Jusqu\'à -40%'
    },
    {
      id: 3,
      image: 'Pâtisserie.jpg',
      cuisineType: 'Pâtisserie Orientale',
      name: 'Pâtisserie Alami',
      location: 'Fès',
      averagePrice: 120,
      discount: 25,
      promoText: 'Dégustation -25%'
    },
    {
      id: 4,
      image: 'restaurant4.jpg',
      cuisineType: 'Cuisine Moderne',
      name: 'Le Jardin Secret',
      location: 'Rabat',
      averagePrice: 350,
      discount: 20,
      promoText: 'Offre spéciale -20%'
    },
    {
      id: 5,
      image: 'restaurant5.jpg',
      cuisineType: 'Fruits de Mer',
      name: 'La Corniche',
      location: 'Agadir',
      averagePrice: 280,
      discount: 50,
      promoText: 'Grande promo -50%'
    },
    {
      id: 6,
      image: 'restaurant6.jpg',
      cuisineType: 'Grillades',
      name: 'Chez Hassan',
      location: 'Tanger',
      averagePrice: 200,
      discount: 60,
      promoText: 'Méga réduction -60%'
    },
    {
      id: 7,
      image: 'riad_zitoune.jpg',
      cuisineType: 'Cuisine Fassie',
      name: 'Riad Zitoune',
      location: 'Fès',
      averagePrice: 300,
      discount: 15,
      promoText: 'Menu Fassi -15%'
    },
    {
      id: 8,
      image: 'dar_mama.jpg',
      cuisineType: 'Cuisine Familiale',
      name: 'Dar Mama',
      location: 'Casablanca',
      averagePrice: 180,
      discount: 25,
      promoText: 'Plats maison -25%'
    },
    {
      id: 9,
      image: 'le_soleil.jpg',
      cuisineType: 'Cuisine Fusion',
      name: 'Le Soleil',
      location: 'Marrakech',
      averagePrice: 320,
      discount: 30,
      promoText: 'Dîner fusion -30%'
    },
    {
      id: 10,
      image: 'sable_dor.jpg',
      cuisineType: 'Fruits de Mer',
      name: 'Sable Doré',
      location: 'Essaouira',
      averagePrice: 270,
      discount: 40,
      promoText: 'Plateau fruits de mer -40%'
    },
     {
      id: 15,
      image: 'le_nomade.jpg',
      cuisineType: 'Cuisine Saharienne',
      name: 'Le Nomade',
      location: 'Merzouga',
      averagePrice: 230,
      discount: 30,
      promoText: 'Dîner sous les étoiles -30%'
    },
    {
      id: 11,
      image: 'jardin_andalus.jpg',
      cuisineType: 'Cuisine Andalouse',
      name: 'Jardin Andalou',
      location: 'Tétouan',
      averagePrice: 220,
      discount: 20,
      promoText: 'Spécialités andalouses -20%'
    },
    {
      id: 12,
      image: 'kasbah_des_saveurs.jpg',
      cuisineType: 'Cuisine Berbère',
      name: 'Kasbah des Saveurs',
      location: 'Ouarzazate',
      averagePrice: 190,
      discount: 35,
      promoText: 'Expérience berbère -35%'
    },
    {
      id: 13,
      image: 'la_terrasse_bleue.jpg',
      cuisineType: 'Cuisine Méditerranéenne',
      name: 'La Terrasse Bleue',
      location: 'Tanger',
      averagePrice: 280,
      discount: 25,
      promoText: 'Vue sur mer -25%'
    },
    {
      id: 14,
      image: 'palais_des_epices.jpg',
      cuisineType: 'Cuisine Royale',
      name: 'Palais des Épices',
      location: 'Meknès',
      averagePrice: 350,
      discount: 10,
      promoText: 'Menu royal -10%'
    },
    {
      id: 15,
      image: 'le_nomade.jpg',
      cuisineType: 'Cuisine Saharienne',
      name: 'Le Nomade',
      location: 'Merzouga',
      averagePrice: 230,
      discount: 50,
      promoText: 'Dîner sous les étoiles -50%'
    },
    {
      id: 16,
      image: 'riad_el_andalus.jpg',
      cuisineType: 'Pâtisserie Orientale',
      name: 'Riad El Andalus',
      location: 'Chefchaouen',
      averagePrice: 120,
      discount: 20,
      promoText: 'Thé et pâtisseries -20%'
    },
    {
      id: 8,
      image: 'dar_mama.jpg',
      cuisineType: 'Cuisine Familiale',
      name: 'Dar Mama',
      location: 'Casablanca',
      averagePrice: 180,
      discount: 40,
      promoText: 'Plats maison -40%'
    },
    {
      id: 17,
      image: 'l_etoile_d_agadir.jpg',
      cuisineType: 'Cuisine Côtière',
      name: "L'Étoile d'Agadir",
      location: 'Agadir',
      averagePrice: 310,
      discount: 50,
      promoText: 'Dégustation de poissons -50%'
    },
    {
      id: 3,
      image: 'Pâtisserie.jpg',
      cuisineType: 'Pâtisserie Orientale',
      name: 'Pâtisserie Alami',
      location: 'Fès',
      averagePrice: 120,
      discount: 60,
      promoText: 'Dégustation 60%'
    },
    {
      id: 18,
      image: 'le_palais_bleu.jpg',
      cuisineType: 'Gastronomie Marocaine',
      name: 'Le Palais Bleu',
      location: 'Chefchaouen',
      averagePrice: 380,
      discount: 60,
      promoText: 'Menu gastronomique -60%'     
    }  
  ];

 filteredRestaurants = [...this.allRestaurants];

  trackByRestaurantId(index: number, restaurant: any): number {
    return restaurant.id;
  }

  scrollCarousel(direction: string) {
    const carousel = document.getElementById('offersCarousel');
    if (carousel) {
      const scrollAmount = 280;
      if (direction === 'left') {
        carousel.scrollLeft -= scrollAmount;
      } else {
        carousel.scrollLeft += scrollAmount;
      }
    }
  }

  resetFilter(): void {
    this.filteredRestaurants = [...this.allRestaurants];
    this.selectedDiscount = 0;
  }

  applyFilter(percentage: number): void {
    this.filteredRestaurants = this.allRestaurants.filter((restaurant) => {
      return restaurant.discount === percentage;
    });
    this.selectedDiscount = percentage;
  }
 

  showLoginModal = false;
  showRegisterModal = false;
  showReservationModal = false;
  showAccountModal = false;

  // Données de formulaire
  loginData = {
    email: '',
    password: ''
  };

  registerData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  };

  reservationData = {
    city: '',
    restaurant: '',
    date: '',
    time: '',
    guests: '2',
    cuisineType: '',
    requirements: '',
    name: '',
    email: '',
    phone: ''
  };

  // Méthodes pour les modaux
  openModal(modalType: string): void {
    this.closeAllModals();
    switch(modalType) {
      case 'login': this.showLoginModal = true; break;
      case 'register': this.showRegisterModal = true; break;
      case 'reservation': this.showReservationModal = true; break;
      case 'account': this.showAccountModal = true; break;
    }
    document.body.style.overflow = 'hidden';
  }

  closeAllModals(): void {
    this.showLoginModal = false;
    this.showRegisterModal = false;
    this.showReservationModal = false;
    this.showAccountModal = false;
    document.body.style.overflow = '';
  }

  // Méthodes de soumission
  onLoginSubmit(): void {
    console.log('Login data:', this.loginData);
    // Ici vous ajouteriez la logique de connexion réelle
    this.closeAllModals();
  }

  onRegisterSubmit(): void {
    console.log('Register data:', this.registerData);
    // Ici vous ajouteriez la logique d'inscription réelle
    this.closeAllModals();
  }

  onReservationSubmit(): void {
    console.log('Reservation data:', this.reservationData);
    // Ici vous ajouteriez la logique de réservation réelle
    this.closeAllModals();
  }




  @HostListener('keydown.escape', ['$event'])
onEscapePressed(event: KeyboardEvent): void {
  this.closeAllModals();
}

@HostListener('document:click', ['$event'])
onDocumentClick(event: Event): void {
  const target = event.target as HTMLElement;
  if (target.classList.contains('modal-overlay')) {
    this.closeAllModals();
  }
}









 DietType = {
    RESTRICTION: 'restriction',
    ETHICAL: 'ethical',
    MEDICAL: 'medical',
    CULTURAL: 'cultural',
    PERFORMANCE: 'performance'
  };

  // Liste complète des régimes avec icônes et images
  diets = [
    // 1. Régimes par restrictions
    {
      id: 'gluten-free',
      name: 'Sans Gluten',
      type: this.DietType.RESTRICTION,
      description: 'Élimine le blé, l\'orge, le seigle et leurs dérivés',
      icon: '🚫🌾',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['blé', 'orge', 'seigle', 'malt']
    },
    {
      id: 'lactose-free',
      name: 'Sans Lactose',
      type: this.DietType.RESTRICTION,
      description: 'Exclut les produits laitiers d\'origine animale',
      icon: '🚫🥛',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['lait', 'fromage', 'beurre', 'crème']
    },
    {
      id: 'nut-free',
      name: 'Sans Noix',
      type: this.DietType.RESTRICTION,
      description: 'Évite les arachides et fruits à coque',
      icon: '🚫🥜',
      image: 'SansNoix.jpg',
      restrictions: ['arachides', 'amandes', 'noix', 'noisettes']
    },
    {
      id: 'egg-free',
      name: 'Sans Œufs',
      type: this.DietType.RESTRICTION,
      description: 'Exclut les œufs et produits dérivés',
      icon: '🚫🥚',
      image: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['œufs', 'mayonnaise', 'mousse']
    },
    {
      id: 'shellfish-free',
      name: 'Sans Crustacés',
      type: this.DietType.RESTRICTION,
      description: 'Exclut crevettes, crabes et mollusques',
      icon: '🚫🦐',
      image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['crevettes', 'crabes', 'homards', 'moules']
    },

    // 2. Régimes éthiques/santé
    {
      id: 'vegan',
      name: 'Végétalien',
      type: this.DietType.ETHICAL,
      description: 'Aucun produit animal (viande, lait, œufs, miel)',
      icon: '🌱',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['viande', 'poisson', 'lait', 'œufs']
    },
    {
      id: 'vegetarian',
      name: 'Végétarien',
      type: this.DietType.ETHICAL,
      description: 'Pas de viande mais œufs/lait autorisés',
      icon: '🥕',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['viande', 'poisson']
    },
    {
      id: 'pescatarian',
      name: 'Pescétarien',
      type: this.DietType.ETHICAL,
      description: 'Végétarien + poisson/fruits de mer',
      icon: '🐟',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['viande']
    },
    {
      id: 'organic',
      name: 'Bio',
      type: this.DietType.ETHICAL,
      description: 'Produits issus de l\'agriculture biologique',
      icon: '🌿',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['pesticides', 'ogm']
    },
    {
      id: 'local',
      name: 'Locavore',
      type: this.DietType.ETHICAL,
      description: 'Produits dans un rayon de 100km maximum',
      icon: '🗺️',
      image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['produits importés']
    },

    // 3. Régimes médicaux
    {
      id: 'keto',
      name: 'Cétogène',
      type: this.DietType.MEDICAL,
      description: 'Très faible en glucides (<20g/jour)',
      icon: '🥑',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['sucres', 'céréales', 'fruits sucrés']
    },
    {
      id: 'low-fodmap',
      name: 'Low FODMAP',
      type: this.DietType.MEDICAL,
      description: 'Pour syndrome de l\'intestin irritable',
      icon: '🩺',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['lactose', 'fructose', 'polyols']
    },
    {
      id: 'diabetic',
      name: 'Diabétique',
      type: this.DietType.MEDICAL,
      description: 'Contrôle strict des glucides',
      icon: '🩸',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['sucres rapides']
    },
    {
      id: 'low-sodium',
      name: 'Pauvre en Sel',
      type: this.DietType.MEDICAL,
      description: '<2g de sodium par jour',
      icon: '🧂',
      image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['sel', 'charcuterie', 'plats préparés']
    },
    {
      id: 'high-protein',
      name: 'Hyperprotéiné',
      type: this.DietType.MEDICAL,
      description: '>1.5g de protéines/kg de poids',
      icon: '💪',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['aliments pauvres en protéines']
    },

    // 4. Traditions culturelles/religieuses
    {
      id: 'halal',
      name: 'Halal',
      type: this.DietType.CULTURAL,
      description: 'Conforme aux prescriptions islamiques',
      icon: '☪️',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['porc', 'alcool']
    },
    {
      id: 'kosher',
      name: 'Kasher',
      type: this.DietType.CULTURAL,
      description: 'Règles alimentaires juives',
      icon: '✡️',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['porc', 'mélange lait/viande']
    },
    {
      id: 'ayurvedic',
      name: 'Ayurvédique',
      type: this.DietType.CULTURAL,
      description: 'Équilibre des doshas (Vata, Pitta, Kapha)',
      icon: '🕉️',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['aliments incompatibles avec son dosha']
    },
    {
      id: 'mediterranean',
      name: 'Méditerranéen',
      type: this.DietType.CULTURAL,
      description: 'Riche en huile d\'olive, poisson et légumes',
      icon: '🌊',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['viande rouge', 'produits transformés']
    },
    {
      id: 'okinawa',
      name: 'Okinawa',
      type: this.DietType.CULTURAL,
      description: 'Régime des centenaires japonais',
      icon: '🗾',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['sucres', 'produits laitiers']
    },

    // 5. Régimes de performance
    {
      id: 'paleo',
      name: 'Paléo',
      type: this.DietType.PERFORMANCE,
      description: 'Alimentation ancestrale (viande, noix, baies)',
      icon: '🦴',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['céréales', 'lait', 'sucre']
    },
    {
      id: 'zone',
      name: 'Zone Diet',
      type: this.DietType.PERFORMANCE,
      description: 'Ratio 40-30-30 (glucides-protéines-lipides)',
      icon: '⚖️',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['déséquilibre macronutriments']
    },
    {
      id: 'warrior',
      name: 'Warrior Diet',
      type: this.DietType.PERFORMANCE,
      description: 'Jeûne diurne, repas nocturne',
      icon: '⚔️',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['repas diurnes']
    },
    {
      id: 'blood-type',
      name: 'Blood Type Diet',
      type: this.DietType.PERFORMANCE,
      description: 'Adapté à votre groupe sanguin',
      icon: '🩸',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['aliments incompatibles']
    },
    {
      id: 'cyclical-keto',
      name: 'Cétogène Cyclique',
      type: this.DietType.PERFORMANCE,
      description: '5 jours keto / 2 jours glucides',
      icon: '🔄',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      restrictions: ['glucides en phase keto']
    }
  ];

  // Méthodes de filtrage
  filterByType(type: string) {
    return this.diets.filter(diet => diet.type === type);
  }

  searchDiets(searchTerm: string) {
    return this.diets.filter(diet => 
      diet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      diet.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  // Méthodes pour les modaux
  showDietDetail(diet: any) {
    // Implémentez la logique pour afficher les détails
    console.log('Détails du régime:', diet);
  }

  // Méthodes utilitaires
  getDietTypes() {
    return Object.values(this.DietType);
  }

  trackByDietId(index: number, diet: any) {
    return diet.id;
  }
  


// Ajoutez ces propriétés à votre composant
selectedDietType: string | null = null;
filteredDiets = [...this.diets];


getDietTypeName(type: string): string {
  const names: {[key: string]: string} = {
    'restriction': 'Restrictions',
    'ethical': 'Éthique',
    'medical': 'Médical',
    'cultural': 'Culturel',
    'performance': 'Performance'
  };
  return names[type] || type;
}


// Ajoutez ces propriétés à votre composant
currentDietIndex = 0;
dietsPerPage = 3;

get visibleDiets() {
  return this.filteredDiets.slice(this.currentDietIndex, this.currentDietIndex + this.dietsPerPage);
}

// Méthode pour faire défiler le carousel
scrollCarousels(direction: 'left' | 'right') {
  if (direction === 'left' && this.currentDietIndex > 0) {
    this.currentDietIndex--;
  } else if (direction === 'right' && this.currentDietIndex < this.filteredDiets.length - this.dietsPerPage) {
    this.currentDietIndex++;
  }
  
  // Animation de défilement
  const carousel = document.getElementById('dietCarousel');
  if (carousel) {
    const cardWidth = document.querySelector('.dietary-card')?.clientWidth || 300;
    const gap = 30; // Même valeur que dans votre CSS
    carousel.scrollTo({
      left: this.currentDietIndex * (cardWidth + gap),
      behavior: 'smooth'
    });
  }
}

// Modifiez la méthode de filtrage pour réinitialiser l'index
filterByDietType(type: string): void {
  this.filteredDiets = this.diets.filter(diet => diet.type === type);
  this.selectedDietType = type;
  this.currentDietIndex = 0; // Réinitialiser à la première page
}

resetDietFilter(): void {
  this.filteredDiets = [...this.diets];
  this.selectedDietType = null;
  this.currentDietIndex = 0; // Réinitialiser à la première page
}











// Ajoutez ces propriétés à votre classe HomeComponent

// Types de cuisine disponibles
cuisineTypes = ['Marocaine', 'Française', 'Turque', 'Espagnole', 'Japonaise', 'Italienne', 'Chinoise', 'Indienne'];
selectedCuisine = 'all';

// Restaurants pour la section suggestions
allSuggestions = [
  // Restaurants Marocains
  {
    id: 101,
    image: 'Tajine.jpg',
    cuisineType: 'Marocaine',
    name: 'Tajine Palace',
    location: 'Marrakech',
    averagePrice: 180,
    specialOffer: 'Menu traditionnel'
  },
  {
    id: 102,
    image: 'couscous.jpg',
    cuisineType: 'Marocaine',
    name: 'Couscous Royal',
    location: 'Casablanca',
    averagePrice: 220,
    specialOffer: 'Spécialité du vendredi'
  },
  {
    id: 103,
    image: 'Grillades.jpg',
    cuisineType: 'Marocaine',
    name: 'Douceurs du Maghreb',
    location: 'Fès',
    averagePrice: 90,
    specialOffer: 'Pâtisseries fraîches'
  },
  {
    id: 104,
    image: 'GrilladesAgadir.jpg',
    cuisineType: 'Marocaine',
    name: 'Grillades d\'Agadir',
    location: 'Agadir',
    averagePrice: 150,
    specialOffer: 'Brochettes du jour'
  },

  // Restaurants Français
  {
    id: 105,
    image: 'bistrot_parisien.jpg',
    cuisineType: 'Française',
    name: 'Le Bistrot Parisien',
    location: 'Casablanca',
    averagePrice: 320,
    specialOffer: 'Menu gastronomique'
  },
  {
    id: 106,
    image: 'brasserie_lyon.jpg',
    cuisineType: 'Française',
    name: 'Café de Lyon',
    location: 'Rabat',
    averagePrice: 280,
    specialOffer: 'Spécialités lyonnaises'
  },
  {
    id: 107,
    image: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    cuisineType: 'Française',
    name: 'Le Petit Paris',
    location: 'Marrakech',
    averagePrice: 350,
    specialOffer: 'Cuisine française authentique'
  },
  {
    id: 105,
    image: 'bistrot_parisien.jpg',
    cuisineType: 'Française',
    name: 'Le Bistrot Parisien',
    location: 'Casablanca',
    averagePrice: 320,
    specialOffer: 'Menu gastronomique'
  },
  // Restaurants Turcs
  {
    id: 108,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    cuisineType: 'Turque',
    name: 'Istanbul Kebab',
    location: 'Tanger',
    averagePrice: 120,
    specialOffer: 'Döner fraîchement préparé'
  },
  {
    id: 109,
    image: 'Turque.jpg',
    cuisineType: 'Turque',
    name: 'Le Bosphore',
    location: 'Casablanca',
    averagePrice: 180,
    specialOffer: 'Mezze et grillades'
  },
  {
    id: 110,
    image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    cuisineType: 'Turque',
    name: 'Anatolie',
    location: 'Fès',
    averagePrice: 160,
    specialOffer: 'Cuisine ottoman'
  },
  {
    id: 108,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    cuisineType: 'Turque',
    name: 'Istanbul Kebab',
    location: 'Tanger',
    averagePrice: 120,
    specialOffer: 'Döner fraîchement préparé'
  },

  // Restaurants Espagnols
  {
    id: 111,
    image: 'TapasSevilla.jpg',
    cuisineType: 'Espagnole',
    name: 'Tapas de Sevilla',
    location: 'Tétouan',
    averagePrice: 200,
    specialOffer: 'Tapas variées'
  },
  {
    id: 112,
    image: 'https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    cuisineType: 'Espagnole',
    name: 'Paella Valencia',
    location: 'Tanger',
    averagePrice: 250,
    specialOffer: 'Paella authentique'
  },
  {
    id: 113,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    cuisineType: 'Espagnole',
    name: 'Madrid Grill',
    location: 'Agadir',
    averagePrice: 230,
    specialOffer: 'Grillades ibériques'
  },
  {
    id: 111,
    image: 'TapasSevilla.jpg',
    cuisineType: 'Espagnole',
    name: 'Tapas de Sevilla',
    location: 'Tétouan',
    averagePrice: 200,
    specialOffer: 'Tapas variées'
  },

  // Restaurants Japonais
  {
    id: 114,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    cuisineType: 'Japonaise',
    name: 'Sakura Sushi',
    location: 'Casablanca',
    averagePrice: 300,
    specialOffer: 'Sushi frais du jour'
  },
  {
    id: 115,
    image: 'TokyoRamen.jpg',
    cuisineType: 'Japonaise',
    name: 'Tokyo Ramen',
    location: 'Rabat',
    averagePrice: 180,
    specialOffer: 'Ramen authentique'
  },
  {
    id: 116,
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    cuisineType: 'Japonaise',
    name: 'Kyoto Garden',
    location: 'Marrakech',
    averagePrice: 350,
    specialOffer: 'Cuisine kaiseki'
  },
  {
    id: 114,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    cuisineType: 'Japonaise',
    name: 'Sakura Sushi',
    location: 'Casablanca',
    averagePrice: 300,
    specialOffer: 'Sushi frais du jour'
  },

  // Restaurants Italiens
  {
    id: 117,
    image: 'Mama.jpg',
    cuisineType: 'Italienne',
    name: 'Mama Mia',
    location: 'Casablanca',
    averagePrice: 220,
    specialOffer: 'Pâtes maison'
  },
  {
    id: 118,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    cuisineType: 'Italienne',
    name: 'Pizza Napoli',
    location: 'Marrakech',
    averagePrice: 150,
    specialOffer: 'Pizza au feu de bois'
  },
  {
    id: 119,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    cuisineType: 'Italienne',
    name: 'Trattoria Roma',
    location: 'Rabat',
    averagePrice: 280,
    specialOffer: 'Cuisine romaine traditionnelle'
  },
  {
    id: 117,
    image: 'Mama.jpg',
    cuisineType: 'Italienne',
    name: 'Mama Mia',
    location: 'Casablanca',
    averagePrice: 220,
    specialOffer: 'Pâtes maison'
  },

  // Restaurants Chinois
  {
    id: 120,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    cuisineType: 'Chinoise',
    name: 'Dragon Rouge',
    location: 'Casablanca',
    averagePrice: 200,
    specialOffer: 'Dim sum du dimanche'
  },
  {
    id: 121,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    cuisineType: 'Chinoise',
    name: 'Pékin Express',
    location: 'Fès',
    averagePrice: 160,
    specialOffer: 'Canard laqué'
  },
  {
    id: 122,
    image: 'ShanghaiPalace.jpg',
    cuisineType: 'Chinoise',
    name: 'Shanghai Palace',
    location: 'Agadir',
    averagePrice: 240,
    specialOffer: 'Cuisine shanghaïenne'
  },
  {
    id: 121,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    cuisineType: 'Chinoise',
    name: 'Pékin Express',
    location: 'Fès',
    averagePrice: 160,
    specialOffer: 'Canard laqué'
  },

  // Restaurants Indiens
  {
    id: 123,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    cuisineType: 'Indienne',
    name: 'Taj Mahal',
    location: 'Marrakech',
    averagePrice: 190,
    specialOffer: 'Curry authentique'
  },
  {
    id: 124,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    cuisineType: 'Indienne',
    name: 'Bombay Spice',
    location: 'Casablanca',
    averagePrice: 170,
    specialOffer: 'Tandoor et naan'
  },
  {
    id: 125,
    image: 'Maharaja.jpg',
    cuisineType: 'Indienne',
    name: 'Maharaja',
    location: 'Rabat',
    averagePrice: 210,
    specialOffer: 'Biryani spécialisé'
  },
  {
    id: 123,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    cuisineType: 'Indienne',
    name: 'Taj Mahal',
    location: 'Marrakech',
    averagePrice: 190,
    specialOffer: 'Curry authentique'
  }
];

filteredSuggestions = [...this.allSuggestions];

// Méthodes pour le filtrage des suggestions
resetCuisineFilter(): void {
  this.filteredSuggestions = [...this.allSuggestions];
  this.selectedCuisine = 'all';
}

applyCuisineFilter(cuisine: string): void {
  this.filteredSuggestions = this.allSuggestions.filter((restaurant) => {
    return restaurant.cuisineType === cuisine;
  });
  this.selectedCuisine = cuisine;
}

// Méthode pour faire défiler le carousel des suggestions
scrollSuggestionsCarousel(direction: string) {
  const carousel = document.getElementById('suggestionsCarousel');
  if (carousel) {
    const scrollAmount = 280;
    if (direction === 'left') {
      carousel.scrollLeft -= scrollAmount;
    } else {
      carousel.scrollLeft += scrollAmount;
    }
  }
}
























 showPurchasePage = false;
  selectedOption: number | null = null;
  customAmount: number | null = null;
  selectedMethod: string = 'credit';
  
  giftOptions = [
    { value: 100, bonus: 10 },
    { value: 200, bonus: 25 },
    { value: 350, bonus: 50 },
    { value: 500, bonus: 75 },
    { value: 1000, bonus: 150 }
  ];
  
  paymentMethods = [
    { id: 'credit', name: 'Carte de crédit', icon: 'https://cdn-icons-png.flaticon.com/512/179/179457.png' },
    { id: 'paypal', name: 'PayPal', icon: 'https://cdn-icons-png.flaticon.com/512/174/174861.png' },
    { id: 'bank', name: 'Virement bancaire', icon: 'https://cdn-icons-png.flaticon.com/512/3577/3577704.png' },
    { id: 'mobile', name: 'Mobile Money', icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489755.png' }
  ];

  showGiftCardPage() {
    this.showPurchasePage = true;
    document.body.style.overflow = 'hidden'; // Empêche le défilement de la page en arrière-plan
  }

  hideGiftCardPage() {
    this.showPurchasePage = false;
    document.body.style.overflow = ''; // Rétablit le défilement
  }

  selectOption(value: number) {
    this.selectedOption = value;
    this.customAmount = null;
  }

  selectPaymentMethod(methodId: string) {
    this.selectedMethod = methodId;
  }

  getTotalAmount(): number {
    if (this.customAmount) {
      return this.customAmount;
    }
    return this.selectedOption || 0;
  }

  confirmPurchase() {
    const amount = this.getTotalAmount();
    const paymentMethod = this.paymentMethods.find(m => m.id === this.selectedMethod)?.name;
    
    // Ici vous pourriez ajouter la logique pour traiter le paiement
    alert(`Paiement de ${amount} DH confirmé via ${paymentMethod}`);
    this.hideGiftCardPage();
  }
















  // Ajoutez ces propriétés à votre composant
showFeedbackModal = false;
comments = [
  {
    user: 'Fatima E.',
    date: new Date('2023-05-15'),
    text: 'Excellent service ! J\'ai trouvé des restaurants que je ne connaissais pas grâce à Okla.'
  },
  {
    user: 'Karim S.',
    date: new Date('2023-06-02'),
    text: 'L\'application est très intuitive. Je recommande vivement !'
  },
  {
    user: 'Amina T.',
    date: new Date('2023-06-10'),
    text: 'J\'ai eu un problème avec une réservation mais le service client a très bien géré.'
  }
];
newComment = '';

// Ajoutez ces méthodes à votre composant
toggleFeedbackModal() {
  this.showFeedbackModal = !this.showFeedbackModal;
  document.body.style.overflow = this.showFeedbackModal ? 'hidden' : '';
}

addComment() {
  if (this.newComment.trim()) {
    this.comments.unshift({
      user: 'Vous', // Vous pourriez remplacer par le nom de l'utilisateur connecté
      date: new Date(),
      text: this.newComment
    });
    this.newComment = '';
  }
}

}
