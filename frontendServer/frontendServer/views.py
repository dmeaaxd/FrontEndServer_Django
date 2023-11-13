from django.shortcuts import render


def login(request):
    return render(request, 'frontendServer/template/auth/login.html')


def reg(request):
    return render(request, 'frontendServer/template/auth/register.html')


def main(request):
    return render(request, 'frontendServer/template/index.html')


def model(request):
    return render(request, 'frontendServer/template/model/model.html')


def profits(request):
    return render(request, 'frontendServer/template/model/profits.html')


def expenses(request):
    return render(request, 'frontendServer/template/model/expenses.html')