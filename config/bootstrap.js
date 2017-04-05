/**
* Bootstrap
* (sails.config.bootstrap)
*
* An asynchronous bootstrap function that runs before your Sails app gets lifted.
* This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
*
* For more information on bootstrapping your app, check out:
* http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
*/

module.exports.bootstrap = function(cb) {

  if (process.env.NODE_ENV === 'production') {
    return cb();
  }

  Festival.create([
      {
        name: 'Awesome Fest 2017',
        startDate: new Date('August 14, 2017'),
        endDate: new Date('August 17, 2017'),
        headliners: [
          'Fish Stix',
          'Jimmy Cracks Corn',
          'Grapes of Rad'
        ],
        location: 'Jacksons Hole, WY',
      },
      {
        name: 'SuperCoolMusicJamzz 17',
        startDate: new Date('June 1, 2017'),
        endDate: new Date('June 7, 2017'),
        headliners: [
          'Granny\'s Basement',
          'CandyGram',
          'The Nice Boys',
          'Hello Mother'
        ],
        location: 'Denver, CO',
      },
      {
        name: 'Every One Of The Next Day\'s Social Gatherings',
        startDate: new Date('May 24, 2017'),
        endDate: new Date('May 26, 2017'),
        headliners: [
          'The Satin Subway',
          'Metal Blimp'
        ],
        location: 'Las Vegas, NV',
      },
      {
        name: 'Music Is Pretty Neat Fest',
        startDate: new Date('September 3, 2017'),
        endDate: new Date('September 7, 2017'),
        headliners: [
          'Mrs. Johnson\'s Clavical',
          'The Dog House Boyzzzzz',
          'Spunky Jones and The Excited Taxidermists'
        ],
        location: 'San Francisco, CA',
      },
      {
        name: 'Tunez N Stuff',
        startDate: new Date('July 6, 2017'),
        endDate: new Date('July 9, 2017'),
        headliners: [
          'Funky Dave',
          'The Rubber Ducks',
          'BrUUm Closet',
          'Who Stole The Peanut Butter?'
        ],
        location: 'New York, NY',
      },

    ]).exec(function (err){
      if (err) { return cb(err); }
      return cb();
    })
  }
