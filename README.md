# Animated Christmas banner with-theme changer using HTML

In this tutorial we will be creating animated christmas banner with theme changer using HTML, CSS and JavaScript

I am using [SnowStorm.js](http://www.schillmania.com/projects/snowstorm/) in this project to add snow effect

Link for SnowStorm.js - [http://www.schillmania.com/projects/snowstorm/](http://www.schillmania.com/projects/snowstorm/)

## Usage

### Changing Snow color

```javascript
snowStorm.snowColor = '#fff';
```

### Changing theme

```javascript
var theme = document.getElementById("theme");
var themebg = document.getElementById("themebg");

theme.onclick = function(){
    if(themebg.classList.contains("white")){
        themebg.classList.replace("white" , "red")
    }
    else{
        themebg.classList.replace("red","white")
    }
}
```

## Subscribe
Please subscribe [CodeWithNiranjan](https://youtube.com/channel/UCzfQyi4_E-lS9ps3fVb0jlA)

<h1>Thank You</h1>
