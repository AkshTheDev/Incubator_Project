from django.shortcuts import render,redirect
from ..models import *
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
import json

@login_required
def save_script(request):
    if request.method=="POST":
        content = request.POST.get("content")
        title = request.POST.get("title")

        script = Script(
            user=request.user,
            content=content,
            title=title
        )
        return JsonResponse({"message":"Script saved successfully"},status=200)
    
    return JsonResponse({"message":"Invalid request"}, status=400)


@login_required
def get_script(request):
    user_id = request.session.get('user_id')
    if not user_id:
        return JsonResponse({'error':'Unauthorized'}, status=401)
    
    try:
        user=Signup.objects.get(id=user_id)
        user_script=Script.objects.filter(user=user).values("title","content","craeted_at")
        return JsonResponse({"Script":user_script})
    
    except Signup.DoesNotExist:
        return JsonResponse({"error":"User not found"},status=404)
    

@login_required
def delete_script(request):
    if request.method=='POST':
        script_id=Script.POST.get("id")

    try:
        script=Script.objects.get(id=script_id)
        script.delete()
        return JsonResponse({"message":"Script deleted successfully"},status=success)
    except:
        if Script.DoesNotExist:
            return JsonResponse({"error":"Script not found"}, status=404)
    
    return JsonResponse({"error":"Invalid request"}, status=400)


@login_required
def update_script_save_script(request):
    user_id = request.session.get('user_id')

    if not user_id:
        return JsonResponse({'error': 'Unauthorized'}, status=401)
    
    if request.method=="POST":
        try:
            data=json.loads(request.body)
            script_id=data.get("id")
            script_title=data.get("title")
            script_content=data.get("content")

            if script_id:
                script=Script.object.get(id=script_id, user_id=user_id)
                script.title=script_title
                script.content=script_content
                script.save()
                return JsonResponse({"message":"Script updated successfully"})
            
            else:
                user = Signup.objects.get(id=user_id)
                script = Script(
                    user=user,
                    content=script_content,
                    title=script_title
                )
                return JsonResponse({"message":"Script saved successfully"},status=200)
        
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
        
    return JsonResponse({'error': 'Invalid request method'}, status=405)


