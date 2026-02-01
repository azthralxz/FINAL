const routes = {
  "/FINAL/": "/pages/q1.html",
  "/FINAL": "/pages/q1.html",
  "/FINAL/q1": "/pages/q1.html",
  "/FINAL/q2": "/pages/q2.html",
  "/FINAL/q3": "/pages/q3.html",
  "/FINAL/q4": "/pages/q4.html",
  "/FINAL/q5": "/pages/q5.html",
  "/FINAL/q6": "/pages/q6.html",
  "/FINAL/q7": "/pages/q7.html",
  "/FINAL/q8": "/pages/q8.html",
  "/FINAL/q9": "/pages/q9.html",
  "/FINAL/q10": "/pages/q10.html",
  "/FINAL/q11": "/pages/q11.html",
  "/FINAL/q12": "/pages/q12.html",
  "/FINAL/q13": "/pages/q13.html",
  "/FINAL/q14": "/pages/q14.html"
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
