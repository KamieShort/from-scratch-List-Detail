// IMPORT MODULES under test here:
import { renderDragons } from '../renderutils.js';

const test = QUnit.test;

test('test should return <li> with dragon info', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<ul id="details-list"></ul>
    <h1 id="dragon-name"></h1>
    <p id="dragon-age"></p>
    <p id="dragon-ability"></p>
    <p id="dragon-weakness"></p>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderDragons({
        id: 1,
        name: 'Fireball',
        age: 5,
        ability: 'can fly around the world in 3 days',
        weakness: 'has really bad eyesight',
        image: './assets/fireball.png',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
