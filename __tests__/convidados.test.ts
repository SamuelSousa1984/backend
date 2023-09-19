import request from "supertest";
import app from '../src/app';

describe('Teste de integração do sistema', () => {
    it('Deve retornar status 201 ao criar convidado', async () => {
        const response = await request(app)
            .post('/convidados')
            .send({ nome: 'Samuel', idade: 39 })

        expect(response.status).toBe(201)
    })

    it('Deve retornar status 200 ao acessar rota',async () => {
        const response = await request(app)
            .get('/lista')

        expect(response.status).toBe(200)
    })

    it('Deve excluir retornar status 204 ao acessar rota',async () => {
        const response = await request(app)
            .delete('/excluir')
            .send({ nome: 'Samuel' })

        expect(response.status).toBe(204)
    })
})