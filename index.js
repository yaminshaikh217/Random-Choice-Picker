const textArea = document.getElementById("txtArea")
const Tags = document.getElementById("tags")

textArea.focus();

textArea.addEventListener("keyup", (e) => {
    createTags(e.target.value)


    if (e.key == "Enter") {
        setTimeout(() => {
            // e.target.value = ""
        }, 10);
        randomSelect()
    }
})


function reset() {
    textArea.value = ""
    textArea.focus()
}



function createTags(inputs) {

    let tags = inputs.split(",").map(inputs => inputs.replace(/\s/g, ''))
    Tags.innerHTML = ' '



    tags.forEach((currentTag) => {

        let tagEle = document.createElement('span')
        tagEle.classList.add("tag")
        tagEle.innerText = currentTag
        Tags.appendChild(tagEle)
    })

}

function randomSelect() {
    const times = 40

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlight(randomTag)


        setTimeout(() => {
            unhighlight(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlight(randomTag)
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlight(tag) {
    tag.classList.add("highlight")

}

function unhighlight(tag) {
    tag.classList.remove("highlight")
}