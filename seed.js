var db = require('./db.js');
var User = require('./models/user_model.js');
var Garment = require('./models/garment_model.js');
var Outfit = require('./models/outfit_model.js');


var seedUser;
var seedGarment;
User.remove({})
  .then(function(){
    return Outfit.remove();
  })
  .then(function(){
    return Garment.remove();
  })
  .then(function(){
    return Garment.create([
        {

          name:'Summer Plaid button-down',
          type:'top',
          color: 'plaid',
          size: 'medium',
          imageUrl: 'https://dl.dropboxusercontent.com/s/medmimoxvbr971n/pattern-longsleeve.png',
          createdAt: new Date(),
          expiration: null,
          approved: true

        },
        {

          name:'Basic White T-shirt',
          type:'top',
          color: 'white',
          size: 'medium',
          imageUrl: 'https://dl.dropboxusercontent.com/s/o7ahtelfx4tyveu/white-tshirt.png',
          createdAt: new Date(),
          expiration: null,
          approved: true

        },
        {

          name:'Pink Polo',
          type:'top',
          color: 'pink',
          size: 'medium',
          imageUrl: 'https://dl.dropboxusercontent.com/s/84gsmuo65ke685a/pink-polo.png',
          createdAt: new Date(),
          expiration: null,
          approved: true

        },
        {

          name:'Steel Grey Button-down',
          type:'top',
          color: 'steel grey',
          size: 'medium',
          imageUrl: 'https://dl.dropboxusercontent.com/s/wpdu1x1p3asq912/grey-longsleeve.png',
          createdAt: new Date(),
          expiration: null,
          approved: true

        },
        {

          name:'Basic Black T-shirt',
          type:'top',
          color: 'black',
          size: 'medium',
          imageUrl: 'https://dl.dropboxusercontent.com/s/fisp70uz51ry649/black-tshirt.png',
          createdAt: new Date(),
          expiration: null,
          approved: true

        },
        {

          name:'Leather Jacket',
          type:'jacket',
          color: 'black leather',
          size: 'medium',
          imageUrl: 'https://dl.dropboxusercontent.com/s/ibhcvae4mty53m8/leather-jacket.png',
          createdAt: new Date(),
          expiration: null,
          approved: true

        },
        {

          name:'Kelty Vest',
          type:'jacket',
          color: 'teal nylon',
          size: 'medium',
          imageUrl: 'https://dl.dropboxusercontent.com/s/9aoih4joi507a8m/vest.png',
          createdAt: new Date(),
          expiration: null,
          approved: true

        },
        {

          name:'Green Jeans',
          type:'bottom',
          color: 'army green',
          size: '34 32',
          imageUrl: 'https://dl.dropboxusercontent.com/s/4xp7652xfya6xe5/green-jeans.png',
          createdAt: new Date(),
          expiration: null,
          approved: true

        },
        {

          name:'Brown Denim Shorts',
          type:'bottom',
          color: 'brown',
          size: '34',
          imageUrl: 'https://dl.dropboxusercontent.com/s/am9qsch814rppcs/brown-shorts.png',
          createdAt: new Date(),
          expiration: null,
          approved: true

        },
        {

          name:'Basic Blue Jeans',
          type:'bottom',
          color: 'blue denim',
          size: '34 32',
          imageUrl: 'https://dl.dropboxusercontent.com/s/71vbjl0hicg0ixg/blue-jeans.png',
          createdAt: new Date(),
          expiration: null,
          approved: true

        },
        {

          name:'Orange Nikes',
          type:'shoes',
          color: 'orange',
          size: '11',
          imageUrl: 'https://dl.dropboxusercontent.com/s/m0ss5m8j31l41ps/orange-nikes.png',
          createdAt: new Date(),
          expiration: null,
          approved: true

        },
        {

          name:'Camper Loafers',
          type:'shoes',
          color: 'white leather',
          size: '45',
          imageUrl: 'https://dl.dropboxusercontent.com/s/1e7estjz0jsc8vg/camper-shoes.png',
          createdAt: new Date(),
          expiration: null,
          approved: true

        }
      ]);
    })
    .then(function(garments){
      var idList = [];
      garments.forEach(function(garment) {
        idList.push(garment._id);
      });
      return User.create([
        {firstName:'Adam', lastName: 'Wright', avatarUrl: 'http://i.imgur.com/TWgGIN3.png', closet: idList },
      ]);
    })
    .catch(function(err){
      console.log(err);
    })
    .then(function(user){
      console.log(user);
      process.exit();
    });
