import {RankTrackerProject} from '../../../../../../shared/modules/egrow-api/endpoints/rank-tracker/RankTrackerProject';

/**
 * Is the entity which used to display the rank tracker projects in the table.
 * It is necessary to use simply properties that are not nested so the sorting
 * algorithms of the DataTable work properly.
 */
export class TableProject {

    id: string;
    imageId: string;
    productTitle: string;
    minRanking: number;
    avgRanking: number;
    maxRanking: number;
    numKeywords: number;
    weeklyChange: number;
    monthlyChange: number;

    constructor(apiProject: RankTrackerProject) {

        this.id = apiProject.id;

        if (null != apiProject.product) {
            this.imageId = apiProject.product.imageId;
            this.productTitle = apiProject.product.title;
        }

        if (null != apiProject.projectStats) {
            this.minRanking = apiProject.projectStats.minRanking;
            this.avgRanking = apiProject.projectStats.avgRanking;
            this.maxRanking = apiProject.projectStats.maxRanking;
            this.numKeywords = apiProject.projectStats.numKeywords;
            this.weeklyChange = apiProject.projectStats.weeklyChange;
            this.monthlyChange = apiProject.projectStats.monthlyChange;
        }
    }
}
