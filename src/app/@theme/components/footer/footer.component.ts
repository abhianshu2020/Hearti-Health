import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  // TODO:  Add Copyright Symbol in the Footer Template
  // TODO: Add Share links for Twitter and LinkedIn
  template: `    
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      
    </div>
  `,
})
export class FooterComponent {
}
