import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Регистрация компонентов
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const LineChart = () => {
	const baseData = [1, 2, 1, 3, 2, 1, 2];	
	const shadowData = baseData.map(value => value - 0.5); // Смещение данных на 0.5 (или 15px)

  	const data = {
		labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
		datasets: [
			{
				label: 'Shadow',
				data: shadowData,
				borderColor: 'rgba(0, 0, 0, 0.1)', // Светлый цвет для "тени"
				pointRadius: 0,
				tension: 0.4,
				borderWidth: 3, // Толщина линии "тени"
				fill: false
			},
			{
				label: 'Tasks',
				data: baseData,
				borderColor: 'rgba(0, 0, 0, 1)', // Цвет основной линии
				pointBackgroundColor: 'rgba(0, 0, 0, 1)',
				pointBorderColor: 'rgba(255, 255, 255, 1)',
				pointBorderWidth: 2,
				pointRadius: 0, // Точки не отображаются по умолчанию
				pointHoverRadius: 5, // Точки отображаются при наведении
				tension: 0.4, // Сглаживание линии
				borderWidth: 3, // Толщина основной линии
				fill: false
			}
		]
 	};

	const options = {
		responsive: true,
		maintainAspectRatio: false, // Не сохранять соотношение сторон
		plugins: {
		legend: {
			display: false
		},
		tooltip: {
			enabled: true,
			backgroundColor: '#141522', // Цвет фона тултипа
			bodyColor: '#fff', // Цвет текста тултипа
			callbacks: {
			label: function (context) {
				return `${context.raw} Task${context.raw !== 1 ? 's' : ''}`;
			}
			},
			titleFont:{
				size: 0
			}
		}
		},
		scales: {
		x: {
			display: true,
			grid: {
			display: true,
			borderWidth: 1,
			color: 'rgba(20, 21, 34, 0.1)' // Цвет и прозрачность вертикальных линий
			},
			ticks: {
			color: '#141522', // Цвет текста для дней недели
			font: {
				size: 12, // Размер шрифта для дней недели
				weight: 'medium' // Жирный шрифт для дней недели
			}
			}
		},
		y: {
			display: true,
			grid: {
			display: false
			},
			beginAtZero: true,
			ticks: {
			stepSize: 1,
			color: '#141522', // Цвет текста для чисел
			font: {
				size: 12, // Размер шрифта для чисел
				weight: 'medium' // Жирный шрифт для чисел
			}
			}
		}
		}
	};

	return (
		<div style={{ width: '100%', height: '110px' }}>
		<Line data={data} options={options} />
		</div>
	);
};

export default LineChart;
