from django.db import models


class Lead(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField(max_length=120, unique=True)
    message = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name}"