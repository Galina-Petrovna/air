const createElement = (tag, atrtribute) => {
    const element = document.createElement(tag);
    Object.assign(element, atrtribute);
    return element;
};

export default createElement;