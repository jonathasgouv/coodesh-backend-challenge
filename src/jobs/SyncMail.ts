import IArticle from '@types/article'
import Mail from '@lib/Mail'

export default {
  key: 'SynchMail',
  async handle (articles: IArticle[]) {
    await Mail.sendMail({
      from: 'Queue Test <queue@queue.com>',
      to: 'Jônathas Gouveia <jonathas_gouv@hotmail.com>',
      subject: 'Erro na sincronização de artigos',
      html: `<div style="font-family: verdana;">
            <h3>Olá, <b style="color: #9e1881">Jônathas Gouveia</b></h3>
            <p>Houve um erro na sincronização de <b style="background-color: #9e1881; color: white; border-radius: 50%; padding: .3em;">${articles.length}</b> novos artigos.</p>
            <p>Confira um id de cada um deles:</p>
            <ul>
            ${articles.map(article => `<li>${article._id}</li>`)}
            </ul>
            </div>
            `
    })
  }
}
