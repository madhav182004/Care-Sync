from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path("admin/", admin.site.urls),
    path("",include('healthify.urls')), 
    path('api/auth/', include('dj_rest_auth.urls')),
    path('api/auth/login/', include('healthify.urls')),
    
]
