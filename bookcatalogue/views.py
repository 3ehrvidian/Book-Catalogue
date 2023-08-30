from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

def index(request):
    return render(request, 'index.html', {})

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer    
    permission_classes = (AllowAny, )