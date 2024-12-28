import requests
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from django.core.cache import cache
from rest_framework.decorators import api_view

class MoviePagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 5


@api_view(['GET'])
def movie_list(request):
    page = request.query_params.get('page', 1)
    page_size = request.query_params.get('page_size', 10)
    cache_key = f'movie_data_page_{page}_size_{page_size}'
    cached_data = cache.get(cache_key)

    if not cached_data:
        url = f'https://www.omdbapi.com/?i=tt3896198&apikey=d2132124'
        response = requests.get(url)

        if response.status_code != 200:
            print(f"Error fetching movie data: HTTP error! Status: {response.status_code}")
            print(f"Response content: {response.text}")
            return Response({"error": "Error fetching movie data from OMDB"}, status=response.status_code)

        data = response.json()
        cache.set(cache_key, data, timeout=60 * 15)
    else:
        data = cached_data

    if data.get("Response") == "False":
        return Response({"error": "No results found"}, status=404)

    paginator = MoviePagination()
    paginator.page_size = min(int(page_size), paginator.max_page_size)
    result_page = paginator.paginate_queryset([data], request)
    return paginator.get_paginated_response(result_page)

