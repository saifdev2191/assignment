const username = (value) => {
    return {
        type: "USERNAME",
        value
    }
}

const password = (value) => {
    return {
        type: "PASSWORD",
        value
    }
}

const loggedin = (value) => {
    return {
        type: 'LOGGED_IN',
        value
    }
}

export  {username,password, loggedin} 