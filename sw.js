this.addEventListener('install',function(event){
  event.waitUntil(
    caches.open('mycache')
  .then(function(cache){
    cache.addAll([

    ])
  })
  )

})
// getch
this.addEventListener('fecth',function(event){
  event.respondWith(
    caches.open('mycache')
    .then(function(cac){
      return cac.match(event.request)
      .then(function(result){
        return result || fecth(event.request)
        .then(function(result){
          cac.put(event.request,result.clone());
          return result;
        })
      })
    })
  )
})
