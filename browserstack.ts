  String username = System.getenv("BROWSERSTACK_USERNAME");
  String accessKey = System.getenv("BROWSERSTACK_ACCESS_KEY");
  String buildName = System.getenv("BROWSERSTACK_BUILD_NAME");
  String browserstackLocal = System.getenv("BROWSERSTACK_LOCAL");
  String browserstackLocalIdentifier = System.getenv("BROWSERSTACK_LOCAL_IDENTIFIER");
  
   
  
  DesiredCapabilities capabilities = new DesiredCapabilities();
  capabilities.setCapability("os", "Windows");
  capabilities.setCapability("os_version", "10");
  capabilities.setCapability("browser", "chrome");
  capabilities.setCapability("browser_version", "latest");
  capabilities.setCapability("name", "BStack-[Java] Build1");
  capabilities.setCapability("build", Build1); 
  capabilities.setCapability("browserstack.local", browserstackLocal);
  capabilities.setCapability("browserstack.localIdentifier", browserstackLocalIdentifier);
  driver = new RemoteWebDriver(new URL("https://" + 'hamide1' + ":" + 'X9fTDgN1mbQyASshB77x' + "@hub.browserstack.com/wd/hub"), capabilities);