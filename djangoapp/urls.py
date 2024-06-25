from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('db_status/', views.db_status, name='db_status'),  # endpoint to check build status
    path('build_db/', views.build_db, name='build_db'),  # New endpoint to trigger DB building
   ]
