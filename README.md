# Webpack
## The basic set up for Webpack

Sometimes setting up webpack for every new project is a hassle.
I guess Parcel is a nice option, but I do want to have just the basic set up handy 😊

### The master branch has the basic set up
* file-loader
* css-loader
* html-loader
* CleanWebpackPlugin and HtmlWebpackPlugin
### The sass branch is able to compile sass to css
* sass-loader
* node-sass library

### The react branch has ReactJS up and running with support for modern JavaScript
* @babel/core
* @babel/preset-env
* babel-loader
* react
* react-dom
* react-router-dom

> Note: this branch uses sass by default

### The react-tailwind branch is when you feel crazy enough to play around with TailwindCSS
* tailwindcss
* postcss-cli
* autoprefixer
