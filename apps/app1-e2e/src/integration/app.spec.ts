import { getHeader } from '../support/app.po';

describe('app1', () => {
  beforeEach(() => cy.visit('/'));

  it('should display header', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getHeader().contains('Angular + Tailwind CSS + Nx');
  });
});
