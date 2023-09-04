from django.shortcuts import render

# Create your views here.


# the index function render the HTML file
def index(request, *args, **kargs):
    return render(request, 'frontend/index.html')