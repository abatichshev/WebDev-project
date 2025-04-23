from django.urls import path
from .views import (
    AuthorListCreateAPIView,
    CategoryListCreateAPIView,
    BookListCreateAPIView,
    BookDetailAPIView,
    order_list_create
)

urlpatterns = [
    path('authors/',    AuthorListCreateAPIView.as_view(),   name='authors_list'),
    path('categories/', CategoryListCreateAPIView.as_view(), name='categories_list'),
    path('books/',      BookListCreateAPIView.as_view(),     name='books_list'),
    path('books/<int:pk>/', BookDetailAPIView.as_view(),     name='book_detail'),
    path('orders/',     order_list_create,                   name='order_list_create'),
]
