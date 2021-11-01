const test = require('../NewContact.js');
const assert = require('assert');

describe("NewContactsForm", function(){

   it("returns 'Please input name' when `title` < 1.", function(){
      let output = test.NewContactsForm(0);
      assert.strictEqual(output, 'Field is blank.');
   });

});