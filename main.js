// Ikki objectni chuqur solishtirish
function deepEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== "object" || typeof b !== "object") return false;

    let keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;

    return keys.every(k => deepEqual(a[k], b[k]));
}
// Arrayni group qilish
function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        (acc[obj[key]] ||= []).push(obj);
        return acc;
    }, {});
}
