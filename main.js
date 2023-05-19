const colors = document.querySelectorAll(".color_box h2");

const generate = () => {
    colors.forEach((e) => {
        let hexcode = '#' + Math.random().toString(16).substring(2,8);
        e.style.backgroundColor = hexcode;
        e.innerHTML = hexcode;
    })
}