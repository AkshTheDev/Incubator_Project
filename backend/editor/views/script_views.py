from django.shortcuts import render,redirect
from ..models import Script
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

