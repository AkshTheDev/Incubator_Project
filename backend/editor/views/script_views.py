from django.shortcuts import render,redirect
from ..models import *
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required

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
        user_script=Script.objects.filter(user=user).values("tittle","content","craeted_at")
        return JsonResponse({"Script":user_script})
    
    except Signup.DoesNotExist:
        return JsonResponse({"error":"User not found"},status=404)
