from django.shortcuts import render,redirect
from ..models import Signup;
from django.contrib import messages
from django.contrib.auth.hashers import make_password, check_password
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt.tokens import RefreshToken,AccessToken, TokenError


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

            if Signup.objects.filter(email=email).exists():
                messages.error(request, "Email already exists.")
        
            else:
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

            if not email or not password:
                return JsonResponse({"error": "Email and password are required."}, status=400)

            user = Signup.objects.get(email__iexact=email)

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


def token_refresh(request):
    if request.method == 'GET':
        refresh_token = request.data.get("refresh")

        if not refresh_token:
            return JsonResponse({"error": "Refresh token required"}, status=400)

        try:
            token = RefreshToken(refresh_token)
            user_id = token.payload.get("user_id")

            if not user_id:
                return JsonResponse({"error": "Invalid token payload"}, status=400)

            try:
                user = Signup.objects.get(id=user_id)
            except Signup.DoesNotExist:
                return JsonResponse({"error": "User does not exist"}, status=400)

            new_access_token = str(AccessToken.for_user(user))

            return JsonResponse({
                "access": new_access_token
            }, status=200)

        except TokenError as e:
            return JsonResponse({"error": str(e)}, status=401)
    
    return JsonResponse({'error': 'Invalid method'}, status=405)
