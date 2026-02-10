from django.db import models
from django.conf import settings
from skills.models import Skill

User = settings.AUTH_USER_MODEL

class ExchangeRequest(models.Model):
    sender = models.ForeignKey(User, related_name="sent_requests", on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name="received_requests", on_delete=models.CASCADE)

    offered_skill = models.ForeignKey(Skill, related_name="offered_skill", on_delete=models.CASCADE)
    requested_skill = models.ForeignKey(Skill, related_name="requested_skill", on_delete=models.CASCADE)

    status = models.CharField(
        max_length=20,
        choices=[('pending','Pending'),('accepted','Accepted'),('rejected','Rejected')],
        default='pending'
    )

    created_at = models.DateTimeField(auto_now_add=True)
