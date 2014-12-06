
// -----------------------------
// Wait for DOM Load
// -----------------------------

jQuery(function($) {

  // -----------------------------
  // Global Variables
  // -----------------------------

  var portfolio = [
    {name: 'Jobcognito', image: '../assets/images/jobcognito.png', link: 'http://jessesinfield.com/job/', desc: 'Jobcognito is a social media platform that leverages its user&amp;s personal LinkedIn profile to allow them to create their own personal and private circles in which they can share a private job status, hidden to the prying eyes of the world.'},
    {name: 'Save The Game', image: '../assets/images/savethegame.png', link: 'http://jessesinfield.com/save/', desc: 'Save The Game is an experiment I built utilizing the Best Buy API. It takes the ten newest games on sale at best buy (for each console) and decides how good of a deal it is. A great tool for Black Friday and Boxing Day!'},
    {name: 'That One Gaming Channel', image: '../assets/images/thatonegamechannel.png', link: 'http://jessesinfield.com/chan/', desc:'That One Game Channel is a youtube Let&amp;s Play channel run by me and my brother Jake. We needed a website, so I took an afternoon and hashed this site together with some sleek HTML and CSS as well as some great social media APIs.'},
    {name: 'Not Far From The Tree', image: '../assets/images/notfarfromthetree.png', link: 'http://www.jessesinfield.com/notFarFromTheTree/', desc:'Not Far from the Tree is a local Toronto charity focused on picking apples and getting those apples to the right people. Along with the help of brilliant designer Will Du, we built this site out as re-design of their original website.'},
    {name: 'Em Kwissa, Poet', image:'../assets/images/emkwissa.png', link:'http://www.thekwissa.com/', desc:'Em Kwissa&amp;s website was the first ever freelance website I built, fresh out of my first year at Humber College. This site is built on a wordpress backend and is by far my classiest looking website!'}
  ]

  // -----------------------------
  // Router
  // -----------------------------

  var Router = Backbone.Router.extend({

    // Our Routes
    routes: {
      '' : 'home',
      'about': 'about',
      'contact': 'contact',
      'portfolio': 'portfolio'
    },

    // Home Route
    home: function() {
      console.log('Navigating to Home Page');
      App.views['home'].render();
    },

    // About Route
    about: function() {
      console.log('Navigating to About Page');
      App.views['about'].render();
    },

    // Contact Route
    contact: function() {
      console.log('Navigating to Contact Page');
      App.views['contact'].render();
    },

    // Portfolio Route
    portfolio: function() {
      console.log('Navigating to Portfolio Page');
      App.views['portfolio'].render();
    }

  });

  // -----------------------------
  // Application
  // -----------------------------

  var Application = function() {

    // Add router
    this.router = new Router();

    // Setup views
    this.views = {
      home: new HomeView(),
      about: new AboutView(),
      contact: new ContactView(),
      portfolio: new PortfolioView()
    };

  };

  // -----------------------------
  // Home View
  // -----------------------------

  var HomeView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#home',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        portfolioItems: [
          {name: portfolio[0].name, image: portfolio[0].image, link: portfolio[0].link},
          {name: portfolio[1].name, image: portfolio[1].image, link: portfolio[1].link},
          {name: portfolio[2].name, image: portfolio[2].image, link: portfolio[2].link},
          {name: portfolio[3].name, image: portfolio[3].image, link: portfolio[3].link},
        ]
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // About View
  // -----------------------------

  var AboutView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#about',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h1>About Page</h1>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Contact View
  // -----------------------------

  var ContactView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#contact',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        content: '<h1>Contact Page</h1>'
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Portfolio View
  // -----------------------------

  var PortfolioView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#portfolio',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        portfolioItems: [
          {name: portfolio[0].name, image: portfolio[0].image, link: portfolio[0].link, desc: portfolio[0].desc},
          {name: portfolio[1].name, image: portfolio[1].image, link: portfolio[1].link, desc: portfolio[1].desc},
          {name: portfolio[2].name, image: portfolio[2].image, link: portfolio[2].link, desc: portfolio[2].desc},
          {name: portfolio[3].name, image: portfolio[3].image, link: portfolio[3].link, desc: portfolio[3].desc},
          {name: portfolio[4].name, image: portfolio[4].image, link: portfolio[4].link, desc: portfolio[4].desc}
        ]
      });

    },

    // Our Render Function
    render: function() {

      // Get data and render our template
      var data = this.model.toJSON();
      var html = this.template(data);

      // Set update the containers HTML
      $(this.el).html(html);
    }

  });

  // -----------------------------
  // Start Application
  // -----------------------------

  var App = new Application();

  // Start Backbone History
  Backbone.history.start({ pushState: true });

  // -----------------------------
  // Navigation Links
  // -----------------------------

  $(document).delegate('a', 'click', function(e) {
    
    var url = $(this).attr('href') || '#';
    var isLocal = url.match(/^#/)

    if(isLocal) { 

      e.preventDefault(); 
      App.router.navigate($(this).attr('href'), { trigger: true }); 
      
    }

  });

  // -----------------------------
  // App Functionality 
  // -----------------------------

  $('#me').hover(function(){
    $('#me').attr('src', '../assets/images/batme.jpg')
  }, function() {
    $('#me').attr('src', '../assets/images/me.jpg')
  })


});