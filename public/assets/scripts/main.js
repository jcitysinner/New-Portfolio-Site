
// -----------------------------
// Wait for DOM Load
// -----------------------------

jQuery(function($) {

  // -----------------------------
  // Global Variables
  // -----------------------------

  var portfolio = [
    {name: 'Jobcognito', image: '../assets/images/jobcognito.png', link: 'http://jessesinfield.com/job/', desc: 'Jobcognito is a social media platform that leverages its user\'s personal LinkedIn profile to allow them to create their own personal and private circles in which they can share a private job status, hidden to the prying eyes of the world.'},
    {name: 'Save The Game', image: '../assets/images/savethegame.png', link: 'http://jessesinfield.com/save/', desc: 'Save The Game is an experiment I built utilizing the Best Buy API. It takes the ten newest games on sale at best buy (for each console) and decides how good of a deal it is. A great tool for Black Friday and Boxing Day!'},
    {name: 'That One Gaming Channel', image: '../assets/images/thatonegamechannel.png', link: 'http://jessesinfield.com/chan/', desc:'That One Game Channel is a youtube Let\'s Play channel run by me and my brother Jake. We needed a website, so I took an afternoon and hashed this site together with some sleek HTML and CSS as well as some great social media APIs.'},
    {name: 'Not Far From The Tree', image: '../assets/images/notfarfromthetree.png', link: 'http://www.jessesinfield.com/notFarFromTheTree/', desc:'Not Far from the Tree is a local Toronto charity focused on picking apples and getting those apples to the right people. Along with the help of brilliant designer Will Du, we built this site out as a re-design of their original website.'},
    {name: 'Em Kwissa, Poet', image:'../assets/images/emkwissa.png', link:'http://www.thekwissa.com/', desc:'Em Kwissa\'s website was the first ever freelance website I built, fresh out of my first year at Humber College. This site is built on a wordpress backend and is by far my classiest looking website!'}
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
      'portfolio': 'portfolio',
      'experience': 'experience'
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
    },

    // Experience Route
    experience: function() {
      console.log('Navigating to Experience Page');
      App.views['experience'].render();
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
      portfolio: new PortfolioView(),
      experience: new ExperienceView()
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

  // -----------------------------
  // Experience View
  // -----------------------------

  var ExperienceView = Backbone.View.extend({

    // Our Container Element
    el: $('.main'),

    // Our template ID
    template: '#experience',

    // Initialize View
    initialize: function() {

      // Setup our template and start our model
      this.template = Handlebars.compile($(this.template).html());
      this.model = new Backbone.Model({});

      // Some page data
      this.model.set({
        work: [
          {name: 'dominKnow Inc', position: 'QA Tester', date:'Summers of 2013 & 2014', website:'http://www.dominknow.com/', desc:'I worked at dominKnow as a QA Tester, replicating bugs sent in by users and creating easy-to-read guides for the developers on how to replicate these bugs. I also worked with dominKnow\'s Claro system, creating online course content for their clients.'},
          {name: 'Tomahawk Technologies', position: 'Junior Developer', website:'http://www.tomahawk.ca/', date:'Summers of 2011 & 2012', desc:'I worked at Tomahawk as a Junior Developer, I worked on SEO research for clients and helped populate and edit content on their websites which were built with Tomahawk\'s CMS system.'},
          {name: 'Em Kwissa, Poet', position: 'Freelance Web Developer', date: 'Summer of 2012', website: 'http://www.thekwissa.com/', desc:'I built Em Kwissa\'s personal wesbite in the summer of 2012. This was my first experience with freelancing, I built the website using basic HTML and CSS. Later I upgraded the website to a wordpress backend so that Em could update it at any time.'}
        ],
        education: [
          {name:'Web Design and Interactive Media', school: 'Humber College', date:'Fall of 2012 to Spring of 2015'. website: 'http://mediastudies.humber.ca/programs/diplomas/advanced/web-design-interactive-media.html', desc:'The Web Design course at Humber College has allowed me to tap into my love for the web. In this course I\'ve learned everything from basic HTML and CSS to JavaScript frameworks and native iOS programming. The course has also helped me grow to appreciate the web design process and has helped me get stronger with design programs like Photoshop and Illustrator.'},
          {name:'Media Foundations', school:'Humber College', date:'Fall 2011 to Spring 2012', website: 'http://mediastudies.humber.ca/programs/certificates/media-foundation.html', desc: 'I took the 1 year Media Foundations course at Humber college straight out of highschool. In this course I learned the basics of illustration, photography, audio editing, and film making. I also found my passion for Web Development, which led me to take the Web Design course at Humber.'}
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