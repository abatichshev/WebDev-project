# backend/urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from bookstore.views import (
    order_list_create,
    AuthorListCreateAPIView,
    CategoryListCreateAPIView,
    BookListCreateAPIView,
    BookDetailAPIView,
)

urlpatterns = [
    path('admin/', admin.site.urls),

    # JWT auth
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Orders FBV
    path('api/orders/', order_list_create, name='order-list-create'),

    # Authors CBV
    path('api/authors/', CategoryListCreateAPIView.as_view(), name='author-list-create'),
    path('api/categories/', CategoryListCreateAPIView.as_view(), name='category-list-create'),

    # Books CBV
    path('api/books/', BookListCreateAPIView.as_view(), name='book-list-create'),
    path('api/books/<int:pk>/', BookDetailAPIView.as_view(), name='book-detail'),
]
