

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '21bf866e05msh607f4b8a5de62e1p1e1d86jsncc2602a780f0',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api_india_timeline', options)
	.then(response => response.json())
	.then(data => {
			console.log(data)
			let total_cases=document.querySelector('#total_cases h4')
			let statName=document.querySelector('.stat')
			let active_cases=document.querySelector('#active_cases h4')
			let deaths=document.querySelector('#deaths h4')
			let recovered=document.querySelector('#recovered h4')
			active_cases.innerHTML=data.world_total.active_cases
			total_cases.innerHTML=data.world_total.total_cases
			deaths.innerHTML=data.world_total.total_deaths
			recovered.innerHTML=data.world_total.total_recovered

			let inp = document.getElementById('search')
			let errorTxt = document.querySelector('.invalid-value')



			data.countries_stat.forEach( stat => {
				if (stat.country_name.toLocaleLowerCase() == inp.value.toLocaleLowerCase()) {
					console.log(stat.country_name);
					errorTxt.classList.add('d-none')
					statName.innerHTML=stat.country_name
					active_cases.innerHTML=stat.active_cases
					total_cases.innerHTML=stat.total_cases
					deaths.innerHTML=stat.total_deaths
					recovered.innerHTML=stat.total_recovered
				}
				else{
					errorTxt.classList.add('d-block')
				}
			
				
			});
	
	})
	// .catch(err => console.error(err));