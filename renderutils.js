export function renderDragons(dragon) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.href = `/dragons/?id=${dragon.id}`;
    a.textContent = dragon.name;
    li.append(a);
    return li;
}
