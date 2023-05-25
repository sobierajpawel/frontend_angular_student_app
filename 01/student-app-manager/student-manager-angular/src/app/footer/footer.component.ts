import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerDescription : string = "Aplikacja do zarządzania studentami";
  @Input() footerTitle : string = "";
}
