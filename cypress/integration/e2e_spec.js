describe('ET game', function(){
    beforeEach(function(){
        // visit our local server running the application
        //
        // visiting before each test ensures the app
        // gets reset to a clean state
        //
        // https://on.cypress.io/api/visit
        cy.server();
        cy.visit("http://etg-balancer-862594806.eu-central-1.elb.amazonaws.com");
    })

    it('correctly integrates all services', function(){
        cy
            .get('#highscores').should('contain', '1')
            .clock()
            .get('#play').click()
            .get('#getReady').should('exist')
            .tick(5000)
            .get('#title').should('contain','The Exploratory Testing Game')
    });
});