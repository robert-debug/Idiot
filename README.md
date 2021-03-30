# Orbis-Tertius
Name pending...
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