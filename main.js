import puppeteer from 'puppeteer';
import locateChrome from "locate-chrome";


const executablePath = await new Promise(resolve => locateChrome(arg => resolve(arg)))


const runBrowser = async()=>{

    const browser = await puppeteer.launch({executablePath,headless:false});
    const page = await browser.newPage();
    await page.goto('https://youtube.com/');

    const title = await page.title();
    const url = await page.url(); 

    console.log(title)
    console.log(url);


    await browser.close();

};


runBrowser();