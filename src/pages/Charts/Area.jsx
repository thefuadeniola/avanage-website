import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, SplineAreaSeries }
  from '@syncfusion/ej2-react-charts'

import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../data/dummy'
import { Header } from '../../Components'
import { useStateContext } from '../../contexts/ContextProvider'

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Chart' title='Inflation Rate' />
      <ChartComponent
        id='line-chart'
        height='420px'
        width='650px'
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}>
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) =>
            <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>

    </div>
  )
}

export default Area