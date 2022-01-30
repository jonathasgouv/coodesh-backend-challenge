import Mail from '@lib/Mail'

export default {
  key: 'SynchMail',
  async handle ({ data }) {
    await Mail.sendMail({
      from: 'Queue Test <queue@queue.com>',
      to: 'Jônathas Gouveia <jonathas_gouv@hotmail.com>',
      subject: 'Erro na sincronização de artigos',
      html: `<div style="font-family: verdana;">
            <h3>Olá, <b style="color: #9e1881">Jônathas Gouveia</b></h3>
            <p>Houve um erro na sincronização de artigos, o artigo com id <b style="background-color: #9e1881; color: white; padding: .3em;">${data.id}</b> não pôde ser criado.</p>
            </div>
            `
    })
  }
}
