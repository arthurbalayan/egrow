import {Injectable} from '@angular/core';
import {AddProjectService} from '../add-project.service';
import {AbstractInitialDataProvider} from '../../../../../../shared/classes/abstract-initial-data-provider';
import {RankTrackerProjectFull} from '../../../../../../shared/modules/egrow-api/endpoints/rank-tracker/RankTrackerProjectFull';
import {RankTrackerProduct} from '../../../../../../shared/modules/egrow-api/endpoints/rank-tracker/RankTrackerProduct';

/**
 * This services handles the retrieving of the product from the rank tracker project.
 * The transformation consists of returning just the product.
 */
@Injectable()
export class AddProjectProductService extends AbstractInitialDataProvider<RankTrackerProjectFull, RankTrackerProduct> {

  constructor(addProjectService: AddProjectService) {
    super(addProjectService.getData());
  }

  protected transform(input: RankTrackerProjectFull): RankTrackerProduct {
    return input.product;
  }
}
