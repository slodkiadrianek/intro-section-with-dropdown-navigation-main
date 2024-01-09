'use strict'
const dropFeatures = document.querySelector('.features__drop')
const img = document.querySelector('.img')
const features = document.querySelector('.features')
const dropCompany = document.querySelector('.company__drop')
const company = document.querySelector('.company')
const block = document.querySelector('.block')

dropFeatures.addEventListener('click', function(e){
    features.classList.toggle('hidden')
    img.classList.toggle('turn')
})

dropCompany.addEventListener('click', function(e){
    company.classList.toggle('hidden')
    block.classList.toggle('turn')
})

