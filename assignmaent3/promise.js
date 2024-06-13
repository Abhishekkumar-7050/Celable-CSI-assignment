function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id !== 1) {
                return reject(new Error('User not found'));
            }
            resolve({ id: 1, name: 'John Doe' });
        }, 1000);
    });
}

function getPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId !== 1) {
                return reject(new Error('Posts not found'));
            }
            resolve([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]);
        }, 1000);
    });
}

// Using Promises
getUser(1)
    .then(user => {
        console.log('User:', user);
        return getPosts(user.id);
    })
    .then(posts => {
        console.log('Posts:', posts);
    })
    .catch(err => {
        console.error('Error:', err);
    });