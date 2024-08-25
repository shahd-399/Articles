let container = document.querySelector('.container');

async function getPosts(){
    let url = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    let data = await url.json();

    for(let post=0 ; post<data.length; post++){

        //main div
        let mainDiv = document.createElement("div");

        //header
        let title = document.createElement("h2");
        let header = document.createTextNode(data[post].title)
        title.appendChild(header);
        mainDiv.appendChild(title);

        //body
        let body = document.createElement("p");
        let text = document.createTextNode(data[post].body);
        body.appendChild(text);
        mainDiv.appendChild(body);

        //Add Class On Main Div
        mainDiv.className = 'post-box';
        container.appendChild(mainDiv)
    }
}
getPosts()