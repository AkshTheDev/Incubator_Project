from django.shortcuts import render,redirect
from ..models import Signup;
from django.contrib import messages
from django.contrib.auth.hashers import make_password
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt


# def signup(request):
#     if request.method == 'POST':
#         first_name = request.POST.get('first_name')
#         last_name = request.POST.get('last_name')
#         email = request.POST.get('email')
#         password = request.POST.get('password')

#         if Signup.objects.filter(email=email).exists():
#             return JsonResponse({"error":"Email already exists"}, status=404)
#         else:
#             user = Signup(
#                 first_name=first_name,
#                 last_name=last_name,
#                 email=email,
#                 password=make_password(password)
#             )
#             user.save()
#             return JsonResponse({"message":"Account created successfully"}, status=200)
#             return redirect('login')    
         
#     return render(request)

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            first_name=data.get("first_name")
            last_name=data.get("last_name")
            email=data.get("email")
            password = data.get("password")

            if not email or not password:
                return JsonResponse({'error': 'Missing fields'}, status=400)

            Signup.objects.create(first_name=first_name,last_name=last_name,email=email, password=password)
            return JsonResponse({'message': 'Signup successful'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Invalid method'}, status=405)

def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email=data.get("email")
        password=data.get("password")

        if Signup.objects.filter(email=email).exists():
            user = Signup.objects.get(email=email)
            if user.password == password:
                # return JsonResponse
                return JsonResponse({"message":"Account login successfully"})
            else:
                return JsonResponse({"error":"Invalid password."})
        else:
            return JsonResponse({"error":"Email does not exist."})

def logout(request):
    request.session.flush()
    messages.success(request,"Logged out successfully.")
    return redirect("login")
