async function emailValidation(req, res, next) {
    const { email } = req.body;
    const regex = /\S+@\S+\.\S+/;
    if (!email) {
        return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!regex.test(email)) { 
        return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    next();
}

async function passwordValidation(req, res, next) {
    const { password } = req.body;
    if (!password) {
        return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    }
    if (password.length < 6) { 
        return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }
    next();
}

module.exports = {
    emailValidation,
    passwordValidation,
};
