//UUID Universally Unique Identifier
/*
function enviarEmail(para, id, assunto, texto) {
    console.log(para, id, assunto, texto)
}

class EnviarEmailParaUsuario {
    send() {
        enviarEmail('nando@gmail.com', 989, 'Ola', 'Tudo')
    }
}
*/

interface DadosDeEnvioEmail {
    para: string;
    id: string;
    assunto: string;
    texto: string;
}

function enviarEmail({ para, id, assunto, texto }: DadosDeEnvioEmail) {
    //enviarEmail(dados: DadosDeEnvioEmail)
    //console.log(dados.para, dados.id, dados.assunto, dados.texto)
    console.log(para, id, assunto, texto)
}

class EnviarEmailParaUsuario {
    send() {
        enviarEmail({
            para: 'nando@gmail.com',
            id: '9899',
            assunto: 'Olá',
            texto: 'tudo',
        })
    }
}
