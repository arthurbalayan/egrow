import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from './project.service';

/**
 * This component is the parent component which handles the components that
 * are responsible for the display of the rank tracker project. The id of the
 * rank tracker project is retrieved from the url.
 */
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ProjectService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.loadProject(params['id']);
    });
  }
}
