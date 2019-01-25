function solve() {
   let buttons = Array.from(document.getElementsByTagName('button'));
   buttons.forEach((b) => {
      b.addEventListener('click', display);
   })

   function display(e) {
      let locked = document.querySelector('#profile input[value="lock"]');
      console.log(locked);
   }
} 