let btns = document.getElementById("resume-btns").children;
let contents = document.querySelectorAll(".resume-content");
console.log(contents)
console.log(btns)
Array.from(btns).forEach((btn) => {
    console.log(btn)
    btn.addEventListener("click", function (event) {
        Array.from(btns).forEach(list => {
            list.classList.remove("active")
            console.log("removed")
        })
        event.target.classList.add("active")
        contents.forEach(content => {
            console.log(content)
            content.classList.add("hidden")
        })
        console.log(event.target)
       let  contentName = event.target.innerText.toLowerCase()+"-content";
        console.log(contentName)
        // let content = document.getElementById("education-content")
        let content = document.getElementById(`${contentName}`)
        console.log(content)
        content.classList.remove("hidden")
    })
})
