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

// Nav bar 
function openNav() {
    document.querySelector(".navbar").style.width = "250px";
}

function closeNav() {
    document.querySelector(".navbar").style.width = "0";
}







// <!-- <script>
// function showNav() {
//     document.getElementById("navbar").style.display = "block"
//     document.getElementById("navbar").style.transition = ".9s ease-in-out"

// }
// function closeNav() {
//     document.getElementById("navbar").style.display = "none"
// }

// const navItems = document.querySelectorAll('.resume-items');
// navItems.forEach(item => {
//     item.addEventListener('click', () => {
//         navItems.forEach(navItem => navItem.classList.remove('active'));
//         this.classList.add('active');
//     });
// });

// </script>