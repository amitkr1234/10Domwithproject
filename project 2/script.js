let count = 0;

let value = document.getElementById("value");
// console.log(value);
let btns = document.querySelectorAll(".btn");
// console.log(btns);

btns.forEach(function (item){
     item.addEventListener("click", function(val){
        // To check what is there in val
        let style = val.currentTarget.classList;
        if(style.contains("increase")){
          count++;
        }else if (style.contains("decrease")){
            count--;
            
        }else if (style.contains("reset")){
            count = 0;
        }
        if (count > 0) {
           value.style.color = "Blue";
        }

        value.textContent = count;
     });
});