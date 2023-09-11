let form = document.querySelector('form')
let con = document.querySelector('.con')
let todos = []

form.onsubmit = (event) => {
    event.preventDefault()

    let todo = {
        id: Math.random(),
        isDone: false,
        time: new Date().getHours() + ":" + new Date().getMinutes()
    }

    let fm = new FormData(event.target)

    fm.forEach((value, key) => {
        todo[key] = value
    })

    todos.push(todo)
    reload(todos)
}

function reload(arr) {
    con.innerHTML = ""

    for (let item of arr) {
        //a
        let but = document.createElement('button')
        let span = document.createElement('span')
        let box = document.createElement('div')
        let p = document.createElement('span')
        //b
        p.innerHTML = item.task
        span.innerHTML = item.time
        but.innerHTML = "x"
        p.classList.add('text')
        span.classList.add('op')
        box.classList.add('box')
        //c
        con.append(box)
        box.append(p, span, but)
        //d 
        but.onclick = () => {
               todos = todos.filter(el => el.id !== item.id)
            box.classList.add('delete')
            setTimeout(() => {
                box.remove()
            }, 500);
        }       
    }
}