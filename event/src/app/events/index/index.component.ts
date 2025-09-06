import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const sideMenu = document.getElementById('sideMenu')!;
    const overlay = document.getElementById('overlay')!;

    // Function to open menu
    const openMenu = () => {
      sideMenu.classList.add('active');
      overlay.classList.add('active');
    };

    // Function to close menu
    const closeMenu = () => {
      sideMenu.classList.remove('active');
      overlay.classList.remove('active');
    };

    // Attach event to overlay click to close menu
    overlay.addEventListener('click', closeMenu);

    // If you have a button to open menu
    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
      menuBtn.addEventListener('click', openMenu);
    }
  }
}
