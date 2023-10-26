const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log('checkout');

    fetch('/create-checkout-session', {
        method: 'POST' ,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            items: [
                { id: 1, quanity: 3 },
                { id: 2, quantity: 1 }
            ],
        }),
     })
         // Check whether response from server (the URL) was successful or not 

        .then(res => {
            if (res.ok) return res.json()
            // If there's a failure, make the json response fail
            return res.json().then(json => Promise.reject(json))      
        })

        // JSON response that returns URL
        .then(({ url }) => {
            console.log(url)
            window.location = url
        })
        
        // Send error
        // .catch(e => {
        //     console.error(e.error)
        // })
    })

