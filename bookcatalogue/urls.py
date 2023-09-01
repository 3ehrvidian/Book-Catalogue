from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('book', views.BookViewSet)

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.login_user, name='login'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('book/<int:pk>/', views.details_book, name='details'),
    path('sign_up/', views.signup_user, name='sign_up'),
    path('logout/', views.logout_user, name='logout'),
    path('api/', include(router.urls))
]
