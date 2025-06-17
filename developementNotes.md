# My Development Notes

## Project Overview
This file contains my development notes for the ProManageApp project. It includes the steps I followed, decisions made, and implementation details.

---

## Development Steps

### 1. Project Plan.
   Planned a Concept like Product management app (EX : Zepto can create.manage their prodcuts on website).


### 2. Folder Structure and Design
- Created the following folders:
  - `pages/`: Contains page-specific component 
  - `shared/`: Contains reusable components 
  - `models/`: Contains TypeScript models 

---

### 3. Working on Landaing Page
     ## Person form 
  - A page with Registration / Login.
      -- Implement Logins Functioality with Moc Data. ?
      -- Redirect to Dashboard if Sucesss Logins.
      -- Store data on Sessions ? 
      -- Make Logout works.
      -- Without Login cant come to Dashboard Page or cant do any other operations.

  - Need to use same form for both Reg and Login. [##Done]
  - Add Dynmic form with custom Validation methods.[##Done]
  - Message Show on Notification Component[##Done]

### 4. Notification Component.
   - Any Notifiction like error messages, sucess messages will show at the top of the page.
   - Can pass the data to notification menthos - so it will popup/toster using BS design,
## intersepetors.

## Backend mile stones and Web API list / Types:
     -- Should be entity frame work .net
     -- code first. (Models, controlers, ...)
     -- Multi tenent approch. (new schema for each user)
     -- Test Cases foe each operations.
   1) Ueser Register API :
       JWT (FE and Backend)
       How it looks ?
       Responce from API.[ {}, ok : 200ok]
   2) Login API: -- How Responce looks : [ {ok 200: username, busines name:}]
   3) get all products: 
   4) Add Prodcus API -- How Req and Responce.
   5) Update Product API -- How Req and Responce.
   6) Delete Prodct API -- How Req and Responce.

