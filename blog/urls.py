from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import *

urlpatterns = [
	# path('blog-list', BlogList.as_view(), name='blog_list'),
]
router = DefaultRouter()
router.register(r'', BlogViewSet, basename='api-blog')
urlpatterns += router.urls

