from django.urls import path
from .views import home_page, about_page


urlpatterns = [
    path('', home_page, name='default.home_page'),
    path('about', about_page, name='default.about_page'),
]

