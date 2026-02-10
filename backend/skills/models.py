from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL

class Skill(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class UserSkill(models.Model):
    OFFER = 'offer'
    LEARN = 'learn'

    TYPE_CHOICES = [
        (OFFER, 'Offer'),
        (LEARN, 'Learn')
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)
    type = models.CharField(max_length=10, choices=TYPE_CHOICES)
    experience_level = models.CharField(max_length=50)
