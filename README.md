![banner](https://github.com/robert-debug/Idiot/blob/master/frontend/src/assets/Idiot.png)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
## Project Overview
***[Idiot](https://idiot-genius-app.herokuapp.com/)*** is a clone a Genius. It is an app that allows user to annotate lines of song lyrics and comment on tracks.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

The goal of this week long, full-stack project was to have 3 fully functional core MVP features finished, which include:  
- User Accounts- Users can signup for accounts and login/logout
- Annotate Lyrics- Users can add and edit annotations to lyrics of hosted songs.
- Comment on Tracks- Users can comment on songs.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

### Login/Signup

When a user navigates to Idiot he is presented with a login button a signup button, and a list of tracks. From here the user views tracks, annotations, and comments by clicking links, logins as a existing user or demo user, or creates a new account.

![Sign Up](https://github.com/robert-debug/Idiot/blob/master/frontend/src/assets/idiot-signup.png)
![Login](https://github.com/robert-debug/Idiot/blob/master/frontend/src/assets/idiot-login.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
### Home Page

Once a user has signuped or signed in, or navigates to the homepage via the Idiot logo or back button he sees the home page, which includes a list of tracks, which he can click on to view the track details page. There is also a menu button, which shows his user name and button to log him out.

![Home](https://github.com/robert-debug/Idiot/blob/master/frontend/src/assets/Idiot-main-page.png)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
### Track Page

Once a clicks on a track link they can can view the track lyrics and comments. They can see lyrics highlighted that have annotations, and click or select those to see the annotations. If they highlight a track without annotation, they can annotate it as well via an annotation. They also can edit their own annotations, edit their own comments, click a comment button to comment.

![Track](https://github.com/robert-debug/Idiot/blob/master/frontend/src/assets/Idiot-track.png)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
### CRUD

By clicking on the annotation or comment buttons or annotation or comment edit buttons the user is presented with a text area modal where they can submit or update tracks or comments.

![CRUD](https://github.com/robert-debug/Idiot/blob/master/frontend/src/assets/idiot-crud.png)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
## Feature List

### Features for the minimum viable product include:
* Hosting on Heroku
* New Account Creation, Login and Logout
* Tracks with lyrics
* CRUD Annotations of lyrics
* CRUD Comments on Tracks
### Future Features
* Likes
* Search by Track name, Artist, and lyrics
* Artist Pages
* Tags
* AWS image storage
* Annotations highlighting in lyrics

## DATABASE SCHEMA
  ## USERS
    ID PK INT
    USERNAME STRING UNIQUE
    EMAIL STRING UNIQUE
    HASHED-PASSWORD STRING-BINARY

  ## TRACKS
    ID PK INT
    TITLE STRING
    ARTIST STRING
    LYRICS STRING
  
  ##LINES
    ID PK INT
    ORDERNUM INT
    LINETEXT STRING
    trackId INT


  ## ANNOTATIONS
    ID PK INT
    BODY STRING
    userId FK >- USERS.ID
    lineId FK >- TRACKS.ID

  ## COMMENTS
    ID PK INT
    BODY STRING
    userId FK >- USERS.ID
    annotationsId FK >- ANNOTATIONS.ID

  ## BONUS

  ## LIKES
    ID PK INT
    userId FK >- USERS.ID
    annotationsId FK >- ANNOTATIONS.ID

  ## TAGS
    ID PK INT
    TAG STRING
    
  ## TAG-TRACKS
    ID PK INT
    tagId FK >- TAGS.ID
    trackId FK >- TRACKS.ID
