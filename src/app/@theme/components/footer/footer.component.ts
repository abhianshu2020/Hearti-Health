import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  // TODO: Add Copyright Symbol in the Footer Template
  // TODO: Add Social Media Links for twitter and linked in.
  // Classes required: 'ion ion-social-twitter','ion ion-social-linkedin'
  template: `
    <span class="created-by"></span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
    </div>
  `,
})
export class FooterComponent {
}
