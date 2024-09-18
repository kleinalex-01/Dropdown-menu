const menuContainer = document.getElementById("menu-container");
const foodSelector = document.getElementById("food-selector");

const colorMixer = (element) => {
    const nums = [];
    for (i = 0; i < 3; i++) {
        const randomNum = Math.floor(Math.random() *256);
        nums.push(randomNum);
    }
    console.log(nums)
    return element.style.color = `rgb(${nums})`;

}

const dropList = document.getElementById("dropdown-list");


const toggleList = () => {
    if (dropList.style.visibility === "hidden") {
        dropList.style.visibility = "visible";
    } else {
        dropList.style.visibility = "hidden";
    }
};

menuContainer.addEventListener('click',toggleList);