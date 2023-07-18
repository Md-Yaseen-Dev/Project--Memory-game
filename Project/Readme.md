# Memory_Game

**TO create Memory_game step by step**


## HTML

1. Create a parent div known as tiles
2. suppose assume and create a  6 child divs as tile for style purpose

## CSS
1. for body apply dark background, margin:0

2. for parent tiles: display:grid, grid-templates-column: repeat(4,100px)
and give gap to it.

3. for child tile: background should be same as body , create a border with solid light color . and add cursor to it.

## javascript

1. select the parent class using queryselector
2. create a array for colors
3. create a listofpicks from colors and use spread operater for two colors
i,e [...colors, ...colors]
4. create the variable(tilecount) for  length of the listpicks which is used for - For loop();
5. create a variable reveal = 0  is used for colors count
6. create a variable activetile = null ; activetile is absent
7. create a variable movingtoend color = false ; just like flag
8. create a for loop and length equal to listpickscount variable,In loop create a random number using Math.random()*listpick.length
9. now create a function buildtiles and in that create element of child div's and class to that div . remove the child div's in HTML.
and return that element.
10. and call the function in the loop just like tile = buildtiles(color)
and then appendchild parent to child (parentname.appendChild(childname)).
11. in for loop add splice method for unique colors instead of repeating colors.
12. for a getting a color in div. using add.eventlistners event =click and  add function . in that put the condition if (movingtoend is true)return nothing,else return element.style.background =color . second condition,if(activetile is not null) activetile=element and return nothing,  put movingtoend is true , settimeinterval for 1sec if no matches it result to normal state i.e( element background = null , activetile background = null, activetile =  null, and moveingtoend is equal to false).
13. set two attribute to the element for data-color=color and date-revealed =false
14. create a variable to get attribute of data color i.e match color and write the condtion that if match color === color{
    set attribute to the element for data-revealed = true and set attribute to the activetile for data-revealed = true 
}then again normal positon movingtoend = false, activetile = null and reveal +=2 because it count number if they match

15. create a variable (revealed) to get attribute for data-revealed and add it in the if condtion of movingtoend. i.e revealed === true return nothing.

16. write the condition after matchcolor that if reveal == tilecount  alert("something");

**Review:**
* select the parentclass 
* create colors ,create a count and flag,
* find the randomcolor using for loop and call the function, 
* create a function  . 
  * createElement,classlist , attributes ,
  *  addeventlistners=>if conditon of flag & activetile return,
  * if matches set attribute to true and again to normal state .  
  * if no matches setinterval to 1 sec to normal state