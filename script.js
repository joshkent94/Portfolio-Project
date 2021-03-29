// initial declaration of all possible parts of the message
const messageRelatedTo = ['His', 'My', "Josh's", "Tom's", 'Their', "Everyone's"];
const messageSubject = ['workout', 'athlete', 'movement'];
const workouts = ['Murph', 'Isabel', 'Fran', 'Dirty Diane'];
const athletes = ['Mat Fraser', 'Pat Vellner', 'Jacob Heppner', 'Tia Toomey', 'Haley Adams'];
const movements = ['handstand push up', 'toe to bar', 'handstand walk', 'snatch'];

// calculation of a random relation and subject for the message
let selectedRelatedTo = messageRelatedTo[Math.floor(Math.random() * messageRelatedTo.length)];
let selectedSubject = messageSubject[Math.floor(Math.random() * messageSubject.length)];

// a function that takes the random subject and gets a related random favourite
const selectFavourite = sub => {
    let selectedFavourite;
    if (sub === 'workout') {
        selectedFavourite = workouts[Math.floor(Math.random() * workouts.length)];
    } else if (sub === 'athlete') {
        selectedFavourite = athletes[Math.floor(Math.random() * athletes.length)];
    } else {
        selectedFavourite = `the ${movements[Math.floor(Math.random() * movements.length)]}`;
    };
    return selectedFavourite;
};

const outputMessage = `${selectedRelatedTo} favourite CrossFit ${selectedSubject} is ${selectFavourite(selectedSubject)}.`;

console.log(outputMessage);