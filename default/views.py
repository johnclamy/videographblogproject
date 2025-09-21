from django.shortcuts import render


def home_page(request):
    return render(request, 'default/index.html')


def about_page(request):
    return render(request, 'default/about_page.html')
