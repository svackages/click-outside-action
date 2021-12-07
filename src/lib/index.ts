let _listeners: { node: HTMLElement, callback: () => void }[] = [];
let _hasClickHandle: boolean;

const _handleClick = (event: MouseEvent) => {
    _listeners.forEach(({ node, callback }) => {
        if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
            callback();
        }
    })
};

const addNode = (node: HTMLElement, callback: () => void): void => {
    _listeners.push({ node, callback });
    if (!_hasClickHandle) {
        _hasClickHandle = true;
        document.addEventListener('click', _handleClick, true);
    }
};

const removeNode = (nodeToRemove: HTMLElement): void => {
    _listeners = _listeners.filter(({ node }) => node !== nodeToRemove);
    if (!_listeners.length) {
        _hasClickHandle = false;
        document.removeEventListener('click', _handleClick, true);
    }
}

const clickOutside = (node: HTMLElement, callback: () => void): IActionReturn => {
    addNode(node, callback);

    return {
        destroy(): void {
            removeNode(node);
        }
    };
};

export default clickOutside;
