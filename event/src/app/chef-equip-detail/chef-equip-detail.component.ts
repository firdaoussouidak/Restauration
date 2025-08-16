import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chef-equip-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chef-equip-detail.component.html',
  styleUrl: './chef-equip-detail.component.css'
})
export class ChefEquipDetailComponent implements OnInit{

  mainImage = '6.jpg';
  equipment: any;
  quantity = 1;
  startDate: string;
  endDate: string;
  totalPrice = 950;
  
  deliveryOptions = [
    {
      icon: 'fas fa-truck',
      name: 'Livraison standard',
      description: 'Livraison sous 3-5 jours ouvrables. Convient pour les commandes non urgentes.',
      price: 'À partir de 120€'
    },
    {
      icon: 'fas fa-shipping-fast',
      name: 'Livraison express',
      description: 'Livraison sous 24-48 heures. Parfait pour les projets urgents.',
      price: 'À partir de 250€'
    },
    {
      icon: 'fas fa-warehouse',
      name: 'Retrait sur site',
      description: 'Venez récupérer l\'équipement dans notre entrepôt. Économisez sur les frais de livraison.',
      price: 'Gratuit'
    }
  ];

  reviews = [
    {
      name: 'Jean Dupont',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      date: '15 mars 2023',
      rating: 5,
      content: 'Excellent équipement qui a parfaitement répondu à nos besoins de production. La précision est remarquable et la machine est très fiable.'
    },
    {
      name: 'Marie Lambert',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      date: '2 février 2023',
      rating: 4,
      content: 'Très satisfaite de cette location. La machine est performante et facile à utiliser. Le seul bémol est le manque de documentation en français.'
    }
  ];

  similarEquipments = [
    {
      id: 1,
      image: 'FourConvection.jpg',
      title: 'Four à Convection',
      description: 'Four professionnel 10 niveaux avec système de convection intégré',
      price: 900,
      rating: 5,
      reviews: 24,
      tag: 'Nouveau'
    },
    {
      id: 2,
      image: 'Plancha.jpg',
      title: 'Plancha Gaz Inox',
      description: 'Plancha professionnelle 80cm avec thermostat réglable',
      price: 650,
      rating: 4,
      reviews: 18,
      tag: 'Populaire'
    },
    {
      id: 3,
      image: 'Armoire.jpg',
      title: 'Armoire Réfrigérée',
      description: 'Armoire froide positive 600L avec régulation digitale',
      price: 750,
      rating: 5,
      reviews: 12
    }
  ];

  constructor(private route: ActivatedRoute) {
    const today = new Date();
    this.startDate = today.toISOString().split('T')[0];
    this.endDate = new Date(today.setDate(today.getDate() + 7)).toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.equipment = {
      title: 'Machine industrielle de haute précision',
      description: 'Cette machine industrielle de haute précision est conçue pour les opérations de fabrication exigeantes. Avec une capacité de production élevée et une précision micrométrique, elle est idéale pour les ateliers de production et les fabricants cherchant à optimiser leurs processus.',
      price: 950,
      oldPrice: 1200,
      rating: 4.5,
      reviews: 24,
      available: true,
      specs: [
        { icon: 'fas fa-tachometer-alt', name: 'Vitesse max', value: '2 500 RPM' },
        { icon: 'fas fa-ruler-combined', name: 'Précision', value: '±0.001mm' },
        { icon: 'fas fa-weight', name: 'Poids', value: '1 250 kg' },
        { icon: 'fas fa-bolt', name: 'Puissance', value: '7.5 kW' },
        { icon: 'fas fa-cube', name: 'Dimensions', value: '2000x1500x1800mm' },
        { icon: 'fas fa-calendar-alt', name: 'Année', value: '2022' }
      ]
    };

    this.updateTotalPrice();
  }

  get averageRating() {
    return this.reviews.reduce((acc, review) => acc + review.rating, 0) / this.reviews.length;
  }

  get displayedReviews() {
    return this.reviews.slice(0, 2);
  }

  changeMainImage(image: string) {
    this.mainImage = image;
    document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
      if (thumb.classList.contains('active')) {
        thumb.classList.remove('active');
      }
    });
    const thumbnails = document.querySelectorAll('.thumbnail');
    for (let i = 0; i < thumbnails.length; i++) {
      if ((i + 1).toString() === image.split('.')[0]) {
        thumbnails[i].classList.add('active');
        break;
      }
    }
  }

  getImagePath(imageName: string): string {
    return `/${imageName}`;
  }

  increaseQuantity() {
    this.quantity++;
    this.updateTotalPrice();
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.updateTotalPrice();
    }
  }

  validateQuantity() {
    if (this.quantity < 1) {
      this.quantity = 1;
    }
    this.updateTotalPrice();
  }

  updateTotalPrice() {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays > 0) {
        const weeks = Math.ceil(diffDays / 7);
        this.totalPrice = weeks * this.equipment.price * this.quantity;
        return;
      }
    }
    
    this.totalPrice = this.equipment.price * this.quantity;
  }

  getStars(rating: number): string[] {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push('fas fa-star');
    }

    if (hasHalfStar) {
      stars.push('fas fa-star-half-alt');
    }

    while (stars.length < 5) {
      stars.push('far fa-star');
    }

    return stars;
  }

  getStarRating(rating: number): string {
    return '★★★★★'.slice(0, rating) + '☆☆☆☆☆'.slice(0, 5 - rating);
  }

  navigateToDetail(id: number) {
    // Implémentez la navigation vers le détail de l'équipement
    console.log('Navigate to equipment:', id);
  }
}