// starting a fetch call
async function fetchData(sourceURL) {
    let resource = await fetch(sourceURL).then(response => {
        
        if(response.status !== 200) {
            throw new Error(`Something is just not right! ${response.status}`);
        }

        return response;
    })

    let dataset = await resource.json();

    return dataset[0];

    debugger;
}


 export {fetchData};
