from django.db import models
# This code can create a data in the MySQL database 
# we can modify here 
class QuizQuestion(models.Model):
    question_text = models.CharField(max_length=200)
    choice1 = models.CharField(max_length=100)
    choice2 = models.CharField(max_length=100)
    choice3 = models.CharField(max_length=100)
    choice4 = models.CharField(max_length=100)
    correct_choice = models.CharField(max_length=100)

    def __str__(self):
        return self.question_text
    