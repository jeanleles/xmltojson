function showJson() {
    fetch('/data/result.json')
        .then(response => response.json())
        .then(content => document.querySelector('.code-json').innerText = JSON.stringify(content, null, 4))
        .catch(error => console.error(error))
}

showJson()