
function store(key: string, value: unknown) {
    localStorage[key] = JSON.stringify(value);
}

function load(key: string, defaultValue = null) {
    var value = localStorage[key] || defaultValue;
    return JSON.parse(value);
}
export const storageService = {
    store,
    load
}
