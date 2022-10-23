import puppeteer from 'puppeteer';
import locateChrome from "locate-chrome";


const executablePath = await new Promise(resolve => locateChrome(arg => resolve(arg)))
const name = 'Kapil Vashist';
const password = 'kapil2700';


const autoLogin = async()=>{
    const browser = await puppeteer.launch({executablePath,headless:false});
    const page = await browser.newPage();

    // VISIT PAGE WITH FOLLOWING URL
    await page.goto('https://quotes.toscrape.com');

    await page.click('a[href="/login"]');

    // FILL IN FIELDS WITH ID as follows
    await page.type("#username",name,{delay:100});
    await page.type("#password",password,{dealy:100});

    // USED TO CLICK ON BUTTON
    // await page.click('input.btn.btn-primary');
    await page.click('input[value="Login"]');

    // await browser.close();

}

autoLogin();