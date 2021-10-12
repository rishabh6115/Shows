const form = document.querySelector('form')
const btn = document.querySelector('.btn')
const input = document.querySelector('input')
const imagesCont = document.querySelector('.images')

input.addEventListener('input', async function(e) {
    const allImg = document.querySelectorAll('.new')
    for (let i of allImg) {
        i.remove()
    }

    const search = input.value

    const config = { params: { q: search } }
    const getImg = await axios.get(`https://api.tvmaze.com/search/shows`, config)

    const d = getImg.data
    makeImg(d)


})

const makeImg = function(data) {
    for (let ele of data) {

        if (ele.show.image) {
            const newDiv = document.createElement('div')
            newDiv.classList.add('new');

            const newA = document.createElement('a')
            newA.setAttribute('href', ele.show.url)
            newDiv.append(newA)
            const newImg = document.createElement('IMG')
            newImg.src = ele.show.image.medium


            newA.append(newImg);
            const title = ele.show.name;
            newA.append(title)

            imagesCont.append(newDiv)
        }
    }
}