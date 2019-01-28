function solve() {
   let buttons = Array.from(document.getElementsByTagName('button'));
   buttons.forEach((b) => {
      b.addEventListener('click', display);
   })

   function display(e) {
      let parentNode = e.target.parentNode;
      let radios = parentNode.querySelectorAll('input[type="radio"]');

      //check if locked
      if (radios[0].checked) {
         console.log("locked");
         
      }
      else if (radios[1].checked) {
         //display hidden info
         let userIdDiv = e.target.previousElementSibling;

         //check if hidden or shown
         if (userIdDiv.style.display === "") {
            userIdDiv.style.display = "unset";
            e.target.textContent = "Hide it";
         }
         else if (userIdDiv.style.display == 'unset') {
            userIdDiv.style.display = "";
            e.target.textContent = "Show more";
         }
      }
   }
} 