describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:8080')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon page can be navigated to from the main page', function() {
    cy.visit('http://localhost:8080')
    cy.contains('beedrill').click()
    cy.contains('swarm')
  })
})