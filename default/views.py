from django.shortcuts import render


def home_page(request):
    data = {}
    data['page_title'] = 'Welcome to my Videograph blog | Home Page'
    return render(request, 'default/index.html', {'data': data})


def about_page(request):
    return render(request, 'default/about.html')
