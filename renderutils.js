export function renderDragons(dragon) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    const img = document.createElement('img');
    img.src = `${dragon.image}`;

    a.href = `/dragons/?id=${dragon.id}`;
    a.textContent = dragon.name;
    li.append(a, img);
    return li;
}
