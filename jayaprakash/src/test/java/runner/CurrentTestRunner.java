package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty","html:target"},
features = "src/test/resources/feature",
tags = {"@current"})
public class CurrentTestRunner {

}
