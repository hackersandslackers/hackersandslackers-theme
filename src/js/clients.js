async function getRequest (url) {
    await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Accept-Version": "v5.0",
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
  }