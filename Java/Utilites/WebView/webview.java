// Taken from http://tutorials.jenkov.com/javafx/webview.html#javafx-webview-example

// Compile with 
// javac --module-path %PATH_TO_FX% --add-modules javafx.controls,javafx.web webview.java
// javac --module-path $env:PATH_TO_FX  --add-modules javafx.controls,javafx.web webview.java
// Run with 
// java --module-path %PATH_TO_FX% --add-modules javafx.controls,javafx.web webview
// java --module-path $env:PATH_TO_FX --add-modules javafx.controls,javafx.web webview

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.VBox;
import javafx.scene.web.WebView;
import javafx.stage.Stage;

public class webview extends Application {

    @Override
    public void start(Stage primaryStage) {
        try {
            primaryStage.setTitle("JavaFX WebView Example");

            WebView webView = new WebView();

            webView.getEngine().load("https://bbc.com");

            VBox vBox = new VBox(webView);
            Scene scene = new Scene(vBox, 960, 600);

            primaryStage.setScene(scene);
            primaryStage.show();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        launch();
    }

}
