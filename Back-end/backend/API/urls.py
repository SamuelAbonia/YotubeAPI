
from django.urls import path
from .views import retrieveYoutubeVideos

urlpatterns = [
    path('videos/', retrieveYoutubeVideos, name = 'videos')
]