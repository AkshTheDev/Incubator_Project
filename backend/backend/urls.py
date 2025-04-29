"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from editor.views.auth_views import *
from editor.views.script_views import *
from django.http import JsonResponse
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('', lambda request: JsonResponse({"message": "API is running"})),
    path('login',login),
    path('signup',signup),
    # path('logout', logout),
    path('sup', save_script),
    path('sub',update_script),
    path('scriptbyid/<int:script_id>',get_script_by_id),
    path('getScript',get_script),
    path('token/refresh/', token_refresh),
    path('rename',rename),
    path('delete',delete_script),
]

