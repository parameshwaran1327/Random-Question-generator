from django.urls import path
from django.contrib import admin
from frontend import views
# this is the url page that asses the views file
urlpatterns = [
    path("", views.index, name='index'),
    path("question/", views.index, name='question'),
    path("result/", views.index, name='result'),
]