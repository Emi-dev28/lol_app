from django.urls import path, include
from lol_main_app.views import *
from rest_framework import routers
from .api import ProjectViewSet

router = routers.DefaultRouter()
router.register('api/Projects',ProjectViewSet, 'projects')

urlpatterns = router.urls