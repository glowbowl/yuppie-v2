import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { NavigationStart, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'yup-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void <=> *', animate(100)),
    ]),
    trigger('slideInOut', [
      state('in', style({ height: '*', opacity: 1 })),
      state('out', style({ height: '0', opacity: 0.25, marginTop: 0 })),
      transition('in => out', animate('0.25s ease-in-out')),
      transition('out => in', animate('0.25s ease-in-out')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterContentInit {
  @Output() isMobileMenu = new EventEmitter<boolean>();
  public isMobileMenuVisible = false;
  public showDropdown = false;

  constructor(private router: Router) {}

  ngAfterContentInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {

        if(this.isMobileMenuVisible) {
          this.toggleMobileMenu();
          this.showDropdown = false;
        }
      }
    });
  }

  public toggleMobileMenu(): void {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
    this.isMobileMenu.emit(this.isMobileMenuVisible);
  }
}
