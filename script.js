const  heandleResponse = () => {
    fetch('https://swapi.dev/api/people/2/')
        .then(response => response.json())
        .then(data => {
            fetch('https://swapi.dev/api/vehicles/14/')
            .then(response => response.json())
            .then(vehicle => {fetch('https://swapi.dev/api/starships/12/')
                .then(response => response.json())
                .then(starship => alert(`my name is ${data.name}, I was born at ${data.birth_year}, my vihicles ${vehicle.name}  my ${starship.model} `))}
            )
            }
        )


        .catch(error => console.log(error))
}

heandleResponse()
