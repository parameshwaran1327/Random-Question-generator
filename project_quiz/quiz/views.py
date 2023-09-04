from .models import QuizQuestion
from django.http import JsonResponse
from .models import QuizQuestion

from django.http import JsonResponse
from .models import QuizQuestion

def get_questions(request):
    questions = QuizQuestion.objects.all()
    question_list = []
# Thi code convert a data into objects and save it into the jason file
    for question in questions:
        question_list.append({
            'question': question.question_text,
            'choices': [question.choice1, question.choice2, question.choice3, question.choice4],
            'correctChoice': question.correct_choice,
        })

    return JsonResponse({'questions': question_list})