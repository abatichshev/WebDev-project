from django.db import models
from django.contrib.auth.models import User

class Author(models.Model):
    name = models.CharField("Имя автора", max_length=100)

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField("Категория", max_length=50)

    def __str__(self):
        return self.name

class Book(models.Model):
    title       = models.CharField("Название книги", max_length=200)
    author      = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='books')
    category    = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True, related_name='books')
    price       = models.DecimalField("Цена", max_digits=8, decimal_places=2)
    description = models.TextField("Описание", blank=True)

    def __str__(self):
        return self.title

class Order(models.Model):
    user     = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    book     = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='orders')
    quantity = models.PositiveIntegerField("Количество", default=1)
    created  = models.DateTimeField("Дата заказа", auto_now_add=True)

    def __str__(self):
        return f"Order #{self.id} by {self.user.username}"
