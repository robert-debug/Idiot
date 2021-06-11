![banner](https://github.com/robert-debug/Idiot/blob/master/frontend/src/assets/Idiot.png)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
# Idiot
Idiot is a clone a Genius. It is an app that allows user to annotate lines of song lyrics and comment on tracks.

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
* AWS storage
* Annotations highlighting in lyrics

# DATABASE SCHEMA
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
