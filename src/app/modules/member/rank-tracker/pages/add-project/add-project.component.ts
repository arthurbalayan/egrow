import {Component, OnInit} from '@angular/core';
import {AddProjectService} from './add-project.service';
import {ActivatedRoute} from '@angular/router';
import {AbstractStateService} from '../../../../../shared/components/member/abstract-state/abstract-state.service';

/**
 * This component is the parent component for adding a rank tracker project.
 * It holds the various state components and provides the service that handles
 * all the state changes during that process.
 *
 * When somebody is adding keywords to an existing project this component loads
 * the corresponding project and its keywords into the components and sets the
 * state to the second step (1).
 */
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [AddProjectService, AbstractStateService]
})
export class AddProjectComponent implements OnInit {

  constructor(private route: ActivatedRoute, private projectService: AddProjectService, private projectState: AbstractStateService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('projectId')) {
        this.projectService.setProject(params['projectId']).subscribe(() => this.projectState.setState(1));
      }
    });
  }
}
