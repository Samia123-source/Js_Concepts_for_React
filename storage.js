localStorage.setItem('UserId',87952214);
const addToLocalStorage = () => {
    console.log("function called");
    const idInput = document.getElementById('storage-id');
    const id = idInput.value ;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;
    //local storage.setItem (id,value);
    idInput.value = "";
    valueInput.value = "";
   
 if(id && value){
    localStorage.setItem(id,value);
    idInput ='';
    valueInput ='' ; 

 }

}
    
//
