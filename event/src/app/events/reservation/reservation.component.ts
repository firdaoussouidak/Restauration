import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Payment method selection
    const paymentMethods = document.querySelectorAll('.payment-method');
    const cardDetails = document.getElementById('cardDetails');
    const paypalDetails = document.getElementById('paypalDetails');
    const transferDetails = document.getElementById('transferDetails');

    paymentMethods.forEach(method => {
      method.addEventListener('click', () => {
        // Remove active class from all methods
        paymentMethods.forEach(m => m.classList.remove('active'));
        // Add active class to clicked method
        method.classList.add('active');

        // Hide all details
        cardDetails?.classList.remove('active');
        paypalDetails?.classList.remove('active');
        transferDetails?.classList.remove('active');

        // Show selected method details
        const methodType = method.getAttribute('data-method');
        if (methodType === 'card') {
          cardDetails?.classList.add('active');
        } else if (methodType === 'paypal') {
          paypalDetails?.classList.add('active');
        } else if (methodType === 'transfer') {
          transferDetails?.classList.add('active');
        }
      });
    });

    // Form submission
    const paymentForm = document.getElementById('paymentForm');
    paymentForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Paiement effectué avec succès! Vous recevrez un email de confirmation.');
      // Here you would normally process the payment
    });
  }
}
