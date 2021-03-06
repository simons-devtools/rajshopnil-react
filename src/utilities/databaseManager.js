const getUser = () => {
    const existingUser = sessionStorage.getItem('userId');
    if (existingUser) {
        return existingUser;
    } else {
        const newUser = 'user-' + new Date().getTime();
        sessionStorage.setItem('userId', newUser)
        return newUser;
    }
}


const getDataKey = () => {
    const userId = getUser();
    return `devtools/carts/${userId}`
}

// push to local storage: a temporary place for database
const getDatabaseCart = () => {
    const dataKey = getDataKey();
    const data = localStorage.getItem(dataKey) || "[]";
    return JSON.parse(data);
}

const addToDatabaseCart = (product) => {
    let currentCart = getDatabaseCart();
    currentCart = product;
    localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
}

const removeFromDatabaseCart = key => {
    const currentCart = getDatabaseCart();
    for (let i = 0; i < currentCart.length; i++) {
        if (currentCart[i].key === key) {
            currentCart.splice(i, 1);
        }
    }
    localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
}

const processOrder = (cart) => {
    localStorage.removeItem(getDataKey());
}


export { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder };


// polyfill to support older browser
const localStorage = window.localStorage || (() => {
    let store = {}
    return {
        getItem(key) {
            return store[key]
        },
        setItem(key, value) {
            store[key] = value.toString()
        },
        clear() {
            store = {}
        }
    };
})()

const sessionStorage = window.sessionStorage || (() => {
    let store = {}
    return {
        getItem(key) {
            return store[key]
        },
        setItem(key, value) {
            store[key] = value.toString()
        },
        clear() {
            store = {}
        }
    };
})()
// end of poly fill