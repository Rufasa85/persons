const personList = document.querySelector("#persons");

const getPeople = ()=>{
    fetch("/persons").then(res=>res.json()).then(data=>{
        console.log(data);
        data.forEach(person=>{
            const newLi = document.createElement("li");
            newLi.textContent = `${person.id}. Meet ${person.name}, a ${person.role}!`
            personList.append(newLi)
        })
    })
}

getPeople()