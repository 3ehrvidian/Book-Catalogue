from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('book', views.BookViewSet)

urlpatterns = [
    path('', views.index, name='index'),
    path('api/', include(router.urls))
]
