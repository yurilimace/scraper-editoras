const axios = require('axios');
const cheerio = require('cheerio')
const fs = require('fs')


const url ="https://mangasjbc.com.br/titulos/hokuto-no-ken/"

/* Trocar nome da tags teste pelo nome do que elas mostram no site*/
axios(url).then(Response => {
    const html = Response.data
    const $ = cheerio.load(html)
    const aboutTitle = $('.extra-info-col-content > ul > li')
    const image = $('.mb > li > a ')
    const img_src =($(image).find('img').attr('src'))
    const info = []
     aboutTitle.map((x,y)=>{
       info.push($(y).text())
       console.log($(y).text())
   }) 
   
  const down = async (image) =>{
      let response = await axios.get(image,{responseType:'stream'})
      return response.data.pipe(fs.createWriteStream('image1.jpg'))
  }

  down(img_src)
 
  //console.log(fs.realpath("image1.jpg",[]))


   //this way work tried with map
   /*for(let i = 0;i<teste.length;i++){
      console.log(teste[i] + "for")
     // console.log(teste2)
        
    }*/
    
})
.catch(console.error)


