const menuContainer = document.getElementById("menu-container");

const colorMixer = (id) => {
    const nums = [];
    for (i = 0; i < 3; i++) {
        const randomNum = Math.floor(Math.random() *256);
        nums.push(randomNum);
    }
    return document.getElementById(id).style.color(`rgb(${nums})`);

}


colorMixer("menu-container")