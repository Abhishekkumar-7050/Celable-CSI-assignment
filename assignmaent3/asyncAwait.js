//simulating example of promise which was written in promise.js using async await

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

async function fetchUserAndPosts() {
    try {
        const user = await getUser(1);
        console.log('User:', user);

        const posts = await getPosts(user.id);
        console.log('Posts:', posts);
    } catch (err) {
        console.error('Error:', err);
    }
}

try {
    // try to fetch data of user using this function
    fetchUserAndPosts();
    
} catch (error) {
    console.log("error occured while fetching data and post of user : " , error) ; 
}

 