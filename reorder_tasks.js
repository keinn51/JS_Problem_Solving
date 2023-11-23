function initialize() {
    const downButtons = document.getElementsByClassName("downButton");
    const upButtons = document.getElementsByClassName("upButton");

    const moveNodes = (element, direction) => {
        let index = 0;
        let allDivTags = document.getElementsByTagName("div");
        const divTagArray = [...allDivTags];

        for (let node of allDivTags) {
            if (node === element) break;
            index += 1;
        }

        if (direction === "up" && index > 0) {
            const tempNode = divTagArray[index];
            divTagArray[index] = divTagArray[index - 1];
            divTagArray[index - 1] = tempNode;
        }
        if (direction === "down" && index < 2) {
            const tempNode = divTagArray[index];
            divTagArray[index] = divTagArray[index + 1];
            divTagArray[index + 1] = tempNode;
        }

        divTagArray.forEach((elem) => {
            document.body.appendChild(elem);
        });

        allDivTags = document.getElementsByTagName("div");
    };

    for (let node of downButtons) {
        node.addEventListener("click", () => {
            moveNodes(node.parentElement, "down");
        });
    }
    for (let node of upButtons) {
        node.addEventListener("click", () => {
            moveNodes(node.parentElement, "up");
        });
    }
}

document.body.innerHTML = `
    <div>
        <span>Read emails</span>
        <button class="downButton" type="button">&darr;</button>
    </div>
    <div>
        <span>Prepare presentation</span>
        <button class="downButton" type="button">&darr;</button>
        <button class="upButton" type="button">&uarr;</button></div>
    <div>
        <span>Monthly report</span>
        <button class="upButton" type="button">&uarr;</button>
    </div>`;

initialize();

document.querySelectorAll("button")[0].click();
document.querySelectorAll("button")[3].click();
document.querySelectorAll("button")[1].click();

console.log(document.body.innerHTML);
