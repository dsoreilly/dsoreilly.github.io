document.addEventListener('DOMContentLoaded', () => {
    let heading = document.getElementById('title')
    heading.innerText = heading.innerText.replace(/\'/g, '/')
})