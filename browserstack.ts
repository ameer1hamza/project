var username = process.env.BROWSERSTACK_USERNAME;
var accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
var buildName = process.env.BROWSERSTACK_BUILD_NAME;
var browserstackLocal = process.env.BROWSERSTACK_LOCAL;
var browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER;
var capabilities = {
	"os" : "Windows",
	"os_version" : "10",
	"browser" : "chrome",
	"browser_version" : "latest",
	"name": "jenkins-TestNgHamza-4", // test name
	"build" : buildName, // CI/CD job name using BROWSERSTACK_BUILD_NAME env variable
	"browserstack.local" : browserstackLocal,
	"browserstack.localIdentifier" : browserstackLocalIdentifier,
	"browserstack.user" : 'hamide1',
	"browserstack.key" : 'X9fTDgN1mbQyASshB77x'
};

var driver = new webdriver.Builder().
  usingServer("https://hub-cloud.browserstack.com/wd/hub").
  withCapabilities(capabilities).
  build();
