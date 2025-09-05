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
    // ... (le reste de vos données)
  ];

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