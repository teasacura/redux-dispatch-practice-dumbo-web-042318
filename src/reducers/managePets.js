export let state;


export function managePets(state={pets:[]}, action){
  switch (action.type) {
    case "ADD_PET":
      return { pets: [...state.pets, action.pet] }
    case "REMOVE_PET":
      let arr = [...state.pets]
      const pet = arr.find(pet => pet.id === action.id)
      const index = arr.indexOf(pet)
      arr.splice(index, 1)
      return { pets: arr }
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render() {
  const parent = document.getElementById("container")
  const petList = state.pets.map(pet => {
    return `<li>${pet.name}</li>`
  }).join(' ')

  parent.innerHTML = `<ul>${petList}</ul>`
}
