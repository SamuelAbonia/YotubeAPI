import requests
from django.shortcuts import render
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

@api_view(['GET'])
def retrieveYoutubeVideos(requests):
    videoIds = retreiveVideoIds(requests.GET.get('query'))
    videos = retrieveVideos(videoIds)
    
    return Response(videos, status=status.HTTP_200_OK)


def retreiveVideoIds(query):
    URL_SEARCH = 'https://www.googleapis.com/youtube/v3/search'

    params = {
        'part' : 'snippet',
        'q' : query,
        'maxResults' : 200,
        'type' : 'video',
        'key' : settings.YOUTUBE_DATA_API_KEY
    }

    request = requests.get(URL_SEARCH, params = params)
    results = request.json()['items']
    videoIds = []
    for result in results:
        videoIds.append(result['id']['videoId'])

    return videoIds

def retrieveVideos(videoIds):
    URL_VIDEO = 'https://www.googleapis.com/youtube/v3/videos'

    params = {
        'part' : 'snippet,statistics',
        'id' : ','.join(videoIds),
        'key' : settings.YOUTUBE_DATA_API_KEY,
    }

    request = requests.get(URL_VIDEO, params = params)
    results = request.json()['items']
    videos = []

    for result in results:
        videos.append({
            'title' : result['snippet']['title'],
            'id' : result['id'],
            'img' : result['snippet']['thumbnails']['high']['url'],
            'publishedAt' : result['snippet']['publishedAt'],
            'description' : result['snippet']['description'],
            'channelTitle' : result['snippet']['channelTitle'],
            'viewCount' : result['statistics']['viewCount'],  
        })
    
    return videos
    

