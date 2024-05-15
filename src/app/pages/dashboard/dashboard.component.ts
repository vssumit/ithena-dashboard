import { Component, OnInit } from '@angular/core';
import { MrrService } from 'src/app/services/mrr.service';
import { MtrService } from 'src/app/services/mtr.service';
import { ViewsService } from 'src/app/services/views.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public barChartDataset: any = [];
  public bubbleChartDataset: any = [];
  public doughnutChartDataset: any = [];

  public wins: any = null;
  public winRate: any = null;
  public mrr: any = null;

  constructor(
    private mtrService: MtrService,
    private mrrService: MrrService,
    private viewsService: ViewsService
  ) {}

  ngOnInit() {
    this.loadDashboardData();
  }

  private loadDashboardData() {
    //TODO: send some date params
    this.getMTRData();
    this.getMRRDatabyCountry();
    this.getPageViews();
    this.getWins();
    this.getWinRates();
    this.getMRRData();
  }

  public dateRangeChangeHandler() {
    this.loadDashboardData();
  }

  public getWins(params?: any) {
    this.mrrService.getWins(params).subscribe({
      next: (data: any) => (this.wins = data),
    });
  }

  private getMRRData(params?: any) {
    this.mrrService.getMRR(params).subscribe({
      next: (data: any) => (this.mrr = data),
    });
  }

  private getWinRates(params?: any) {
    this.mrrService.getWinRate(params).subscribe({
      next: (data: any) => (this.winRate = data),
    });
  }

  private getMTRData(params?: any) {
    this.mtrService.getMTRData(params).subscribe({
      next: (data) => {
        this.barChartDataset = data;
      },
    });
  }

  private getPageViews(params?: any) {
    this.viewsService.getPageViewsData(params).subscribe({
      next: (data) => {
        this.doughnutChartDataset = data;
      },
    });
  }

  private getMRRDatabyCountry(params?: any) {
    this.mrrService.getMRRStatsByCountryData(params).subscribe({
      next: (data) => {
        this.bubbleChartDataset = data;
      },
    });
  }
}
