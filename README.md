A simple Hello World example in Backbone.js

This is really an excercise in understanding the basics of Backbone.View.

In this example there are three Backbone.View instances that are all bound to the same Backbone.Model instance.  Two Backbone.View instances (TitleView and DivView) subscribe to change events on the Backbone.Model instance and react by re-rendering some element in the DOM. One Backbone.View instance (TextView) triggers changes on the Backbone.Model instance whenever the value in the text input that represents the view is updated.

