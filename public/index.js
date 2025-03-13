// // document.addEventListener('DOMContentLoaded', () => {
// //     const menuToggle = document.querySelector('.menu-toggle');
// //     const menu = document.querySelector('nav.menu');

// //     menuToggle.addEventListener('click', () => {
// //         menu.classList.toggle('show');
// //     });
// // });

// document.addEventListener('DOMContentLoaded', () => {
//   const menuToggle = document.querySelector('.menu-toggle')
//   const menu = document.querySelector('nav.menu')

//   menuToggle.addEventListener('click', () => {
//     console.log('clicked')
//     menu.toggleAttribute('show')
//   })
// })

// script.js
function toggleMenu () {
  var menuItems = document.getElementById('menu-items')
  if (menuItems.classList.contains('hidden')) {
    menuItems.classList.remove('hidden')
  } else {
    menuItems.classList.add('hidden')
  }
}

function toggleModal () {
  var navModal = document.getElementById('nav-modal')
  var menuIconLines = document.querySelectorAll('.menu-icon div')
  var cancelIcon = document.querySelector('.cancel-icon')

  if (navModal.classList.contains('hidden')) {
    // Show modal
    navModal.classList.remove('hidden')

    // Hide hamburger icon lines
    menuIconLines.forEach(function (line) {
      line.style.display = 'none' // Hide each line
    })

    // Show cancel icon
    cancelIcon.style.display = 'inline-block'
  } else {
    // Hide modal
    navModal.classList.add('hidden')

    // Show hamburger icon lines
    menuIconLines.forEach(function (line) {
      line.style.display = '' // Reset display style
    })

    // Hide cancel icon
    cancelIcon.style.display = 'none'
  }
}

function turnOffModal () {
  let navModal = document.getElementById('nav-modal')
  let cancelIcon = document.querySelector('.cancel-icon')
  var menuIconLines = document.querySelectorAll('.menu-icon div')
  if (!navModal.classList.contains('hidden')) {
    navModal.classList.add('hidden')
    cancelIcon.style.display = 'none'
    menuIconLines.forEach(function (line) {
      line.style.display = ''
    })
  }
}
function goToAppStore (path) {
  if (path === 'playstore') {
    if (window.location.href.includes('#')) {
      const hashedIndex = window.location.href.indexOf('#')
      const strippedPath = window.location.href.slice(0, hashedIndex)
      window.location.href = strippedPath + 'appstore.html'
    } else {
      window.location.href = window.location.href + 'appstore.html'
    }
  } else if (path === 'appstore') {
    if (window.location.href.includes('#')) {
      const hashedIndex = window.location.href.indexOf('#')
      const strippedPath = window.location.href.slice(0, hashedIndex)
      window.location.href = strippedPath + 'appstore.html'
    } else {
      window.location.href = window.location.href + 'appstore.html'
    }
  }
}

function goToDownload () {
  const downloadSection = document.getElementById('download')
  if (downloadSection) {
    downloadSection.scrollIntoView({ behavior: 'smooth' })
  } else {
    console.error('Download section not found.')
  }
}
