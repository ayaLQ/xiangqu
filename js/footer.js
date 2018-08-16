(()=>{
  ajax("get","footer.html","","text")
    .then(html=>{
    document.getElementById("allFooter")
            .innerHTML=html;
  })
})();