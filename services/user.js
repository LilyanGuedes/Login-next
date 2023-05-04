let users = []

export function cadastro(body) {
    const user = users.find(({email}) => email === body.email)
    if (user) throw new Error('Usuário já cadastrado')

    users.push(body)
    return body
}

export function login(body) {
    const user = users.find(({email}) => email === body.email)
    if (!user) throw new Error('Usuário não encontrado')
    if(user.password !== body.password) throw new Error('Senha incorreta')

    return user
}