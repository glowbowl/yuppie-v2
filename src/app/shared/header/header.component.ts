import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'yup-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(100)),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public isMobileMenuVisible = false;
  public showDropdown = false;

  public toggleMobileMenu(): void {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }
}
