import { ChartsComponent } from './charts.component';

describe('charts', () => {
  let charts: ChartsComponent;

  beforeEach( () => {
    charts = new ChartsComponent();
  });

  it('Should show all charts by clicking Show all charts button!', () => {
    charts.chartType = '';

    charts.showAllCharts();

    expect(charts.chartType).toBe('All');
  });

  it('Should return new color schema according to color name!', () => {
    charts.colorScheme.domain = null;
    charts.colorName = 'natural';

    const result = charts.getDomain();

    expect(result.domain).toBe(charts.colorScheme.domain);

  });
});
