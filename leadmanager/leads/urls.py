from django.urls import path
from rest_framework import routers

from .api import LeadViewSet


router = routers.DefaultRouter()
router.register('apiv1/leads', LeadViewSet, 'leads')

urlpatterns = router.urls