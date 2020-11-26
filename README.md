# Vuoto - Project 3 App
<br>

## Description
-   This app will let users create their own canvas and organize it as they want.
-   Add headers, lists, pictures, text etc in a customized canvas ready to be used in your daily projects.
-   This easy-to-use and straightforward app will be your favourite once you try it!

## MVP
The MVP will cover the following:

-   Homepage
-   Working Canvas app
-   Profile
-   Signup
-   Login

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start playing into competition
-  **Login:** As a user I can login to the platform so that I can play competitions
-  **Logout:** As a user I can logout from the platform so no one else can use it

## Backlog
-  Add online features to support multiple users.
-  Multiple language support.
-  Drag and drop the user options.

<br>


# Client / Frontend

## React Router Routes (React App)
| Path                      | Component            | Permissions                 | Behavior                                                     |
| ------------------------- | -------------------- | --------------------------- | ------------------------------------------------------------ |
| `/`                       | SplashPage           | public `<Route>`            | Home page                                                    |
| `/gallery`                | CanvasGallery        | public `<Route>`  | Gallery of the canvas uploaded by the community              |
| `/signup`                 | SignupPage           | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup|
| `/login`                  | LoginPage            | anon only `<AnonRoute>`     | Login form, link to signup, navigate to homepage after login |
| `/canvas/:id`             | UserCanvas           | user only `<PrivateRoute>`  | Canvas of the user.                                          |
| `/profile`                | UserProfile          | user only `<PrivateRoute>`  | User profile                                                 |



## Components

- LoginPage

- SignupPage

- SplashPage

- UserCanvas

- UserProfile

- CanvasGallery

- Navbar



# Server / Backend


## Models

User model

```javascript
{
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  canvas: [ type: Schema.Types.ObjectId, ref: 'UserCanvas'],
  favorites: [ type: Schema.Types.ObjectId, ref: 'UserCanvas']
}
```

UserCanvas model

```javascript
{
  author: {type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true},
  gridNumber: [Number],
  canvasData: [[String]]
}
```

<br>


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile    `           | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`                | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| GET         | `/main        `                |                              |      204          | 400          | Show your canvas   |
| GET         | `/canvas/:id`            | {id}                         |        204        |        400      | Show specific canvas              |
| POST        | `/canvas/:id/add` | {Canvas}                           | 201            | 400          | Create and save a new canvas                     |
| PUT         | `/canvas/:id/edit`       |    {Canvas}     | 200            | 202          | edit canvas                |
| DELETE      | `/canvas/delete/:id`     | {Canvas}                         | 201            | 400          | delete canvas                                     |
| GET         | `/gallery`                    |      [canvas]                     |   202             | 400          | show canvas uploaded by the community      |                                       |


<br>


## Wireframes
- https://i.imgur.com/vnt62ki.png

## Links
- **Trello**
- https://trello.com/b/ZGO8q74U/proyecto-3

- **Git**

- [Gihub Repo URL](https://github.com/AndreuSCK/project-3/)
