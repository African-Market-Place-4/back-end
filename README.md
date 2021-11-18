# To Start
`npm install`

`npm run server`

`npm run migrate`

`npm run seed`

 
# Scripts
`start: Runs the app in production.`

`server: Runs the app in development.`

`migrate: Migrates the local development database to the latest.`

`rollback: Rolls back migrations in the local development database.`

`seed: Truncates all tables in the local development database, feel free to add more seed files.`

`test: Runs tests.`

`deploy: Deploys the main branch to Heroku.`

`migrateh: Migrates the Heroku database to the latest.`

`rollbackh: Rolls back migrations in the Heroku database.`

`databaseh: Interact with the Heroku database from the command line using psql.`

`seedh: Runs all seeds in the Heroku database.`



# African Marketplace API Endpoints
**API URL:** https://african-marketplace-4.herokuapp.com/
1. **[POST]** /auth/register:
      - Input:
        {
		"username": "lambda",
		"password": "1234"
	}
      - Output:
        {
                "user_id": 5,
                "username": "lambda",
                "password": "$2a$08$uAejp42dQxVsLdQ/A03cs.Xud4p8TBVLCPF8TviphVgVGjjfrb.aC"
        }

2. **[POST]** /auth/login:
      - Input:
        {
                "username": "lambda",
                "password": "1234"
        }
      - Output:
        [
                {
                        "message": "Welcome, lambda!",
                        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo3LCJ1c2VybmFtZSI6ImxhbWJkYSIsImlhdCI6MTYzNzE2NzkwNiwiZXhwIjoxNjM3MjU0MzA2fQ.Vgi-_vb-uLf-AK-DnCSJSb_rGnEBAwFzWRCwVaRtGy0"
                }
        ]

3. **[GET]** /users: responds with all users in the database
      - Output:
      [
                {
        		"user_id": 7,
        		"username": "lambda",
                        "password": "$2a$08$uAejp42dQxVsLdQ/A03cs.Xud4p8TBVLCPF8TviphVgVGjjfrb.aC",
        		"created_at": "2021-11-17T16:51:38.956Z",
        		"updated_at": "2021-11-17T16:51:38.956Z"
               }
        ]

4. **[GET]** /items:  responds with all items in the database
      - Output: 
        [
                {
                        "product_id": 1,
                        "name": "Beans Rosecoco",
                        "price_usd": 6.5,
                        "description": "2 lbs per bag",
                        "seller": 1
                },
 		{
                        "product_id": 2,
                        "name": "Milk",
                        "price_usd": 4.99,
                        "description": "500 ml per bottle",
                        "seller": 2
                }
        ]

5. **[POST]** /items:
      - Input:
        {
                "name": "Avocado",
   		"price_usd": 3.5,
   		"description": "per each",
   		"seller": "2"
        }
      - Output: 
        [
                {
                        "name": "Avocado",
                        "price_usd": 3.5,
                        "description": "per each",
                        "seller": 2
                }
        ]

6. **[GET]** /items/id:
      - Output: 
        {
                "product_id": 1,
                "name": "Beans Rosecoco",
                "price_usd": 6.5,
                "description": "2 lbs per bag",
                "seller": 1
        }
