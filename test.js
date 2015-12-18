var webdriverio = require("webdriverio"),
assert = require("assert"),
options = {
  host: "localhost",
  port: 4444,
  desiredCapabilities: {
    browserName: "chrome",
    chromeOptions: {
      binary: "/usr/bin/google-chrome-stable"
    }
  }
},
timeForSeleniumInitialRun = 20000;

describe("basic functionality", function() {
  var client = {};
  this.timeout(timeForSeleniumInitialRun);

  before(()=>{
    client = webdriverio.remote(options);
    return client.init();
  });

  it("can read the page title", ()=>{
    return client
    .url("localhost:8080/main.html")
    .getTitle()
    .then((title)=> {
      console.log("Title was: " + title);
      assert.ok(title);
    });
  });

  after(()=>{
    return client.end();
  });
});
