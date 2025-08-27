import React, { Component } from 'react';
import { Chart } from 'chart.js';

class ChartComponent extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
        this.chart = null;
    }

    componentDidMount() {
        this.createChart();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.updateChart();
        }
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.destroy();
        }
    }

    createChart() {
        const { data, options } = this.props;
        this.chart = new Chart(this.chartRef.current, {
            type: 'line', // or any other chart type
            data: data,
            options: options,
        });
    }

    updateChart() {
        this.chart.data = this.props.data;
        this.chart.update();
    }

    render() {
        return <canvas ref={this.chartRef} />;
    }
}

export default ChartComponent;