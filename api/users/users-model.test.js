const Users = require('./users-model');
const db = require('../../data/dbConfig');

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
  
beforeEach(async () => {
    await db.seed.run()
})


describe("Users model", () => {
    describe('getAll', () => {
        test('returns all users in the table', async() => {
            const users = await Users.getAll();
            expect(users).toHaveLength(1)
        })
    })

    describe('add item and check if it was inserted into the db',() => {
        test('returns item when it is added into the db', async() => {
            await Users.insert({username: 'baeto'})
            const users = await db('users')
            expect(users).toHaveLength(2)
        })
    })

    describe('remove item from the database and check if it was removed', () => {
        test('removes the item from the db', async() => {
            await Users.remove(2);
            const users = await db('users')
            expect(users).toHaveLength(1)
        })
    })
})

test('the environment', () => {
   
})