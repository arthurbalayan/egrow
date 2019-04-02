import {Component, OnInit} from '@angular/core';
import {AddProjectProductService} from './add-project-product.service';
import {AddProjectService} from '../add-project.service';
import {RankTrackerProduct} from '../../../../../../shared/modules/egrow-api/endpoints/rank-tracker/RankTrackerProduct';
import {AbstractStateComponent} from '../../../../../../shared/components/member/abstract-state/abstract-state.component';
import {AbstractStateService} from '../../../../../../shared/components/member/abstract-state/abstract-state.service';

/**
 * This component handles the addition of the product (ASIN) to the rank tracker
 * project. It represents the first state of two states in the process. The next state
 * is the addition of keywords to the project.
 */
@Component({
  selector: 'app-add-project-product',
  templateUrl: './add-project-product.component.html',
  styleUrls: ['./add-project-product.component.css'],
  providers: [AddProjectProductService]
})
export class AddProjectProductComponent extends AbstractStateComponent implements OnInit {

  projectId: string;

  constructor(private projectService: AddProjectService, projectState: AbstractStateService, private service: AddProjectProductService) {
    super(projectState, 0);
  }

  ngOnInit() {
    this.service.getData().subscribe(product => {
      if (null != product) {
        this.projectId = product.id;
      }
    });
  }

  public setProjectId(projectId: string): void {
    this.projectId = projectId;
    if (null != projectId) {
      this.projectState.enableState(this.getNextStateIndex());
    } else {
      this.projectState.disableState(this.getNextStateIndex());
    }
  }

  submitState(): void {
    this.projectService.setProduct(<RankTrackerProduct>{id: this.projectId});
  }
}
