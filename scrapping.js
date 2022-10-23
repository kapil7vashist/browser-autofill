    import puppeteer from 'puppeteer';
    import locateChrome from "locate-chrome";


    const executablePath = await new Promise(resolve => locateChrome(arg => resolve(arg)))


const runBrowser = async()=>{

    const browser = await puppeteer.launch({executablePath,headless:false});
    const page = await browser.newPage();
    await page.goto('https://quotes.toscrape.com/');
    
    const grabParagraph = await page.evaluate(()=>{
        // const pgTag = document.querySelector(".form-group.new_to_internshala label");
        // console.log(pgTag.innerText);
        // return pgTag.innerText;
        
        // let authors = [];
        // let authorData = document.querySelectorAll('.quote small.author');
        // for(let i=0;i<authorData.length;i++){
        //     authors.push(authorData[i].innerHTML);
        // }
        // return authors;
    })

    console.log(grabParagraph);

    await browser.close();

};


runBrowser();