from django.contrib import admin
from django.contrib import admin
from .models import QuizQuestion

# I've connect the models here for modify our question data by the admin panel
# It is also change into the MySQL database also
admin.site.register(QuizQuestion)