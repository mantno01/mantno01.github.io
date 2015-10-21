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
  check.onclick="done_Task";
  list.type="none";
  list.appendChild(item);
  item.appendChild(check);
  item.appendChild(text);

           }

done_Task = fucntion(){
  if 
}
  



