from django.shortcuts import render, redirect
from .models import *
from .serializers import *
from rest_framework import viewsets
from django.contrib.auth import authenticate, login, logout, get_user_model
from .forms import SignUpForm, AddBookData
from django.contrib import messages
# from rest_framework.permissions import AllowAny

def index(request):
    form = SignUpForm()
    return render(request, 'index.html', {'form':form})

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer    
    # permission_classes = (AllowAny, )

def signup_user(request):
	if request.method == 'POST':
		form = SignUpForm(request.POST)
		if form.is_valid():
			form.save()
			# Authenticate and login
			username = form.cleaned_data['username']
			password = form.cleaned_data['password1']
			user = authenticate(username=username, password=password)
			login(request, user)
			messages.success(request, "You Have Successfully Registered! Welcome!")
			return redirect('dashboard')
	else:
		form = SignUpForm()
		return render(request, 'index.html', {'form':form})

	return render(request, 'index.html', {'form':form})

def login_user(request):
    # check if someone login
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        # Authenticate
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, "You have been logged in!")
            return redirect('dashboard')
        else:
             messages.success(request, "There was an error logging in, please try again ...")
             return redirect('/')
    else:
        return render(request, 'index.html', {})
    
def details_book(request, pk):
     return render(request, 'details.html', {"id":pk})

def dashboard(request):
    form = AddBookData()
    return render(request, 'dashboard.html', {})

def logout_user(request):
    logout(request)
    # messages.success(request, "You have been Logout!")
    return redirect('/')