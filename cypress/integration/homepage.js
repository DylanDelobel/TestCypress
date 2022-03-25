describe("Login into popcarte", () => {
    it("Open the login page", () => {
        cy.visit("https://popcarte.com/login.php")
        cy.get("#onetrust-accept-btn-handler").click()
    })
})
