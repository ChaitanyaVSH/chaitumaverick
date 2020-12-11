import React from "react";
//import Bars from "react-bars";
import { Bar, Doughnut, Pie } from 'react-chartjs-2';


const testData= [
    {label:'Javascript', value:85},
    {label:'C++', value: 82},
    {label:'React', value:80},
    {label:'Node.js', value:75},
    {label:'HTML5', value:72, barColor:'red'},
    {label:'CSS', value:68},
    {label:'JQuery', value:65},
    {label:'Bootstrap', value:60},
    {label:'Python', value:50},
    {label:'Angular.js', value:45},
];

const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
        data: [65, 59, 80, 81, 56]
      }
    ]
  }



const Skills = () => {
    return(
        <div>
            {/* <Bars data={testData} makeUppercase={true}/> */}

            <Bar data={state} options={
                {
                    title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'right'
                    }
                }
          }/>

            <Doughnut data={state} options={
                {
                    title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'right'
                    }
                }
        }/>
        </div>
    );
}

export default Skills;
