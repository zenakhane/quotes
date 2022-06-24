const jwt = require('jsonwebtoken');

module.exports = function (app, db) {

    app.get('/api/test', async function (req, res) {
        res.json({
            message: 'Welcome to the API'
        })
    });

    app.post('/api/posts', verifyToken, async function (req, res) {
        jwt.verify(req.token, 'secretkey', (err, authData) => {
            if (err) {
                res.sendStatus(403)
            } else {
                res.json({
                    message: 'Post created...',
                    authData
                })
            }
        })

    });

    async function getUser(username) {
        return { username: 'John'};
    }


    app.post('/api/signUp', async function (req, res) {
        try {
            const {username, password} = req.body
            const user = await getUser(username);
            console.log({user}, req.body)

            if(!user) { 
                // no username in db
                // hash password using bcrypt
                // insert into db (with hashed password)
                res.json({success: 'Done inserting...'})
            } else {
                throw Error('User already exist')
            }
        } catch (error) {
            res.json(error.message)
        }
    })

    app.post('/api/login', async function (req, res) {
        try {
            const { user, password } = req.body

            // get user from db where username = ?
            // if User - verify password, create new token, send json({ user, token })


            const users = await db.manyOrNone(`select * from love_user `)
            console.log(user)
            res.json({
                users

            })
        } catch (error) {
            console.log(error);
            res.json({ error })
        }
    });

    function verifyToken(req, res, next) {
        const bearerHeader = req.headers['authorization'];
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ')
            const bearerToken = bearer[1];
            req.token = bearerToken;
            next();
        } else {
            res.sendStatus(403)
        }
    }
}