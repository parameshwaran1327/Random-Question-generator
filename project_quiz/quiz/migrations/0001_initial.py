# Generated by Django 4.1.7 on 2023-09-02 11:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Choice',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Correctchoice', models.CharField(max_length=255)),
                ('Choice1', models.CharField(max_length=255)),
                ('Choice2', models.CharField(max_length=255)),
                ('Choice3', models.CharField(max_length=255)),
                ('Choice4', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Question', models.CharField(max_length=255)),
            ],
        ),
    ]
