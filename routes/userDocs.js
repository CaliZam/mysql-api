/**
 * @swagger
 * tags:
 *   name: User
 *   description: user from database
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         iduser:
 *           type: string
 *           description: unique ID
 *         name:
 *           type: string
 *           description: name of the user
 *         email:
 *           type: string
 *           description: email
 *       example:
 *         iduser: 1
 *         name: sergio
 *         email: luis@mail.com
 */


/**
 * @swagger
 * /user/getById/{id}:
 *   get:
 *      tags: [User]
 *      summary: Get a user
 *      responses:
 *       200:
 *         description: Return a user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       400:
 *         description: Return a user
 *       404:
 *         description: Not found
 *      parameters:
 *       - name: id
 *         in: path
 *         description: ID of user to return
 *         type: string
 *         required: true
 * /user/all:
 *   get:
 *      tags: [User]
 *      summary: Get all users
 *      responses:
 *       200:
 *          description: Return all user
 *          content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       400:
 *         description: bad request
 *       404:
 *         description: Not found
 *
 */

/**
 * @swagger
 * /user/create:
 *   post:
 *      tags: [User]
 *      summary: GreateUser
 *      description: create a user description.
 *      operationId: createUser.
 *      requestBody:
 *          description: Requet body description
 *          required: true
 *          content:
 *              application/json:
 *                  require : true
 *                  schema:
 *                      $ref: '#/definitions/User'
 *      consumes:
 *          - application/json
 *
 *      responses:
 *       '200':
 *         description: User created
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Not found
 */
/**
 * @swagger
 * /user/update/{id}:
 *   put:
 *      tags: [User]
 *      summary: Update a user
 *      description: create a user description.
 *      operationId: createUser.
 *      requestBody:
 *          description: Requet body description
 *          required: true
 *          content:
 *              application/json:
 *                  require : true
 *                  schema:
 *                      $ref: '#/definitions/User'
 *      parameters:
 *       - name: id
 *         in: path
 *         description: ID of user to update
 *         type: string
 *         required: true
 *      consumes:
 *          - application/json
 *
 *      responses:
 *       '200':
 *         description: User created
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Not found
 */
/**
 * @swagger
 * /user/delete/{id}:
 *   delete:
 *      tags: [User]
 *      summary: delete a user
 *      description: Delete a user from database.
 *      operationId: createUser.
 *      parameters:
 *       - name: id
 *         in: path
 *         description: ID of user to update
 *         type: string
 *         required: true
 *      responses:
 *       '200':
 *         description: User delete sucessefuly
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Not found - this user dont exist
 */
/**
 * @swagger
 * /user/deleteAll:
 *   delete:
 *      tags: [User]
 *      summary: Delete all users
 *      description: Delete all users from data base.
 *      operationId: deleteAll.
 *      responses:
 *       '200':
 *          description: all users deleted
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Not found
 */



/**
 * @swagger
 * definitions:
 *      User:
 *          type: object
 *          required:
 *              - name
 *              - email
 *          properties:
 *              name:
 *                  type: string
 *                  default : username
 *              email:
 *                  type: string
 *                  default : username@mail.com
 *
 */
