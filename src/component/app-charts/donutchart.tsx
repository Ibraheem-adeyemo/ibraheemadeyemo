import React, { useMemo, useEffect, FC, useRef } from "react";
import { Chart, registerables } from 'chart.js';
import { DonutChartProps } from "../../models";
import { Canvas } from ".";


const DonutChart:FC<DonutChartProps> = (props: DonutChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);


  const data = useMemo(() => ({
    labels: props.labels,
    datasets: [{
      label: props.chartTitle,
      data: props.data,
      backgroundColor: props.backgroundColor,
      hoverOffset: 4
    }]
  }), [props.backgroundColor, props.chartTitle, props.data, props.labels])

  useEffect(() => {
  
    Chart.register(...registerables);
    if(canvasRef.current){
    
    const cv = canvasRef.current.getContext('2d') as CanvasRenderingContext2D 
    const chart = new Chart(cv, {
      type: "doughnut",
      data,
      options: {
        plugins: {
          legend: {
            position: "right"
          }
        },
        maintainAspectRatio: false
      }
    })
    return () => {
      chart.destroy()
    }
  }
    //  chart.options.plugins?.legend?.position = "right"
  }, [])

  return <Canvas ref={canvasRef} w={props?.width} h={props?.height} mt="17px" />
}

export default DonutChart