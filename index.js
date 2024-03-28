let people = [
{name:'Bobby'},
{name:'Sammy'},
{name:'Sally'},
{name:'Annette'},
{name:'Sarah'},
{name:'Bobby'}
]
function findMatching(array, number){
    return array.filter(driver => driver.name > number)
    }
    function findMatching(drivers, name) {
        return drivers.filter(driver => driver.toLowerCase().includes(name.toLowerCase()));
    }
    const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
    const matchingDrivers = findMatching(drivers, 'Bobby');
    console.log(matchingDrivers);
    
    function fuzzyMatch(driver, letters) {
        return driver.toLowerCase().startsWith(letters.toLowerCase());
    }
    
     const driverName = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
     const letters = 'y';
     const matchName = fuzzyMatch(driverName, letters);
     console.log(matchName); 
    