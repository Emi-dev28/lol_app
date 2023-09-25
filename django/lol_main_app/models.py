from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=200)
    profile_icon = models.IntegerField()
    sum_level = models.IntegerField()
    first_champ = models.CharField(max_length=200)
    second_champ = models.CharField(max_length=200)
    thr_champ = models.CharField(max_length=200)
    
    