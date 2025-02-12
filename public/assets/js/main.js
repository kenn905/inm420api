console.log('test this');

async function getData(params) {
    const response =await fetch('http://api.weatherapi.com/v1/current.json?key=5ab27e3a225e4ee6a00162202252901');
}
getData();