//Render Article Titles and Headings
let renderMain = (heading, articleInfo, videoLink) => {
  return `<article><h4>${heading}</h4>
  <p class='article-info'>${articleInfo}</p>
  <a class='video-link' href=${videoLink}>Vid Link</a></article>`
}

//Render Nav Links
let renderNav = (href, title) => {
  return `<p>${title}</p>`
}

//TEMP DATA SOURCE
//Can be replaced with ajax calls from AIRTABLE or any other source
let linkNames = [
  {linkTitle: "Open", linkLink: "#"},
  {linkTitle: "Close", linkLink: "#"},
  {linkTitle: "Settings", linkLink: "#"}
]

let mainData = [
  {
      heading: "Jobs",
      articleInfo: "What you can do to succeed",
      videoLink: "https://amazingvideo.com"
  },
  {
      heading: "Jobs",
      articleInfo: "Why you succeed",
      videoLink: "https://amazingvideo.com"
  },
  {
      heading: "Jobs",
      articleInfo: "Prepping your mind for success",
      videoLink: "https://amazingvideo.com"
  }
];
//END TEMP DATA SOURCE


//Capture the main element and build articles
let main = document.querySelector(".main").querySelector('section');
let nav = document.querySelector(".nav").querySelector('section');
  
mainData.map( (item) => {
  main.innerHTML += renderMain(item.heading, item.articleInfo, item.videoLink)
})

linkNames.map( (item) => {
  console.log("item ", item)
  nav.innerHTML += renderNav(item.linkLink, item.linkTitle)
})

