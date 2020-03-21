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
    const responseBody = await response.json();
    console.log(responseBody)
}

fetchGreeting();