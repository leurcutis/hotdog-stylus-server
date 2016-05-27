#Hotdog Stylus
![](https://dl.dropboxusercontent.com/s/tnecy9weds0e2wq/App%20Screen%20Shot.png)

[Hotdog Stylus on Trello](https://trello.com/b/LJv4WXRR/hotdog-stylus)

[Hotdog Stylus on GitHub](https://github.com/leurcutis/hotdog-stylus-server)

[Hotdog Stylus on Heroku](https://hotdog-stylus.herokuapp.com/)

-

*“Its, uh, style, man.  Style is everything. Style is not to be, uh, confused with class. A Mercedes Benz is class, because it represents money. However, chilly dogs have absolutely no class, but a great deal of style. And punk rock, new wave, what ever you have, uh, reggae, rasta fari hair cuts, what have you, are all different kinds of styles. None of them have any class. I got _class_.”*
**- David Lee Roth, 1983**

-
###About

**Hotdog Stylus** is a web app that helps users build virtual outfits out of digital representations of their real clothing. The digital clothing is stored in a virtual closet. Users simply click on an item and it will automatically populate a mannequin and build an outfit.

This application will be responsive, so that it can be used on both desktop and on a mobile device.

###General Approach
I've been thinking about this project for a few years, and actually had a very specific UX approach that I had created which incoporated a lot of features. However, for the MVP I decided to focus only on the interaction of building an outfit with clothes that are stored in a digital closet - in only one view.

###Future Goals
My goals for expansion include uploading, editing, and deleting new garments, and also the ability to do the same with outfits. Additionally, I want to be able to show the newly created and saved outfits on the page. So, as a result, I'll have to rethink the current interaction to include those functionalities.

I'd also like to start thinking about how stylists and fashion designers might use this app - which may mean having several closets or "collections" to accomdate those user's needs.

###Technologies

**Hotdog Stylus** uses the following technologies:

 - node.js
 - angular.js
 - express
 - mongoDB
 - mongoose
 - morgan
 - cookie-parser
 - bootstrap
 - body-parser

###Installation Instructions
 
If you wish to run **Hotdog Stylus** on your local environment, simply fork the repo and clone it down to your computer. 

Navigate to the local repo where you've cloned the code and run a 'nodemon' server (after starting 'mongod').

In a separate terminal window from the same directory first install the necessary packages by running 'npm install', then run 'node seed.js' to seed the database with a user and the garments.

Open 'http://localhost:3000' on your browser of choice and you are ready to go.

###Difficulties
Getting the outfit to build correctly was very difficult, and the solution was actually a little easier than I thought. I particularly enjoyed using 'z-index' in CSS to enforce a stacking order for the garments on the mannequinn so that it looked close to what it might look like in real life.

Additionally, having to think through the approach of how to show off the images (and how they worked together as slides) was very demanding, as well as all the image manipulation that had to be done for this project to work correctly. 

Lastly, I took great care to think about how my models interacted with each other because without that correct approach this app never would have worked well, nor would it be scaleable.