(function(window, angular, undefined) {'use strict';

var urlBase = "http://api.noders.com/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Noder
 * @header lbServices.Noder
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Noder` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Noder",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Noders/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Noder#prototype$__findById__accessTokens
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          url: urlBase + "/Noders/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/Noders/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#prototype$__updateById__accessTokens
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/Noders/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Noder.host() instead.
        "prototype$__get__host": {
          url: urlBase + "/Noders/:id/host",
          method: "GET"
        },

        // INTERNAL. Use Noder.sigue.findById() instead.
        "prototype$__findById__sigue": {
          url: urlBase + "/Noders/:id/sigue/:fk",
          method: "GET"
        },

        // INTERNAL. Use Noder.sigue.destroyById() instead.
        "prototype$__destroyById__sigue": {
          url: urlBase + "/Noders/:id/sigue/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Noder.sigue.updateById() instead.
        "prototype$__updateById__sigue": {
          url: urlBase + "/Noders/:id/sigue/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Noder.sigue.link() instead.
        "prototype$__link__sigue": {
          url: urlBase + "/Noders/:id/sigue/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Noder.sigue.unlink() instead.
        "prototype$__unlink__sigue": {
          url: urlBase + "/Noders/:id/sigue/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Noder.sigue.exists() instead.
        "prototype$__exists__sigue": {
          url: urlBase + "/Noders/:id/sigue/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Noder.paricipante.findById() instead.
        "prototype$__findById__paricipante": {
          url: urlBase + "/Noders/:id/paricipante/:fk",
          method: "GET"
        },

        // INTERNAL. Use Noder.paricipante.destroyById() instead.
        "prototype$__destroyById__paricipante": {
          url: urlBase + "/Noders/:id/paricipante/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Noder.paricipante.updateById() instead.
        "prototype$__updateById__paricipante": {
          url: urlBase + "/Noders/:id/paricipante/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Noder.paricipante.link() instead.
        "prototype$__link__paricipante": {
          url: urlBase + "/Noders/:id/paricipante/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Noder.paricipante.unlink() instead.
        "prototype$__unlink__paricipante": {
          url: urlBase + "/Noders/:id/paricipante/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Noder.paricipante.exists() instead.
        "prototype$__exists__paricipante": {
          url: urlBase + "/Noders/:id/paricipante/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#prototype$__get__accessTokens
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Queries accessTokens of Noder.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Noders/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#prototype$__create__accessTokens
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Noders/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#prototype$__delete__accessTokens
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Noders/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#prototype$__count__accessTokens
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Counts accessTokens of Noder.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Noders/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Noder.sigue() instead.
        "prototype$__get__sigue": {
          isArray: true,
          url: urlBase + "/Noders/:id/sigue",
          method: "GET"
        },

        // INTERNAL. Use Noder.sigue.create() instead.
        "prototype$__create__sigue": {
          url: urlBase + "/Noders/:id/sigue",
          method: "POST"
        },

        // INTERNAL. Use Noder.sigue.destroyAll() instead.
        "prototype$__delete__sigue": {
          url: urlBase + "/Noders/:id/sigue",
          method: "DELETE"
        },

        // INTERNAL. Use Noder.sigue.count() instead.
        "prototype$__count__sigue": {
          url: urlBase + "/Noders/:id/sigue/count",
          method: "GET"
        },

        // INTERNAL. Use Noder.paricipante() instead.
        "prototype$__get__paricipante": {
          isArray: true,
          url: urlBase + "/Noders/:id/paricipante",
          method: "GET"
        },

        // INTERNAL. Use Noder.paricipante.create() instead.
        "prototype$__create__paricipante": {
          url: urlBase + "/Noders/:id/paricipante",
          method: "POST"
        },

        // INTERNAL. Use Noder.paricipante.destroyAll() instead.
        "prototype$__delete__paricipante": {
          url: urlBase + "/Noders/:id/paricipante",
          method: "DELETE"
        },

        // INTERNAL. Use Noder.paricipante.count() instead.
        "prototype$__count__paricipante": {
          url: urlBase + "/Noders/:id/paricipante/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#create
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Noders",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#upsert
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Noders",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#exists
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Noders/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#findById
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Noders/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#find
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Noders",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#findOne
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Noders/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#updateAll
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Noders/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#deleteById
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Noders/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#count
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Noders/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#prototype$updateAttributes
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Noders/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#login
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Noders/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#logout
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Noders/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#confirm
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Confirm a user registration with email verification token
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Noders/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#resetPassword
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Reset password for a user with email
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Noders/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#prototype$volverAdmin
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `solution` – `{string=}` - 
         */
        "prototype$volverAdmin": {
          url: urlBase + "/Noders/:id/volverAdmin",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#prototype$roles
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `roles` – `{*=}` - 
         */
        "prototype$roles": {
          url: urlBase + "/Noders/:id/roles",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.noders.findById() instead.
        "::findById::Comunidad::noders": {
          url: urlBase + "/Comunidades/:id/noders/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.noders.destroyById() instead.
        "::destroyById::Comunidad::noders": {
          url: urlBase + "/Comunidades/:id/noders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comunidad.noders.updateById() instead.
        "::updateById::Comunidad::noders": {
          url: urlBase + "/Comunidades/:id/noders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comunidad.seguidores.findById() instead.
        "::findById::Comunidad::seguidores": {
          url: urlBase + "/Comunidades/:id/seguidores/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.seguidores.destroyById() instead.
        "::destroyById::Comunidad::seguidores": {
          url: urlBase + "/Comunidades/:id/seguidores/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comunidad.seguidores.updateById() instead.
        "::updateById::Comunidad::seguidores": {
          url: urlBase + "/Comunidades/:id/seguidores/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comunidad.seguidores.link() instead.
        "::link::Comunidad::seguidores": {
          url: urlBase + "/Comunidades/:id/seguidores/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comunidad.seguidores.unlink() instead.
        "::unlink::Comunidad::seguidores": {
          url: urlBase + "/Comunidades/:id/seguidores/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comunidad.seguidores.exists() instead.
        "::exists::Comunidad::seguidores": {
          url: urlBase + "/Comunidades/:id/seguidores/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Comunidad.noders() instead.
        "::get::Comunidad::noders": {
          isArray: true,
          url: urlBase + "/Comunidades/:id/noders",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.noders.create() instead.
        "::create::Comunidad::noders": {
          url: urlBase + "/Comunidades/:id/noders",
          method: "POST"
        },

        // INTERNAL. Use Comunidad.noders.destroyAll() instead.
        "::delete::Comunidad::noders": {
          url: urlBase + "/Comunidades/:id/noders",
          method: "DELETE"
        },

        // INTERNAL. Use Comunidad.noders.count() instead.
        "::count::Comunidad::noders": {
          url: urlBase + "/Comunidades/:id/noders/count",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.seguidores() instead.
        "::get::Comunidad::seguidores": {
          isArray: true,
          url: urlBase + "/Comunidades/:id/seguidores",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.seguidores.create() instead.
        "::create::Comunidad::seguidores": {
          url: urlBase + "/Comunidades/:id/seguidores",
          method: "POST"
        },

        // INTERNAL. Use Comunidad.seguidores.destroyAll() instead.
        "::delete::Comunidad::seguidores": {
          url: urlBase + "/Comunidades/:id/seguidores",
          method: "DELETE"
        },

        // INTERNAL. Use Comunidad.seguidores.count() instead.
        "::count::Comunidad::seguidores": {
          url: urlBase + "/Comunidades/:id/seguidores/count",
          method: "GET"
        },

        // INTERNAL. Use Evento.suscritos.findById() instead.
        "::findById::Evento::suscritos": {
          url: urlBase + "/Eventos/:id/suscritos/:fk",
          method: "GET"
        },

        // INTERNAL. Use Evento.suscritos.destroyById() instead.
        "::destroyById::Evento::suscritos": {
          url: urlBase + "/Eventos/:id/suscritos/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Evento.suscritos.updateById() instead.
        "::updateById::Evento::suscritos": {
          url: urlBase + "/Eventos/:id/suscritos/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Evento.suscritos.link() instead.
        "::link::Evento::suscritos": {
          url: urlBase + "/Eventos/:id/suscritos/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Evento.suscritos.unlink() instead.
        "::unlink::Evento::suscritos": {
          url: urlBase + "/Eventos/:id/suscritos/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Evento.suscritos.exists() instead.
        "::exists::Evento::suscritos": {
          url: urlBase + "/Eventos/:id/suscritos/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Evento.suscritos() instead.
        "::get::Evento::suscritos": {
          isArray: true,
          url: urlBase + "/Eventos/:id/suscritos",
          method: "GET"
        },

        // INTERNAL. Use Evento.suscritos.create() instead.
        "::create::Evento::suscritos": {
          url: urlBase + "/Eventos/:id/suscritos",
          method: "POST"
        },

        // INTERNAL. Use Evento.suscritos.destroyAll() instead.
        "::delete::Evento::suscritos": {
          url: urlBase + "/Eventos/:id/suscritos",
          method: "DELETE"
        },

        // INTERNAL. Use Evento.suscritos.count() instead.
        "::count::Evento::suscritos": {
          url: urlBase + "/Eventos/:id/suscritos/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Noder#getCurrent
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Noders" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Noder#updateOrCreate
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Noder#update
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Noder#destroyById
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Noder#removeById
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Noder#getCachedCurrent
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Noder#login} or
         * {@link lbServices.Noder#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Noder instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder#isAuthenticated
         * @methodOf lbServices.Noder
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder#getCurrentId
         * @methodOf lbServices.Noder
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Noder#modelName
    * @propertyOf lbServices.Noder
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Noder`.
    */
    R.modelName = "Noder";


        /**
         * @ngdoc method
         * @name lbServices.Noder#host
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Fetches belongsTo relation host.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comunidad` object.)
         * </em>
         */
        R.host = function() {
          var TargetResource = $injector.get("Comunidad");
          var action = TargetResource["::get::Noder::host"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Noder.sigue
     * @header lbServices.Noder.sigue
     * @object
     * @description
     *
     * The object `Noder.sigue` groups methods
     * manipulating `Comunidad` instances related to `Noder`.
     *
     * Call {@link lbServices.Noder#sigue Noder.sigue()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Noder#sigue
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Queries sigue of Noder.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comunidad` object.)
         * </em>
         */
        R.sigue = function() {
          var TargetResource = $injector.get("Comunidad");
          var action = TargetResource["::get::Noder::sigue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder.sigue#count
         * @methodOf lbServices.Noder.sigue
         *
         * @description
         *
         * Counts sigue of Noder.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.sigue.count = function() {
          var TargetResource = $injector.get("Comunidad");
          var action = TargetResource["::count::Noder::sigue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder.sigue#create
         * @methodOf lbServices.Noder.sigue
         *
         * @description
         *
         * Creates a new instance in sigue of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comunidad` object.)
         * </em>
         */
        R.sigue.create = function() {
          var TargetResource = $injector.get("Comunidad");
          var action = TargetResource["::create::Noder::sigue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder.sigue#destroyAll
         * @methodOf lbServices.Noder.sigue
         *
         * @description
         *
         * Deletes all sigue of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.sigue.destroyAll = function() {
          var TargetResource = $injector.get("Comunidad");
          var action = TargetResource["::delete::Noder::sigue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder.sigue#destroyById
         * @methodOf lbServices.Noder.sigue
         *
         * @description
         *
         * Delete a related item by id for sigue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for sigue
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.sigue.destroyById = function() {
          var TargetResource = $injector.get("Comunidad");
          var action = TargetResource["::destroyById::Noder::sigue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder.sigue#exists
         * @methodOf lbServices.Noder.sigue
         *
         * @description
         *
         * Check the existence of sigue relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for sigue
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comunidad` object.)
         * </em>
         */
        R.sigue.exists = function() {
          var TargetResource = $injector.get("Comunidad");
          var action = TargetResource["::exists::Noder::sigue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder.sigue#findById
         * @methodOf lbServices.Noder.sigue
         *
         * @description
         *
         * Find a related item by id for sigue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for sigue
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comunidad` object.)
         * </em>
         */
        R.sigue.findById = function() {
          var TargetResource = $injector.get("Comunidad");
          var action = TargetResource["::findById::Noder::sigue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder.sigue#link
         * @methodOf lbServices.Noder.sigue
         *
         * @description
         *
         * Add a related item by id for sigue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for sigue
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comunidad` object.)
         * </em>
         */
        R.sigue.link = function() {
          var TargetResource = $injector.get("Comunidad");
          var action = TargetResource["::link::Noder::sigue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder.sigue#unlink
         * @methodOf lbServices.Noder.sigue
         *
         * @description
         *
         * Remove the sigue relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for sigue
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.sigue.unlink = function() {
          var TargetResource = $injector.get("Comunidad");
          var action = TargetResource["::unlink::Noder::sigue"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder.sigue#updateById
         * @methodOf lbServices.Noder.sigue
         *
         * @description
         *
         * Update a related item by id for sigue.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for sigue
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comunidad` object.)
         * </em>
         */
        R.sigue.updateById = function() {
          var TargetResource = $injector.get("Comunidad");
          var action = TargetResource["::updateById::Noder::sigue"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Noder.paricipante
     * @header lbServices.Noder.paricipante
     * @object
     * @description
     *
     * The object `Noder.paricipante` groups methods
     * manipulating `Evento` instances related to `Noder`.
     *
     * Call {@link lbServices.Noder#paricipante Noder.paricipante()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Noder#paricipante
         * @methodOf lbServices.Noder
         *
         * @description
         *
         * Queries paricipante of Noder.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        R.paricipante = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::get::Noder::paricipante"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder.paricipante#count
         * @methodOf lbServices.Noder.paricipante
         *
         * @description
         *
         * Counts paricipante of Noder.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.paricipante.count = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::count::Noder::paricipante"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder.paricipante#create
         * @methodOf lbServices.Noder.paricipante
         *
         * @description
         *
         * Creates a new instance in paricipante of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        R.paricipante.create = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::create::Noder::paricipante"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder.paricipante#destroyAll
         * @methodOf lbServices.Noder.paricipante
         *
         * @description
         *
         * Deletes all paricipante of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.paricipante.destroyAll = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::delete::Noder::paricipante"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder.paricipante#destroyById
         * @methodOf lbServices.Noder.paricipante
         *
         * @description
         *
         * Delete a related item by id for paricipante.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for paricipante
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.paricipante.destroyById = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::destroyById::Noder::paricipante"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder.paricipante#exists
         * @methodOf lbServices.Noder.paricipante
         *
         * @description
         *
         * Check the existence of paricipante relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for paricipante
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        R.paricipante.exists = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::exists::Noder::paricipante"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder.paricipante#findById
         * @methodOf lbServices.Noder.paricipante
         *
         * @description
         *
         * Find a related item by id for paricipante.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for paricipante
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        R.paricipante.findById = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::findById::Noder::paricipante"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder.paricipante#link
         * @methodOf lbServices.Noder.paricipante
         *
         * @description
         *
         * Add a related item by id for paricipante.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for paricipante
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        R.paricipante.link = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::link::Noder::paricipante"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder.paricipante#unlink
         * @methodOf lbServices.Noder.paricipante
         *
         * @description
         *
         * Remove the paricipante relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for paricipante
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.paricipante.unlink = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::unlink::Noder::paricipante"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Noder.paricipante#updateById
         * @methodOf lbServices.Noder.paricipante
         *
         * @description
         *
         * Update a related item by id for paricipante.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for paricipante
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        R.paricipante.updateById = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::updateById::Noder::paricipante"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Partner
 * @header lbServices.Partner
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Partner` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Partner",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Partners/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Partner.comunidad() instead.
        "prototype$__get__comunidad": {
          url: urlBase + "/Partners/:id/comunidad",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partner#create
         * @methodOf lbServices.Partner
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partner` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Partners",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partner#upsert
         * @methodOf lbServices.Partner
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partner` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Partners",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partner#exists
         * @methodOf lbServices.Partner
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Partners/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partner#findById
         * @methodOf lbServices.Partner
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partner` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Partners/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partner#find
         * @methodOf lbServices.Partner
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partner` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Partners",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partner#findOne
         * @methodOf lbServices.Partner
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partner` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Partners/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partner#updateAll
         * @methodOf lbServices.Partner
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Partners/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partner#deleteById
         * @methodOf lbServices.Partner
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Partners/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partner#count
         * @methodOf lbServices.Partner
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Partners/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Partner#prototype$updateAttributes
         * @methodOf lbServices.Partner
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partner` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Partners/:id",
          method: "PUT"
        },

        // INTERNAL. Use Comunidad.partners.findById() instead.
        "::findById::Comunidad::partners": {
          url: urlBase + "/Comunidades/:id/partners/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.partners.destroyById() instead.
        "::destroyById::Comunidad::partners": {
          url: urlBase + "/Comunidades/:id/partners/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comunidad.partners.updateById() instead.
        "::updateById::Comunidad::partners": {
          url: urlBase + "/Comunidades/:id/partners/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comunidad.partners() instead.
        "::get::Comunidad::partners": {
          isArray: true,
          url: urlBase + "/Comunidades/:id/partners",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.partners.create() instead.
        "::create::Comunidad::partners": {
          url: urlBase + "/Comunidades/:id/partners",
          method: "POST"
        },

        // INTERNAL. Use Comunidad.partners.destroyAll() instead.
        "::delete::Comunidad::partners": {
          url: urlBase + "/Comunidades/:id/partners",
          method: "DELETE"
        },

        // INTERNAL. Use Comunidad.partners.count() instead.
        "::count::Comunidad::partners": {
          url: urlBase + "/Comunidades/:id/partners/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Partner#updateOrCreate
         * @methodOf lbServices.Partner
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partner` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Partner#update
         * @methodOf lbServices.Partner
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Partner#destroyById
         * @methodOf lbServices.Partner
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Partner#removeById
         * @methodOf lbServices.Partner
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Partner#modelName
    * @propertyOf lbServices.Partner
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Partner`.
    */
    R.modelName = "Partner";


        /**
         * @ngdoc method
         * @name lbServices.Partner#comunidad
         * @methodOf lbServices.Partner
         *
         * @description
         *
         * Fetches belongsTo relation comunidad.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comunidad` object.)
         * </em>
         */
        R.comunidad = function() {
          var TargetResource = $injector.get("Comunidad");
          var action = TargetResource["::get::Partner::comunidad"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Comunidad
 * @header lbServices.Comunidad
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Comunidad` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Comunidad",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Comunidades/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Comunidad.noders.findById() instead.
        "prototype$__findById__noders": {
          url: urlBase + "/Comunidades/:id/noders/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.noders.destroyById() instead.
        "prototype$__destroyById__noders": {
          url: urlBase + "/Comunidades/:id/noders/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comunidad.noders.updateById() instead.
        "prototype$__updateById__noders": {
          url: urlBase + "/Comunidades/:id/noders/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comunidad.partners.findById() instead.
        "prototype$__findById__partners": {
          url: urlBase + "/Comunidades/:id/partners/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.partners.destroyById() instead.
        "prototype$__destroyById__partners": {
          url: urlBase + "/Comunidades/:id/partners/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comunidad.partners.updateById() instead.
        "prototype$__updateById__partners": {
          url: urlBase + "/Comunidades/:id/partners/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comunidad.eventos.findById() instead.
        "prototype$__findById__eventos": {
          url: urlBase + "/Comunidades/:id/eventos/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.eventos.destroyById() instead.
        "prototype$__destroyById__eventos": {
          url: urlBase + "/Comunidades/:id/eventos/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comunidad.eventos.updateById() instead.
        "prototype$__updateById__eventos": {
          url: urlBase + "/Comunidades/:id/eventos/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comunidad.seguidores.findById() instead.
        "prototype$__findById__seguidores": {
          url: urlBase + "/Comunidades/:id/seguidores/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.seguidores.destroyById() instead.
        "prototype$__destroyById__seguidores": {
          url: urlBase + "/Comunidades/:id/seguidores/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comunidad.seguidores.updateById() instead.
        "prototype$__updateById__seguidores": {
          url: urlBase + "/Comunidades/:id/seguidores/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comunidad.seguidores.link() instead.
        "prototype$__link__seguidores": {
          url: urlBase + "/Comunidades/:id/seguidores/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comunidad.seguidores.unlink() instead.
        "prototype$__unlink__seguidores": {
          url: urlBase + "/Comunidades/:id/seguidores/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comunidad.seguidores.exists() instead.
        "prototype$__exists__seguidores": {
          url: urlBase + "/Comunidades/:id/seguidores/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Comunidad.noders() instead.
        "prototype$__get__noders": {
          isArray: true,
          url: urlBase + "/Comunidades/:id/noders",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.noders.create() instead.
        "prototype$__create__noders": {
          url: urlBase + "/Comunidades/:id/noders",
          method: "POST"
        },

        // INTERNAL. Use Comunidad.noders.destroyAll() instead.
        "prototype$__delete__noders": {
          url: urlBase + "/Comunidades/:id/noders",
          method: "DELETE"
        },

        // INTERNAL. Use Comunidad.noders.count() instead.
        "prototype$__count__noders": {
          url: urlBase + "/Comunidades/:id/noders/count",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.partners() instead.
        "prototype$__get__partners": {
          isArray: true,
          url: urlBase + "/Comunidades/:id/partners",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.partners.create() instead.
        "prototype$__create__partners": {
          url: urlBase + "/Comunidades/:id/partners",
          method: "POST"
        },

        // INTERNAL. Use Comunidad.partners.destroyAll() instead.
        "prototype$__delete__partners": {
          url: urlBase + "/Comunidades/:id/partners",
          method: "DELETE"
        },

        // INTERNAL. Use Comunidad.partners.count() instead.
        "prototype$__count__partners": {
          url: urlBase + "/Comunidades/:id/partners/count",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.eventos() instead.
        "prototype$__get__eventos": {
          isArray: true,
          url: urlBase + "/Comunidades/:id/eventos",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.eventos.create() instead.
        "prototype$__create__eventos": {
          url: urlBase + "/Comunidades/:id/eventos",
          method: "POST"
        },

        // INTERNAL. Use Comunidad.eventos.destroyAll() instead.
        "prototype$__delete__eventos": {
          url: urlBase + "/Comunidades/:id/eventos",
          method: "DELETE"
        },

        // INTERNAL. Use Comunidad.eventos.count() instead.
        "prototype$__count__eventos": {
          url: urlBase + "/Comunidades/:id/eventos/count",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.seguidores() instead.
        "prototype$__get__seguidores": {
          isArray: true,
          url: urlBase + "/Comunidades/:id/seguidores",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.seguidores.create() instead.
        "prototype$__create__seguidores": {
          url: urlBase + "/Comunidades/:id/seguidores",
          method: "POST"
        },

        // INTERNAL. Use Comunidad.seguidores.destroyAll() instead.
        "prototype$__delete__seguidores": {
          url: urlBase + "/Comunidades/:id/seguidores",
          method: "DELETE"
        },

        // INTERNAL. Use Comunidad.seguidores.count() instead.
        "prototype$__count__seguidores": {
          url: urlBase + "/Comunidades/:id/seguidores/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comunidad#create
         * @methodOf lbServices.Comunidad
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comunidad` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Comunidades",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comunidad#upsert
         * @methodOf lbServices.Comunidad
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comunidad` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Comunidades",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comunidad#exists
         * @methodOf lbServices.Comunidad
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Comunidades/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comunidad#findById
         * @methodOf lbServices.Comunidad
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comunidad` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Comunidades/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comunidad#find
         * @methodOf lbServices.Comunidad
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comunidad` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Comunidades",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comunidad#findOne
         * @methodOf lbServices.Comunidad
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comunidad` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Comunidades/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comunidad#updateAll
         * @methodOf lbServices.Comunidad
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Comunidades/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comunidad#deleteById
         * @methodOf lbServices.Comunidad
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Comunidades/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comunidad#count
         * @methodOf lbServices.Comunidad
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Comunidades/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comunidad#prototype$updateAttributes
         * @methodOf lbServices.Comunidad
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comunidad` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Comunidades/:id",
          method: "PUT"
        },

        // INTERNAL. Use Noder.host() instead.
        "::get::Noder::host": {
          url: urlBase + "/Noders/:id/host",
          method: "GET"
        },

        // INTERNAL. Use Noder.sigue.findById() instead.
        "::findById::Noder::sigue": {
          url: urlBase + "/Noders/:id/sigue/:fk",
          method: "GET"
        },

        // INTERNAL. Use Noder.sigue.destroyById() instead.
        "::destroyById::Noder::sigue": {
          url: urlBase + "/Noders/:id/sigue/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Noder.sigue.updateById() instead.
        "::updateById::Noder::sigue": {
          url: urlBase + "/Noders/:id/sigue/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Noder.sigue.link() instead.
        "::link::Noder::sigue": {
          url: urlBase + "/Noders/:id/sigue/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Noder.sigue.unlink() instead.
        "::unlink::Noder::sigue": {
          url: urlBase + "/Noders/:id/sigue/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Noder.sigue.exists() instead.
        "::exists::Noder::sigue": {
          url: urlBase + "/Noders/:id/sigue/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Noder.sigue() instead.
        "::get::Noder::sigue": {
          isArray: true,
          url: urlBase + "/Noders/:id/sigue",
          method: "GET"
        },

        // INTERNAL. Use Noder.sigue.create() instead.
        "::create::Noder::sigue": {
          url: urlBase + "/Noders/:id/sigue",
          method: "POST"
        },

        // INTERNAL. Use Noder.sigue.destroyAll() instead.
        "::delete::Noder::sigue": {
          url: urlBase + "/Noders/:id/sigue",
          method: "DELETE"
        },

        // INTERNAL. Use Noder.sigue.count() instead.
        "::count::Noder::sigue": {
          url: urlBase + "/Noders/:id/sigue/count",
          method: "GET"
        },

        // INTERNAL. Use Partner.comunidad() instead.
        "::get::Partner::comunidad": {
          url: urlBase + "/Partners/:id/comunidad",
          method: "GET"
        },

        // INTERNAL. Use Evento.comunidad() instead.
        "::get::Evento::comunidad": {
          url: urlBase + "/Eventos/:id/comunidad",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Comunidad#updateOrCreate
         * @methodOf lbServices.Comunidad
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comunidad` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Comunidad#update
         * @methodOf lbServices.Comunidad
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Comunidad#destroyById
         * @methodOf lbServices.Comunidad
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Comunidad#removeById
         * @methodOf lbServices.Comunidad
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Comunidad#modelName
    * @propertyOf lbServices.Comunidad
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Comunidad`.
    */
    R.modelName = "Comunidad";

    /**
     * @ngdoc object
     * @name lbServices.Comunidad.noders
     * @header lbServices.Comunidad.noders
     * @object
     * @description
     *
     * The object `Comunidad.noders` groups methods
     * manipulating `Noder` instances related to `Comunidad`.
     *
     * Call {@link lbServices.Comunidad#noders Comunidad.noders()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Comunidad#noders
         * @methodOf lbServices.Comunidad
         *
         * @description
         *
         * Queries noders of Comunidad.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        R.noders = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::get::Comunidad::noders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.noders#count
         * @methodOf lbServices.Comunidad.noders
         *
         * @description
         *
         * Counts noders of Comunidad.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.noders.count = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::count::Comunidad::noders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.noders#create
         * @methodOf lbServices.Comunidad.noders
         *
         * @description
         *
         * Creates a new instance in noders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        R.noders.create = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::create::Comunidad::noders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.noders#destroyAll
         * @methodOf lbServices.Comunidad.noders
         *
         * @description
         *
         * Deletes all noders of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.noders.destroyAll = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::delete::Comunidad::noders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.noders#destroyById
         * @methodOf lbServices.Comunidad.noders
         *
         * @description
         *
         * Delete a related item by id for noders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for noders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.noders.destroyById = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::destroyById::Comunidad::noders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.noders#findById
         * @methodOf lbServices.Comunidad.noders
         *
         * @description
         *
         * Find a related item by id for noders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for noders
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        R.noders.findById = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::findById::Comunidad::noders"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.noders#updateById
         * @methodOf lbServices.Comunidad.noders
         *
         * @description
         *
         * Update a related item by id for noders.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for noders
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        R.noders.updateById = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::updateById::Comunidad::noders"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Comunidad.partners
     * @header lbServices.Comunidad.partners
     * @object
     * @description
     *
     * The object `Comunidad.partners` groups methods
     * manipulating `Partner` instances related to `Comunidad`.
     *
     * Call {@link lbServices.Comunidad#partners Comunidad.partners()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Comunidad#partners
         * @methodOf lbServices.Comunidad
         *
         * @description
         *
         * Queries partners of Comunidad.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partner` object.)
         * </em>
         */
        R.partners = function() {
          var TargetResource = $injector.get("Partner");
          var action = TargetResource["::get::Comunidad::partners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.partners#count
         * @methodOf lbServices.Comunidad.partners
         *
         * @description
         *
         * Counts partners of Comunidad.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.partners.count = function() {
          var TargetResource = $injector.get("Partner");
          var action = TargetResource["::count::Comunidad::partners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.partners#create
         * @methodOf lbServices.Comunidad.partners
         *
         * @description
         *
         * Creates a new instance in partners of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partner` object.)
         * </em>
         */
        R.partners.create = function() {
          var TargetResource = $injector.get("Partner");
          var action = TargetResource["::create::Comunidad::partners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.partners#destroyAll
         * @methodOf lbServices.Comunidad.partners
         *
         * @description
         *
         * Deletes all partners of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.partners.destroyAll = function() {
          var TargetResource = $injector.get("Partner");
          var action = TargetResource["::delete::Comunidad::partners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.partners#destroyById
         * @methodOf lbServices.Comunidad.partners
         *
         * @description
         *
         * Delete a related item by id for partners.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for partners
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.partners.destroyById = function() {
          var TargetResource = $injector.get("Partner");
          var action = TargetResource["::destroyById::Comunidad::partners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.partners#findById
         * @methodOf lbServices.Comunidad.partners
         *
         * @description
         *
         * Find a related item by id for partners.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for partners
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partner` object.)
         * </em>
         */
        R.partners.findById = function() {
          var TargetResource = $injector.get("Partner");
          var action = TargetResource["::findById::Comunidad::partners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.partners#updateById
         * @methodOf lbServices.Comunidad.partners
         *
         * @description
         *
         * Update a related item by id for partners.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for partners
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Partner` object.)
         * </em>
         */
        R.partners.updateById = function() {
          var TargetResource = $injector.get("Partner");
          var action = TargetResource["::updateById::Comunidad::partners"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Comunidad.eventos
     * @header lbServices.Comunidad.eventos
     * @object
     * @description
     *
     * The object `Comunidad.eventos` groups methods
     * manipulating `Evento` instances related to `Comunidad`.
     *
     * Call {@link lbServices.Comunidad#eventos Comunidad.eventos()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Comunidad#eventos
         * @methodOf lbServices.Comunidad
         *
         * @description
         *
         * Queries eventos of Comunidad.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        R.eventos = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::get::Comunidad::eventos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.eventos#count
         * @methodOf lbServices.Comunidad.eventos
         *
         * @description
         *
         * Counts eventos of Comunidad.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.eventos.count = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::count::Comunidad::eventos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.eventos#create
         * @methodOf lbServices.Comunidad.eventos
         *
         * @description
         *
         * Creates a new instance in eventos of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        R.eventos.create = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::create::Comunidad::eventos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.eventos#destroyAll
         * @methodOf lbServices.Comunidad.eventos
         *
         * @description
         *
         * Deletes all eventos of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.eventos.destroyAll = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::delete::Comunidad::eventos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.eventos#destroyById
         * @methodOf lbServices.Comunidad.eventos
         *
         * @description
         *
         * Delete a related item by id for eventos.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for eventos
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.eventos.destroyById = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::destroyById::Comunidad::eventos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.eventos#findById
         * @methodOf lbServices.Comunidad.eventos
         *
         * @description
         *
         * Find a related item by id for eventos.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for eventos
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        R.eventos.findById = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::findById::Comunidad::eventos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.eventos#updateById
         * @methodOf lbServices.Comunidad.eventos
         *
         * @description
         *
         * Update a related item by id for eventos.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for eventos
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        R.eventos.updateById = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::updateById::Comunidad::eventos"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Comunidad.seguidores
     * @header lbServices.Comunidad.seguidores
     * @object
     * @description
     *
     * The object `Comunidad.seguidores` groups methods
     * manipulating `Noder` instances related to `Comunidad`.
     *
     * Call {@link lbServices.Comunidad#seguidores Comunidad.seguidores()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Comunidad#seguidores
         * @methodOf lbServices.Comunidad
         *
         * @description
         *
         * Queries seguidores of Comunidad.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        R.seguidores = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::get::Comunidad::seguidores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.seguidores#count
         * @methodOf lbServices.Comunidad.seguidores
         *
         * @description
         *
         * Counts seguidores of Comunidad.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.seguidores.count = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::count::Comunidad::seguidores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.seguidores#create
         * @methodOf lbServices.Comunidad.seguidores
         *
         * @description
         *
         * Creates a new instance in seguidores of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        R.seguidores.create = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::create::Comunidad::seguidores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.seguidores#destroyAll
         * @methodOf lbServices.Comunidad.seguidores
         *
         * @description
         *
         * Deletes all seguidores of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.seguidores.destroyAll = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::delete::Comunidad::seguidores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.seguidores#destroyById
         * @methodOf lbServices.Comunidad.seguidores
         *
         * @description
         *
         * Delete a related item by id for seguidores.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for seguidores
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.seguidores.destroyById = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::destroyById::Comunidad::seguidores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.seguidores#exists
         * @methodOf lbServices.Comunidad.seguidores
         *
         * @description
         *
         * Check the existence of seguidores relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for seguidores
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        R.seguidores.exists = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::exists::Comunidad::seguidores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.seguidores#findById
         * @methodOf lbServices.Comunidad.seguidores
         *
         * @description
         *
         * Find a related item by id for seguidores.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for seguidores
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        R.seguidores.findById = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::findById::Comunidad::seguidores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.seguidores#link
         * @methodOf lbServices.Comunidad.seguidores
         *
         * @description
         *
         * Add a related item by id for seguidores.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for seguidores
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        R.seguidores.link = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::link::Comunidad::seguidores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.seguidores#unlink
         * @methodOf lbServices.Comunidad.seguidores
         *
         * @description
         *
         * Remove the seguidores relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for seguidores
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.seguidores.unlink = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::unlink::Comunidad::seguidores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comunidad.seguidores#updateById
         * @methodOf lbServices.Comunidad.seguidores
         *
         * @description
         *
         * Update a related item by id for seguidores.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for seguidores
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        R.seguidores.updateById = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::updateById::Comunidad::seguidores"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Evento
 * @header lbServices.Evento
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Evento` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Evento",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Eventos/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Evento.comunidad() instead.
        "prototype$__get__comunidad": {
          url: urlBase + "/Eventos/:id/comunidad",
          method: "GET"
        },

        // INTERNAL. Use Evento.suscritos.findById() instead.
        "prototype$__findById__suscritos": {
          url: urlBase + "/Eventos/:id/suscritos/:fk",
          method: "GET"
        },

        // INTERNAL. Use Evento.suscritos.destroyById() instead.
        "prototype$__destroyById__suscritos": {
          url: urlBase + "/Eventos/:id/suscritos/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Evento.suscritos.updateById() instead.
        "prototype$__updateById__suscritos": {
          url: urlBase + "/Eventos/:id/suscritos/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Evento.suscritos.link() instead.
        "prototype$__link__suscritos": {
          url: urlBase + "/Eventos/:id/suscritos/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Evento.suscritos.unlink() instead.
        "prototype$__unlink__suscritos": {
          url: urlBase + "/Eventos/:id/suscritos/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Evento.suscritos.exists() instead.
        "prototype$__exists__suscritos": {
          url: urlBase + "/Eventos/:id/suscritos/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Evento.suscritos() instead.
        "prototype$__get__suscritos": {
          isArray: true,
          url: urlBase + "/Eventos/:id/suscritos",
          method: "GET"
        },

        // INTERNAL. Use Evento.suscritos.create() instead.
        "prototype$__create__suscritos": {
          url: urlBase + "/Eventos/:id/suscritos",
          method: "POST"
        },

        // INTERNAL. Use Evento.suscritos.destroyAll() instead.
        "prototype$__delete__suscritos": {
          url: urlBase + "/Eventos/:id/suscritos",
          method: "DELETE"
        },

        // INTERNAL. Use Evento.suscritos.count() instead.
        "prototype$__count__suscritos": {
          url: urlBase + "/Eventos/:id/suscritos/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Evento#create
         * @methodOf lbServices.Evento
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Eventos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Evento#upsert
         * @methodOf lbServices.Evento
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Eventos",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Evento#exists
         * @methodOf lbServices.Evento
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Eventos/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Evento#findById
         * @methodOf lbServices.Evento
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Eventos/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Evento#find
         * @methodOf lbServices.Evento
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Eventos",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Evento#findOne
         * @methodOf lbServices.Evento
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Eventos/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Evento#updateAll
         * @methodOf lbServices.Evento
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Eventos/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Evento#deleteById
         * @methodOf lbServices.Evento
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Eventos/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Evento#count
         * @methodOf lbServices.Evento
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Eventos/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Evento#prototype$updateAttributes
         * @methodOf lbServices.Evento
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Eventos/:id",
          method: "PUT"
        },

        // INTERNAL. Use Noder.paricipante.findById() instead.
        "::findById::Noder::paricipante": {
          url: urlBase + "/Noders/:id/paricipante/:fk",
          method: "GET"
        },

        // INTERNAL. Use Noder.paricipante.destroyById() instead.
        "::destroyById::Noder::paricipante": {
          url: urlBase + "/Noders/:id/paricipante/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Noder.paricipante.updateById() instead.
        "::updateById::Noder::paricipante": {
          url: urlBase + "/Noders/:id/paricipante/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Noder.paricipante.link() instead.
        "::link::Noder::paricipante": {
          url: urlBase + "/Noders/:id/paricipante/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Noder.paricipante.unlink() instead.
        "::unlink::Noder::paricipante": {
          url: urlBase + "/Noders/:id/paricipante/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Noder.paricipante.exists() instead.
        "::exists::Noder::paricipante": {
          url: urlBase + "/Noders/:id/paricipante/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Noder.paricipante() instead.
        "::get::Noder::paricipante": {
          isArray: true,
          url: urlBase + "/Noders/:id/paricipante",
          method: "GET"
        },

        // INTERNAL. Use Noder.paricipante.create() instead.
        "::create::Noder::paricipante": {
          url: urlBase + "/Noders/:id/paricipante",
          method: "POST"
        },

        // INTERNAL. Use Noder.paricipante.destroyAll() instead.
        "::delete::Noder::paricipante": {
          url: urlBase + "/Noders/:id/paricipante",
          method: "DELETE"
        },

        // INTERNAL. Use Noder.paricipante.count() instead.
        "::count::Noder::paricipante": {
          url: urlBase + "/Noders/:id/paricipante/count",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.eventos.findById() instead.
        "::findById::Comunidad::eventos": {
          url: urlBase + "/Comunidades/:id/eventos/:fk",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.eventos.destroyById() instead.
        "::destroyById::Comunidad::eventos": {
          url: urlBase + "/Comunidades/:id/eventos/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Comunidad.eventos.updateById() instead.
        "::updateById::Comunidad::eventos": {
          url: urlBase + "/Comunidades/:id/eventos/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Comunidad.eventos() instead.
        "::get::Comunidad::eventos": {
          isArray: true,
          url: urlBase + "/Comunidades/:id/eventos",
          method: "GET"
        },

        // INTERNAL. Use Comunidad.eventos.create() instead.
        "::create::Comunidad::eventos": {
          url: urlBase + "/Comunidades/:id/eventos",
          method: "POST"
        },

        // INTERNAL. Use Comunidad.eventos.destroyAll() instead.
        "::delete::Comunidad::eventos": {
          url: urlBase + "/Comunidades/:id/eventos",
          method: "DELETE"
        },

        // INTERNAL. Use Comunidad.eventos.count() instead.
        "::count::Comunidad::eventos": {
          url: urlBase + "/Comunidades/:id/eventos/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Evento#updateOrCreate
         * @methodOf lbServices.Evento
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Evento#update
         * @methodOf lbServices.Evento
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Evento#destroyById
         * @methodOf lbServices.Evento
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Evento#removeById
         * @methodOf lbServices.Evento
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Evento#modelName
    * @propertyOf lbServices.Evento
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Evento`.
    */
    R.modelName = "Evento";


        /**
         * @ngdoc method
         * @name lbServices.Evento#comunidad
         * @methodOf lbServices.Evento
         *
         * @description
         *
         * Fetches belongsTo relation comunidad.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comunidad` object.)
         * </em>
         */
        R.comunidad = function() {
          var TargetResource = $injector.get("Comunidad");
          var action = TargetResource["::get::Evento::comunidad"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Evento.suscritos
     * @header lbServices.Evento.suscritos
     * @object
     * @description
     *
     * The object `Evento.suscritos` groups methods
     * manipulating `Noder` instances related to `Evento`.
     *
     * Call {@link lbServices.Evento#suscritos Evento.suscritos()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Evento#suscritos
         * @methodOf lbServices.Evento
         *
         * @description
         *
         * Queries suscritos of Evento.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        R.suscritos = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::get::Evento::suscritos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Evento.suscritos#count
         * @methodOf lbServices.Evento.suscritos
         *
         * @description
         *
         * Counts suscritos of Evento.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.suscritos.count = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::count::Evento::suscritos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Evento.suscritos#create
         * @methodOf lbServices.Evento.suscritos
         *
         * @description
         *
         * Creates a new instance in suscritos of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        R.suscritos.create = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::create::Evento::suscritos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Evento.suscritos#destroyAll
         * @methodOf lbServices.Evento.suscritos
         *
         * @description
         *
         * Deletes all suscritos of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.suscritos.destroyAll = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::delete::Evento::suscritos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Evento.suscritos#destroyById
         * @methodOf lbServices.Evento.suscritos
         *
         * @description
         *
         * Delete a related item by id for suscritos.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for suscritos
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.suscritos.destroyById = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::destroyById::Evento::suscritos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Evento.suscritos#exists
         * @methodOf lbServices.Evento.suscritos
         *
         * @description
         *
         * Check the existence of suscritos relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for suscritos
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        R.suscritos.exists = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::exists::Evento::suscritos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Evento.suscritos#findById
         * @methodOf lbServices.Evento.suscritos
         *
         * @description
         *
         * Find a related item by id for suscritos.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for suscritos
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        R.suscritos.findById = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::findById::Evento::suscritos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Evento.suscritos#link
         * @methodOf lbServices.Evento.suscritos
         *
         * @description
         *
         * Add a related item by id for suscritos.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for suscritos
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        R.suscritos.link = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::link::Evento::suscritos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Evento.suscritos#unlink
         * @methodOf lbServices.Evento.suscritos
         *
         * @description
         *
         * Remove the suscritos relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for suscritos
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.suscritos.unlink = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::unlink::Evento::suscritos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Evento.suscritos#updateById
         * @methodOf lbServices.Evento.suscritos
         *
         * @description
         *
         * Update a related item by id for suscritos.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for suscritos
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Noder` object.)
         * </em>
         */
        R.suscritos.updateById = function() {
          var TargetResource = $injector.get("Noder");
          var action = TargetResource["::updateById::Evento::suscritos"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
