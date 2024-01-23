
const URL_API = 'https://api.quotable.io/random'

const $randomQuote = document.querySelector("#randomQuote")
const $author = document.querySelector("#author")
const $reloadPage = document.querySelector("#reloadPage")
const $copyQuote = document.querySelector("#copyQuote")



async function resultApi(URL){
    const response = await fetch(URL)
    const data = await response.json()
   
    const p = document.createElement('p')
    $author.innerText = data.author
    p.innerText = `"${data.content}"`
    
    $randomQuote.appendChild(p)
    

    $copyQuote.addEventListener("click", ()=> {
        navigator.clipboard.writeText($randomQuote.innerText)
    })
}

resultApi(URL_API)

$reloadPage.addEventListener("click", () => {
    window.location.reload()
})














