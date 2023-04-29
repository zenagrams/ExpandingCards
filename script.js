const panels= document.querySelectorAll('.panel')

panels.forEach(panel => {
  panels.addEventListener('click',  ()=>{
    removeActiveClasses()
    panels.classlist.add("active")
    })
  });

  function removeActiveClasses(){
    panels.forEach(panel =>{
      panel.classlist.remove("active")
    })
  }