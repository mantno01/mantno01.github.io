add_task = function() {
  var main;
  var list;
  var myInput;
  var text;
  var myPriority;
  var check;

  main=document.querySelector("#myMain");
  list=document.querySelector("#myList");
  myInput=document.querySelector("#inputTask");
  myPriority=document.querySelector("#priority")

  item=document.createElement("li");
  item.classList.add(myPriority.value);
  text=document.createTextNode(myInput.value);
  check=document.createElement("input");
  check.type="checkbox";
  check.name="done";
  check.onclick=done_task;

  list.type="none";
  list.appendChild(item);
  item.appendChild(check);
  item.appendChild(text);
}

  done_task = function(){
    if (this.checked){
     this.parentNode.classList.add("done");
     }
    else{
     this.parentNode.classList.remove("done");
     }
}
  



