const animateText = (textNode) => {
    const char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-=_+[]{}|;':,.<>?/`~\"\\ ";
    const finalText = textNode.textContent;
    let currentText = '';

    const updateText = () => {
        textNode.textContent = currentText;
    };

    const getRandomChar = () => {
        return char[Math.floor(Math.random() * char.length)];
    };

    const newText = () => {
        for (let i = 0; i < finalText.length; i++) {
            // If current character is not the final character
            if (currentText[i] !== finalText[i]) {
                // Randomize the character
                currentText += getRandomChar();
            } else {
                // If the current character is the final character
                currentText += finalText[i];
            }
        }
        currentText = newText;
        updateText();

        if (currentText !== finalText) {
            newText();
        }
    };

    newText();
};



function collectTextNodes(node) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {
        return [node];
    }

    const textNodes = [];
    for (const childNode of node.childNodes) {
        textNodes.push(...collectTextNodes(childNode));
    }

    return textNodes;
}


const textNodes = collectTextNodes(document.body);

textNodes.forEach((textNode) => {
    animateText(textNode);
});

//textElements.forEach((element) => {
//
//    animateText(element);
//});
