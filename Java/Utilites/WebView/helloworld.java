// Taken from HelloWorld from https://openjfx.io/openjfx-docs/#install-javafx

// Compile with 
// javac --module-path %PATH_TO_FX% --add-modules javafx.controls helloworld.java
// javac --module-path $env:PATH_TO_FX  --add-modules javafx.controls helloworld.java
// Run with 
// java --module-path %PATH_TO_FX% --add-modules javafx.controls helloworld
// java --module-path $env:PATH_TO_FX --add-modules javafx.controls helloworld

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class helloworld extends Application {

    @Override
    public void start(Stage stage) {
        try {
            String javaVersion = System.getProperty("java.version");
            String javafxVersion = System.getProperty("javafx.version");
            Label label = new Label("Hello, JavaFX " + javafxVersion + ", running on Java " + javaVersion + ".");
            Scene scene = new Scene(new StackPane(label), 640, 480);
            stage.setTitle("JavaFX Hello World Example");
            stage.setScene(scene);
            stage.show();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        launch();
    }

}
