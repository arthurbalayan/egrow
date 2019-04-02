import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'egrow-cancel-button',
  templateUrl: './cancel-button.component.html',
  styleUrls: ['./cancel-button.component.css']
})
export class CancelButtonComponent implements OnInit {
  @Input() projectId: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.projectId = null
   }

  ngOnInit() {
  }

  public cancelProcess(): void {
    if(this.projectId) {
      this.router.navigate(['../projects/', this.projectId ], {relativeTo: this.activatedRoute});
    } else {
      this.router.navigate(['../'], {relativeTo: this.activatedRoute})
    }
  }

}
