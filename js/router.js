const routes = {
  "/AZ/": "/pages/q1.html",
  "/AZ": "/pages/q1.html",
  "/AZ/q1": "/pages/q1.html",
  "/AZ/q2": "/pages/q2.html",
  "/AZ/q3": "/pages/q3.html",
  "/AZ/q4": "/pages/q4.html",
  "/AZ/q5": "/pages/q5.html",
  "/AZ/q6": "/pages/q6.html",
  "/AZ/q7": "/pages/q7.html",
  "/AZ/q8": "/pages/q8.html",
  "/AZ/q9": "/pages/q9.html",
  "/AZ/q10": "/pages/q10.html",
  "/AZ/q11": "/pages/q11.html",
  "/AZ/q12": "/pages/q12.html",
  "/AZ/q13": "/pages/q13.html",
  "/AZ/q14": "/pages/q14.html"
}

async function router(){
  const path = location.pathname
  const route = routes[path] || routes["/AZ/"]

  const html = await fetch(route).then(r=>r.text())

  const app = document.getElementById("app")

  app.classList.add("page-exit")

  setTimeout(()=>{
    app.innerHTML = html
    app.classList.remove("page-exit")
    app.classList.add("page-enter")
  },400)
}

window.addEventListener("load", router)

function go(path){
  history.pushState({}, "", path)
  router()
}
