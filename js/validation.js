// Email Validation

function validateEmail(email) {

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}

// Phone Validation

function validatePhone(phone) {

    return /^[0-9]{10}$/.test(phone);

}

// Empty Validation

function isEmpty(value) {

    return value.trim() === "";

}