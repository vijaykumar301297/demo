from rest_framework import serializers
from .models import Post, Comment
from django.contrib.auth.models import User

class CommentSerializer(serializers.ModelSerializer):
    author_username = serializers.CharField(source='author.username')

    class Meta:
        model = Comment
        fields = ['content', 'created_at', 'author_username']


class PostSerializer(serializers.ModelSerializer):
    comment_count = serializers.IntegerField(source='comments.count', read_only=True)
    comments = CommentSerializer(many=True, read_only=True)

    author_username = serializers.CharField(source='author.username')

    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'created_at', 'author_username', 'comment_count', 'comments']
