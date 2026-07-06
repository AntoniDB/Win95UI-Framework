export function cx(...parts) {
    return parts.filter(Boolean).join(' ');
}
let idCounter = 0;
export function uid(prefix) {
    idCounter += 1;
    return `${prefix}-${idCounter}`;
}
