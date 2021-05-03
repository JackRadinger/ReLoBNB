# ReLoBNB
ReLoBNB is an app that allows users to find housing dedicated to relocation at a low cost.
To explore ReLoBNB click [here](https://relobnb.herokuapp.com/).
### Home Page
![image of home](https://gyazo.com/644ba922be50e0911d20d66cfcea2caf)
### Splash Page
![image of splash](https://gyazo.com/8543ea259ad765dd35e0c097620a70cc)
### Login Page
![image of login](https://gyazo.com/ba3bff1370e19a43acb2b43617e33283)
### Signup Page
![image of signup](https://gyazo.com/84a9352dec42c36836b96286a44ca837)
### Spot Page
![image of spot](https://gyazo.com/3855cc5e1832f943ccbd026c0e3cf4ce)
![image of spot](https://gyazo.com/94a5cb4bc8fd80897556dc1d94d11800)
![image of spot](https://gyazo.com/c42e6f880d8a519358eecf7315026ff9)
### Host Page
![image of host](https://gyazo.com/9caf12f67e25b2741b0af6b7b66ff1d2)

# Structure
### Back End
ReLoBNB was built using Express for the server with a postgreSQL database. The back end structure utilizes RESTful convention and handles user requests through our API. ReLoBNB is session based and uses BCrypt to safely store user passwords and verify login credentials.
### Front End
The front end was built using React and Redux to render the pages with JavaScript.

### List of Technologies
* Express
* BCrypt
* PostgreSQL
* Heroku
* React
* Redux
* Google Maps
* Open Cage Data

### Core Features
* Add Spot
* Add photos for a spot
* Add reviews of spots

##### User Authorization
User authentication is handled in JavaScript using BCrypt to hash passwords for storage. To authenticate users, the submitted password is hashed and then compared to the hashed password stored in the database.
````
const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
];


router.post(
    '',
    validateSignup,
    asyncHandler(async (req, res) => {
      const { firstName, lastName, email, password, username } = req.body;
      console.log(firstName, lastName)
      const user = await User.signup({ firstName, lastName, email, username, password });

      await setTokenCookie(res, user);

      return res.json({
        user,
      });
    }),
);
````
In order for the user to log in, I first check to see if the inputs are valid. Then, I find the user in the database based on their email. If I are able to find a user, then I hash their input password and compare it to the hashed password stored in the server. Finally, if the hashed input password matches the stored hashed password, the user is logged in with their session persisted and redirected to home page.
##### Session
Sessions are stored server side using Sequelize.js. For actions that require authorization, the server verifies that a cookie with a matching user id as the user exists in the storage. Upon verification that a session does exist for that user, the user is then all allowed to perform CRUD operations. If no such session exists in the storage, then user is redirected to the login page.

````
// This route is used to login a user. The demo user is handled in the front end by assigning values associated with the demo user.

const validateLogin = [
    check('credential')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Please provide a valid email or username.'),
    check('password')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a password.'),
    handleValidationErrors,
  ];

router.post(
    '/',
    validateLogin,
    asyncHandler(async (req, res, next) => {
      const { credential, password } = req.body;

      const user = await User.login({ credential, password });

      if (!user) {
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors = ['The provided credentials were invalid.'];
        return next(err);
      }

      await setTokenCookie(res, user);

      return res.json({
        user,
      });
    }),
);

````

#### To Do
Allow users to:
1. update profile information such as their email
2. update ratings and reviews
3. update spots
4. reply to other comments

