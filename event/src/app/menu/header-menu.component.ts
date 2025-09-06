import { Component, HostListener } from '@angular/core';

interface MenuItem {
  name: string;
  icon?: string;
  submenu?: MenuItem[];
}

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent {
  isMenuOpen = false;
  activeLevel1Index: number | null = null;
  activeLevel2Index: number | null = null;

  data: MenuItem[] = [
    {
      name: "Special Evenement",
      icon: '<i class="fa-solid fa-masks-theater menu-icon"></i>',
      submenu: [
        { name: "Salles de fetes et lieux d'animations", submenu: [{ name: "Bureau droit" }, { name: "Bureau d'angle" }] },
        { name: "Restauration", submenu: [{ name: "Chaise ergonomique" }, { name: "Fauteuil de direction" }] },
        { name: "Decoration, Fleurs et Plantes", submenu: [{ name: "Bureau droit" }, { name: "Bureau d'angle" }] },
        { name: "Animation", submenu: [{ name: "Chaise ergonomique" }, { name: "Fauteuil de direction" }] },
        { name: "Son et Lumière", submenu: [{ name: "Bureau droit" }, { name: "Bureau d'angle" }] },
        { name: "Photographie et Vidéo", submenu: [{ name: "Chaise ergonomique" }, { name: "Fauteuil de direction" }] },
        { name: "Vehicules et Transport", submenu: [{ name: "Bureau droit" }, { name: "Bureau d'angle" }] },
        { name: "Securité", submenu: [{ name: "Chaise ergonomique" }, { name: "Fauteuil de direction" }] },
        { name: "Habillement et Accessoires", submenu: [{ name: "Vetement" }] },
        { name: "Hebergement", submenu: [{ name: "Chaise ergonomique" }, { name: "Fauteuil de direction" }] },
        { name: "Transport", submenu: [{ name: "Chaise ergonomique" }, { name: "Fauteuil de direction" }] }
      ]
    },
  {
        name: "Immobolier et Lieux",
        icon: '<i class="fa-solid fa-building menu-icon"></i>',
        submenu: [
            { name: "Lieux pour evenements", submenu: [{ name: "Reception" }, { name: "Salle de spectacle" }, { name: "Seminaire" }, { name: "Conference" }, { name: "Reunion" }, { name: "Exposition" }, { name: "Auditorium" }, { name: "Discotheque" }] },
            { name: "Lieux de Sports", submenu: [{ name: "Squash" }, { name: "Tennis" }, { name: "Foot" }, { name: "Basket" }, { name: "Salle OmniSport" }, { name: "Salle de sport" }, { name: "Piscine" }] },
            { name: "Immo", submenu: [{ name: "Bureaux" }, { name: "Studios" }, { name: "Chambre" }, { name: "Appartement" }, { name: "Maison" }] }
        ]
    },
    {
        name: "Materiel - Vehicule - Engins",
        icon: '<i class="fa-solid fa-screwdriver-wrench menu-icon"></i>',
        submenu: [
            { name: "Vehicules et Engins (Route , Mer, Air)", submenu: [{ name: "Vehicule Route" }, { name: "Materiels de mers et air" }] },
            { name: "Travaux, Chantier et Espace Vert", submenu: [{ name: "Outillage" }, { name: "Materiel" }, { name: "Batiment" }, { name: "Espace vert" }] },
            { name: "Materiels de Fete et Restauration", submenu: [{ name: "Fete et reception" }, { name: "Restauration" }] },
            { name: "Sport et Loisirs", submenu: [{ name: "Sport d'interieur" }, { name: "Sport de glisse" }, { name: "Clyclisme" }, { name: "Loisir Moteur" }, { name: "Fitness" }, { name: "Aerobic" }, { name: "Musculation" }, { name: "Canyonning" }] }
        ]
    },
    {
        name: "Multimedia",
        icon: '<i class="fa-solid fa-laptop menu-icon"></i>',
        submenu: [
            { name: "Informatique - Electronique - Mobile", submenu: [{ name: "Electronique" }] },
            { name: "Son & Audio & Lumiere", submenu: [{ name: "Retroprojecteur" }, { name: "Ecran de projection" }, { name: "Videoprojecteur" }, { name: "Projecteur de diapositives" }] },
            { name: "Musique & Photo", submenu: [{ name: "Batteries et Percussion" }, { name: "Instruments a vent" }] }
        ]
    },
    {
        name: "Famille et Foyer",
        icon: '<i class="fa-solid fa-house menu-icon"></i>',
        submenu: [
            { name: "Maison & Confort", submenu: [{ name: "Literie" }, { name: "Rangement" }] },
            { name: "Puerecultrice", submenu: [{ name: "Poussette" }, { name: "Siege-auto" }] },
            { name: "Sante et Paramedical", submenu: [{ name: "Bureau droit" }, { name: "Bureau d'angle" }] },
            { name: "Habillement et Accessoires", submenu: [{ name: "Vetement" }] }
        ]
    },
    {
        name: "Service Professionnel",
        icon: '<i class="fa-solid fa-user-tie menu-icon"></i>',
        submenu: [
            { name: "Personnel" },
            { name: "Artisans", submenu: [{ name: "Reception" }, { name: "Travaux" }] },
            { name: "Sujet Secondaire", submenu: [{ name: "Bureau droit" }, { name: "Bureau d'angle" }] }
        ]
    }  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.resetMenu();
    }
  }

  resetMenu() {
    this.activeLevel1Index = null;
    this.activeLevel2Index = null;
  }

  selectLevel1(index: number) {
    this.activeLevel1Index = index;
    this.activeLevel2Index = null;
  }

  selectLevel2(index: number) {
    this.activeLevel2Index = index;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const menuContainer = document.querySelector('.menu-container');
    const hamburger = document.querySelector('.hamburger');
    
    if (this.isMenuOpen && menuContainer && !menuContainer.contains(event.target as Node) && 
        hamburger && !hamburger.contains(event.target as Node)) {
      this.isMenuOpen = false;
      this.resetMenu();
    }
  }
}