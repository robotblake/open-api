/**
 * Netlify's API definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NetlifysApiDefinition);
  }
}(this, function(expect, NetlifysApiDefinition) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NetlifysApiDefinition.AccountMembership();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AccountMembership', function() {
    it('should create an instance of AccountMembership', function() {
      // uncomment below and update the code to test AccountMembership
      //var instane = new NetlifysApiDefinition.AccountMembership();
      //expect(instance).to.be.a(NetlifysApiDefinition.AccountMembership);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new NetlifysApiDefinition.AccountMembership();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new NetlifysApiDefinition.AccountMembership();
      //expect(instance).to.be();
    });

    it('should have the property slug (base name: "slug")', function() {
      // uncomment below and update the code to test the property slug
      //var instane = new NetlifysApiDefinition.AccountMembership();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new NetlifysApiDefinition.AccountMembership();
      //expect(instance).to.be();
    });

    it('should have the property capabilities (base name: "capabilities")', function() {
      // uncomment below and update the code to test the property capabilities
      //var instane = new NetlifysApiDefinition.AccountMembership();
      //expect(instance).to.be();
    });

    it('should have the property billingName (base name: "billing_name")', function() {
      // uncomment below and update the code to test the property billingName
      //var instane = new NetlifysApiDefinition.AccountMembership();
      //expect(instance).to.be();
    });

    it('should have the property billingEmail (base name: "billing_email")', function() {
      // uncomment below and update the code to test the property billingEmail
      //var instane = new NetlifysApiDefinition.AccountMembership();
      //expect(instance).to.be();
    });

    it('should have the property billingDetails (base name: "billing_details")', function() {
      // uncomment below and update the code to test the property billingDetails
      //var instane = new NetlifysApiDefinition.AccountMembership();
      //expect(instance).to.be();
    });

    it('should have the property billingPeriod (base name: "billing_period")', function() {
      // uncomment below and update the code to test the property billingPeriod
      //var instane = new NetlifysApiDefinition.AccountMembership();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethodId (base name: "payment_method_id")', function() {
      // uncomment below and update the code to test the property paymentMethodId
      //var instane = new NetlifysApiDefinition.AccountMembership();
      //expect(instance).to.be();
    });

    it('should have the property typeName (base name: "type_name")', function() {
      // uncomment below and update the code to test the property typeName
      //var instane = new NetlifysApiDefinition.AccountMembership();
      //expect(instance).to.be();
    });

    it('should have the property typeId (base name: "type_id")', function() {
      // uncomment below and update the code to test the property typeId
      //var instane = new NetlifysApiDefinition.AccountMembership();
      //expect(instance).to.be();
    });

    it('should have the property ownerIds (base name: "owner_ids")', function() {
      // uncomment below and update the code to test the property ownerIds
      //var instane = new NetlifysApiDefinition.AccountMembership();
      //expect(instance).to.be();
    });

    it('should have the property rolesAllowed (base name: "roles_allowed")', function() {
      // uncomment below and update the code to test the property rolesAllowed
      //var instane = new NetlifysApiDefinition.AccountMembership();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new NetlifysApiDefinition.AccountMembership();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new NetlifysApiDefinition.AccountMembership();
      //expect(instance).to.be();
    });

  });

}));