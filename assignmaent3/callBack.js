// getting user data from Simulating an api , and returning data using a call back
function getUser(id, callback) {
    // Simulating an async operation (e.g., an API call)
    setTimeout(() => {
        if (id !== 1) {
            return callback(new Error('User not found'), null);
        }
        callback(null, { id: 1, name: 'John Doe' });
    }, 1000);
}

function getPosts(userId, callback) {
    // Simulating another async operation (e.g., another API call)
    setTimeout(() => {
        if (userId !== 1) {
            return callback(new Error('Posts not found'), null);
        }
        callback(null, [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]);
    }, 1000);
}

// Using the functions with callbacks
getUser(1, (err, user) => {
    if (err) {
        return console.error('Error:', err);
    }
    console.log('User:', user);
    // after getting user pass it to find post of user
    getPosts(user.id, (err, posts) => {
        if (err) {
            return console.error('Error:', err);
        }
        console.log('Posts:', posts);
    });
});