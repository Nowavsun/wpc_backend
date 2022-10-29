from email.policy import default
from django.db import models

class Wallpaper(models.Model):
    imgId = models.AutoField(primary_key = True, default = 1)
    imagNAME = models.CharField(max_length=200)
    imagSRC = models.CharField(max_length=200)
    imagTAGS = models.CharField(max_length=200)
    
    def __str__(self):
        return self.imagNAME

class Users(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    
    def __str__(self):
        return self.username

class Rating(models.Model):
    username = models.CharField(max_length=100)
    imagNAME =models.CharField(max_length=200)
    rating = models.IntegerField(default=0)
    like = models.BooleanField(default=False)
    fav = models.BooleanField(default=False)
    
    def __str__(self):
        return self.username
    
class Favorite(models.Model):
    username = models.CharField(max_length=100)
    imagname = models.CharField(max_length=100)
    
    def __str__(self):
        return self.username