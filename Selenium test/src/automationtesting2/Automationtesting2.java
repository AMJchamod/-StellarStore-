package automationtesting2;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Alert;

public class Automationtesting2 {

    public static void main(String[] args) {
        
        WebDriver driver = new ChromeDriver();
              
        try {
            // Test Signup Page
            driver.get("http://localhost/Stellarstore/signup.html");
            WebElement usernameField = driver.findElement(By.id("username"));
            WebElement passwordField = driver.findElement(By.id("password"));
            WebElement confirmPasswordField = driver.findElement(By.id("confirmPassword"));
            WebElement signupButton = driver.findElement(By.cssSelector("button[type='submit']"));

            // Fill in signup form
            usernameField.sendKeys("testuser");
            passwordField.sendKeys("testpassword");
            confirmPasswordField.sendKeys("testpassword");
            signupButton.click();

            // Handle the alert after signup
            Alert alert = driver.switchTo().alert();
            alert.accept();

            // Test Login Page
            driver.get("http://localhost/Stellarstore/loginpage.html");
            WebElement loginUsernameField = driver.findElement(By.id("username"));
            WebElement loginPasswordField = driver.findElement(By.id("password"));
            WebElement loginButton = driver.findElement(By.cssSelector("button[type='submit']"));

            // Fill in login form
            loginUsernameField.sendKeys("testuser");
            loginPasswordField.sendKeys("testpassword");
            loginButton.click();

            // Open the home page
            driver.get("http://localhost/Stellarstore/homepage.html");

            // Click the "Add to cart" button for the first product
            WebElement addToCartButton = driver.findElement(By.cssSelector(".btn-add-to-cart"));
            addToCartButton.click();

            // Wait for the cart update (You might need to use WebDriverWait here for better synchronization)
            Thread.sleep(2000); // Wait for 2 seconds to ensure the cart updates

            // Navigate to the cart page
            WebElement cartIcon = driver.findElement(By.id("cartIcon"));
            cartIcon.click();

            // Wait for the cart page to load
            Thread.sleep(2000); // Wait  2 seconds to ensure the page loads

            
            WebElement checkoutButton = driver.findElement(By.id("checkoutButton"));
            checkoutButton.click();

           

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Clean up
            driver.quit();
        }
    }
}
