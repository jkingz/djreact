from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializer import UserSerializer, RegisterSerializer


# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, *args, **kwargs):
        serializer = self.get_serializer(data=self.request.data)
        serializer.is_valid(raiser_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, 
            context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })
