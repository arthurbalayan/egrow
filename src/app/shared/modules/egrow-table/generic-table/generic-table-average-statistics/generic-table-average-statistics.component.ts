import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AverageCounterService } from './average-counter.service';
import { Average } from './average.model';

@Component({
  selector: 'app-generic-table-average-statistics',
  templateUrl: './generic-table-average-statistics.component.html',
  styleUrls: ['./generic-table-average-statistics.component.css'],
  providers: [AverageCounterService]
})
export class GenericTableAverageStatisticsComponent implements OnInit, OnChanges {
  @Input() public data: any;
  @Input() public columns: any;

  // averages data for ngFor loop
  public averages: Average[];

  constructor(private average: AverageCounterService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data && this.columns) {
      this.averages = this.average.avg(this.data, this.columns);
    }
  }
}
