from kivy.app import App
from kivy.uix.screenmanager import ScreenManager, Screen, SlideTransition
from kivy.uix.button import Button, ButtonBehavior
from kivy.core.window import Window
from kivy.core.text import LabelBase
from kivy.uix.image import Image
from kivy.utils import get_color_from_hex

class ImageButton(ButtonBehavior, Image):
    pass

# This imports ClockScreen from main.kv file - inherits from Screen class
class ClockScreen(Screen):
    pass

class StopwatchScreen(Screen):
    pass

# Base class inherits from main App class that we imported
class MainApp(App): 
    
    def go_forward(self):
        screen_manager = self.root.ids['screen_manager']
        screen_manager.transition= SlideTransition(direction="right")
        screen_manager.current = 'stopwatchscreen'


if __name__ == "__main__":
    Window.clearcolor = get_color_from_hex('#101216')
    LabelBase.register(name='Roboto', fn_regular='Roboto-Thin.ttf', fn_bold='Roboto-Medium.ttf')
    MainApp().run()


