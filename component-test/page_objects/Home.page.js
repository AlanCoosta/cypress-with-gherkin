const goToHome = () => {
  cy.visit("/");
};

const buttonClick = (dataTest) => {
  cy.get(`[data-test="${dataTest}"]`).click();
};

const pageTitle = (title) => {
  cy.get("h1").should("have.text", title);
};

const HomePage = {
  goToHome,
  buttonClick,
  pageTitle,
};

export default HomePage;
