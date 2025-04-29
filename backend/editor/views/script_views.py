from django.shortcuts import render,redirect
from ..models import *
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
import json
from rest_framework_simplejwt.tokens import AccessToken
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt



# @login_required
# def save_script(request):
#     if request.method=="POST":
#         content = request.POST.get("content")
#         title = request.POST.get("title")

#         script = Script(
#             user=request.user,
#             content=content,
#             title=title
#         )
#         return JsonResponse({"message":"Script saved successfully"},status=200)
    
#     return JsonResponse({"message":"Invalid request"}, status=400)



def get_script(request):
    if request.method == 'GET':
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
            user=Signup.objects.get(id=user_id)
            user_script=Script.objects.filter(user=user).values("title","id","created_at")
            return JsonResponse(list(user_script), safe=False)
        
        except Signup.DoesNotExist:
            return JsonResponse({"error":"User not found"},status=404)
    
    return JsonResponse({"error":"Invalid request"}, status=400)
    


def get_script_by_id(request, script_id):
    if request.method=='GET':
        try:
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
            

            script = Script.objects.get(id=script_id, user=user_id)
            return JsonResponse({
                'id': script.id,
                'title': script.title,
                'content': script.content
            }, status=200)
        except Script.DoesNotExist:
            return JsonResponse({'error': 'Script not found or access denied'}, status=404)
        
    return JsonResponse({"error":"Invalid request"}, status=400)

    
@csrf_exempt
def delete_script(request):
    if request.method=='POST':
        data = json.loads(request.body)
        script_id = data.get("id")

        try:
            script=Script.objects.get(id=script_id)
            script.delete()
            return JsonResponse({"message":"Script deleted successfully"},status=200)
        except:
            if Script.DoesNotExist:
                return JsonResponse({"error":"Script not found"}, status=404)
    
    return JsonResponse({"error":"Invalid request"}, status=400)



@csrf_exempt
def save_script(request):
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
    
    if request.method=="POST":
        try:
            data = json.loads(request.body)
            script_id = data.get("id")
            script_title = data.get("title")
            script_content = data.get("content")
            subtitle = data.get("subtitle")
            written_by = data.get("written_by")
            genre = data.get("genre")
            page_target = data.get("page_target")
            logline = data.get("logline")
            
            user = Signup.objects.get(id=user_id)
            script = Script.objects.create(
                user=user,
                title=script_title,
                content=script_content or "",
                subtitle=subtitle,
                written_by=written_by,
                genre=genre,
                page_target=page_target,
                logline=logline
            )
            print('script created')
            return JsonResponse({"message":"Script saved successfully"},status=200)
        
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
        
    return JsonResponse({'error': 'Invalid request method'}, status=405)



@csrf_exempt
def update_script(request):
    auth_header = request.headers.get('Authorization')
    print("Auth Header:", auth_header)
    if not auth_header or not auth_header.startswith('Bearer '):
        return JsonResponse({'error': 'Authorization token missing'}, status=401)

    token_str = auth_header.split(' ')[1]

    try:
        access_token = AccessToken(token_str)
        user_id = access_token['user_id']
        print("User ID from token:", user_id)
    except Exception as e:
        return JsonResponse({'error': 'Invalid token'}, status=401)

    if not user_id:
        return JsonResponse({'error': 'Unauthorized'}, status=401)
    
    if request.method=="POST":
        try:
            data = json.loads(request.body)
            print("data",data)
            script_id = data.get("id")
            script_content = data.get("content")

            script=Script.objects.get(id=script_id, user_id=user_id)
            # script.title=script_title
            script.content=script_content
            script.save()
            return JsonResponse({"message":"Script updated successfully"})
        
        
        except Exception as e:
            print("Exception:", str(e))
            return JsonResponse({'error': str(e)}, status=400)
        
    return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt
def rename(request):
    auth_header = request.headers.get('Authorization')
    print("Auth Header:", auth_header)
    if not auth_header or not auth_header.startswith('Bearer '):
        return JsonResponse({'error': 'Authorization token missing'}, status=401)

    token_str = auth_header.split(' ')[1]

    try:
        access_token = AccessToken(token_str)
        user_id = access_token['user_id']
        print("User ID from token:", user_id)
    except Exception as e:
        return JsonResponse({'error': 'Invalid token'}, status=401)

    if not user_id:
        return JsonResponse({'error': 'Unauthorized'}, status=401)
    
    if request.method=="POST":
        try:
            data = json.loads(request.body)
            print("data",data)
            script_id = data.get("id")
            script_title = data.get("title")

            script=Script.objects.get(id=script_id, user_id=user_id)
            script.title=script_title
            script.save()
            return JsonResponse({"message":"Script title updated successfully"})
        
        
        except Exception as e:
            print("Exception:", str(e))
            return JsonResponse({'error': str(e)}, status=400)
        
    return JsonResponse({'error': 'Invalid request method'}, status=405)

