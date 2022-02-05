/* eslint-disable no-undef */
describe('user authentication', () => {
  it('visits Home page', () => {
    cy.visit('http://localhost:3000/');
  });

  it('clicks log in button', () => {
    cy.get('.MuiButton-outlined').click();
  });

  it('types email in form', () => {
    cy.get('#email').type('a.forarc@gmail.com');
  });

  it('types password in form', () => {
    cy.get('#password').type('12345678');
  });

  it('clicks submit button', () => {
    cy.get('.css-binzgt > .MuiBox-root > .MuiButton-root').click();
  });

  it('clicks avatar button', () => {
    cy.get('.MuiIconButton-root > a').click();
  });

  it('clicks photo tab', () => {
    cy.get('#vertical-tab-1').click();
  });

  it('upload file to the input field', () => {
    cy.get('input[type=file]').attachFile('avatar.png');
  });

  it('clicks upload image button', () => {
    cy.get('.upload-container > .MuiButton-root').click();
  });
});
