const GRAPHQL_URL = 'http://localhost:4000'

async function fetchGreeting(){
    const response = await fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: {
            //This prop name has to be in quotes since it has a dash
            'content-type': 'application/json'
        },
        body: JSON.stringify(
            {
                query: `
                    query {
                        greeting 
                    }
                `
            }
        )
    })

    // const responseBody = await response.json();
    // Since the response will be {data: {greeting: "Hello everyone"}}, we can destructure
    // just the data element fand simplify the line above
    const { data } = await response.json();
    return data;
}


// Note the syntax here.  ( {} ) ==> {}  A function that only has one arg can omit the arg 
// brackets, but not if you're destructuring.  We're destrtucturing the greeting from data
fetchGreeting().then( ( { greeting } )  => {
    const title = document.querySelector('h1');
    title.textContent = greeting;
});