from django.shortcuts import render,redirect
from .models import *;
from django.contrib import messages
from django.contrib.auth.hashers import make_password

def signup(request):
    # context = {'signup' : Signup.objects.all()}

    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        password = request.POST.get('password')

        if Signup.objects.filter(email=email).exists():
            messages.error(request, "Email already exists.")
        else:
            user = Signup(
                first_name=first_name,
                last_name=last_name,
                email=email,
                password=make_password(password)
            )
            user.save()
            messages.success(request, "Account created successfully.")
            return redirect('login')

