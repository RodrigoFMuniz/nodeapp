describe('App', () => {
  test('Mock test', () => {
    const sut = 10
    expect(sut).toBe(10)
    expect(sut).not.toBeNull()
  })

  it('Should work with objects', () => {
    const sut = { name: 'Rodrigo', age: 36 }
    const sut2 = { name: 'Rodrigo', age: 36 }
    expect(sut).toHaveProperty('name')
    expect(sut).toHaveProperty('name', 'Rodrigo')
    expect(sut.name).toBe('Rodrigo')
    expect(sut.age).toBe(36)
    expect(sut).toStrictEqual(sut2)
  })
})
