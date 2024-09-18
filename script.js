const library = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "1984",
        author: "George Orwell",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
