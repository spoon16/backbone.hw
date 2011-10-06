$(function() {
  // a simple model, nothing special
  var MessageModel = Backbone.Model.extend({});

  // a view that controls the page title
  var TitleView = Backbone.View.extend({
    // document.title selector
    el: 'title',

    initialize: function() {
      // subscribe to the change events on the assigned model
      this.model.bind("change", this.render, this);
      
      // render the document.title value
      this.render();
    },

    // render the current value attribute of the assigned model
    render: function() {
      $(this.el).text(this.model.get("value"));
      return this;
    },
  });

  // a view that renders the value attribute of the assigned model as a label
  // automatically updates the value on model value attribute change
  var DivView = Backbone.View.extend({
    tagName: "div", 

    initialize: function() {
      // subscribe to change events on the assigned model
      this.model.bind("change", this.render, this);
    },

    // render the current value attribute of the assigned model
    render: function() {
      $(this.el).html(this.model.get("value"));
      return this;
    },
  });

  // a view that renders a text input and updates the assigned model value attribute when the text value is changed
  var TextView = Backbone.View.extend({
    tagName: "input",

    // initialize input element attributes
    initialize: function() {
      $(this.el).attr("type", "text");
    },

    // trigger a call to the change function whenever keyup on the child input tag is fired
    events: {
      "keyup": "valueChanged"
    },

    // render the input element with the initial model value attribute as default
    render: function() {
      $(this.el).val(this.model.get("value"));
      return this;
    },

    // on change read the input value and update the assigned model
    valueChanged: function() {
      var v = $(this.el).val();

      // this will trigger the change event on the model which will cause the DivView to re-render
      this.model.set({value: v});
    },
  });

  // initialize a new MessageModel instance with a default value for the 'value' attribute
  var m = new MessageModel({value: "hello world"});

  // initialzie views and bind to MessageModel instance
  var title = new TitleView({model: m});
  var lbl = new DivView({model: m});
  var txt = new TextView({model: m});

  // render the views
  $('body').append(lbl.render().el);
  $('body').append(txt.render().el);
});

