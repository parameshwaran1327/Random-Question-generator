# Generated by Django 4.1.7 on 2023-09-03 10:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0002_quizquestion_delete_choice_delete_question'),
    ]

    operations = [
        migrations.RenameField(
            model_name='quizquestion',
            old_name='correctChoice',
            new_name='correct_choice',
        ),
        migrations.RenameField(
            model_name='quizquestion',
            old_name='question',
            new_name='question_text',
        ),
        migrations.AddField(
            model_name='quizquestion',
            name='answered_correctly',
            field=models.BooleanField(default=False),
        ),
    ]
