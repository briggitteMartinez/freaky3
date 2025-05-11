import { Component, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  searchQuery = '';
  menuOpen = false;
  private routerSub: Subscription;

  constructor(private router: Router, private eRef: ElementRef) {
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.menuOpen = false;
      }
    });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  onSearch(): void {
    const trimmed = this.searchQuery.trim();
    if (trimmed) {
      this.router.navigate(['/search'], {
        queryParams: { q: trimmed }
      });
      this.searchQuery = '';
      this.menuOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (
      this.menuOpen &&
      !this.eRef.nativeElement.contains(event.target)
    ) {
      this.menuOpen = false;
    }
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }
}
