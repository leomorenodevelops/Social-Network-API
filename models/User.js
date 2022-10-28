const { Schema, model } = require('mongoose');

const validateEmail = (email) => {
    const val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return val.test(email);
}