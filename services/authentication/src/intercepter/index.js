const emailValidate = (email) => {
    const pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return pattern.test(email)
}

module.exports = { emailValidate }