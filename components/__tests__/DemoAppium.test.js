// var expect = require('chai').expect;
// describe('Simple App testing', () => {  
//     beforeEach(() => {
//         $("~app-root").waitForDisplayed(10000, false)
//   });  
//   it('Login test: valid case', async => {
//     $('~username').setValue("codemagic");
//     $('~password').setValue("nevercode");    
    
//     $("~login").click();    
    
//     $("~loginstatus").waitForDisplayed(11000);
//     const status = $("~loginstatus").getText();
//     expect(status).to.equal('success');
// });  
  
//   it('Login test: invalid case', async => {
//     $('~username').setValue("nevercode");
//     $('~password').setValue("codemagic");    
    
//     $("~login").click();    
    
//     $("~loginstatus").waitForDisplayed(11000);
//     const status = $("~loginstatus").getText();
//     expect(status).to.equal('fail');
//   });
// });

// const {remote} = require('webdriverio');

// const capabilities = {
//   platformName: 'Android',
//   'appium:automationName': 'UiAutomator2',
//   'appium:deviceName': 'Android',
//   'appium:appPackage': 'com.android.settings',
//   'appium:appActivity': '.Settings',
// };

// const wdOpts = {
//   hostname: process.env.APPIUM_HOST || 'localhost',
//   port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
//   logLevel: 'info',
//   capabilities,
// };

// async function runTest1() {
//   const driver = await remote(wdOpts);
//   try {
//     await driver.pause(1000);

//     const batteryItem = await driver.$('//*[@text="Battery"]');
//     await batteryItem.click();
//   } finally {
//     await driver.pause(1000);
//     await driver.deleteSession();
//   }
// }

// runTest1().catch(console.error);

// import { expect } from '@wdio/globals'
// import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'

// import * as matchers from '@testing-library/jest-dom/matchers'
// expect.extend(matchers)

// import DemoAppium from '../DemoAppium';

// describe('React Component Testing', () => {
//   it('Test theme button toggle', async () => {
//       render(<DemoAppium />)
//       const buttonEl = screen.getByText(/Current theme/i)

//       await $(buttonEl).click()
//       expect(buttonEl).toHaveTextContent('dark')
//   })
// })

const {remote} = require('webdriverio');
// import {render, screen} from '@testing-library/react'
// const {render, screen} = require('@testing-library/react');
// import DemoAppium from '../DemoAppium';
// const {DemoAppium} = require('../DemoAppium');

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  'appium:appPackage': 'com.DevangBhatnagar.TestingExample3',
  'appium:appActivity': 'host.exp.exponent.LauncherActivity',
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

async function launchExpoAndroid() {

  const client = await remote(wdOpts);

  await client.startActivity(androidCaps.pkg, androidCaps.activity,); //Reload to force update

  await client.execute('mobile:deepLink', { url: 'exp://exp://10.128.227.185:8081', package: androidCaps.pkg });

  return client;

}

async function runTest1() {
  const driver = await remote(wdOpts);
  try {
     // Locate the button by its text
     const button = await driver.$('android=new UiSelector().text("Current theme: light")'); // Adjust for your app
     await button.click();
 
     // Verify the theme has changed to dark
     const updatedButton = await driver.$('android=new UiSelector().text("Current theme: dark")');
     expect(await updatedButton.isDisplayed()).toBe(true);
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest1().catch(console.error);