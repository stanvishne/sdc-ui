export default `
<div class="tag-item" [ngClass]="{'view-only':isViewOnly}">
    <span>{{text}}</span>
    <span class="delete-item" *ngIf="!isViewOnly" (click)="clickOnDelete.emit(index)">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
          <defs>
            <path id="close-a" d="M13.5996,12 L19.6576,5.942 C20.1146,5.485 20.1146,4.8 19.6576,4.343 C19.2006,3.886 18.5146,3.886 18.0576,4.343 L11.9996,10.4 L5.9426,4.343 C5.4856,3.886 4.7996,3.886 4.3426,4.343 C3.8856,4.8 3.8856,5.485 4.3426,5.942 L10.4006,12 L4.3426,18.058 C3.8856,18.515 3.8856,19.2 4.3426,19.657 C4.5716,19.886 4.7996,20 5.1426,20 C5.4856,20 5.7136,19.886 5.9426,19.657 L11.9996,13.6 L18.0576,19.657 C18.2866,19.886 18.6286,20 18.8576,20 C19.0856,20 19.4286,19.886 19.6576,19.657 C20.1146,19.2 20.1146,18.515 19.6576,18.058 L13.5996,12 Z"/>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <use xlink:href="#close-a"/>
          </g>
        </svg>
    </span>
</div>
`;

