//CODE freely available on net from w3schools or stackoverflow

//Empty Node -remove all children and their children
function emptyNode($pn){ //parentNode
  while($pn.firstChild) $pn.removeChild($pn.firstChild);
}

//Create a unique id
function uniqueID(){
   return Math.random().toString(36).substr(2.9);
}

// Using radio inputs
function unsetRadios(radios){
   var l = radios.length;
   for(var i=0; i<l; i++){
      radios[i].checked = false;
   }
}
function getSelectedRadioIndex(radios){
   var l = radios.length;
   var checkedIndex = false;
   for(var i=0; i<l; i++){
      if(radios[i].checked){
	 checkedIndex = i;
	 break;
      }
   }
   return checkedIndex;
}

//find position of a child node with siblings 
function getMyIndex($node){
   var myIndex = 0;
   while( ( $node = $node.previousSibling) !== null ) 
      myIndex++;

   return myIndex;
}

