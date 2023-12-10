let btn = document.querySelector('.rdog')
let img = document.querySelector('img')
// tar en random hund bild från dog api

btn.addEventListener('click', ()=>{
  fetch('https://dog.ceo/api/breeds/image/random').then((response)=>{
    return response.json()
  }).then((data)=>{
    img.src = data.message;
  }).catch((err)=>{
    console.log('ERROR MADAFAKA '+err)
  })
})

let btn2 = document.querySelector('.checka')
let field = document.querySelector('.dogBreed')
let answer = document.querySelector('.breed')
btn2.addEventListener('click', ()=>{
  answer.innerHTML = field.value
  fetch('https://dog.ceo/api/breeds/list/all').then((response)=>{
    return response.json()
  }).then((data)=>{
    console.log(data)
    let allDogs = []
    Object.keys(data.message).forEach((element) =>{
      allDogs.push(element);
    })
    let exists = false
    for(let i = 0; i < allDogs.length; i++){
      if(field.value == allDogs[i]){
        exists = true;
        break;
      }
      else{
        exists = false;
      }
    }

    if(exists == true){
      answer.innerHTML = 'Exists'
    }
    else{
      answer.innerHTML = 'Does not exist'
    }
  }).catch((err)=>{
    console.log('error' + err)
  })
})