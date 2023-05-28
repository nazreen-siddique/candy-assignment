import React from 'react';
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Chart = ({ chartData }) => {
    const data = [];
    const hashMap = {};
    /////FINDING ALL THE UNIQUE DEPARTMENT WITH ITS CORRESPONDING COUNT/////
    chartData.forEach((item) => {
        if (hashMap[item.department]) {
            hashMap[item.department] = hashMap[item.department] + 1;
        }
        else {
            hashMap[item.department] = 1;
        }
    });
    ///////ONCE WE HAVE ALL THE COUNTS , REARRANGE THAT WITH FUSION CHARTS REQUIREMENT////////
    Object.entries(hashMap).forEach((item) => {
        data.push({
            "label": item[0],
            "value": item[1]
        })
    })

    const chartConfigs = {
        type: "pie3d",
        width: 375,
        height: 375,
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "Departments",
                theme: "fusion",
                decimals: 0,
                pieRadius: "35%",
            },
            data: data,
        },
    };
    return <div className='chart-section'>
        <ReactFC {...chartConfigs} />
    </div>
}

export default Chart