import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../page_objects/Home.page";

When(/^I open the Home page$/, () => {
  HomePage.goToHome();
});
And(/^I click in the button "([^\"]+)"$/, (dataTest) => {
  HomePage.buttonClick(dataTest);
});

Then(/^the Title display "([^\"]+)"$/, (title) => {
  HomePage.pageTitle(title);
});
