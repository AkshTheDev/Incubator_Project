from django.shortcuts import render,redirect
from ..models import Signup;
from django.contrib import messages
from django.contrib.auth.hashers import make_password, check_password
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt.tokens import RefreshToken


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

            Signup.objects.create(first_name=first_name,last_name=last_name,email=email, password=make_password(password))
            return JsonResponse({'message': 'Signup successful'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Invalid method'}, status=405)

@csrf_exempt
def login(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            user = Signup.objects.get(email=email)

            if check_password(password, user.password):  
                refresh = RefreshToken.for_user(user)
                return JsonResponse({
                    "message": "Login successful.",
                    "access": str(refresh.access_token),
                    "refresh": str(refresh)
                }, status=200)
            else:
                return JsonResponse({"error": "Invalid password."}, status=401)

        except Signup.DoesNotExist:
            return JsonResponse({"error": "Email does not exist."}, status=404)
        except Exception as e:
            return JsonResponse({"error": f"Something went wrong: {str(e)}"}, status=400)
    return JsonResponse({'error': 'Invalid method'}, status=405)
        
# def get_tokens_for_user(user):
#     refresh = RefreshToken.for_user(user)
#     return {
#         'refresh': str(refresh),
#         'access': str(refresh.access_token),
#     }

@csrf_exempt
def logout(request):
    if request.method == 'POST':
        try:
            refresh_token = request.data.get("refresh")  
            token = RefreshToken(refresh_token)
            token.blacklist()
            return JsonResponse({"message": "Logged out successfully."}, status=200)
        except Exception as e:
            return JsonResponse({"error": "Invalid token."}, status=400)
    return JsonResponse({'error': 'Invalid method'}, status=405)
