from django.shortcuts import render,redirect
from ..models import *
from django.http import JsonResponse
import json
from rest_framework_simplejwt.tokens import AccessToken
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def name(request):
    if request.method=='POST':
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            return JsonResponse({'error': 'Authorization token missing'}, status=401)

        token_str = auth_header.split(' ')[1]

        try:
            access_token = AccessToken(token_str)
            user_id = access_token['user_id']
        except Exception as e:
            return JsonResponse({'error': 'Invalid token'}, status=401)

        if not user_id:
            return JsonResponse({'error': 'Unauthorized'}, status=401)
        
        try:
            name=Signup.objects.get(user=user_id)
            return JsonResponse({"first_name":name.first_name,
                                 "last_name":name.lasst_name}, status=200)
        
        except Signup.DoesNotExist:
            return JsonResponse({"error":"User not found"},status=404)
    
    return JsonResponse({'error': 'Invalid Request'}, status=400)


@csrf_exempt
def email(request):
    if request.method=='POST':
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            return JsonResponse({'error': 'Authorization token missing'}, status=401)

        token_str = auth_header.split(' ')[1]

        try:
            access_token = AccessToken(token_str)
            user_id = access_token['user_id']
        except Exception as e:
            return JsonResponse({'error': 'Invalid token'}, status=401)

        if not user_id:
            return JsonResponse({'error': 'Unauthorized'}, status=401)
        
        try:
            email=Signup.objects.get(user=user_id)
            return JsonResponse({"email":email.email}, status=200)
        
        except Signup.DoesNotExist:
            return JsonResponse({"error":"User not found"},status=404)
    
    return JsonResponse({'error': 'Invalid Request'}, status=400)


@csrf_exempt
def delete_account(request):
    if request.method=='POST':
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            return JsonResponse({'error': 'Authorization token missing'}, status=401)

        token_str = auth_header.split(' ')[1]

        try:
            access_token = AccessToken(token_str)
            user_id = access_token['user_id']
        except Exception as e:
            return JsonResponse({'error': 'Invalid token'}, status=401)

        if not user_id:
            return JsonResponse({'error': 'Unauthorized'}, status=401)
        
        try:
            user=Signup.objects.get(user=user_id)
            user.delete()
            return JsonResponse({"message":"Account deleted successfully"}, status=200)
        
        except Signup.DoesNotExist:
            return JsonResponse({"error":"User not found"},status=404)
    
    return JsonResponse({'error': 'Invalid Request'}, status=400)


@csrf_exempt
def password_change(request):
    if request.method=='POST':
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            return JsonResponse({'error': 'Authorization token missing'}, status=401)

        token_str = auth_header.split(' ')[1]

        try:
            access_token = AccessToken(token_str)
            user_id = access_token['user_id']
        except Exception as e:
            return JsonResponse({'error': 'Invalid token'}, status=401)

        if not user_id:
            return JsonResponse({'error': 'Unauthorized'}, status=401)
        
        try:
            data=json.loads(request.body)
            password = data.get('password')
            new_password = daa.get('new_password')
            
            if not password:
                return JsonResponse({'error':"Password is required"}, status=400)
            
            user=Signup.objects.get(user=user_id)

            if check_password(password, user.password):
                user.password = make_password(new_password)
                user.save()
                return JsonResponse({"message":"Password changed successfully"}, status=200)
        
        except Signup.DoesNotExist:
            return JsonResponse({"error":"Password Incorrect"},status=404)
    
    return JsonResponse({'error': 'Invalid Request'}, status=400)