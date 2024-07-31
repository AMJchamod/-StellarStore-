/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package automationtesting2;

/**
 *
 * @author jcham
 */


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Alert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class unitTesting {

    private WebDriver driver;
    private WebDriverWait wait;

    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");
        driver = new ChromeDriver();
        wait = new WebDriverWait(driver, 10); // 10 seconds wait time
    }

    @Test
    public void testSignup() {
        driver.get("http://localhost/Stellarstore/signup.html");
        
        WebElement usernameField = driver.findElement(By.id("username"));
        WebElement passwordField = driver.findElement(By.id("password"));
        WebElement confirmPasswordField = driver.findElement(By.id("confirmPassword"));
        WebElement signupButton = driver.findElement(By.cssSelector("button[type='submit']"));

        usernameField.sendKeys("testuser");
        passwordField.sendKeys("testpassword");
        confirmPasswordField.sendKeys("testpassword");
        signupButton.click();

        Alert alert = wait.until(ExpectedConditions.alertIsPresent());
        alert.accept();
    }

    @Test
    public void testLogin() {
        driver.get("http://localhost/Stellarstore/loginpage.html");
        
        WebElement loginUsernameField = driver.findElement(By.id("username"));
        WebElement loginPasswordField = driver.findElement(By.id("password"));
        WebElement loginButton = driver.findElement(By.cssSelector("button[type='submit']"));

        loginUsernameField.sendKeys("testuser");
        loginPasswordField.sendKeys("testpassword");
        loginButton.click();

        driver.get("http://localhost/Stellarstore/homepage.html");
        WebElement userProfile = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("userProfile")));
        assertNotNull(userProfile);
    }

    @Test
    public void testCheckout() {
        testLogin(); 

        WebElement addToCartButton = wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(".btn-add-to-cart")));
        addToCartButton.click();

        WebElement cartIcon = wait.until(ExpectedConditions.elementToBeClickable(By.id("cartIcon")));
        cartIcon.click();

        WebElement checkoutButton = wait.until(ExpectedConditions.elementToBeClickable(By.id("checkoutButton")));
        checkoutButton.click();

        WebElement checkoutConfirmation = wait.until(ExpectedConditions.presenceOfElementLocated(By.id("checkoutConfirmation")));
        assertNotNull(checkoutConfirmation);
    }

    @After
    public void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}

    
}
