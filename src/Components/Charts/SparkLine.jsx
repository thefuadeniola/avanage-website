import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

class SparkLine extends React.Component {
  render() {
    const { id, height, width, color, data, type, currentColor } = this.props;
    
    return (
      <SparklineComponent
        dataSource={[
          { x: 1, xval:1, yval: 2 },
          { x: 2, xval:2, yval: 6 },
          { x: 3, xval:3, yval: 8 },
          { x: 4, xval:4, yval: 5 },
          { x: 5, xval:5, yval: 10 },
        
        ]}
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
        xName='xval'
        yName="yval"
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

export default SparkLine;
