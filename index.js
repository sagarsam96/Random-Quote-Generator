const show = document.getElementById("quote");
const author = document.getElementById("author");
const next = document.getElementById("next");

const caller = (data)=>{
    let val = data.quotes;
    let random= ~~(Math.random()*val.length)
    show.innerText= val[random].quote;
    author.innerText= val[random].author;
}


next.addEventListener("click", ()=>{
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
        .then(response => response.json())
        .then(data => caller(data))
        .catch(err => console.error(err));
    
        next.innerText=`Next`;
})
