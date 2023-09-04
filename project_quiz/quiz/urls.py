from django.urls import path
from .views import get_questions
# this is the urlpatterns to create a path to asses the function which is in the views.py
urlpatterns = [
    # ... other URL patterns ...
    path('questions/', get_questions, name='get-questions'),
]
