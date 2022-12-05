const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '21bf866e05msh607f4b8a5de62e1p1e1d86jsncc2602a780f0',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
	.then(response => response.json())
	.then(data => {
			console.log(data)
            let html = "";
            let count = 1            
            data.countries_stat.forEach(x => {
                let deaths = x.deaths.split(",").join("");
            if (deaths > 100000 ) {
                console.log(x);
                html += `
            
                    <tr>
                        <td>${count}</td>
                        <td>${x.country_name}</td>
                        <td>${x.cases}</td>
                        <td>${x.deaths}</td>
                        <td>${x.total_recovered}</td>
                  </tr>
                `
                count++
            }
            document.querySelector("tbody").innerHTML =html;  
            });
				
			
				
			
				
		});
	
	