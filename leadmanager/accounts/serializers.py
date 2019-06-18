from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import Authenticate


#User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')
