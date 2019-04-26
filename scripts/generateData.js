const { addMovies } = require('./addMovies');
const { createTables } = require('./setupDb');
const { addShows } = require('./addShows');

(async () => {
    try {
        await createTables();
        await addMovies(1);
        await addShows();
    } catch (err) { console.log(err); }
})();