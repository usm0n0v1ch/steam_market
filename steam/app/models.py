from django.contrib.auth.models import User
from django.db import models

# Create your models here.


class Game(models.Model):
    name = models.CharField(max_length=255)
    photo = models.ImageField()

    def __str__(self):
        return self.name
class Hero(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name
class Part(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name
class Type(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name
class Quality(models.Model):
    name = models.CharField(max_length=255)
    color = models.CharField(max_length=255)
    def __str__(self):
        return self.name
class Rarity(models.Model):
    name = models.CharField(max_length=255)
    color = models.CharField(max_length=255)
    def __str__(self):
        return self.name
class Product(models.Model):
    name = models.CharField(max_length=255)
    photo = models.ImageField()
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    hero = models.ForeignKey(Hero, on_delete=models.CASCADE)
    part = models.ForeignKey(Part, on_delete=models.CASCADE)
    type = models.ForeignKey(Type, on_delete=models.CASCADE)
    quality = models.ForeignKey(Quality, on_delete=models.CASCADE)
    rarity = models.ForeignKey(Rarity, on_delete=models.CASCADE)
    price = models.FloatField(default=0)

    def __str__(self):
        return self.name


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order {self.id} by {self.user.username}"

class Basket(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ManyToManyField(Product)

    def __str__(self):
        return f"{self.product.name} in Basket"

