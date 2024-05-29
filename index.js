//RESUELVE TUS EJERCICIOS AQUI

//DOG API
//[] 1.

const getAllBreeds = async () => {
    try {
        const resp = await fetch('https://dog.ceo/api/breeds/list/all');
        if (resp.ok) {
            const randomDog = await resp.json();
            return Object.keys(randomDog.message);
        } else {
            throw 'El estado o el stage no son correctos.'
        }
    } catch (error) {
        throw 'La web no existe.'
    }
};

getAllBreeds()
    .then((resp) => {console.log(resp)})
    .catch((error) => {console.error(error)})

//[] 2.

const getRandomDog = async () => {
    try {
        const resp = await fetch('https://dog.ceo/api/breeds/image/random');
        if (resp.ok) {
            const randomDog = await resp.json()
            return randomDog.message
        } else {
           throw console.error('El estado o el stage no son correctos.')
        }
    } catch (error) {
        throw 'La web no existe.'
    }
}

getRandomDog()
    .then((resp) => {console.log(resp)})
    .catch((error) => {console.log(error)})

//[] 3.
const getAllImagesByBreed = async () => {
    try {
        const resp = await fetch('https://dog.ceo/api/breed/komondor/images')
        if (resp.ok) {
            const allKomodor = await resp.json()
            return allKomodor.message
        } else {
            throw 'El estado o el stage no son correctos.'
        }
    } catch (error) {
        throw 'La web no existe.'
    }
}

getAllImagesByBreed()
    .then((resp) => {console.log(resp)})
    .catch((error) => {console.error(error)})

//[] 4.
// const getAllImagesByBreed2 =
const getAllImagesByBreed2 = async (raza) => {
    const nuevaurl = `https://dog.ceo/api/breed/${raza}/images`
    try {
        const resp = await fetch(nuevaurl)
        if (resp.ok) {
            const allKomodor = await resp.json()
            return allKomodor.message
        } else {
            throw 'El estado o el stage no son correctos.'
        }
    } catch (error) {
        throw 'La web no existe.'
    }
}
const raza = 'african'
getAllImagesByBreed2(raza)
    .then((resp) => {console.log(resp)})
    .catch((error) => {console.error(error)})

// GITHUB API
//[] .5
const getGitHubUserProfile = async (username) => {
    const nuevaurl = `https://api.github.com/users/${username}`
    try {
        const resp = await fetch(nuevaurl)
        if (resp.ok) {
            const perfil = await resp.json()
            return perfil
        } else {
            throw 'El estado o el stage no son correctos.'
        }
    } catch (error) {
        throw 'La web no existe.'
    }
}
const username = 'Emiliolatorre'
getGitHubUserProfile(username)
    .then((resp) => {console.log(resp)})
    .catch((error) => {console.error(error)})

//[] .6

const printGithubUserProfile = async (username) => {
    const nuevaurl = `https://api.github.com/users/${username}`
    try {
        const resp = await fetch(nuevaurl)
        if (resp.ok) {
            const perfil = await resp.json()
            const name = document.createElement('h1')
            name.innerHTML= perfil.name

            const img = document.createElement('img');
            img.src = perfil.avatar_url

            const div1 = document.createElement('div')
            div1.append(img, name)
            return {img, name}
        } else {
            throw 'El estado o el stage no son correctos.'
        }
    } catch (error) {
        throw 'La web no existe.'
    }
}
// const username2 = 'Emiliolatorre'
printGithubUserProfile(username2)
    .then((resp) => {console.log(resp)})
    .catch((error) => {console.error(error)})


//[] .7
const getAndPrintGitHubUserProfile = async (username) => {
    const nuevaurl = `https://api.github.com/users/${username}`
    try {
        const resp = await fetch(nuevaurl)
        if (resp.ok) {
            const perfil = await resp.json()

            const section = document.createElement('section');

            const img = document.createElement('img');
            img.src = perfil.avatar_url
            img.alt = "imagen de usuario"

            const nombre = document.createElement('h1')
            const nombreFinal = perfil.name
            nombre.innerHTML = nombreFinal

            const repos = document.createElement('p')
            repos.innerHTML = `Public repos: ${perfil.public_repos}`

            section.append(img, h1, p)
            return `document.append(section)`
        } else {
            throw 'El estado o el stage no son correctos.'
        }
    } catch (error) {
        throw 'La web no existe.'
    }
}
// const username = 'alenriquez'
getAndPrintGitHubUserProfile(username)
    .then((resp) => {console.log(resp)})
    .catch((error) => {console.error(error)})

//[] .8
const form = document.createElement('form')
const btn = document.createElement('button');
btn.value='buscar'
const input = document.createElement('input');
const section = document.createElement('section');
form.append(input, btn);
section.append(form);

btn.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const usuario = input.value
    
    getAndPrintGitHubUserProfile(usuario)
        .then((resp) => {console.log(resp)})
        .catch((error) => {console.error(error)})
})