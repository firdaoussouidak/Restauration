import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // ====== IMAGE SLIDER ======
    const imageSlider = document.getElementById('sliderTrack');
    if (imageSlider) {
      const imageSlides = imageSlider.children;
      let imageIndex = 0;
      const visibleSlides = 3;

      function updateImageSlider() {
        const slideWidth = (imageSlides[0] as HTMLElement).offsetWidth + 20;
        (imageSlider as HTMLElement).style.transform = `translateX(-${imageIndex * slideWidth}px)`;
      }

      function nextSlide() {
        if (imageIndex < imageSlides.length - visibleSlides) {
          imageIndex++;
        } else {
          imageIndex = 0;
        }
        updateImageSlider();
      }

      function prevSlide() {
        if (imageIndex > 0) {
          imageIndex--;
        } else {
          imageIndex = imageSlides.length - visibleSlides;
        }
        updateImageSlider();
      }

      setInterval(nextSlide, 4000); // Auto-slide every 4 seconds
    }

    // ====== EVENT SLIDER ======
    const eventSlider = document.getElementById('eventSlider');
    (window as any).scrollLeft = () => {
      if (eventSlider) eventSlider.scrollBy({ left: -eventSlider.offsetWidth, behavior: 'smooth' });
    }
    (window as any).scrollRight = () => {
      if (eventSlider) eventSlider.scrollBy({ left: eventSlider.offsetWidth, behavior: 'smooth' });
    }

    // ====== FILTER SIDEBAR ======
    const filterBtn = document.getElementById('filterBtn');
    const filterSidebar = document.getElementById('filterSidebar');
    const closeFilter = document.getElementById('closeFilter');
    const filterOverlay = document.getElementById('filterOverlay');
    const applyFilter = document.getElementById('applyFilter');
    const resetFilter = document.getElementById('resetFilter');

    filterBtn?.addEventListener('click', () => {
      filterSidebar?.classList.add('active');
      if (filterOverlay) filterOverlay.style.display = 'block';
    });

    closeFilter?.addEventListener('click', () => {
      filterSidebar?.classList.remove('active');
      if (filterOverlay) filterOverlay.style.display = 'none';
    });

    filterOverlay?.addEventListener('click', () => {
      filterSidebar?.classList.remove('active');
      if (filterOverlay) filterOverlay.style.display = 'none';
    });

    applyFilter?.addEventListener('click', () => {
      console.log('Filters applied');
      filterSidebar?.classList.remove('active');
      if (filterOverlay) filterOverlay.style.display = 'none';
    });

    resetFilter?.addEventListener('click', () => {
      document.querySelectorAll('#filterSidebar input[type="checkbox"]').forEach((checkbox: any) => checkbox.checked = true);
      document.querySelectorAll('#filterSidebar input[type="radio"]').forEach((radio: any) => {
        radio.checked = radio.id === 'date-all';
      });
      const priceRange = document.getElementById('priceRange') as HTMLInputElement;
      if (priceRange) priceRange.value = '500';
      document.querySelectorAll('.price-inputs input').forEach((input: any, index) => {
        input.value = index === 0 ? '0' : '1000';
      });
      const customDate = document.getElementById('custom-date');
      if (customDate) customDate.style.display = 'none';
    });

    const dateCustom = document.getElementById('date-custom');
    dateCustom?.addEventListener('change', function() {
      const customDate = document.getElementById('custom-date');
      if (customDate) customDate.style.display = (this as HTMLInputElement).checked ? 'block' : 'none';
    });

    // ====== DROPDOWNS ======
    // ====== DROPDOWNS ======
document.querySelectorAll('.dropdown').forEach(dropdown => {
  const trigger = dropdown.querySelector('span');
  const menu = dropdown.querySelector('.dropdown-menu') as HTMLElement | null;

  trigger?.addEventListener('click', e => {
    e.stopPropagation();
    document.querySelectorAll('.dropdown-menu').forEach(m => {
      const mEl = m as HTMLElement; // cast to HTMLElement
      if (mEl !== menu) mEl.style.display = 'none';
    });
    if (menu) menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });
});

    // ====== SIDEMENU ======
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');

    const toggleMenu = () => {
      if (!sideMenu || !overlay) return;
      const isActive = sideMenu.classList.contains('active');
      if (isActive) {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
        sideMenu.setAttribute('aria-hidden', 'true');
      } else {
        sideMenu.classList.add('active');
        overlay.classList.add('active');
        sideMenu.setAttribute('aria-hidden', 'false');
      }
    }

    hamburgerBtn?.addEventListener('click', e => {
      e.stopPropagation();
      toggleMenu();
    });

    overlay?.addEventListener('click', () => toggleMenu());

    document.addEventListener('click', e => {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (!menu.contains(e.target as Node)) (menu as HTMLElement).style.display = 'none';
      });
      if (sideMenu && !sideMenu.contains(e.target as Node) && hamburgerBtn && !hamburgerBtn.contains(e.target as Node)) {
        if (sideMenu.classList.contains('active')) toggleMenu();
      }
    });

  }
}
