#Gulp tasks collection

##Installation

Clone the project and execute on console

    npm install


##Javascript and Browserify
Write everything in NodeJs-Style the gulp-task 'gulp browserify' will do the rest.
You have the advantage of NodeJS for modules please use it!

    
##Sass: using placeholder in mixins
Here is hacky and experimental solution for cross-scopes extends. Read more [here](http://www.sitepoint.com/cross-media-query-extend-sass/)

It works by generating one placeholder per breakpoint instead of a single placeholder at root level as you'd normally do (in a fully automatic way of course)

The API is quite simple.

To create a placeholder, instead of doing:

    %my-awesome-placeholder {}
You would do:

    @include placeholder(my-awesome-placeholder)


To extend an existing placeholder, instead of doing:
    
    @extend %my-awesome-placeholder
    
You would do:
  
    @include _(my-awesome-placeholder)



