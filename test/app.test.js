const supertest = require('supertest')
const request = supertest('http://localhost:3001')

describe('App', () => {
  // TODO server response test
  describe('Server', () => {
    it('Should respond on 3001 port', () => {
      return request.get('/').then(res => expect(res.status).toBe(200))
    })
  })
})
